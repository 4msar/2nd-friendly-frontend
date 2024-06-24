import React from "react";
import user2 from "@/assets/img/user/user-4.jpg";
import Link from "next/link";
const UserSidebar = () => {
  return (
    <div className="" tabindex="-1" id="offcanvasSidebar">
      
      <div className="offcanvas-body p-3 p-xl-0">
        <div className="card h-100 w-100 border-right">
          <div className="d-sm-flex justify-content-sm-between align-items-center mb-2 border-bottom pb-2">
            <div className="d-flex align-items-center">
              <div className="avatar avatar-lg">
                <img
                  className="avatar-img rounded-circle"
                  src={user2.src}
                  alt="avatar"
                />
              </div>
              <div className="ms-2">
                <h5 className="mb-0">Arielle Norheim</h5>
                <p className="small mb-0 mb-sm-0 pb-0">arinorheim@hotmail.com</p>
              </div>
            </div>
          </div>
          <div className="list-group list-group-dark list-group-borderless pt-1 ps-0">
            <Link
              className="list-group-item mb-1 text-dark fw-normal bg-danger-soft-hover"
              href="/user/message"
            >
              <i className="bi bi-pencil-square fa-fw me-2"></i> Messages
            </Link>
            <Link
              className="list-group-item mb-1 text-dark fw-normal bg-danger-soft-hover"
              href="/user/reviews"
            >
              <i className="fas fa-star fa-m me-2"></i> Reviews
            </Link>
            <Link
              className="list-group-item mb-1 text-dark fw-normal bg-danger-soft-hover"
              href="/user/wishlist"
            >
              <i className="fa fa-check-square fa-m"></i> Wishlist
            </Link>
            <Link
              className="list-group-item mb-1 text-dark fw-normal bg-danger-soft-hover"
              href="/user/support"
            >
              <i className="fa fa-check-square fa-m"></i> Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSidebar;
