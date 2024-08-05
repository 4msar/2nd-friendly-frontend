import PublicService from "@/services/PublicService";
import { usePublicPageStore } from "@/store";
import Head from "next/head";
import { useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const PublicView = (WrapperComponent, title) => {
  const PublicComponent = (props) => {
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

    useEffect(() => {
      getHomePageData();
    }, []);

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
