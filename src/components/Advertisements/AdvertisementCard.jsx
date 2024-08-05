import Link from "next/link";
import React from "react";

const AdvertisementCard = ({item, index}) => {
  return (
    <div className="card shadow p-0 rounded-2">
      <div className="row g-0">
        <div className="col-md-4">
          <div id={`carouselExampleFade${index}`} className="carousel slide carousel-fade">
            <div className="carousel-inner">
                {item.images.length > 0 && item.images.map((item, i) => (
                     <div className={`carousel-item ${item.className}`} key={i}>
                     <img
                       src={item.img.src}
                       className="d-block w-100 rounded-start-2"
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
          <div className="card-body py-2 px-2">
            <div className="d-sm-flex justify-content-sm-between mb-2 mb-sm-2">
              <div>
                <h5 className="card-title mb-0 fw-normal mb-1">
                  <Link href="listing-detail">
                    {item.title}
                  </Link>
                </h5>
                <p className="small mb-0 mb-sm-0 pb-0">
                  <i className="fas fa-star text-warning"></i>
                  <i className="fas fa-star text-warning"></i>
                  <i className="fas fa-star text-warning"></i>
                  <i className="fas fa-star text-warning"></i>
                  <i className="fas fa-star text-warning"></i> <strong>5.0</strong>{" "}
                  ({item.starCount} Reviews) .{" "}
                  <span className="fw-bold text-danger">{item.status}</span> until {item.time} PM
                </p>
              </div>
            </div>
            <p
              className="text-truncate-1 pb-2 mb-0"
              style={{ fontSize: "14px", lineHeight: "18px" }}
            >
              {item.description}
            </p>
            <p className="small fst-italic mb-0 pb-0">
              {item.address}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisementCard;
