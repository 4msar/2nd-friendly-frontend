import React from "react";

const Step2 = () => {
  return (
    <div class="step">
      <h4 class="text-dark fw-bold mb-2">
        What’s your business email address, Phone Number & Website?
      </h4>
      <p>
        We’ll use this information to help you claim your Yelp page. Your
        business will come up automatically if it is already listed.
      </p>
      <div class="form-check ps-0 q-box">
        <div class="mb-2">
          <label for="business_name" class="form-label">
            Business Name
          </label>
          <input
            type="text"
            id="business_name"
            class="form-control"
            placeholder="e.g. Alamgir's Restaurant"
          />
        </div>
        <div class="mb-2">
          <label for="business_name" class="form-label">
            Phone Number
          </label>
          <input
            type="text"
            id="business_name"
            class="form-control"
            placeholder="e.g. Alamgir's Restaurant"
          />
        </div>
        <div class="mb-2">
          <label for="business_name" class="form-label">
            Website
          </label>
          <input
            type="text"
            id="business_name"
            class="form-control"
            placeholder="e.g. www.2ndafriendly.live"
          />
        </div>
      </div>
    </div>
  );
};

export default Step2;
