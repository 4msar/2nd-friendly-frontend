import React from "react";

const Notification = () => {
  return (
    <div class="row">
      <div class="col-md-12 col-sm-12 ">
        <h6 class="mb-2">Your Business</h6>
        <div class="form-check form-switch form-check-md mb-2">
          <input
            class="form-check-input"
            type="checkbox"
            id="checkPrivacy1"
            checked
          />
          <label class="form-check-label" for="checkPrivacy1">
            Send me an email when someone reviews my business.
          </label>
        </div>
        <div class="form-check form-switch form-check-md mb-2">
          <input class="form-check-input" type="checkbox" id="checkPrivacy2" />
          <label class="form-check-label" for="checkPrivacy2">
            Send me an email when someone posts a question about my business.
          </label>
        </div>
        <div class="form-check form-switch form-check-md mb-2">
          <input
            class="form-check-input"
            type="checkbox"
            id="checkPrivacy3"
            checked
          />
          <label class="form-check-label" for="checkPrivacy3">
            Send me an email when displayed information about my business is
            changed.
          </label>
        </div>
        <h6 class="mb-2 mt-4">Messaging and Leads</h6>
        <div class="form-check form-switch form-check-md mb-2">
          <input class="form-check-input" type="checkbox" id="checkPrivacy4" />
          <label class="form-check-label" for="checkPrivacy4">
            {" "}
            Send me an email when I receive message leads or direct messages.
          </label>
        </div>
        <div class="form-check form-switch form-check-md mb-2">
          <input class="form-check-input" type="checkbox" id="checkPrivacy5" />
          <label class="form-check-label" for="checkPrivacy5">
            {" "}
            Send me an email when I receive leads from Nearby Jobs.
          </label>
        </div>
        <h6 class="mb-2 mt-4">2nd A Friendly Account</h6>
        <div class="form-check form-switch form-check-md mb-2">
          <input class="form-check-input" type="checkbox" id="checkPrivacy6" />
          <label class="form-check-label" for="checkPrivacy6">
            Status of your business info edits
          </label>
        </div>
        <div class="form-check form-switch form-check-md mb-2">
          <input class="form-check-input" type="checkbox" id="checkPrivacy7" />
          <label class="form-check-label" for="checkPrivacy7">
            Contributions
          </label>
        </div>
        <div class="form-check form-switch form-check-md mb-2">
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
        </div>
      </div>
    </div>
  );
};

export default Notification;
