import React from "react";
import logo from "@/assets/img/logo.png";
import appStore from "@/assets/img/client/app-store.svg";
import googleStore from "@/assets/img/client/google-play.svg";

const Footer = () => {
  return (
    <footer className="pt-5 bg-light">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-3">
            {/* <!-- logo --> */}
            <a className="me-0" href="index.php">
              <img
                className="light-mode-item w-auto"
                src={logo.src}
                alt="logo"
              />
              <img
                className="dark-mode-item w-auto"
                src={logo.src}
                alt="logo"
              />
            </a>
            <p className="my-3">
              2nd A Friendly" is more than just an event – it's a testament to
              community spirit and unity. Join us for a day filled with
              laughter, connection, and shared experiences.
            </p>
            {/* <!-- Social media icon --> */}
            <ul className="list-inline mb-0 mt-3">
              <li className="list-inline-item">
                {" "}
                <a
                  className="btn btn-white btn-sm shadow px-2 text-facebook"
                  href="#"
                >
                  <i className="fab fa-fw fa-facebook-f"></i>
                </a>{" "}
              </li>
              <li className="list-inline-item">
                {" "}
                <a
                  className="btn btn-white btn-sm shadow px-2 text-instagram"
                  href="#"
                >
                  <i className="fab fa-fw fa-instagram"></i>
                </a>{" "}
              </li>
              <li className="list-inline-item">
                {" "}
                <a
                  className="btn btn-white btn-sm shadow px-2 text-twitter"
                  href="#"
                >
                  <i className="fab fa-fw fa-twitter"></i>
                </a>{" "}
              </li>
              <li className="list-inline-item">
                {" "}
                <a
                  className="btn btn-white btn-sm shadow px-2 text-linkedin"
                  href="#"
                >
                  <i className="fab fa-fw fa-linkedin-in"></i>
                </a>{" "}
              </li>
              <li className="list-inline-item">
                {" "}
                <a
                  className="btn btn-white btn-sm shadow px-2 text-youtube"
                  href="#"
                >
                  <i className="fab fa-fw fa-youtube"></i>
                </a>{" "}
              </li>
            </ul>

            <form className="row row-cols-lg-auto g-2 pt-3">
              <div className="col-9">
                <input
                  type="email"
                  className="form-control form-control-sm"
                  placeholder="Enter your email address"
                  width="100"
                />
              </div>
              <div className="col-3">
                <button type="submit" className="btn btn-sm btn-dark m-0">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          <div className="col-lg-6">
            <div className="row g-4">
              <div className="col-6 col-md-4">
                <h5 className="mb-2 mb-md-4">Company</h5>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link footer-nav-link" href="about.php">
                      About 2nd A Friendly
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link footer-nav-link" href="events.php">
                      Events
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link footer-nav-link" href="careers.php">
                      Career
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link footer-nav-link"
                      href="accessibility-statement.php"
                    >
                      Accessibility Statement
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link footer-nav-link" href="trust-safety.php">
                      Trust & Safety
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link footer-nav-link"
                      href="investor-relation.php"
                    >
                      Investor Relations
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link footer-nav-link" href="contact-us.php">
                      Contact Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link footer-nav-link" href="sell-fast.php">
                      Sell Fast
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md-4">
                <h5 className="mb-2 mb-md-4">For Business</h5>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a
                      className="nav-link footer-nav-link"
                      href="for-business-owner.php"
                    >
                      2nd A for Business
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link footer-nav-link" href="sign-in.php">
                      Business Owner Login
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link footer-nav-link" href="#">
                      Claim your Business Page
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link footer-nav-link"
                      href="advertisements.php"
                    >
                      Advertisements
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link footer-nav-link"
                      href="success-stories.php"
                    >
                      Success Stories
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link footer-nav-link" href="support.php">
                      Business Support
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link footer-nav-link"
                      href="blog-business.php"
                    >
                      Blog for Business
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md-4">
                <h5 className="mb-2 mb-md-4">Community</h5>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link footer-nav-link" href="help-center.php">
                      Help Center
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link footer-nav-link" href="faq.php">
                      FAQ
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link footer-nav-link" href="blogs.php">
                      News & Blogs
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link footer-nav-link" href="stay-safe.php">
                      Stay Safe
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link footer-nav-link" href="press.php">
                      Press
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link footer-nav-link"
                      href="content-guidelines.php"
                    >
                      Content Guideline
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link footer-nav-link" href="support.php">
                      Support
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-lg-4 d-lg-none">
                <h5 className="mb-2 mb-md-4">Contact</h5>
                <p className="mb-2">
                  Toll free:<span className="h6 fw-light ms-2">+1234 568 963</span>
                  <span className="d-block small">(9:AM to 8:PM IST)</span>
                </p>
                <p className="mb-0">
                  Email:<span className="h6 fw-light ms-2">example@gmail.com</span>
                </p>
                <div className="row g-2 mt-2">
                  <div className="col-6 col-sm-4 col-md-3 col-lg-6">
                    <a href="#">
                      {" "}
                      <img
                        src="assets/img/client/google-play.svg"
                        alt=""
                      />{" "}
                    </a>
                  </div>
                  <div className="col-6 col-sm-4 col-md-3 col-lg-6">
                    <a href="#">
                      {" "}
                      <img
                        src="assets/img/client/app-store.svg"
                        alt="app-store"
                      />{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 d-none d-sm-block">
            <h5 className="mb-2 mb-md-4">Contact</h5>
            <p className="mb-2">
              Toll free: <span className="h6 fw-light ms-2">+1234 568 963</span>
              <span className="d-block small">(9:AM to 8:PM IST)</span>
            </p>
            <p className="mb-0">
              Email:<span className="h6 fw-light ms-2">example@gmail.com</span>
            </p>
            <div className="row g-2 mt-2">
              <div className="col-6 col-sm-4 col-md-3 col-lg-6">
                <a href="#">
                  {" "}
                  <img src={googleStore.src} alt="" />{" "}
                </a>
              </div>
              <div className="col-6 col-sm-4 col-md-3 col-lg-6">
                <a href="#">
                  {" "}
                  <img
                    src={appStore.src}
                    alt="app-store"
                  />{" "}
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-4 mb-0" />

        <div className="py-2">
          <div className="container px-0">
            <div className="d-lg-flex justify-content-between align-items-center py-2 text-center text-md-left">
              {/* <!-- copyright text --> */}
              <div className="text-body text-primary-hover">
                {" "}
                ©2022-2024. 2nd A Friendly. All rights reserved.
              </div>
              {/* <!-- copyright links--> */}
              <div className="justify-content-center mt-3 mt-lg-0">
                <ul className="nav list-inline justify-content-center mb-0">
                  <li className="list-inline-item">
                    <a className="nav-link" href="legal-information.php">
                      Legal
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="nav-link" href="cookie-policy.php">
                      Cookie Policy
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="nav-link pe-0" href="privacy-policy.php">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="nav-link" href="terms-and-condition.php">
                      Terms & Conditions
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="nav-link pe-0" href="site-map.php">
                      Sitemap
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
