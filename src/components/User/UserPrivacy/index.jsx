import React from "react";

const UserPrivacy = () => {
  return (
    <div class="body">
      <h6 class="mb-2">Find Friends</h6>
      <div class="form-check form-switch form-check-md mb-3">
        <input
          class="form-check-input"
          type="checkbox"
          id="checkPrivacy1"
          checked
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
          checked
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
          checked
        />
        <label class="form-check-label" for="checkPrivacy3">
          Allow business owners to send you direct messages.
        </label>
      </div>
      <h6 class="mb-2">Ads displayed off 2nd A Friendly</h6>
      <div class="form-check form-switch form-check-md mb-3">
        <input class="form-check-input" type="checkbox" id="checkPrivacy4" />
        <label class="form-check-label" for="checkPrivacy4">
          Allow 2nd A Friendly to target ads on other.
        </label>
      </div>
    </div>
  );
};

export default UserPrivacy;
