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
                <div class="d-sm-flex justify-content-sm-between align-items-center mb-2 border-bottom pb-2">
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
                      <p class="small mb-0 mb-sm-0 pb-0">
                        arinorheim@hotmail.com
                      </p>
                    </div>
                  </div>
                </div>
                <Box sx={{ flexGrow: 1, display: "flex" }}>
                  <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{
                      borderRight: 1,
                      borderColor: "divider",
                      textAlign: "left",
                    }}
                  >
                    <Tab
                      icon={<InfoIcon />}
                      iconPosition="start"
                      label="Account Information"
                    />
                    <Tab
                      icon={<NotificationsIcon />}
                      iconPosition="start"
                      label="Notification"
                    />
                    <Tab
                      icon={<OpenInNewIcon />}
                      iconPosition="start"
                      label="External Application"
                    />
                    <Tab
                      icon={<LockIcon />}
                      iconPosition="start"
                      label="Security Settings"
                    />
                    <Tab
                      icon={<SecurityIcon />}
                      iconPosition="start"
                      label="Privacy Settings"
                    />
                    <Tab
                      icon={<ManageAccountsIcon />}
                      iconPosition="start"
                      label="Activity Logs"
                    />
                    <Tab
                      icon={<DeleteIcon />}
                      iconPosition="start"
                      label="Delete Account"
                    />
                  </Tabs>
                </Box>
              </div>
              <div class="col-xl-9">
                {/* {handleComponent(value)} */}
                {value === 0 && <AboutUser />}
                {value === 1 && <UserNotification />}
                {value === 2 && <External />}
                {value === 3 && <UserSecurity />}
                {value === 4 && <UserPrivacy />}
                {value === 5 && <ActivityLogs />}
                {value === 6 && <DeleteAccount />}
              </div>
            </div>
          </div>
        </section>
      </main>
    </UserView>
  );
};

export default AccountInfo;
