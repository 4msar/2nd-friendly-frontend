import React from "react";

const SidebarInformation = () => {
  return (
    <div className=""  id="offcanvasSidebar">
      {/* <!-- Offcanvas header --> */}
      
      {/* <!-- Offcanvas body --> */}
      <div className="offcanvas-body p-3 p-xl-0">
        <div className="card h-100 w-100">
          <div className="align-items-center border-bottom mb-2">
            <h5 className="mb-2 clearfix">
              Redwood Solutions Co.{" "}
              <a href="#" className="fw-bold text-primary" target="_blank">
                <i className="fas fa-sm fa-fw fa-link"></i>
              </a>
            </h5>
            <p className="small mb-0 mb-sm-0 pb-2">
              321 N MaClay Ave #d, San Fernando, CA, United States, California
            </p>
          </div>
          <div className="list-group list-group-dark list-group-borderless pt-1 ps-0">
            <a
              className="list-group-item mb-1 text-dark fw-normal bg-danger-soft-hover"
              href="/business/categories"
            >
              <i className="fas fa-network-wired"></i> Categories
            </a>
            <a
              className="list-group-item mb-1 text-dark fw-normal bg-danger-soft-hover"
              href="/business/amenities"
            >
              <i className="fas fa-bullhorn"></i> Amenities
            </a>
            <a
              className="list-group-item mb-1 text-dark fw-normal bg-danger-soft-hover bg-danger-soft-focus"
              href="/business/hours-of-operation"
            >
              <i className="fas fa-business-time"></i> Hours of Operation
            </a>
            <a
              className="list-group-item mb-1 text-dark fw-normal bg-danger-soft-hover"
              href="/business/album"
            >
              <i className="fas fa-camera-retro"></i> Photos
            </a>
            <a
              className="list-group-item mb-1 text-dark fw-normal bg-danger-soft-hover"
              href="/business/videos"
            >
              <i className="fas fa-file-video"></i> Videos
            </a>
            <a
              className="list-group-item mb-1 text-dark fw-normal bg-danger-soft-hover"
              href="/business/reviews"
            >
              <i className="fas fa-star"></i> Reviews
            </a>
            <a
              className="list-group-item mb-1 text-dark fw-normal bg-danger-soft-hover"
              href="/business/message"
            >
              <i className="fas fa-envelope-open"></i> Messages
            </a>
            <a
              className="list-group-item mb-1 text-dark fw-normal bg-danger-soft-hover"
              href="/business/events"
            >
              <i className="fab fa-envira"></i> Events
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarInformation;
