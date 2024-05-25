import React from "react";

const Step5 = () => {
  return (
    <div class="step">
      <h4>Great! Now create your business account.</h4>
      <p>
        A business account enables you to manage your page, upload photos, and
        respond to reviews on Yelp.
      </p>
      <div class="row">
        <div class="col-lg-6">
          <div class="form-check ps-0 q-box">
            <label for="business_name" class="form-label">
              First Name
            </label>
            <input
              type="text"
              id="business_name"
              class="form-control"
              placeholder="e.g. Alamgir's Restaurant"
            />
          </div>
        </div>
        <div class="col-lg-6">
          <div class="form-check ps-0 q-box">
            <label for="business_name" class="form-label">
              Last Name
            </label>
            <input
              type="text"
              id="business_name"
              class="form-control"
              placeholder="e.g. Alamgir's Restaurant"
            />
          </div>
        </div>
        <div class="col-lg-12">
          <div class="form-check ps-0 q-box">
            <label for="business_name" class="form-label">
              Email Address
            </label>
            <input
              type="email"
              id="business_name"
              class="form-control"
              placeholder="e.g. Alamgir's Restaurant"
            />
          </div>
        </div>
        <div class="col-lg-12">
          <div class="form-check ps-0 q-box">
            <label for="business_name" class="form-label">
              Password
            </label>
            <input
              type="password"
              id="business_name"
              class="form-control"
              placeholder="e.g. Alamgir's Restaurant"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step5;
