import PublicService from "@/services/PublicService";
import { useBusinessAboutStore, usePublicPageStore } from "@/store";
import Head from "next/head";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { upcomingEvents } from "../dummy_data/data";
import useToken from "@/hooks/useToken";
import { useCustomerAboutStore } from "@/store/useCustomerAboutStore";
import CustomerService from "@/services/CustomerService";
import BusinessService from "@/services/BusinessService";

const PublicView = (WrapperComponent, title) => {
  const PublicComponent = (props) => {
    const [loading, setLoading] = useState(true)
    // const router = useRouter();
    const isAuthenticated = useToken();
    const getHomePageData =  () => {
      const res = PublicService.homePageData().then((data) => {
        if (data?.data?.status === "success") {
          usePublicPageStore.setState({
            allCategory: data.data.allCategory,
            recentAdvertisement: data.data.recentAdvertisement,
            upcomingEvents: data.data.upcomingEvents,
            recentBlog: data.data.recentBlog,
          });
        }
        // console.log("res", data.data);
      });
      
    };

    const setAllAboutData = useBusinessAboutStore(
      (state) => state.setAboutAllData
    );

    const setCustomerAllAboutData = useCustomerAboutStore(
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

    const getAboutCustomer = async () => {
      try {
        const res = await CustomerService.aboutCustomer();
        if (res.data.status === "success") {
          setCustomerAllAboutData(res.data);
        }
      } catch (error) {
        console.error("Failed to fetch Customer data:", error);
      }
    };


    const getMenuData = () => {
      const res = PublicService.topMenu().then((menu) => {
        // console.log(menu);
        if(menu?.data?.actionStatus === 1) {
          usePublicPageStore.setState({
            topMenu: menu.data.fiveCategory,
            moreMenu: menu.data.moreCategory
          })
        }
      })
    }

    console.log(isAuthenticated);
    

    useEffect(() => {
      getHomePageData();
      getMenuData();
      setTimeout(() => {
        setLoading(false);
      }, 2000)
    }, []);

    useEffect(() => {
      if(isAuthenticated) {
        getAboutBusiness();
        getAboutCustomer();
      }
    }, [isAuthenticated])

    if(loading) {
      return (
        <div className="preloader">
      <div className="preloader-item">
        <div className="spinner-grow text-primary"></div>
      </div>
    </div> 
      )
    }

    // If the user is authenticated, render the wrapped component
    return (
      <>
        <Head>
          <title>{title} | 2nd A Friendly</title>
        </Head>
        <Header />
        <WrapperComponent {...props} />
        <Footer />
      </>
    );
  };

  return PublicComponent;
};

export default PublicView;
