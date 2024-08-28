import BusinessView from "@/components/HOC/BusinessView";
import PublicView from "@/components/HOC/PublicView";
import { IMAGE_URL } from "@/helpers/apiUrl";
import { formatDate } from "@/helpers/functions";
import useToken from "@/hooks/useToken";
import BusinessService from "@/services/BusinessService";
import PublicService from "@/services/PublicService";
import Head from "next/head";
import React, { useEffect, useState } from "react";

const EventDetails = ({ slug }) => {
  const isAuthenticated = useToken();
    const [eventDetails, setEventDetails] = useState("");

    const handleGetEventDetails = (slug) => {
      const payload = {
        id:slug
      }
      const res = BusinessService.eventView(payload).then((details) => {
        console.log(details.data.data);
        setEventDetails(details.data.data)
      })
    }
  
    useEffect(() => {
      if(isAuthenticated) {
        handleGetEventDetails(slug);
      }
    }, [slug, isAuthenticated]);
  return (
    <BusinessView title={eventDetails?.title}>
      <main>
        <Head>
            <title>{eventDetails?.title} | 2nd A Friendly</title>
        </Head>
      <section class="py-4">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb breadcrumb-dots my-0 py-0">
                  <li class="breadcrumb-item">
                    <a href="index.php">
                      <i class="bi bi-house me-1"></i> Home
                    </a>
                  </li>
                  <li class="breadcrumb-item">Event</li>
                  <li class="breadcrumb-item">Event Detail</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section class="pt-1 pb-5">
        <div class="container">
          <div class="row">
            <div class="col-12">
              {/* <!-- Card item START --> */}
              <div
                class="card overflow-hidden h-400px h-xl-600px rounded-3"
                style={{
                  backgroundImage: `url(${IMAGE_URL}/uploads/business-event/${eventDetails?.image})`,
                  backgroundPosition: "center left",
                  backgroundSize: "cover",
                }}
              >
                {/* <!-- Background dark overlay --> */}
                <div class="bg-overlay bg-dark opacity-6"></div>
                {/* <!-- Card image overlay --> */}
                <div class="card-img-overlay d-flex align-items-start flex-column">
                  {/* <!-- Card overlay Top --> */}
                  <div class="w-100 mb-auto d-flex justify-content-end">
                    <button class="btn btn-sm btn-white mb-0">
                      <i class="bi bi-share"></i> Share
                    </button>
                  </div>
                  {/* <!-- Card overlay bottom --> */}
                  <div class="w-100 mt-auto">
                    <div class="row p-0 p-sm-3">
                      <div class="col-11 col-lg-7">
                        {/* <!-- Title --> */}
                        <h1 class="text-white">
                          {eventDetails?.title}
                        </h1>
                        <p class="text-white mb-0">
                          {eventDetails?.details}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Card item END --> */}
            </div>
          </div>
        </div>
      </section>
      <section class="pt-0">
        <div class="container">
          <div class="row g-4 g-lg-5">
            <div class="col-lg-8 order-2">
              {/* <!-- Organization and time --> */}
              <div class="bg-light rounded-3 p-3 mb-4">
                <div class="row g-4">
                  {/* <!-- Organization --> */}
                  <div class="col-md-4">
                    <h6 class="small">Organized by:</h6>
                    <div class="d-flex align-items-center">
                      {/* <!-- Avatar --> */}
                      <div class="avatar align-middle">
                        <div class="avatar-img rounded-1 bg-danger">
                          <span class="text-white position-absolute top-50 start-50 translate-middle fw-bold">
                            ZC
                          </span>
                        </div>
                      </div>
                      {/* <!-- Info --> */}
                      <div class="ms-2">
                        <h6 class="mb-0">Zodiac Event Inc.</h6>
                        <small>2.4k followers</small>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Location --> */}
                  <div class="col-md-4">
                    <h6 class="small">Location:</h6>
                    <div class="d-flex align-items-center">
                      {/* <!-- Avatar --> */}
                      <div class="avatar align-middle flex-shrink-0">
                        <div class="avatar-img rounded-2 bg-dark">
                          <span class="position-absolute top-50 start-50 translate-middle text-white">
                            <i class="bi bi-geo-alt-fill"></i>
                          </span>
                        </div>
                      </div>
                      <h6 class="fw-normal mb-0 ms-2">
                        {eventDetails?.city},  {eventDetails?.address}
                      </h6>
                    </div>
                  </div>
                  {/* <!-- Date & Time --> */}
                  <div class="col-md-4">
                    <h6 class="small">Date & Time:</h6>
                    <div class="d-flex align-items-center">
                      {/* <!-- Avatar --> */}
                      <div class="avatar align-middle flex-shrink-0">
                        <div class="avatar-img rounded-2 bg-dark">
                          <span class="position-absolute top-50 start-50 translate-middle text-white">
                            <i class="bi bi-calendar-fill"></i>
                          </span>
                        </div>
                      </div>
                      <div class="ms-2">
                        <h6 class="fw-normal mb-0">
                         
                          {`${eventDetails?.start_date_time} to ${formatDate(eventDetails?.end_date_time, "MMM DD, YYYY HH:mm A")}`}
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Content --> */}
              <h4>About this event</h4>
              <p>
                {eventDetails?.details}
              </p>
              
            </div>
            <div class="col-lg-4 order-1 order-lg-2">
              <div class="card card-body shadow">
                <a class="btn btn-primary w-100" href="#">
                  {" "}
                  Buy ticket{" "}
                </a>
                <div class="mt-4">
                  <ul class="list-unstyled mb-4">
                    <li class="d-flex justify-content-between mb-3">
                      <span class="w-150px">Ticket Price:</span>
                      <h6 class="text-end mb-0"> ${eventDetails?.ticket_price} </h6>
                    </li>
                    <li class="d-flex justify-content-between mb-3">
                      <span class="w-150px">Entry fees:</span>
                      <h6 class="text-end mb-0"> Free </h6>
                    </li>
                    <li class="d-flex justify-content-between mb-3">
                      <span class="w-150px">Address:</span>
                      <h6 class="text-end mb-0">
                      {eventDetails?.city},  {eventDetails?.address}
                      </h6>
                    </li>
                  </ul>
                  <iframe
                    class="w-100 d-block rounded-bottom"
                    height="230"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076684379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sin!4v1586000412513!5m2!1sen!2sin"
                    style={{ border: 0 }}
                    aria-hidden="false"
                    tabindex="0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Row END --> */}
        </div>
      </section>
    </main>
    </BusinessView>
  );
};

export default EventDetails;

export async function getServerSideProps(context) {
    const { params, query } = context;
    
    const { slug } = params;
    console.log(slug);
   
  
    return {
        props: {
            slug,
        },
    };
  }