import Head from "next/head";
import React from "react";
import ContactImg from "@/assets/img/element/contact.svg";

const ContactUs = () => {
  return (
    <main>
        <Head>
            <title>Contact US</title>
        </Head>
      <section className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-dots my-0 py-0">
                  <li className="breadcrumb-item">
                    <a href="index.php">Home</a>
                  </li>
                  <li className="breadcrumb-item">Company</li>
                  <li className="breadcrumb-item">Contact us</li>
                </ol>
              </nav>
              <h4 className="fw-normal mt-3">Contact Us</h4>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-0 pb-0">
        <div className="container">
          <div className="row g-4 g-md-5 mt-0 mt-lg-3">
            <div className="col-lg-4 mt-lg-0">
              <div className="card card-body bg-primary shadow py-5 text-center h-100">
                <h5 className="text-white mb-3">Customer Support</h5>
                <ul className="list-inline mb-0">
                  <li className="list-item mb-3">
                    <a href="#" className="text-white">
                      {" "}
                      <i className="fas fa-fw fa-map-marker-alt me-2 mt-1"></i>1409
                      Kuehner Drive, PMB 226 Simi Valley, CA{" "}
                    </a>
                  </li>
                  <li className="list-item mb-3">
                    <a href="#" className="text-white">
                      {" "}
                      <i className="fas fa-fw fa-phone-alt me-2"></i>(423) 733-8222{" "}
                    </a>
                  </li>
                  <li className="list-item mb-0">
                    <a href="#" className="text-white">
                      {" "}
                      <i className="far fa-fw fa-envelope me-2"></i>
                      support@2ndafriendly.com{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 mt-lg-0">
              <div className="card card-body shadow py-5 text-center h-100">
                <h5 className="mb-3">Contact Address</h5>
                <ul className="list-inline mb-0">
                  <li className="list-item mb-3 h6 fw-light">
                    <a href="#">
                      {" "}
                      <i className="fas fa-fw fa-map-marker-alt me-2 mt-1"></i>1409
                      Kuehner Drive, PMB 226 Simi Valley, CA{" "}
                    </a>
                  </li>

                  <li className="list-item mb-3 h6 fw-light">
                    <a href="#">
                      {" "}
                      <i className="fas fa-fw fa-phone-alt me-2"></i>+896-789-546{" "}
                    </a>
                  </li>

                  <li className="list-item mb-0 h6 fw-light">
                    <a href="#">
                      {" "}
                      <i className="far fa-fw fa-envelope me-2"></i>
                      contact@2ndafriendly.com{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 mt-lg-0">
              <div className="card card-body shadow py-5 text-center h-100">
                <h5 className="mb-3">Main Office Address</h5>
                <ul className="list-inline mb-0">
                  <li className="list-item mb-3 h6 fw-light">
                    <a href="#">
                      {" "}
                      <i className="fas fa-fw fa-map-marker-alt me-2 mt-1"></i>1409
                      Kuehner Drive, PMB 226 Simi Valley, CA
                    </a>
                  </li>

                  <li className="list-item mb-3 h6 fw-light">
                    <a href="#">
                      {" "}
                      <i className="fas fa-fw fa-phone-alt me-2"></i>(678) 324-1251{" "}
                    </a>
                  </li>

                  <li className="list-item mb-0 h6 fw-light">
                    <a href="#">
                      {" "}
                      <i className="far fa-fw fa-envelope me-2"></i>
                      office@2ndafriendly.com{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row g-4 g-lg-0 align-items-center">
            <div className="col-md-6 align-items-center text-center">
              <img
                src={ContactImg.src}
                className="h-400px"
                alt=""
              />

              <div className="d-sm-flex align-items-center justify-content-center mt-2 mt-sm-4">
                <h5 className="mb-0">Follow us on:</h5>
                <ul className="list-inline mb-0 ms-sm-2">
                  <li className="list-inline-item">
                    {" "}
                    <a className="fs-5 me-1 text-facebook" href="#">
                      <i className="fab fa-fw fa-facebook-square"></i>
                    </a>{" "}
                  </li>
                  <li className="list-inline-item">
                    {" "}
                    <a className="fs-5 me-1 text-instagram" href="#">
                      <i className="fab fa-fw fa-instagram"></i>
                    </a>{" "}
                  </li>
                  <li className="list-inline-item">
                    {" "}
                    <a className="fs-5 me-1 text-twitter" href="#">
                      <i className="fab fa-fw fa-twitter"></i>
                    </a>{" "}
                  </li>
                  <li className="list-inline-item">
                    {" "}
                    <a className="fs-5 me-1 text-linkedin" href="#">
                      <i className="fab fa-fw fa-linkedin-in"></i>
                    </a>{" "}
                  </li>
                  <li className="list-inline-item">
                    {" "}
                    <a className="fs-5 me-1 text-dribbble" href="#">
                      <i className="fas fa-fw fa-basketball-ball"></i>
                    </a>{" "}
                  </li>
                  <li className="list-inline-item">
                    {" "}
                    <a className="fs-5 me-1 text-pinterest" href="#">
                      <i className="fab fa-fw fa-pinterest"></i>
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-6">
              <h2 className="mt-4 mt-md-0">Let's talk</h2>
              <p>
                To request a quote or want to meet up for coffee, contact us
                directly or fill out the form and we will get back to you
                promptly
              </p>

              <form>
                <div className="mb-4 bg-light-input">
                  <label for="yourName" className="form-label">
                    Your name *
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="yourName"
                  />
                </div>

                <div className="mb-4 bg-light-input">
                  <label for="emailInput" className="form-label">
                    Email address *
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    id="emailInput"
                  />
                </div>

                <div className="mb-4 bg-light-input">
                  <label for="textareaBox" className="form-label">
                    Message *
                  </label>
                  <textarea
                    className="form-control"
                    id="textareaBox"
                    rows="4"
                  ></textarea>
                </div>

                <div className="d-grid">
                  <button className="btn btn-lg btn-primary mb-0" type="button">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524.053518916583!2d-82.80606407627765!3d27.96164715226838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2f0dd723de91f%3A0x24517d0446210c03!2sHonorable%20Bruce%20Boyer!5e0!3m2!1sen!2sbd!4v1714733737012!5m2!1sen!2sbd"
                width="100%"
                height="400"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
