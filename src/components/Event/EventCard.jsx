import { IMAGE_URL } from "@/helpers/apiUrl";
import { formatDate, getEventStatus } from "@/helpers/functions";
import React from "react";

const EventCard = ({ item }) => {
  return (
    <div className="card bg-transparent" key={item.id}>
      <div className="position-relative">
        <img src={`${IMAGE_URL}/uploads/business-event/${item.image}`} className="card-img" alt="course image" />
        <div className="card-img-overlay d-flex align-items-start flex-column p-3">
          <div className="w-100 mb-auto d-flex justify-content-end">
            <a href="#" className="icon-sm bg-white rounded-2">
              <i className="fas fa-heart text-danger"></i>
            </a>
          </div>
          <div className="w-100 mt-auto">
            <a href="#" className="badge text-bg-white fs-6 rounded-1">
              <i
                className={`${
                  item.date === "Live"
                    ? "fas fa-circle text-success"
                    : "far fa-calendar-alt text-orange"
                }  me-2`}
              ></i>
              {getEventStatus(item.start_date_time)}
            </a>
          </div>
        </div>
      </div>
      <div className="card-body px-2">
        <h5 className="card-title">
          <a href={`/events/${item?.slug}`}>
           {item.title}
          </a>
        </h5>
        <p className="mb-0 text-truncate-2">
         {item.subtitle}
        </p>
      </div>
    </div>
  );
};

export default EventCard;
