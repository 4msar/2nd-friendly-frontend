import useSnackbar from "@/hooks/useSnackbar";
import useToken from "@/hooks/useToken";
import BusinessService from "@/services/BusinessService";
import { useEffect, useState } from "react";

const Notification = () => {
  const isAuthenticated = useToken();
  const [notificationSetting, setNotificationSetting] = useState({
    sendEmailReviews: false,
    sendEmailPost: false,
    sendEmailDisplayInformation: false,
    sendEmailReceiveMessage: false,
    receiveLeadsFromNearByJobs: false,
    statusOfBusinessInfoEdit: false,
    contributions: false
  });

  const snackbar = useSnackbar();

  const handleGetNotificationAll = () => {
    const res = BusinessService.settingsBusinessNotificationAll().then(
      (data) => {
        console.log(data.data);
        setNotificationSetting({
          sendEmailReviews: data.data.businessProfile.sendEmailReviews,
          sendEmailPost: data.data.businessProfile.sendEmailPost,
          sendEmailDisplayInformation:
            data.data.businessProfile.sendEmailDisplayInformation,
          sendEmailReceiveMessage:
            data.data.businessProfile.sendEmailReceiveMessage,
          receiveLeadsFromNearByJobs:
            data.data.businessProfile.receiveLeadsFromNearByJobs,
          statusOfBusinessInfoEdit:
            data.data.businessProfile.statusOfBusinessInfoEdit,
          contributions: data.data.businessProfile.contributions
        });
      }
    );
  };

  const handleUpdateNotification = (data) => {
    const payload = {
      ...notificationSetting,
      ...data
    };

    const res = BusinessService.settingsBusinessNotificationUpdate(
      payload
    ).then((d) => {
      if (d.data.status === "success") {
        snackbar(d.data.message, { variant: "success" });
        handleGetNotificationAll();
      }
    });
  };

  useEffect(() => {
    if (isAuthenticated) {
      handleGetNotificationAll();
    }
  }, [isAuthenticated]);

  console.log(notificationSetting);
  return (
    <div class="row">
      <div class="col-md-12 col-sm-12 ">
        <h6 class="mb-2">Your Business</h6>
        <div class="form-check form-switch form-check-md mb-2">
          <input
            class="form-check-input"
            type="checkbox"
            id="checkPrivacy1"
            checked={notificationSetting.sendEmailReviews}
            onClick={(e) => {
              handleUpdateNotification({
                sendEmailReviews: e.target.checked
              });
            }}
          />
          <label class="form-check-label" for="checkPrivacy1">
            Send me an email when someone reviews my business.
          </label>
        </div>
        <div class="form-check form-switch form-check-md mb-2">
          <input
            class="form-check-input"
            type="checkbox"
            id="checkPrivacy2"
            checked={notificationSetting.sendEmailPost}
            onClick={(e) => {
              handleUpdateNotification({
                sendEmailPost: e.target.checked
              });
            }}
          />
          <label class="form-check-label" for="checkPrivacy2">
            Send me an email when someone posts a question about my business.
          </label>
        </div>
        <div class="form-check form-switch form-check-md mb-2">
          <input
            class="form-check-input"
            type="checkbox"
            id="checkPrivacy3"
            checked={notificationSetting.sendEmailDisplayInformation}
            onClick={(e) => {
              handleUpdateNotification({
                sendEmailDisplayInformation: e.target.checked
              });
            }}
          />
          <label class="form-check-label" for="checkPrivacy3">
            Send me an email when displayed information about my business is
            changed.
          </label>
        </div>
        <h6 class="mb-2 mt-4">Messaging and Leads</h6>
        <div class="form-check form-switch form-check-md mb-2">
          <input
            class="form-check-input"
            type="checkbox"
            id="checkPrivacy4"
            checked={notificationSetting.sendEmailReceiveMessage}
            onClick={(e) => {
              handleUpdateNotification({
                sendEmailReceiveMessage: e.target.checked
              });
            }}
          />
          <label class="form-check-label" for="checkPrivacy4">
            {" "}
            Send me an email when I receive message leads or direct messages.
          </label>
        </div>
        <div class="form-check form-switch form-check-md mb-2">
          <input
            class="form-check-input"
            type="checkbox"
            id="checkPrivacy5"
            checked={notificationSetting.receiveLeadsFromNearByJobs}
            onClick={(e) => {
              handleUpdateNotification({
                receiveLeadsFromNearByJobs: e.target.checked
              });
            }}
          />
          <label class="form-check-label" for="checkPrivacy5">
            {" "}
            Send me an email when I receive leads from Nearby Jobs.
          </label>
        </div>
        <h6 class="mb-2 mt-4">2nd A Friendly Account</h6>
        <div class="form-check form-switch form-check-md mb-2">
          <input
            class="form-check-input"
            type="checkbox"
            id="checkPrivacy6"
            checked={notificationSetting.statusOfBusinessInfoEdit}
            onClick={(e) => {
              handleUpdateNotification({
                statusOfBusinessInfoEdit: e.target.checked
              });
            }}
          />
          <label class="form-check-label" for="checkPrivacy6">
            Status of your business info edits
          </label>
        </div>
        <div class="form-check form-switch form-check-md mb-2">
          <input
            class="form-check-input"
            type="checkbox"
            id="checkPrivacy7"
            checked={notificationSetting.contributions}
            onClick={(e) => {
              handleUpdateNotification({
                contributions: e.target.checked
              });
            }}
          />
          <label class="form-check-label" for="checkPrivacy7">
            Contributions
          </label>
        </div>
        {/* <div class="form-check form-switch form-check-md mb-2">
          <input
            class="form-check-input"
            type="checkbox"
            id="checkPrivacy8"
            checked
          />
          <label class="form-check-label" for="checkPrivacy8">
            {" "}
            Send me emails with information about how my business is doing on
            2nd A Friendly.
          </label>
        </div>
        <div class="form-check form-switch form-check-md mb-2">
          <input class="form-check-input" type="checkbox" id="checkPrivacy9" />
          <label class="form-check-label" for="checkPrivacy9">
            Send me emails about 2nd A Friendly products and services for
            business owners.
          </label>
        </div>
        <div class="form-check form-switch form-check-md mb-2">
          <input
            class="form-check-input"
            type="checkbox"
            id="checkPrivacy10"
            checked
          />
          <label class="form-check-label" for="checkPrivacy10">
            Allow a 2nd A Friendly advertising specialist to send me email.
          </label>
        </div>
        <div class="form-check form-switch form-check-md mb-2">
          <input class="form-check-input" type="checkbox" id="checkPrivacy11" />
          <label class="form-check-label" for="checkPrivacy11">
            {" "}
            Send me an email when someone purchases a Deal or gift certificate.
          </label>
        </div>
        <div class="form-check form-switch form-check-md mb-2">
          <input class="form-check-input" type="checkbox" id="checkPrivacy12" />
          <label class="form-check-label" for="checkPrivacy12">
            Send me emails with tips on 2nd A Friendly products I've purchased.
          </label>
        </div>
        <div class="form-check form-switch form-check-md mb-2">
          <input class="form-check-input" type="checkbox" id="checkPrivacy13" />
          <label class="form-check-label" for="checkPrivacy13">
            Allow 2nd A Friendly to notify me about my business’s Instagram
            posts.
          </label>
        </div> */}
      </div>
    </div>
  );
};

export default Notification;
