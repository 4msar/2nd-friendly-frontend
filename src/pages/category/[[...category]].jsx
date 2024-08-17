import CategoryItemBox from "@/components/Category/CategoryItemBox";
import CategorySidebar from "@/components/Category/CategorySidebar";
import { category_items } from "@/components/dummy_data/data";
import PublicView from "@/components/HOC/PublicView";
import CustomerLoginModal from "@/components/Modal/CustomerLoginModal";
import { capitalize, makeTitle } from "@/helpers/functions";
import CustomerService from "@/services/CustomerService";
import PublicService from "@/services/PublicService";
import { useCustomerAboutStore } from "@/store/useCustomerAboutStore";
import { Box, Dialog, DialogContent, DialogContentText } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const CategoryPage = ({category}) => {
  const route = useRouter();
  const userProfile = useCustomerAboutStore((state) => state.customer);
  const items = category_items;
  const [categories, setCategories] = useState({
    regular_data: [],
    sponsored_data: [],
  })
  const [messageData, setMessageData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile_no: "",
    message: "",
  });
  const [messageOpen, setMessageOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const mainCategory = category[0];
  const subCategory = category[1];
  
  const handleGetDetails = () => {
      if(subCategory) {
        const subPayload = {
          slug: subCategory
        }
        const res = PublicService.subCategoryDetails(subPayload).then((details) => {
          console.log(details);
          setCategories({
            sponsored_data: details.data.sponsored,
            regular_data: details.data.allData
          });
        })
      } else {
        const catPayload = {
          slug: mainCategory
        }
        const response = PublicService.subCategoryDetails(catPayload).then((details) => {
          console.log(details);
          console.log(details);
          setCategories({
            sponsored_data: details.data.sponsored,
            regular_data: details.data.allData
          });
        })
      }
  }

  const handleSubmitMessage = () => {
    const payload = {
      ...messageData,
      business_profile: "6693c02e1f002619a1664e31",
    }

    const res = CustomerService.sendMessageToBusiness(payload).then((data) => {
      console.log(data);
    })
  }

  useEffect(() => {
    handleGetDetails();
  }, [category]);

  useEffect(() => {
    if(userProfile) {
      setMessageData({
        first_name: userProfile.first_name,
        last_name: userProfile.last_name,
        email: userProfile.email,
        mobile_no: userProfile.mobile_no,
      })
    }
  }, [userProfile])

  console.log(userProfile);

  return (
    <main>
      <Head>
        <title>{capitalize(category[category?.length - 1])} | 2nd A Friendly</title>
      </Head>
      <section className="pt-4 pb-3  bg-light mb-4">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ol className="breadcrumb breadcrumb-dots  float-xl-end m-0 p-0">
                <li className="breadcrumb-item">
                  <a href="index.php">
                    <i className="bi bi-house me-1"></i> Home
                  </a>
                </li>
                <li className="breadcrumb-item">
                {capitalize(category[category?.length - 1])}
                </li>
              </ol>
              <h4 className="fs-5 pb-0 mb-0 fw-normal">
                {capitalize(category[category?.length - 1])}
              </h4>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-1 pb-5">
        <div className="container">
          <div className="row">
            <CategorySidebar />
            <div className="col-xl-9 col-xxl-9" key={category[category?.length -1]}>
              {/* <!-- Short by filter --> */}
              <div className="row mb-3">
                <form>
                  <div className="row g-3">
                    <div className="col-xl-3">
                      <input
                        className="form-control form-control-sm me-1 py-0"
                        type="search"
                        placeholder="Enter keyword"
                      />
                    </div>
                    <div className="col-xl-3">
                      <select className="form-select form-select-sm">
                        <option value="mostpopular">Most Popular</option>
                        <option value="date">Date</option>
                        <option value="recentlyadded">Recently Added</option>
                        <option value="audi">Friends & Following</option>
                        <option value="free">Free</option>
                      </select>
                    </div>
                    <div className="col-xl-3">
                      <select className="form-select form-select-sm">
                        <option value="anytime">Anytime</option>
                        <option value="today">Today</option>
                        <option value="tomorrow">Tomorrow</option>
                        <option value="thisweekend">This Weekend</option>
                        <option value="thisweek">This Week</option>
                        <option value="nextweek">Next Week</option>
                        <option value="weekafternext">Week After Next</option>
                        <option value="past">Past</option>
                        <option value="jumptodate">Jump to Date</option>
                      </select>
                    </div>
                    <div className="col-xl-3">
                      <select className="form-select form-select-sm">
                        <option value="volvo">All Categories</option>
                        <option value="music">Music</option>
                        <option value="visualarts">Visual Arts</option>
                        <option value="performingarts">Performing Arts</option>
                        <option value="film">Film</option>
                        <option value="lectures&books">Lectures & Books</option>
                        <option value="fashion">Fashion</option>
                        <option value="food&drink">Food & Drink</option>
                        <option value="festivals&fairs">
                          Festivals & FairsFestivals & Fairs
                        </option>
                        <option value="charities">Charities</option>
                        <option value="sports&activelife">
                          Sports & Active LifeSports & Active Life
                        </option>
                        <option value="nightlife">NightlifeNightlife</option>
                        <option value="kids&family">Kids & Family</option>
                        <option value="audi">other</option>
                        <option value="official2ndaevents">
                          Official 2nd A Events
                        </option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
              {/* <h5 className="mt-0 mb-0">Sponsored Results</h5>
              <p className="mt-0 mb-1">
                Business owners paid for these ads. For more information visit{" "}
                <a href="for-business-owner">
                  {" "}
                  2nd A Friendly for Business.
                </a>
              </p> */}
              {/* <hr className="mt-0" /> */}
              {/* <div className="card mb-4">
                <div className="row g-3">
                  <div className="col-md-4">
                    <div
                      id="carouselExampleFade1"
                      className="carousel slide carousel-fade"
                    >
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img
                            src="assets/img/food-dining/1.jpg"
                            className="d-block w-100 rounded-3 "
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/food-dining/2.jpg"
                            className="d-block w-100 rounded-3"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/food-dining/3.jpg"
                            className="d-block w-100 rounded-3"
                            alt="..."
                          />
                        </div>
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleFade1"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleFade1"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-0">
                      <div className="d-sm-flex justify-content-sm-between align-items-center mb-2">
                        <div className="d-flex align-items-center">
                          <div className="avatar avatar-sm">
                            <img
                              className="avatar-img rounded-circle"
                              src="assets/img/company-logo/1.svg"
                              alt="avatar"
                            />
                          </div>
                          <div className="ms-2">
                            <h5 className="mb-0">
                              <a href={`/category/details/464584`}>
                                Palatial Epicurean Oasis
                              </a>
                            </h5>
                            <p className="small mb-0 mb-sm-0 pb-0">
                              <i className="fas fa-star text-warning"></i>
                              <i className="fas fa-star text-warning"></i>
                              <i className="fas fa-star text-warning"></i>
                              <i className="fas fa-star text-warning"></i>
                              <i className="fas fa-star text-warning"></i>{" "}
                              <strong>5.0</strong>
                              (1.5k Reviews) .{" "}
                              <span className="fw-bold text-danger">
                                Closed
                              </span>
                              untill 11:00 AM
                            </p>
                          </div>
                        </div>
                      </div>
                      <ul className="list-inline mb-1">
                        <li className="list-inline-item fw-light">
                          <i className="fa fa-envelope text-dark me-1"></i>5
                          Years in business
                        </li>
                        <li className="list-inline-item fw-light">
                          <i className="fa fa-times text-danger me-1"></i>
                          Family-Owned and Operated
                        </li>
                        <li className="list-inline-item fw-light">
                          <i className="fa fa-wifi text-primary me-1"></i>
                          Discount Available
                        </li>
                      </ul>
                      <p className="text-truncate-2 d-none d-lg-block pb-0 mb-2">
                        The Loop Oddly enough, this feels like a place that
                        although specializes in pizza excels in everything else
                        they make. That isn't a knock to the pizza But they
                        manage…
                      </p>
                      <ul className="list-inline mb-1">
                        <li className="list-inline-item fw-light">
                          <a
                            className="btn btn-light btn-sm py-0 px-1 btn-secondary-soft"
                            href="#"
                          >
                            Chinese
                          </a>
                        </li>
                        <li className="list-inline-item fw-light">
                          <a
                            className="btn btn-light btn-sm py-0 px-1 btn-secondary-soft"
                            href="#"
                          >
                            Japanese
                          </a>
                        </li>
                        <li className="list-inline-item fw-light">
                          <a
                            className="btn btn-light btn-sm py-0 px-1 btn-secondary-soft"
                            href="#"
                          >
                            Sushi Bars
                          </a>
                        </li>
                        <li className="list-inline-item fw-light">
                          <a
                            className="btn btn-light btn-sm py-0 px-1 btn-secondary-soft"
                            href="#"
                          >
                            Chinese
                          </a>
                        </li>
                        <li className="list-inline-item fw-light">
                          <a
                            className="btn btn-light btn-sm py-0 px-1 btn-secondary-soft"
                            href="#"
                          >
                            Japanese
                          </a>
                        </li>
                        <li className="list-inline-item fw-light">
                          <a
                            className="btn btn-light btn-sm py-0 px-1 btn-secondary-soft"
                            href="#"
                          >
                            Sushi Bars
                          </a>
                        </li>
                      </ul>
                      <ul className="list-inline mb-1">
                        <li className="list-inline-item fw-light">
                          <i className="fa fa-check text-success me-1"></i>
                          Accepts Credit Cards
                        </li>
                        <li className="list-inline-item fw-light">
                          <i className="fa fa-times text-danger me-1"></i>Offers
                          Takeout
                        </li>
                        <li className="list-inline-item fw-light">
                          <i className="fa fa-check text-success me-1"></i>
                          Offers Catering
                        </li>
                        <li className="list-inline-item fw-light">
                          <i className="fa fa-times text-danger me-1"></i>Offers
                          Takeout
                        </li>
                        <li className="list-inline-item fw-light">
                          <i className="fa fa-times text-danger me-1"></i>Offer
                        </li>
                      </ul>
                      <div className="d-sm-flex justify-content-sm-between align-items-center mb-0">
                        <div className="mt-0 mb-0">
                          <div className="d-sm-flex">
                            <a href="cart.php">
                              <button className="btn btn-sm btn-outline-dark border-dark-subtle me-2">
                                Order
                              </button>
                            </a>
                            <a href="/book-restaurant">
                              <button className="btn btn-sm btn-outline-dark border-dark-subtle me-2">
                                Reservation
                              </button>
                            </a>
                            <button className="btn btn-sm btn-outline-dark border-dark-subtle me-2">
                              Directions
                            </button>
                            <a href="tel:+8801722620039">
                              <button className="btn btn-sm btn-outline-dark border-dark-subtle me-2">
                                Call
                              </button>
                            </a>
                            <a
                              href="#"
                              onClick={() => setMessageOpen(true)}
                            >
                              <button className="btn btn-sm btn-outline-dark border-dark-subtle me-2">
                                Message
                              </button>
                            </a>
                            <a
                              href=""
                              data-bs-toggle="modal"
                              data-bs-target="#joinlater"
                            >
                              <button className="btn btn-sm btn-outline-dark border-dark-subtle me-2">
                                Join Later
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div className="card mb-4">
                <div className="row g-3">
                  <div className="col-md-4">
                    <div
                      id="carouselExampleFade2"
                      className="carousel slide carousel-fade"
                    >
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img
                            src="assets/img/food-dining/2.jpg"
                            className="d-block w-100 rounded-3 "
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/food-dining/5.jpg"
                            className="d-block w-100 rounded-3"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/food-dining/6.jpg"
                            className="d-block w-100 rounded-3"
                            alt="..."
                          />
                        </div>
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleFade2"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleFade2"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-0">
                      <div className="d-sm-flex justify-content-sm-between align-items-center mb-2">
                        <div className="d-flex align-items-center">
                          <div className="avatar avatar-sm">
                            <img
                              className="avatar-img rounded-circle"
                              src="assets/img/company-logo/2.svg"
                              alt="avatar"
                            />
                          </div>
                          <div className="ms-2">
                            <h5 className="mb-0">
                              <a href={`/category/details/464584`}>
                                Delectable Dining Domain
                              </a>
                            </h5>
                            <p className="small mb-0 mb-sm-0 pb-0">
                              <i className="fas fa-star text-warning"></i>
                              <i className="fas fa-star text-warning"></i>
                              <i className="fas fa-star text-warning"></i>
                              <i className="fas fa-star text-warning"></i>
                              <i className="fas fa-star text-warning"></i>{" "}
                              <strong>5.0</strong>
                              (1.5k Reviews) .{" "}
                              <span className="fw-bold text-danger">
                                Closed
                              </span>{" "}
                              untill 11:00 AM
                            </p>
                          </div>
                        </div>
                      </div>
                      <ul className="list-inline mb-1">
                        <li className="list-inline-item fw-light">
                          <i className="fa fa-envelope text-dark me-1"></i>5
                          Years in business
                        </li>
                        <li className="list-inline-item fw-light">
                          <i className="fa fa-times text-danger me-1"></i>
                          Family-Owned and Operated
                        </li>
                        <li className="list-inline-item fw-light">
                          <i className="fa fa-wifi text-primary me-1"></i>
                          Discount Available
                        </li>
                      </ul>
                      <p className="text-truncate-2 d-none d-lg-block pb-0 mb-2">
                        100% recommend their happy hour. It runs from 5-7pm.
                        They have various options of food as well as $8
                        cocktails. I got the $15 burger and fries and while
                        the...
                      </p>
                      <ul className="list-inline mb-1">
                        <li className="list-inline-item fw-light">
                          <a
                            className="btn btn-light btn-sm py-0 px-1 btn-secondary-soft"
                            href="#"
                          >
                            Chinese
                          </a>
                        </li>
                        <li className="list-inline-item fw-light">
                          <a
                            className="btn btn-light btn-sm py-0 px-1 btn-secondary-soft"
                            href="#"
                          >
                            Japanese
                          </a>
                        </li>
                        <li className="list-inline-item fw-light">
                          <a
                            className="btn btn-light btn-sm py-0 px-1 btn-secondary-soft"
                            href="#"
                          >
                            Sushi Bars
                          </a>
                        </li>
                        <li className="list-inline-item fw-light">
                          <a
                            className="btn btn-light btn-sm py-0 px-1 btn-secondary-soft"
                            href="#"
                          >
                            Chinese
                          </a>
                        </li>
                        <li className="list-inline-item fw-light">
                          <a
                            className="btn btn-light btn-sm py-0 px-1 btn-secondary-soft"
                            href="#"
                          >
                            Japanese
                          </a>
                        </li>
                        <li className="list-inline-item fw-light">
                          <a
                            className="btn btn-light btn-sm py-0 px-1 btn-secondary-soft"
                            href="#"
                          >
                            Sushi Bars
                          </a>
                        </li>
                      </ul>
                      <ul className="list-inline mb-1">
                        <li className="list-inline-item fw-light">
                          <i className="fa fa-check text-success me-1"></i>
                          Accepts Credit Cards
                        </li>
                        <li className="list-inline-item fw-light">
                          <i className="fa fa-times text-danger me-1"></i>Offers
                          Takeout
                        </li>
                        <li className="list-inline-item fw-light">
                          <i className="fa fa-check text-success me-1"></i>
                          Offers Catering
                        </li>
                        <li className="list-inline-item fw-light">
                          <i className="fa fa-times text-danger me-1"></i>Offers
                          Takeout
                        </li>
                        <li className="list-inline-item fw-light">
                          <i className="fa fa-times text-danger me-1"></i>Offer
                        </li>
                      </ul>
                      <div className="d-sm-flex justify-content-sm-between align-items-center mb-0">
                        <div className="mt-0 mb-0">
                          <div className="d-sm-flex">
                            <a href="cart.php">
                              <button className="btn btn-sm btn-outline-dark border-dark-subtle me-2">
                                Order
                              </button>
                            </a>
                            <a href="book-restaurant.php">
                              <button className="btn btn-sm btn-outline-dark border-dark-subtle me-2">
                                Reservation
                              </button>
                            </a>
                            <button className="btn btn-sm btn-outline-dark border-dark-subtle me-2">
                              Directions
                            </button>
                            <a href="tel:+8801722620039">
                              <button className="btn btn-sm btn-outline-dark border-dark-subtle me-2">
                                Call
                              </button>
                            </a>
                            <span
                              href=""
                              data-bs-toggle="modal"
                              data-bs-target="#SendMassage"
                            >
                              <button className="btn btn-sm btn-outline-dark border-dark-subtle me-2">
                                Message
                              </button>
                            </span>
                            <a
                              href=""
                              data-bs-toggle="modal"
                              data-bs-target="#joinlater"
                            >
                              <button className="btn btn-sm btn-outline-dark border-dark-subtle me-2">
                                Join Later
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <h5 className="mt-0 mb-0">Regular Results</h5>
              <p className="mt-0 mb-1">
                Business owners paid for these ads. For more information visit{" "}
                <a href="for-business-owner.php">
                  {" "}
                  2nd A Friendly for Business.
                </a>
              </p>
              <hr className="mt-0" />
              {categories?.regular_data.length > 0 &&
                categories?.regular_data.map((item, index) => (
                  <CategoryItemBox item={item} index={index} messageOpen={() => setMessageOpen(true)} />
                ))}
            </div>
            {/* <div className="row g-3">
              <div className="col-12">
                <nav
                  className="mt-4 d-flex justify-content-center"
                  aria-label="navigation"
                >
                  <ul className="pagination pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
                    <li className="page-item mb-0">
                      <a className="page-link" href="#">
                        <i className="fas fa-angle-double-left"></i>
                      </a>
                    </li>
                    <li className="page-item mb-0">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item mb-0 active">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item mb-0">
                      <a className="page-link" href="#">
                        ..
                      </a>
                    </li>
                    <li className="page-item mb-0">
                      <a className="page-link" href="#">
                        6
                      </a>
                    </li>
                    <li className="page-item mb-0">
                      <a className="page-link" href="#">
                        <i className="fas fa-angle-double-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <Dialog
        class="modal fade"
          open={messageOpen}
          maxWidth="sm"
          onClose={() => {
            setMessageOpen(false);
            setMessageData("");
          }}
      >
        <Box className="modal-dialog modal-dialog-scrollable modal-md">
          <DialogContent className="modal-content">
            <DialogContentText>
            <div className="header bg-transparent border-bottom p-3">
              <h5 className="header-title text-danger">
                Send Massage
                <button
                  style={{ float: "right", fontSize: "12px" }}
                  type="button"
                  className="btn-close justify-content-end float-right"
                  aria-label="Close"
                  onClick={() => setMessageOpen(false)}
                ></button>
              </h5>
              <span>
                We'll remind you when to join based on live wait times
              </span>
            </div>
              <Box className="modal-body" sx={{padding: "10px"}}>
              <form className="row g-3 needs-validation" noValidate>
                <div className="col-6">
                  <label
                    for="fast_name"
                    className="form-label fw-bold text-dark"
                  >
                    Fast Name <span className="star">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control fast_name"
                    id="fast_name"
                    title="fast_name"
                    placeholder="John"
                    required
                    value={messageData?.first_name}
                    onChange={(e) => {
                      setMessageData({
                        ...messageData,
                        first_name: e.target.value
                      })
                    }}
                  />
                  <div className="valid-feedback">Looks Goods</div>
                  <div className="invalid-feedback">
                    Please enter fast name.
                  </div>
                </div>
                <div className="col-6">
                  <label
                    for="last_name"
                    className="form-label fw-bold text-dark"
                  >
                    Last name <span className="star">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control last_name"
                    id="last_name"
                    title="last_name"
                    placeholder="Doe"
                    required
                    value={messageData?.last_name}
                    onChange={(e) => {
                      setMessageData({
                        ...messageData,
                        last_name: e.target.value
                      })
                    }}
                  />
                  <div className="valid-feedback">Looks Goods</div>
                  <div className="invalid-feedback">
                    Please enter last name.
                  </div>
                </div>
                <div className="col-6">
                  <label
                    for="email_address"
                    className="form-label fw-bold text-dark"
                  >
                    Email Address <span className="star">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control email_address"
                    id="email_address"
                    title="email_address"
                    placeholder="johndoe@gmail.com"
                    required
                    value={messageData?.email}
                    onChange={(e) => {
                      setMessageData({
                        ...messageData,
                        email: e.target.value
                      })
                    }}
                  />
                  <div className="valid-feedback">Looks Goods</div>
                  <div className="invalid-feedback">
                    Please enter your email address.
                  </div>
                </div>
                <div className="col-6">
                  <label
                    for="mobile_number"
                    className="form-label fw-bold text-dark"
                  >
                    Mobile number <span className="star">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control mobile_number"
                    id="mobile_number"
                    title="mobile_number"
                    placeholder="+1-237-3456"
                    required
                    value={messageData?.mobile_no}
                    onChange={(e) => {
                      setMessageData({
                        ...messageData,
                        mobile_no: e.target.value
                      })
                    }}
                  />
                  <div className="valid-feedback">Looks Goods</div>
                  <div className="invalid-feedback">
                    Please enter your mobile number.
                  </div>
                </div>
                <div className="col-12">
                  <label
                    for="your_massage"
                    className="form-label fw-bold text-dark"
                  >
                    Your Massage <span className="star">*</span>
                  </label>
                  <textarea
                    type="text"
                    className="form-control your_massage"
                    id="your_massage"
                    title="your_massage"
                    placeholder="Share a few details so we can get you in touch with the business"
                    required
                    value={messageData?.message}
                    onChange={(e) => {
                      setMessageData({
                        ...messageData,
                        message: e.target.value
                      })
                    }}
                  ></textarea>
                  <div className="valid-feedback">Looks Goods</div>
                  <div className="invalid-feedback">
                    Please enter your massage.
                  </div>
                </div>
                <p className="mt-0 mb-0 pt-2 pb-0">
                  We will send your information to the business to help get you
                  a response. By continuing you agree 2nd A friendly{" "}
                  <a href="terms-and-condition.php">
                    <span className="text-primary">Terms of service</span>
                  </a>{" "}
                  and{" "}
                  <a href="privacy-policy.php">
                    <span className="text-primary">Privecy Policy.</span>
                  </a>
                </p>
                <div className="col-6">
                  <div className="mt-3 ms-1">
                    {!userProfile && (
                      <span>
                      Already have an account?
                      <span style={{color: "#066ac9", cursor: "pointer"}} onClick={() => setLoginOpen(true)}> Sign in</span>
                    </span>
                    )}
                    
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button type="submit" className=" btn btn-primary-soft">
                      Send Massage
                    </button>
                  </div>
                </div>
              </form>
            </Box>
            </DialogContentText>
           
          </DialogContent>
        </Box>
      </Dialog>
      <CustomerLoginModal openLogin={loginOpen} closeModal={() => setLoginOpen(false)} />
    </main>
  );
};

export default PublicView(CategoryPage);

export async function getServerSideProps(context) {
  const { params } = context;
  
  const { category } = params;
  // console.log("Category List", category);
 

  return {
      props: {
        category,
      },
  };
}
