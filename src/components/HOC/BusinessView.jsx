import useToken from "@/hooks/useToken";
import BusinessService from "@/services/BusinessService";
import { useAuthStore, useBusinessAboutStore } from "@/store";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Footer from "../Footer/Footer";
import BusinessHeader from "../Header/BusinessHeader";

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

  console.log("isAuthenticated", isAuthenticated);

  useEffect(() => {
    if (isAuthenticated === null) return;
    
    if (!isAuthenticated || isExpired && !userProfile.isBusiness) {
      // logOut();
      router.replace("/sign-in-business");
    } else {
      getAboutBusiness();
    }
  }, [isAuthenticated, isExpired, router, logOut]);

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
