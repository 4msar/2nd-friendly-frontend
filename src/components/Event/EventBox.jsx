import React from "react";

const EventBox = ({item}) => {
  return (
    <div class="card bg-transparent">
      <div class="position-relative">
        <img
          src={item.img.src}
          class="rounded-1"
          alt="course image"
        />
        {/* <!-- Overlay --> */}
        <div class="card-img-overlay d-flex align-items-start flex-column p-3">
          {/* <!-- Card overlay Top --> */}
          <div class="w-100 mb-auto d-flex justify-content-end">
            {/* <!-- Favorite icon --> */}
            <a href="#" class="icon-sm bg-white rounded-2">
              <i class="far fa-heart text-danger"></i>
            </a>
          </div>
          {/* <!-- Card overlay bottom --> */}
          <div class="w-100 mt-auto">
            {/* <!-- Category --> */}
            <a href="#" class="badge text-bg-white fs-6 rounded-1">
            <i
                className={`${
                  item.date === "Live"
                    ? "fas fa-circle text-success"
                    : "far fa-calendar-alt text-orange"
                }  me-2`}
              ></i>{item.date}
            </a>
          </div>
        </div>
      </div>
      {/* <!-- Card body --> */}
      <div class="card-body px-0 pt-2 pb-0">
        <h5 class="card-title">
          <a href="event-detail.php">
           {item.title}
          </a>
        </h5>
        <i class="bi bi-geo-alt-fill"></i>{" "}
        <a href="event-detail.php">{item.address}</a>
        <p class="mb-0 text-truncate-2">
          {item.subtitle}
        </p>
      </div>
    </div>
  );
};

export default EventBox;
