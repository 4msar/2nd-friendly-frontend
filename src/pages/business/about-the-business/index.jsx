import AboutBusiness from "@/components/Business/About";
import ActivityLogs from "@/components/Business/ActivityLog";
import DeleteAccount from "@/components/Business/DeleteAccount";
import ExternalApplication from "@/components/Business/ExternalApplication";
import Notification from "@/components/Business/Notification";
import PrivacySetting from "@/components/Business/PrivacySetting";
import SecuritySetting from "@/components/Business/SecuritySetting";
import BusinessView from "@/components/HOC/BusinessView";
import useToken from "@/hooks/useToken";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import { Box, Tab, Tabs } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import NotificationsIcon from "@mui/icons-material/Notifications";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import LockIcon from "@mui/icons-material/Lock";
import SecurityIcon from "@mui/icons-material/Security";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import DeleteIcon from "@mui/icons-material/Delete";

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const AboutTheBusiness = () => {
  const [value, setValue] = useState(0);
  const isAuthenticated = useToken();
  const router = useRouter();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BusinessView title="About the business">
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
                <h5 class="text-danger mb-2">About the Business</h5>
                <div class="d-flex justify-content-left">
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb breadcrumb-dots my-0 py-0">
                      <li class="breadcrumb-item">
                        <a href="index.php">Home</a>
                      </li>
                      <li class="breadcrumb-item">Account Information</li>
                      <li class="breadcrumb-item">About the Business</li>
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
                      label="About the business"
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
                {value === 0 && <AboutBusiness />}
                {value === 1 && <Notification />}
                {value === 2 && <ExternalApplication />}
                {value === 3 && <SecuritySetting />}
                {value === 4 && <PrivacySetting />}
                {value === 5 && <ActivityLogs />}
                {value === 6 && <DeleteAccount />}
              </div>
            </div>
          </div>
        </section>
      </main>
    </BusinessView>
  );
};

export default AboutTheBusiness;
