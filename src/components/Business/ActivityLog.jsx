import React from "react";

const ActivityLogs = () => {
  return (
    <>
      <div class="content">
        <div class="-header">
          <h1 class="title fs-5" id="ActivityLog">
            Where you're signed in on
          </h1>
        </div>
        <div class="body pb-1">
          <div class="row border-bottom mb-2 py-1">
            <div class="col-1">
              <span>
                <i class="fas fa-desktop"></i>{" "}
              </span>
            </div>
            <div class="col-9 ps-0 mb-2">
              <div class="fw-bold mb-1 ps-2">Mac OS - New York, USA</div>
              <span class="d-inline-block fs-sm text-muted border-end pe-2 me-2">
                Chrome
              </span>
              <span class="fs-sm fw-bold text-success">Active Now</span>
            </div>
            <div class="col-2 ps-6"></div>
          </div>
          <div class="row border-bottom mb-2 py-1">
            <div class="col-1">
              <span>
                <i class="fas fa-mobile"></i>
              </span>
            </div>
            <div class="col-9 ps-0 mb-2">
              <div class="fw-bold mb-1 ps-1">Iphone 14 - Arizona, USA</div>
              <span class="d-inline-block fs-sm text-muted border-end pe-2 me-2">
                Mozilla
              </span>
              <span class="fs-sm fw-bold">16 Hours Ago</span>
            </div>
            <div class="col-1 pe-4">
              <span class="align-items-end">
                <div class="tooltip-toggle">
                  <a
                    href="#"
                    data-bs-toggle="dropdown"
                    data-popper-placement="right"
                    class="text-decoration-none text-dark text-opacity-100 btn btn-icon btn-light btn-sm rounded-circle shadow-sm arrow-none"
                    aria-expanded="false"
                  >
                    {" "}
                    <i class="fa fa-ellipsis-v"></i>
                  </a>
                  <div class="dropdown-menu" style="">
                    <a class="dropdown-item" href="#">
                      Not you?
                    </a>
                    <a class="dropdown-item" href="#">
                      <i class="fas fa-sign-out-alt text-danger bg-danger-soft-hover fa-fw me-2"></i>{" "}
                      Sign Out
                    </a>
                  </div>
                </div>
              </span>
            </div>
          </div>
          <div class="row border-bottom py-1">
            <div class="col-1">
              <span>
                <i class="fas fa-laptop"></i>
              </span>
            </div>
            <div class="col-9 ps-0 mb-2">
              <div class="fw-bold mb-1 ps-2">Windows 11 - Pharump, USA</div>
              <span class="d-inline-block fs-sm text-muted border-end pe-2 me-2">
                Microsoft Edge
              </span>
              <span class="fs-sm fw-bold">Feb 15, 2024 11:22:33 am</span>
            </div>
            <div class="col-1 pe-4">
              <span class="align-items-end">
                <div class="tooltip-toggle">
                  <a
                    href="#"
                    data-bs-toggle="dropdown"
                    class="text-decoration-none text-dark text-opacity-100 btn btn-icon btn-light btn-sm rounded-circle shadow-sm arrow-none"
                    aria-expanded="false"
                  >
                    {" "}
                    <i class="fa fa-ellipsis-v"></i>
                  </a>
                  <div class="dropdown-menu" style="">
                    <a class="dropdown-item" href="#">
                      Not you?
                    </a>
                    <a class="dropdown-item" href="#">
                      <i class="fas fa-sign-out-alt danger text-danger fa-fw me-2"></i>{" "}
                      Sign Out
                    </a>
                  </div>
                </div>
              </span>
            </div>
          </div>
          <div class="row border-bottom py-2">
            <div class="col-1">
              <span>
                <i class="fas fa-desktop"></i>
              </span>
            </div>
            <div class="col-9 ps-0 mb-2">
              <div class="fw-bold mb-1 ps-2">Windows 10 - Oxnard,USA</div>
              <span class="d-inline-block fs-sm text-muted border-end pe-2 me-2">
                Chrome
              </span>
              <span class="fs-sm fw-bold">July 15, 2024 11:22:33 am</span>
            </div>
            <div class="col-1 pe-4">
              <span class="align-items-end">
                <div class="tooltip-toggle">
                  <a
                    href="#"
                    data-bs-toggle="dropdown"
                    class="text-decoration-none text-dark text-opacity-100 btn btn-icon btn-light btn-sm rounded-circle shadow-sm arrow-none"
                    aria-expanded="false"
                  >
                    {" "}
                    <i class="fa fa-ellipsis-v"></i>
                  </a>
                  <div class="dropdown-menu" style="">
                    <a class="dropdown-item" href="#">
                      Not you?
                    </a>
                    <a class="dropdown-item" href="#">
                      <i class="fas fa-sign-out-alt danger text-danger fa-fw me-2"></i>{" "}
                      Sign Out
                    </a>
                  </div>
                </div>
              </span>
            </div>
          </div>
          <div class="col-12 d-grid gap-2 d-md-flex justify-content-md-end  my-3">
            <button class="btn btn-danger-soft" type="cancel">
              Sign out All Device
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivityLogs;
