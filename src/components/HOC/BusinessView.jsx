import useToken from "@/hooks/useToken";
import BusinessService from "@/services/BusinessService";
import { useAuthStore, useBusinessAboutStore } from "@/store";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import BusinessHeader from "../Header/BusinessHeader";
import { isEmpty } from "@/helpers/functions";

const BusinessView = ({ title, children, ...props }) => {
  const router = useRouter();
  const isAuthenticated = useToken();
  const userProfile = useAuthStore((state) => state.user);
  const expires_in = useAuthStore((state) => state.expires_in);
  const isExpired = Date.now() >= expires_in;
  const logOut = useAuthStore((store) => store.resetAuth);
  const setAllAboutData = useBusinessAboutStore(
    (state) => state.setAboutAllData
  );
  const [loading, setLoading] = useState(true)
  const checkUser = () => {
      if( !isEmpty(userProfile) && !userProfile.isBusiness) {
        if(userProfile.isCustomer){
          router.replace("/user/dashboard");
        }
        router.replace("/sign-in-business");
      }
  }

  const getAboutBusiness = async () => {
    try {
      const res = await BusinessService.aboutBusiness();
      if (res.data.status === "success") {
        setAllAboutData(res.data);
      }
    } catch (error) {
      console.error("Failed to fetch business data:", error);
    }
  };

  // console.log("isAuthenticated", userProfile);

  useEffect(() => {
    if (isAuthenticated === null) return;
    
    if (!isAuthenticated || isExpired) {
      // logOut();
      router.replace("/sign-in-business");
    } 

    if(isAuthenticated){
      getAboutBusiness();
    }
  }, [isAuthenticated, isExpired, router, logOut, userProfile]);

  useEffect(() => {
    setTimeout(() => {
      checkUser();
      setLoading(false);
    }, 2000);
  }, [userProfile, router]);

 

  // If the user is authenticated, render the wrapped component
  return isAuthenticated && !isExpired ? (
    <>
      <Head>
        <title>{title} | 2nd A Friendly</title>
      </Head>
      <BusinessHeader />
      {children}
      <Footer />
    </>
  ) : (
    <div className="preloader">
      <div className="preloader-item">
        <div className="spinner-grow text-primary"></div>
      </div>
    </div> // Show loading state while checking authentication
  );
};

export default BusinessView;
