import PublicService from "@/services/PublicService";
import { usePublicPageStore } from "@/store";
import Head from "next/head";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { upcomingEvents } from "../dummy_data/data";

const PublicView = (WrapperComponent, title) => {
  const PublicComponent = (props) => {
    const [loading, setLoading] = useState(true)
    // const router = useRouter();

    const getHomePageData = async () => {
      const res = await PublicService.homePageData();
      console.log("res", res);
      if (res.data.status === "success") {
        usePublicPageStore.setState({
          allCategory: res.data.allCategory,
          recentAdvertisement: res.data.recentAdvertisement,
          upcomingEvents: res.data.upcomingEvents,
        });
      }
    };


    const getMenuData = () => {
      const res = PublicService.topMenu().then((menu) => {
        console.log(menu);
        if(menu.data.actionStatus === 1) {
          usePublicPageStore.setState({
            topMenu: menu.data.fiveCategory,
            moreMenu: menu.data.moreCategory
          })
        }
      })
    }

    

    useEffect(() => {
      getHomePageData();
      getMenuData();
      setTimeout(() => {
        setLoading(false);
      }, 2000)
    }, []);

    if(loading) {
      return (
        <div className="preloader">
      <div className="preloader-item">
        <div className="spinner-grow text-primary"></div>
      </div>
    </div> // Show loading state while checking authentication
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
