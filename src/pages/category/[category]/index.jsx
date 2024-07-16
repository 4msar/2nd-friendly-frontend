import CategoryItemBox from "@/components/Category/CategoryItemBox";
import CategorySidebar from "@/components/Category/CategorySidebar";
import { category_items } from "@/components/dummy_data/data";
import PublicView from "@/components/HOC/PublicView";
import Head from "next/head";
import { useRouter } from "next/router";

const CategoryPage = () => {
  const route = useRouter();
  const items = category_items;
  const { query } = route;

  return (
    <main>
      <Head>
        <title>{query.category} | 2nd A Friendly</title>
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
                <li className="breadcrumb-item">{query.category}</li>
              </ol>
              <h4 className="fs-5 pb-0 mb-0 fw-normal">{query.category}</h4>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-1 pb-5">
        <div className="container">
          <div className="row">
            <CategorySidebar />
            <div className="col-xl-9 col-xxl-9">
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
              <h5 className="mt-0 mb-0">Sponsored Results</h5>
              <p className="mt-0 mb-1">
                Business owners paid for these ads. For more information visit{" "}
                <a href="for-business-owner.php">
                  {" "}
                  2nd A Friendly for Business.
                </a>
              </p>
              <hr className="mt-0" />
              <div className="card mb-4">
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
                              <a href="listing-detail.php">
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
                            <a
                              href=""
                              data-bs-toggle="modal"
                              data-bs-target="#SendMassage"
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
              </div>
              <div className="card mb-4">
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
                              <a href="listing-detail.php">
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
                            <a
                              href=""
                              data-bs-toggle="modal"
                              data-bs-target="#SendMassage"
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
              </div>
              <h5 className="mt-0 mb-0">Regular Results</h5>
              <p className="mt-0 mb-1">
                Business owners paid for these ads. For more information visit{" "}
                <a href="for-business-owner.php">
                  {" "}
                  2nd A Friendly for Business.
                </a>
              </p>
              <hr className="mt-0" />
              {items.length > 0 &&
                items.map((item, index) => (
                  <CategoryItemBox item={item} index={index} />
                ))}
            </div>
            <div className="row g-3">
              <div className="col-12">
                <nav
                  className="mt-4 d-flex justify-content-center"
                  aria-label="navigation"
                >
                  <ul className="pagination pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
                    <li className="page-item mb-0">
                      <a className="page-link" href="#" tabindex="-1">
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
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PublicView(CategoryPage);
