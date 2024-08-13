import React from "react";
import AdvertisementCard from "./AdvertisementCard";
import { usePublicPageStore } from "@/store";

const Advertisement = () => {
  const advertisement = usePublicPageStore((state) => state.recentAdvertisement);
  console.log(advertisement);
  
  return (
    <section className="bg-light position-relative overflow-hidden">
      <figure className="position-absolute bottom-0 end-0 mb-n5">
        <svg width="822.2px" height="301.9px" viewBox="0 0 822.2 301.9">
          <path
            className="fill-warning"
            d="M752.5,51.9c-4.5,3.9-8.9,7.8-13.4,11.8c-51.5,45.3-104.8,92.2-171.7,101.4c-39.9,5.5-80.2-3.4-119.2-12.1 c-32.3-7.2-65.6-14.6-98.9-13.9c-66.5,1.3-128.9,35.2-175.7,64.6c-11.9,7.5-23.9,15.3-35.5,22.8c-40.5,26.4-82.5,53.8-128.4,70.7 c-2.1,0.8-4.2,1.5-6.2,2.2L0,301.9c3.3-1.1,6.7-2.3,10.2-3.5c46.1-17,88.1-44.4,128.7-70.9c11.6-7.6,23.6-15.4,35.4-22.8 c46.7-29.3,108.9-63.1,175.1-64.4c33.1-0.6,66.4,6.8,98.6,13.9c39.1,8.7,79.6,17.7,119.7,12.1C634.8,157,688.3,110,740,64.6 c4.5-3.9,9-7.9,13.4-11.8C773.8,35,797,16.4,822.2,1l-0.7-1C796.2,15.4,773,34,752.5,51.9z"
          ></path>
        </svg>
      </figure>
      <figure className="position-absolute top-0 start-0 mt-n8 me-5 d-none d-lg-block">
        <svg width="822.2px" height="301.9px" viewBox="0 0 822.2 301.9">
          <path
            className="fill-purple opacity-3"
            d="M752.5,51.9c-4.5,3.9-8.9,7.8-13.4,11.8c-51.5,45.3-104.8,92.2-171.7,101.4c-39.9,5.5-80.2-3.4-119.2-12.1 c-32.3-7.2-65.6-14.6-98.9-13.9c-66.5,1.3-128.9,35.2-175.7,64.6c-11.9,7.5-23.9,15.3-35.5,22.8c-40.5,26.4-82.5,53.8-128.4,70.7 c-2.1,0.8-4.2,1.5-6.2,2.2L0,301.9c3.3-1.1,6.7-2.3,10.2-3.5c46.1-17,88.1-44.4,128.7-70.9c11.6-7.6,23.6-15.4,35.4-22.8 c46.7-29.3,108.9-63.1,175.1-64.4c33.1-0.6,66.4,6.8,98.6,13.9c39.1,8.7,79.6,17.7,119.7,12.1C634.8,157,688.3,110,740,64.6 c4.5-3.9,9-7.9,13.4-11.8C773.8,35,797,16.4,822.2,1l-0.7-1C796.2,15.4,773,34,752.5,51.9z"
          ></path>
        </svg>
      </figure>
      <div className="container position-relative">
        <div className="row mb-4">
          <div className="col-12">
            <h2 className="fw-normal text-center">
              Recent <span className="corporate-color">Advertisements</span>
            </h2>
            <p className="mb-0 text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          {advertisement?.length > 0 &&
            advertisement.map((item, i) => (
              <div className="col-lg-10 col-xl-6" key={i}>
                <AdvertisementCard item={item} index={i} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Advertisement;
