import useSnackbar from "@/hooks/useSnackbar";
import useToken from "@/hooks/useToken";
import CustomerService from "@/services/CustomerService";
import { useEffect, useState } from "react";

const UserPrivacy = () => {
  const [privacySettings, setPrivacySettings] = useState({
    bookmarks: false,
    direct_messages_from_business: false,
    ads_display_off_2nd_friendly: false,
    find_friends: false
  });
  const isAuthenticated = useToken();
  const snackbar = useSnackbar();

  const handleGetPrivacySettings = async () => {
    const res = await CustomerService.privacySettings().then((data) => {
      console.log(data.data.customerProfile);
      if (data.data.status === "success") {
        setPrivacySettings({
          bookmarks: data.data.customerProfile.bookmarks,
          direct_messages_from_business:
            data.data.customerProfile.direct_messages_from_business,
          ads_display_off_2nd_friendly:
            data.data.customerProfile.ads_display_off_2nd_friendly,
          find_friends: data.data.customerProfile.find_friends
        });
      }
    });
  };

  const handleUpdatePrivacyNotification = (data) => {
    const payload = {
      ...privacySettings,
      ...data
    };
    const res = CustomerService.privacySettingUpdate(payload).then((d) => {
      console.log(d);
      snackbar(d.data.message, { variant: "success" });
      handleGetPrivacySettings();
    });
  };

  useEffect(() => {
    if (isAuthenticated) {
      handleGetPrivacySettings();
    }
  }, [isAuthenticated]);
  return (
    <div class="body">
      <h6 class="mb-2">Find Friends</h6>
      <div class="form-check form-switch form-check-md mb-3">
        <input
          class="form-check-input"
          type="checkbox"
          id="checkPrivacy1"
          onClick={(e) => handleUpdatePrivacyNotification({ find_friends: e.target.checked })}
          checked={privacySettings.find_friends}
        />
        <label class="form-check-label" for="checkPrivacy1">
          Let others find my profile using my name.
        </label>
      </div>
      <h6 class="mb-2">Bookmarks</h6>
      <div class="form-check form-switch form-check-md mb-3">
        <input
          class="form-check-input"
          type="checkbox"
          id="checkPrivacy2"
          checked={privacySettings.bookmarks}
          onClick={(e) => handleUpdatePrivacyNotification({ bookmarks: e.target.checked })}
        />
        <label class="form-check-label" for="checkPrivacy2">
          Make my bookmarks public
        </label>
      </div>
      <h6 class="mb-2">Direct Messages from Businesses</h6>
      <div class="form-check form-switch form-check-md mb-3">
        <input
          class="form-check-input"
          type="checkbox"
          id="checkPrivacy3"
          checked={privacySettings.direct_messages_from_business}
          onClick={(e) => handleUpdatePrivacyNotification({ direct_messages_from_business: e.target.checked })}
        />
        <label class="form-check-label" for="checkPrivacy3">
          Allow business owners to send you direct messages.
        </label>
      </div>
      <h6 class="mb-2">Ads displayed off 2nd A Friendly</h6>
      <div class="form-check form-switch form-check-md mb-3">
        <input
          class="form-check-input"
          type="checkbox"
          id="checkPrivacy4"
          checked={privacySettings.ads_display_off_2nd_friendly}
          onClick={(e) => handleUpdatePrivacyNotification({ ads_display_off_2nd_friendly: e.target.checked })}
        />
        <label class="form-check-label" for="checkPrivacy4">
          Allow 2nd A Friendly to target ads on other.
        </label>
      </div>
    </div>
  );
};

export default UserPrivacy;
