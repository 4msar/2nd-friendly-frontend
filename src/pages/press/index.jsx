import PublicView from "@/components/HOC/PublicView";
import { IMAGE_URL } from "@/helpers/apiUrl";
import { formatDate } from "@/helpers/functions";
import PublicService from "@/services/PublicService";
import React, { useEffect, useState } from "react";

const Press = () => {
  const [pressData, setPressData] = useState();

  const handleGetPress = () => {
    const res = PublicService.allPress().then((data) => {
      console.log(data);
      setPressData(data.data.allRecord);
    });
  };

  useEffect(() => {
    handleGetPress();
  }, []);
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
            {pressData?.length > 0 &&
              pressData.map((press) => (
                <div className="col-lg-10 col-xxl-6">
                  <div className="card rounded-1 overflow-hidden shadow">
                    <div className="row g-0">
                      {/* <!-- Image --> */}
                      <div className="col-md-3">
                        <div className="overflow-hidden">
                          <img
                            style={{height: "117px", width: "100%"}}
                            src={`${IMAGE_URL}/uploads/site-press/${press.image}`}
                            className="rounded-start"
                            alt="course image"
                          />
                          <div className="bg-overlay bg-dark opacity-4"></div>
                          <div className="card-img-overlay d-flex align-items-start p-3">
                            <a
                              href={`/press/${press?.slug}`}
                              className="badge text-bg-orange"
                            >
                              {press?.sitePressCategory?.name}
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-9">
                        <div className="card-body pt-3 pb-0">
                          <div className="d-flex justify-content-between mb-0">
                            <h5 className="card-title mb-0 press_title">
                              <a href={`/press/${press?.slug}`}>
                                {press?.title}
                              </a>
                            </h5>
                          </div>
                          <ul className="list-inline mt-2 mb-0 pb-0">
                            <li className="list-inline-item h6 fw-light mb-1 mb-sm-0">
                              <i className="far fa-calendar text-dark me-2"></i>
                              {/* Sunday May 5, 2024 */}
                              {formatDate(press?.createdAt, "MMMM DD, YYYY")}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          {/* <!-- Course list END -->
            <!-- Pagination START --> */}
          {/* <div className="col-12">
            <nav
              className="mt-4 d-flex justify-content-center"
              aria-label="navigation"
            >
              <ul className="pagination pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
                <li className="page-item mb-0">
                  <a className="page-link" href={`/press/${press?.slug}`} tabindex="-1">
                    <i className="fas fa-angle-double-left"></i>
                  </a>
                </li>
                <li className="page-item mb-0">
                  <a className="page-link" href={`/press/${press?.slug}`}>
                    1
                  </a>
                </li>
                <li className="page-item mb-0 active">
                  <a className="page-link" href={`/press/${press?.slug}`}>
                    2
                  </a>
                </li>
                <li className="page-item mb-0">
                  <a className="page-link" href={`/press/${press?.slug}`}>
                    ..
                  </a>
                </li>
                <li className="page-item mb-0">
                  <a className="page-link" href={`/press/${press?.slug}`}>
                    6
                  </a>
                </li>
                <li className="page-item mb-0">
                  <a className="page-link" href={`/press/${press?.slug}`}>
                    <i className="fas fa-angle-double-right"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div> */}
        </div>
      </section>
    </main>
  );
};

export default PublicView(Press, "Press");
