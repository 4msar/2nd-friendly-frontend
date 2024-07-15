import React from "react";

const PrivacySetting = () => {
  return (
    <div class="body">
      <h6 class="mb-2">Bookmarks</h6>
      <div class="form-check form-switch form-check-md mb-3">
        <input
          class="form-check-input"
          type="checkbox"
          id="checkPrivacy12"
          checked
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
          checked
        />
        <label class="form-check-label" for="checkPrivacy12">
          Allow business owners to send you.
        </label>
      </div>

      <h6 class="mb-2">Ads displayed off 2nd A Friendly</h6>
      <div class="form-check form-switch form-check-md mb-3">
        <input class="form-check-input" type="checkbox" id="checkPrivacy12" />
        <label class="form-check-label" for="checkPrivacy12">
          Allow 2nd A Friendly to target ads.
        </label>
      </div>
    </div>
  );
};

export default PrivacySetting;
