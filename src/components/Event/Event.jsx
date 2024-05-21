import React from "react";
import Slider from "react-slick";
import { events } from "../dummy_data/data";

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
                    <div className="card bg-transparent" key={index}>
                    <div className="position-relative">
                      <img
                        src={item.img.src}
                        className="card-img"
                        alt="course image"
                      />
                      <div className="card-img-overlay d-flex align-items-start flex-column p-3">
                        <div className="w-100 mb-auto d-flex justify-content-end">
                          <a href="#" className="icon-sm bg-white rounded-2">
                            <i className="fas fa-heart text-danger"></i>
                          </a>
                        </div>
                        <div className="w-100 mt-auto">
                          <a
                            href="#"
                            className="badge text-bg-white fs-6 rounded-1"
                          >
                            <i className={`${item.date === "Live" ? 'fas fa-circle text-success' : 'far fa-calendar-alt text-orange'}  me-2`}></i>
                           {item.date}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body px-2">
                      <h5 className="card-title">
                        <a href="event-detail.php">
                          Global Education Fall Meeting for Everyone
                        </a>
                      </h5>
                      <p className="mb-0 text-truncate-2">
                        Satisfied conveying a dependent contented he gentleman
                        agreeable do be.{" "}
                      </p>
                    </div>
                  </div>
                  </div>
                ))}

         
            </Slider>
          
        </div>
        <div className="row mt-3">
          <div className="col-12">
            <div className="text-center">
              <a href="events.php" className="btn btn-primary-soft">
                View More <i className="fas fa-angle-right ms-0"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Event;
