import { useBusinessAboutStore } from "@/store";
import React from "react";

const AccountSidebar = () => {
    const userProfile = useBusinessAboutStore((state) => state.businessProfile);
  return (
    <div class="" tabindex="-1" id="offcanvasSidebar">
      
      <div class="offcanvas-body p-3 p-xl-0">
        <div class="card h-100 w-100 border-right">
          <div class="d-sm-flex justify-content-sm-between align-items-center mb-2 pt-0 pb-2 border-bottom">
            <div class="d-flex align-items-center">
              <div class="avatar avatar-lg">
                <img
                  class="avatar-img rounded-circle"
                  src="../assets/img/user/arielle.jpg"
                  alt="avatar"
                />
              </div>
              <div class="ms-2">
                <h5 class="mb-0">Arielle Norheim</h5>
                <p class="small mb-0 mb-sm-0 pb-0">arinorheim@hotmail.com</p>
              </div>
            </div>
          </div>
          <div class="list-group list-group-dark list-group-borderless pt-1 ps-0">
            <a
              class="list-group-item mb-1 text-dark fw-normal bg-danger-soft-hover"
              href="/business/account-information"
            >
              <i class="bi bi-pencil-square fa-fw me-2"></i>Account Information
            </a>
            <a
              class="list-group-item mb-1 text-dark fw-normal bg-danger-soft-hover"
              href="/business/notifications"
            >
              <i class="fas fa-bell fa-m"></i>Notifications
            </a>
            <a
              class="list-group-item mb-1 text-dark fw-normal bg-danger-soft-hover"
              href="/business/external-application"
            >
              <i class="bi bi-card-checklist fa-fw me-2"></i> External
              Applications
            </a>
            <a
              class="list-group-item mb-1 text-dark fw-normal bg-danger-soft-hover"
              href="/business/security-setting"
            >
              <i class="fas fa-m fa-fw me-10px fa-lock"></i> Security Settings
            </a>
            <a
              class="list-group-item mb-1 text-dark fw-normal bg-danger-soft-hover"
              href="/business/privacy-setting"
            >
              <i class="fas fa-cog fa-m"></i>Privacy Settings
            </a>
            <a
              class="list-group-item mb-1 text-dark fw-normal bg-danger-soft-hover"
              href="/business/delete-account"
            >
              <i class="fas fa-trash fa-m me-2"></i>Delete Profile
            </a>
            <a
              class="list-group-item mb-1 text-dark fw-normal bg-danger-soft-hover"
              href="/business/activity-log"
            >
              <i class="fas fa-laptop fa-m me-2"></i>Activity Logs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSidebar;
