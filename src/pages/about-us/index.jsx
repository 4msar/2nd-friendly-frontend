import React from "react";
import aboutImg from "@/assets/img/about/06.jpg";
import PublicView from "@/components/HOC/PublicView";
import Head from "next/head";
import { teams } from "@/components/dummy_data/data";
import Person from "@/components/Person/Person";
import Slider from "react-slick";
import PublicService from "@/services/PublicService";

const AboutUs = ({data}) => {
  const team_list = teams;

  console.log(data);
  function createMarkup(text) {
    
    return {__html: text};
  }

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
    <main>
      <section class="py-3 bg-light mb-4">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h5 class="text-danger mb-2">About Us</h5>
              <div class="d-flex justify-content-left">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb breadcrumb-dots my-0 py-0">
                    <li class="breadcrumb-item">
                      <a href="index.php">Home</a>
                    </li>
                    <li class="breadcrumb-item">Company</li>
                    <li class="breadcrumb-item">About Us</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="pt-0">
        <div class="container" dangerouslySetInnerHTML={createMarkup(data.description)} />
          {/* <!-- Title --> */}
          {/* <div class="row mb-4">
            <div class="col-lg-12">
              <p class="mb-0">
                Welcome to 2ndAFriendly.com, where like-minded individuals can
                find and connect with businesses that proudly support and uphold
                the Second Amendment. Our platform is dedicated to creating a
                community of mutual respect and shared values, making it easier
                for you to find services provided by businesses that align with
                your beliefs.
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <h5 class="mb-3 fw-normal">Our Mission</h5>
              <p>
                At 2ndAFriendly.com, our mission is to foster a network of
                businesses and individuals who are committed to protecting and
                celebrating the right to bear arms. We aim to provide a reliable
                resource for those who wish to support and engage with
                businesses that share their Second Amendment values.
              </p>
              <h5 class="mt-3 fw-normal">What We Offer</h5>
              <ul class="list-group list-group-borderless mt-2">
                <li class="list-group-item d-flex">
                  <i class="bi bi-patch-check-fill text-success me-2"></i>
                  Business Directory: Explore our extensive directory of
                  businesses that proudly support the Second Amendment. From
                  firearms training and outdoor gear to legal services and
                  insurance, find the services you need from businesses that
                  share your values.
                </li>
                <li class="list-group-item d-flex">
                  <i class="bi bi-patch-check-fill text-success me-2"></i>
                  Community Connection: Join a community of like-minded
                  individuals who are passionate about the Second Amendment.
                  Share experiences, exchange recommendations, and support
                  businesses that align with your beliefs.
                </li>
                <li class="list-group-item d-flex">
                  <i class="bi bi-patch-check-fill text-success me-2"></i>Events
                  and Workshops: Stay informed about upcoming events, workshops,
                  and seminars focused on Second Amendment rights, firearm
                  safety, and responsible ownership. Our calendar is packed with
                  opportunities to learn, connect, and grow within the
                  community.
                </li>
                <li class="list-group-item d-flex">
                  <i class="bi bi-patch-check-fill text-success me-2"></i>
                  Resource Center: Access a wealth of information and resources,
                  including articles, guides, and legal updates related to the
                  Second Amendment. Stay informed about your rights and the
                  latest developments in legislation and advocacy.
                </li>
              </ul>
              <h5 class="mt-3 fw-normal">Why Choose Us?</h5>
              <p>
                2ndAFriendly.com was founded by a group of passionate
                individuals who believe in the importance of the right to bear
                arms. We understand the value of supporting businesses that
                reflect our shared values and are committed to creating a
                platform that brings these businesses and supporters together.
              </p>
              <h5 class="mt-3 fw-normal">Join Our Community</h5>
              <p>
                Whether you’re a business owner looking to connect with
                like-minded customers or an individual seeking services from
                businesses that support the Second Amendment, 2ndAFriendly.com
                is here for you. Together, we can strengthen our community and
                ensure that the values we cherish continue to thrive.
              </p>
              <p>
                Thank you for choosing 2ndAFriendly.com. Your support helps us
                build a stronger, more connected community.
              </p>
              <p>
                If you have any questions, suggestions, or need assistance,
                please feel free to <a href="contact-us.php">contact us</a>.
                We're here to help and look forward to serving you.
              </p>
              <p>
                Stay Connected: Follow us on social media to stay up-to-date
                with the latest news, events, and updates from 2ndAFriendly.com.
              </p>
              <p>Social Media Links</p>
              <ul>
                <li>
                  <a href="#" target="_blank">
                    Facebook
                  </a>{" "}
                </li>
                <li>
                  <a href="#" target="_blank">
                    Twitter
                  </a>{" "}
                </li>
                <li>
                  <a href="#" target="_blank">
                    Instagram
                  </a>{" "}
                </li>
                <li>
                  <a href="#" target="_blank">
                    LinkedIn
                  </a>{" "}
                </li>
              </ul>
              <p>
                Thank you for being a part of our community and supporting
                businesses that stand for the Second Amendment.
              </p>
            </div>
          </div> */}
        {/* </div> */}
      </section>
    </main>
  );
};

export default PublicView(AboutUs);


export async function getServerSideProps(context) {
  const { params, query } = context;
  
  
  const payload = {
    slug: "about-us",
  }
  const res = await PublicService.pageDetails(payload);
 
  console.log(res.data.sinData);
  
 

  return {
      props: {
        data:res.data.sinData,
      },
  };
}