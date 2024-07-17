import useToken from "@/hooks/useToken";
import { useAuthStore } from "@/store";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Footer from "../Footer/Footer";
import BusinessHeader from "../Header/BusinessHeader";

const BusinessView = (WrapperComponent, title) => {
  const BusinessComponent = (props) => {
    const router = useRouter();
    const isAuthenticated = useToken();
    const userProfile = useAuthStore((state) => state.user);
    useEffect(() => {
      if (isAuthenticated === null) return; // Wait for the token check to complete
      if (!isAuthenticated) {
        // If the user is not authenticated, redirect them to the login page
        // router.replace("/sign-in-business");
      } else if (isAuthenticated && !userProfile?.isBusiness) {
        // If the user is authenticated but not a business profile, redirect to home page
        router.replace("/");
      }
    }, [router, isAuthenticated, userProfile]);

    // If the user is authenticated, render the wrapped component
    return (
      <>
        <Head>
          <title>{title} | 2nd A Friendly</title>
        </Head>
        <BusinessHeader />
        <WrapperComponent {...props} />
        <Footer />
      </>
    );
  };

  return BusinessComponent;
};

export default BusinessView;
