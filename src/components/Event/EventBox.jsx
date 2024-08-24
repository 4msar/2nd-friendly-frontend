import { IMAGE_URL } from "@/helpers/apiUrl";
import { getEventStatus } from "@/helpers/functions";
import Link from "next/link";
import React from "react";

const EventBox = ({item}) => {
  return (
    <div className="card bg-transparent">
      <div className="position-relative">
        <img
          src={`${IMAGE_URL}/uploads/site-event/${item.image}`}
          className="rounded-1"
          alt="course image"
        />
        {/* <!-- Overlay --> */}
        <div className="card-img-overlay d-flex align-items-start flex-column p-3">
          {/* <!-- Card overlay Top --> */}
          <div className="w-100 mb-auto d-flex justify-content-end">
            {/* <!-- Favorite icon --> */}
            <a href="#" className="icon-sm bg-white rounded-2">
              <i className="far fa-heart text-danger"></i>
            </a>
          </div>
          {/* <!-- Card overlay bottom --> */}
          <div className="w-100 mt-auto">
            {/* <!-- Category --> */}
            <a href="#" className="badge text-bg-white fs-6 rounded-1">
            <i
                className={`${
                  item?.date === "Live"
                    ? "fas fa-circle text-success"
                    : "far fa-calendar-alt text-orange"
                }  me-2`}
              ></i>{getEventStatus(item?.start_date_time)}
            </a>
          </div>
        </div>
      </div>
      {/* <!-- Card body --> */}
      <div className="card-body px-0 pt-2 pb-0">
        <h5 className="card-title">
          <Link href="#">
           {item?.title}
          </Link>
        </h5>
        <i className="bi bi-geo-alt-fill"></i>{" "}
        <Link href="#">{item?.address}</Link>
        <p className="mb-0 text-truncate-2">
          {item?.subtitle}
        </p>
      </div>
    </div>
  );
};

export default EventBox;
