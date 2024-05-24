import Link from "next/link";
import React from "react";

const UpcomingEventBox = ({item}) => {
  return (
    <div className="row g-3">
      <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
        <div className="overflow-hidden rounded-1">
          <img
            src={item.img?.src}
            className="rounded-1"
            alt="Card image"
          />
          <div className="bg-overlay bg-dark opacity-4"></div>
          <div className="card-img-overlay d-flex align-items-start p-2">
            <Link href="#" className="badge text-bg-danger">
              {item.category}
            </Link>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9">
        <h5 className="card-title mb-1 pb-0">
          <Link href="#">
            {item.title}
          </Link>
        </h5>
        <p className="mb-2 text-truncate-2 text-dark">
          {item.subtitle}
        </p>
        <ul className="p-0 m-0">
          <li style={{ listStyle: "none", marginBottom: "5px" }}>
            <i className="far fa-calendar-alt text-dark me-1 mb-1"></i> {item.date}
          </li>
          <li style={{ listStyle: "none" }}>
            <i className="fas fa-map-marker-alt text-dark mt-1"></i> {item.address}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UpcomingEventBox;
