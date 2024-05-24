import React from "react";
import Slider from "react-slick";
import { events } from "../dummy_data/data";
import EventCard from "./EventCard";
import Link from "next/link";

const Event = () => {
  const event_data = events;
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row mb-3">
          <div className="col-12">
            <h2 className="fw-normal text-center">
              Upcoming <span className="corporate-color">Events</span>
            </h2>
            <p className="mb-0 text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
        </div>
        <div className="row">
          
            <Slider {...settings}>
              {event_data.length > 0 &&
                event_data.map((item, index) => (
                  <div className="event">
                   <EventCard item={item} />
                  </div>
                ))}

         
            </Slider>
          
        </div>
        <div className="row mt-3">
          <div className="col-12">
            <div className="text-center">
              <Link href="/events" className="btn btn-primary-soft">
                View More <i className="fas fa-angle-right ms-0"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Event;
