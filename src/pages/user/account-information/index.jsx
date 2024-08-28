import UserView from "@/components/HOC/UserView";
import React, { useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import NotificationsIcon from "@mui/icons-material/Notifications";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import LockIcon from "@mui/icons-material/Lock";
import SecurityIcon from "@mui/icons-material/Security";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Tab, Tabs } from "@mui/material";
import useToken from "@/hooks/useToken";
import { useRouter } from "next/router";
import ActivityLogs from "@/components/Business/ActivityLog";
import DeleteAccount from "@/components/Business/DeleteAccount";
import AboutUser from "@/components/User/AccountInformation";
import UserNotification from "@/components/User/UserNotification";
import External from "@/components/User/ExternalApplication";
import UserSecurity from "@/components/User/UserSecurity";
import UserPrivacy from "@/components/User/UserPrivacy";
import Link from "next/link";
import UserAccountSidebar from "@/components/User/AccountSidebar";

const AccountInfo = () => {
  const [value, setValue] = useState(0);
  const isAuthenticated = useToken();
  const router = useRouter();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <UserView title="Account Information">
      <main>
        <section class="p-0 m-0">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="d-flex justify-content-between align-items-center">
                  <button
                    class="btn btn-link d-xl-none mb-0 float-start px-0 mt-2 pb-0"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasSidebar"
                    aria-controls="offcanvasSidebar"
                  >
                    <i class="fas fa-sliders-h"></i> Business Information
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="py-3 bg-light mb-4">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <h5 class="text-danger mb-2">About the User</h5>
                <div class="d-flex justify-content-left">
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb breadcrumb-dots my-0 py-0">
                      <li class="breadcrumb-item">
                        <Link href="/">Home</Link>
                      </li>
                      <li class="breadcrumb-item">Account Information</li>
                      <li class="breadcrumb-item">About the User</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="pt-1 pb-5">
          <div class="container">
            <div class="row">
              <div class="col-xl-3">
                
                <UserAccountSidebar />
              </div>
              <div class="col-xl-9">
                {/* {handleComponent(value)} */}
                <AboutUser />
                
              </div>
            </div>
          </div>
        </section>
      </main>
    </UserView>
  );
};

export default AccountInfo;
