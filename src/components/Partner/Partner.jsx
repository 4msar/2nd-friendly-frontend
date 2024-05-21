import React from 'react'
import Slider from 'react-slick'
import slider1 from "@/assets/img/client/coca-cola.svg";
import slider2 from "@/assets/img/client/android.svg";
import slider3 from "@/assets/img/client/envato.svg";
import slider4 from "@/assets/img/client/microsoft.svg";
import slider5 from "@/assets/img/client/netflix.svg";
import slider6 from "@/assets/img/client/google.svg";
import slider7 from "@/assets/img/client/linkedin.svg";

const Partner = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 2
              }
            }
          ]
      };
  return (
    <section className="py-5">
    <div className="container">
        <div className="row mb-5">
            <div className="col-12">
                <h2 className="fw-normal text-center">Our <span className="corporate-color">Partners</span></h2>
                <p className="mb-0 text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-12">
                <div className="arrow-round">
                    <div className="tiny-slider-inner">
                        <Slider {...settings} centerPadding='40px'>
                            <div className="item"> <img src={slider1.src} alt=""/> </div>
                            <div className="item"> <img src={slider2.src} alt=""/> </div>
                            <div className="item"> <img src={slider3.src} alt=""/> </div>
                            <div className="item"> <img src={slider4.src} alt=""/> </div>
                            <div className="item"> <img src={slider5.src} alt=""/> </div>
                            <div className="item"> <img src={slider6.src} alt=""/> </div>
                            <div className="item"> <img src={slider7.src} alt=""/> </div>
                        </Slider>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
                <div class="row">
                    <div class="col-12 col-md-12 mx-auto">
                        <div class="bg-info rounded-3 shadow p-3 p-sm-4 position-relative overflow-hidden">
                            {/* <!-- SVG decoration --> */}
                            <figure class="position-absolute top-100 start-100 translate-middle mt-n6 ms-n5">
                                <svg width="211px" height="211px">
                                    <path class="fill-white opacity-4" d="M210.030,105.011 C210.030,163.014 163.010,210.029 105.012,210.029 C47.013,210.029 -0.005,163.014 -0.005,105.011 C-0.005,47.015 47.013,-0.004 105.012,-0.004 C163.010,-0.004 210.030,47.015 210.030,105.011 Z"></path>
                                </svg>
                            </figure>
                            {/* <!-- SVG decoration --> */}
                            <figure class="position-absolute top-100 start-0 translate-middle mt-n6 ms-5">
                                <svg width="141px" height="141px">
                                    <path class="fill-white opacity-4" d="M140.520,70.258 C140.520,109.064 109.062,140.519 70.258,140.519 C31.454,140.519 -0.004,109.064 -0.004,70.258 C-0.004,31.455 31.454,-0.003 70.258,-0.003 C109.062,-0.003 140.520,31.455 140.520,70.258 Z"></path>
                                </svg>
                            </figure>
                            {/* <!-- SVG decoration --> */}
                            <figure class="position-absolute top-0 start-50 mt-4 ms-n9">
                                <svg width="41px" height="41px">
                                    <path class="fill-white opacity-4" d="M40.531,20.265 C40.531,31.458 31.457,40.531 20.265,40.531 C9.072,40.531 -0.001,31.458 -0.001,20.265 C-0.001,9.073 9.072,-0.001 20.265,-0.001 C31.457,-0.001 40.531,9.073 40.531,20.265 Z"></path>
                                </svg>
                            </figure>

                            <div class="row">
                                <div class="col-md-12 mx-auto text-center py-4 position-relative">
                                    {/* <!-- Title --> */}
                                    <h2 class="text-white">Subscribe to our Newsletter for Newest Updates</h2>
                                    <p class="text-white">How promotion excellent curiosity yet attempted happiness Gay prosperous impression</p>
                                    {/* <!-- Form --> */}
                                    <form class="row align-items-center justify-content-center mt-3">
                                        <div class="col-lg-8">
                                            <div class="bg-body shadow rounded-pill p-2">
                                                <div class="input-group">
                                                    <input class="form-control border-0 me-1" type="email" placeholder="Enter your email"/>
                                                    <button type="button" class="btn btn-blue mb-0 rounded-pill">Subscribe!</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</section>
  )
}

export default Partner