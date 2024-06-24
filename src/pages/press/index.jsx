import PublicView from "@/components/HOC/PublicView";
import React from "react";

const Press = () => {
  return (
    <main>
      <section className="pt-4 pb-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-dots my-0 py-0">
                  <li className="breadcrumb-item">
                    <a href="/index">Home</a>
                  </li>
                  <li className="breadcrumb-item">Community</li>
                  <li className="breadcrumb-item">Press</li>
                </ol>
              </nav>
              <h4 className="fw-normal mt-3">Press</h4>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-0">
        <div className="container">
          <form className="mb-3">
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
          <div className="row g-4 justify-content-center">
            <div className="col-lg-10 col-xxl-6">
              <div className="card rounded-1 overflow-hidden shadow">
                <div className="row g-0">
                  {/* <!-- Image --> */}
                  <div className="col-md-3">
                    <div className="overflow-hidden">
                      <img
                        src="assets/img/event/6.jpg"
                        className="rounded-start"
                        alt="course image"
                      />
                      <div className="bg-overlay bg-dark opacity-4"></div>
                      <div className="card-img-overlay d-flex align-items-start p-3">
                        <a href="/press-detail" className="badge text-bg-orange">
                          Food & Drink
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="card-body pt-3 pb-0">
                      <div className="d-flex justify-content-between mb-0">
                        <h5 className="card-title mb-0 press_title">
                          <a href="/press-detail">
                            Yelp's Top 100 Romantic Restaurants for Valentine's
                            Day Dinner in 2024
                          </a>
                        </h5>
                      </div>
                      <ul className="list-inline mt-2 mb-0 pb-0">
                        <li className="list-inline-item h6 fw-light mb-1 mb-sm-0">
                          <i className="far fa-calendar text-dark me-2"></i>Sunday
                          May 5, 2024
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-10 col-xxl-6">
              <div className="card rounded-1 overflow-hidden shadow">
                <div className="row g-0">
                  {/* <!-- Image --> */}
                  <div className="col-md-3">
                    <div className="overflow-hidden">
                      <img
                        src="assets/img/event/6.jpg"
                        className="rounded-start"
                        alt="course image"
                      />
                      <div className="bg-overlay bg-dark opacity-4"></div>
                      <div className="card-img-overlay d-flex align-items-start p-3">
                        <a href="/press-detail" className="badge text-bg-orange">
                          Food & Drink
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="card-body pt-3 pb-0">
                      <div className="d-flex justify-content-between mb-0">
                        <h5 className="card-title mb-0 press_title">
                          <a href="/press-detail">
                            Yelp's Top 100 Romantic Restaurants for Valentine's
                            Day Dinner in 2024
                          </a>
                        </h5>
                      </div>
                      <ul className="list-inline mt-2 mb-0 pb-0">
                        <li className="list-inline-item h6 fw-light mb-1 mb-sm-0">
                          <i className="far fa-calendar text-dark me-2"></i>Sunday
                          May 5, 2024
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-10 col-xxl-6">
              <div className="card rounded-1 overflow-hidden shadow">
                <div className="row g-0">
                  {/* <!-- Image --> */}
                  <div className="col-md-3">
                    <div className="overflow-hidden">
                      <img
                        src="assets/img/event/7.jpg"
                        className="rounded-start"
                        alt="course image"
                      />
                      <div className="bg-overlay bg-dark opacity-4"></div>
                      <div className="card-img-overlay d-flex align-items-start p-3">
                        <a
                          href="/press-detail"
                          className="badge text-bg-warning"
                        >
                          House Hold
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="card-body pt-3 pb-0">
                      <div className="d-flex justify-content-between mb-0">
                        <h5 className="card-title mb-0 press_title">
                          <a href="/press-detail">
                            2nd A Friendly Celebrates Black History Month: Names
                            Top 25 Hot & New Black-Owned Restaurants
                          </a>
                        </h5>
                      </div>
                      <ul className="list-inline mt-2 mb-0 pb-0">
                        <li className="list-inline-item h6 fw-light mb-1 mb-sm-0">
                          <i className="far fa-calendar text-dark me-2"></i>Satarday
                          July 5, 2023
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-10 col-xxl-6">
              <div className="card rounded-1 overflow-hidden shadow">
                <div className="row g-0">
                  {/* <!-- Image --> */}
                  <div className="col-md-3">
                    <div className="overflow-hidden">
                      <img
                        src="assets/img/event/8.jpg"
                        className="rounded-start"
                        alt="course image"
                      />
                      <div className="bg-overlay bg-dark opacity-4"></div>
                      <div className="card-img-overlay d-flex align-items-start p-3">
                        <a href="/press-detail" className="badge text-bg-purple">
                          Grocery Store
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="card-body pt-3 pb-0">
                      <div className="d-flex justify-content-between mb-0">
                        <h5 className="card-title mb-0 press_title">
                          <a href="/press-detail">
                            Investments in Product-Led Strategy Drove Yelp’s
                            Strong 2023 Results
                          </a>
                        </h5>
                      </div>
                      <ul className="list-inline mt-2 mb-0 pb-0">
                        <li className="list-inline-item h6 fw-light mb-1 mb-sm-0">
                          <i className="far fa-calendar text-dark me-2"></i>Sunday
                          March 5, 2024
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-10 col-xxl-6">
              <div className="card rounded-1 overflow-hidden shadow">
                <div className="row g-0">
                  {/* <!-- Image --> */}
                  <div className="col-md-3">
                    <div className="overflow-hidden">
                      <img
                        src="assets/img/event/9.jpg"
                        className="rounded-start"
                        alt="course image"
                      />
                      <div className="bg-overlay bg-dark opacity-4"></div>
                      <div className="card-img-overlay d-flex align-items-start p-3">
                        <a href="/press-detail" className="badge text-bg-danger">
                          Clothing Store
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="card-body pt-3 pb-0">
                      <div className="d-flex justify-content-between mb-0">
                        <h5 className="card-title mb-0 press_title">
                          <a href="/press-detail">
                            Research finds 2nd A Friendly's moderation practices
                            mitigate misinformation and build
                          </a>
                        </h5>
                      </div>
                      <ul className="list-inline mt-2 mb-0 pb-0">
                        <li className="list-inline-item h6 fw-light mb-1 mb-sm-0">
                          <i className="far fa-calendar text-dark me-2"></i> Monday
                          March 25, 2024
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-10 col-xxl-6">
              <div className="card rounded-1 overflow-hidden shadow">
                <div className="row g-0">
                  {/* <!-- Image --> */}
                  <div className="col-md-3">
                    <div className="overflow-hidden">
                      <img
                        src="assets/img/event/10.jpg"
                        className="rounded-start"
                        alt="course image"
                      />
                      <div className="bg-overlay bg-dark opacity-4"></div>
                      <div className="card-img-overlay d-flex align-items-start p-3">
                        <a
                          href="/press-detail"
                          className="badge text-bg-primary"
                        >
                          Firearms
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="card-body pt-3 pb-0">
                      <div className="d-flex justify-content-between mb-0">
                        <h5 className="card-title mb-0 press_title">
                          <a href="/press-detail">
                            2nd A friendly Drove Record Net Revenue in the Third
                            Quarter 2023 as it Delivered More{" "}
                          </a>
                        </h5>
                      </div>
                      <ul className="list-inline mt-2 mb-0 pb-0">
                        <li className="list-inline-item h6 fw-light mb-1 mb-sm-0">
                          <i className="far fa-calendar text-dark me-2"></i>
                          Wednesday March 5, 2024
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Course list END -->
            <!-- Pagination START --> */}
          <div className="col-12">
            <nav
              className="mt-4 d-flex justify-content-center"
              aria-label="navigation"
            >
              <ul className="pagination pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
                <li className="page-item mb-0">
                  <a className="page-link" href="/press-detail" tabindex="-1">
                    <i className="fas fa-angle-double-left"></i>
                  </a>
                </li>
                <li className="page-item mb-0">
                  <a className="page-link" href="/press-detail">
                    1
                  </a>
                </li>
                <li className="page-item mb-0 active">
                  <a className="page-link" href="/press-detail">
                    2
                  </a>
                </li>
                <li className="page-item mb-0">
                  <a className="page-link" href="/press-detail">
                    ..
                  </a>
                </li>
                <li className="page-item mb-0">
                  <a className="page-link" href="/press-detail">
                    6
                  </a>
                </li>
                <li className="page-item mb-0">
                  <a className="page-link" href="/press-detail">
                    <i className="fas fa-angle-double-right"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PublicView(Press, "Press");
