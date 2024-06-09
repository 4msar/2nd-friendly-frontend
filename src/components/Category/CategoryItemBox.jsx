import React from "react";

const CategoryItemBox = ({ item, index }) => {
  return (
    <div className="card mb-4">
      <div className="row g-3">
        <div className="col-md-4">
          <div
            id={`carouselExampleFade${index}`}
            className="carousel slide carousel-fade"
          >
            <div className="carousel-inner">
                {item.sliders.length > 0 && item.sliders.map((image, i) => (
                    <div className={`carousel-item ${i === 0 ? 'active' : ''}`}>
                        <img
                        src={image.src}
                        className="d-block w-100 rounded-3 "
                        alt="..."
                        />
                    </div>
                ))}
              
              
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target={`#carouselExampleFade${index}`}
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
              data-bs-target={`#carouselExampleFade${index}`}
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
                    src={item.avatar.src}
                    alt="avatar"
                  />
                </div>
                <div className="ms-2">
                  <h5 className="mb-0">
                    <a href="listing-detail.php">Savory Sensations Sanctuary</a>
                  </h5>
                  <p className="small mb-0 mb-sm-0 pb-0">
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>{" "}
                    <strong>5.0</strong>
                    (1.5k Reviews) .{" "}
                    <span className="fw-bold text-danger">Closed</span>
                    until 11:30
                  </p>
                </div>
              </div>
            </div>
            <ul className="list-inline mb-1">
              <li className="list-inline-item fw-light">
                <i className="fa fa-envelope text-dark me-1"></i>5 Years in
                business
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
              This place never fails. Make sure to arrive early because by 7pm
              wait times are really long. The staff is very attentive and the
              food is great. Music helps...
            </p>
            <ul className="list-inline mb-1">
                {item.tags.length > 0 && item.tags.map((tag) => (
                    <li className="list-inline-item fw-light">
                        <a
                        className="btn btn-light btn-sm py-0 px-1 btn-secondary-soft"
                        href="#"
                        >
                        {tag.name}
                        </a>
                    </li>
                ))}
             
             
            </ul>
            <ul className="list-inline mb-1">
              <li className="list-inline-item fw-light">
                <i className="fa fa-check text-success me-1"></i>
                Accepts Credit Cards
              </li>
              <li className="list-inline-item fw-light">
                <i className="fa fa-times text-danger me-1"></i>Offers Takeout
              </li>
              <li className="list-inline-item fw-light">
                <i className="fa fa-check text-success me-1"></i>
                Offers Catering
              </li>
              <li className="list-inline-item fw-light">
                <i className="fa fa-times text-danger me-1"></i>Offers Takeout
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
                  <a href="" data-bs-toggle="modal" data-bs-target="#joinlater">
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
  );
};

export default CategoryItemBox;
