import React, { useEffect, useState } from "react";
import UserHeader from "../Header/UserHeader";
import Head from "next/head";
import Footer from "../Footer/Footer";
import { useRouter } from "next/router";
import { useAuthStore, useBusinessAboutStore } from "@/store";
import useToken from "@/hooks/useToken";
import BusinessService from "@/services/BusinessService";
import { isEmpty } from "@/helpers/functions";
import CustomerService from "@/services/CustomerService";
import { useCustomerAboutStore } from "@/store/useCustomerAboutStore";

const UserView = ({ title, children, ...props }) => {
  const router = useRouter();
  const isAuthenticated = useToken();
  const userProfile = useAuthStore((state) => state.user);
  const customerProfile = useCustomerAboutStore((state) => state.customerProfile);
  const expires_in = useAuthStore((state) => state.expires_in);
  const isExpired = Date.now() >= expires_in;
  const logOut = useAuthStore((store) => store.resetAuth);
  
  const setAllAboutData = useCustomerAboutStore(
    (state) => state.setAboutAllData
  );
  const [loading, setLoading] = useState(true)

  const getAboutCustomer = async () => {
    try {
      const res = await CustomerService.aboutCustomer();
      if (res.data.status === "success") {
        setAllAboutData(res.data);
      }
    } catch (error) {
      console.error("Failed to fetch Customer data:", error);
    }
  };

  const getCustomerNotification = async () => {
    try {
      const res = await CustomerService.aboutCustomer();
      if (res.data.status === "success") {
        setAllAboutData(res.data);
      }
    } catch (error) {
      console.error("Failed to fetch Customer data:", error);
    }
  };

  const checkUser = () => {
    
    if( !isEmpty(userProfile) && !userProfile.isCustomer) {
      if(userProfile.isBusiness){
        router.replace("/business/dashboard");
      } else {
        router.replace("/sign-in-customer");
      }
    }
}

  console.log("isAuthenticated", isAuthenticated);

  useEffect(() => {
    if (isAuthenticated === null) return;
    
    if (!isAuthenticated || isExpired) {
      // logOut();
      router.replace("/sign-in-customer");
    } else {
      getAboutCustomer();
    }
  }, [isAuthenticated, isExpired, router, logOut, userProfile]);


  useEffect(() => {
    setTimeout(() => {
      checkUser();
      setLoading(false);
    }, 2000);
  }, [userProfile, router]);

  if (loading) {
    return (
      <div className="preloader">
        <div className="preloader-item">
          <div className="spinner-grow text-primary"></div>
        </div>
      </div> // Show loading state while checking authentication
    );
  }

  return (
    <>
      <Head>
        <title>{title} | 2nd A Friendly</title>
      </Head>
      <UserHeader user={customerProfile} />
      {children}
      <Footer />
    </>
  );
};

export default UserView;
