import useSnackbar from "@/hooks/useSnackbar";
import useToken from "@/hooks/useToken";
import BusinessService from "@/services/BusinessService";
import { useEffect, useState } from "react";

const PrivacySetting = () => {
  const [privacySettings, setPrivacySettings] = useState({
    bookmarks: false,
    direct_messages_from_user: false,
    ads_display_off_2nd_friendly: false
  });
  const isAuthenticated = useToken();
  const snackbar = useSnackbar();

  const handleGetPrivacySettings = async () => {
    const res = await BusinessService.privacySettingAll().then((data) => {
      console.log(data.data.businessProfile);
      if (data.data.status === "success") {
        setPrivacySettings({
          bookmarks: data.data.businessProfile.bookmarks,
          direct_messages_from_user:
            data.data.businessProfile.direct_messages_from_user,
          ads_display_off_2nd_friendly:
            data.data.businessProfile.ads_display_off_2nd_friendly
        });
      }
    });
  };

  const handleUpdatePrivacyNotification = (data) => {
    const payload = {
      ...privacySettings,
      ...data
    };
    const res = BusinessService.privacySettingUpdate(payload).then((d) => {
      console.log(d);
      snackbar(d.data.message, {variant: 'success'});
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
      <h6 class="mb-2">Bookmarks</h6>
      <div class="form-check form-switch form-check-md mb-3">
        <input
          class="form-check-input"
          type="checkbox"
          id="checkPrivacy12"
          checked={privacySettings.bookmarks}
          onClick={(e) => {
            handleUpdatePrivacyNotification({
              bookmarks: e.target.checked
            });
          }}
        />
        <label class="form-check-label" for="checkPrivacy12">
          Make my bookmarks public
        </label>
      </div>

      <h6 class="mb-2">Direct Messages from Businesses</h6>
      <div class="form-check form-switch form-check-md mb-3">
        <input
          class="form-check-input"
          type="checkbox"
          id="checkPrivacy12"
          checked={privacySettings.direct_messages_from_user}
          onClick={(e) => {
            handleUpdatePrivacyNotification({
              direct_messages_from_user: e.target.checked
            });
          }}
        />
        <label class="form-check-label" for="checkPrivacy12">
          Allow business owners to send you.
        </label>
      </div>

      <h6 class="mb-2">Ads displayed off 2nd A Friendly</h6>
      <div class="form-check form-switch form-check-md mb-3">
        <input
          class="form-check-input"
          type="checkbox"
          id="checkPrivacy12"
          checked={privacySettings.ads_display_off_2nd_friendly}
          onClick={(e) => {
            handleUpdatePrivacyNotification({
              ads_display_off_2nd_friendly: e.target.checked
            });
          }}
        />
        <label class="form-check-label" for="checkPrivacy12">
          Allow 2nd A Friendly to target ads.
        </label>
      </div>
    </div>
  );
};

export default PrivacySetting;
