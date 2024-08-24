import { formatDate } from "@/helpers/functions";
import Link from "next/link";
import React from "react";

const CareersCard = ({item}) => {
  const jobLevel = (type) => {
    switch (type) { 
      case 1:
        return "Entry Level";
      case 2:
        return "Mid Level";
      default: 
        return "High Level"

    }
  }

  const jobDepartment = (dp) => {
    switch (dp) { 
      case 1:
        return "Marketing";
      case 2:
        return "Human Resource";
      default: 
        return "Account Officer"

    }
  }
  return (
    <div class={`p-4 bg-light position-relative border-start border-5 ${item.class} mb-2`}>
      <div class="mb-3 fw-bolder text-dark">
        <h5 class="fs-18px">{item.title}</h5>
      </div>
      <p class="text-truncate-2">
        {item.details}
      </p>
      <div class="row">
        <div class="col-3">
          <div class="d-flex align-items-center">
            <div class="me-3 w-40px h-40px rounded-2 bg-gray-dark-800 text-gray-600 d-md-flex d-none align-items-center justify-content-center">
              <i class="far fa-fw fa-map fa-lg"></i>
            </div>
            <div>
              <div class="fw-light text-gray-600 fs-12px line-h-12">
                Location:
              </div>
              <div class="fw-bold text-dark">{item?.address ?? "Kuala Lumpur"}</div>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="d-flex align-items-center">
            <div class="me-3 w-40px h-40px rounded-2 bg-gray-400 text-gray-600 d-md-flex d-none align-items-center justify-content-center">
              <i class="fa fa-fw fa-code-branch fa-lg"></i>
            </div>
            <div>
              <div class="fw-light text-gray-600 fs-12px line-h-12">
                Department:
              </div>
              <div class="fw-bold text-dark">{jobDepartment(item.department)}</div>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="d-flex align-items-center">
            <div class="me-3 w-40px h-40px rounded-2 bg-gray-400 text-gray-600 d-md-flex d-none align-items-center justify-content-center">
              <i class="fa fa-fw fa-briefcase fa-lg"></i>
            </div>
            <div>
              <div class="fw-light text-gray-600 fs-12px line-h-12">Level:</div>
              <div class="fw-bold text-dark">{jobLevel(item.job_level)}</div>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="d-flex align-items-center">
            <div class="me-3 w-40px h-40px rounded-2 bg-gray-400 text-gray-600 d-md-flex d-none align-items-center justify-content-center">
              <i class="fa fa-fw fa-briefcase fa-lg"></i>
            </div>
            <div>
              <div class="fw-light text-gray-600 fs-12px line-h-12">
                Deadline
              </div>
              <div class="fw-bold text-dark">{formatDate(item.expiration_date, "MMMM DD, YYYY")}</div>
            </div>
          </div>
        </div>
      </div>
      <Link href={`/careers/${item?.slug}`} class="stretched-link"></Link>
    </div>
  );
};

export default CareersCard;
