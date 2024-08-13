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
        console.log("res", data.data);
      });
      
    };


    const getMenuData = () => {
      const res = PublicService.topMenu().then((menu) => {
        console.log(menu);
        if(menu?.data?.actionStatus === 1) {
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
