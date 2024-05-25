import React from "react";

const Step4 = () => {
  return (
    <div class="step">
      <h4 class="text-dark fw-bold mb-2">What is your business address?</h4>
      <div class="row">
        <div class="col-lg-12">
          <div class="form-check ps-0 q-box">
            <label for="business_name" class="form-label">
              Street Address
            </label>
            <input
              type="text"
              id="business_name"
              class="form-control"
              placeholder="e.g. Alamgir's Restaurant"
            />
          </div>
        </div>
        <div class="col-lg-3">
          <div class="form-check ps-0 q-box">
            <label for="business_name" class="form-label">
              Apt/Suite/Other
            </label>
            <input
              type="text"
              id="business_name"
              class="form-control"
              placeholder="e.g. Alamgir's Restaurant"
            />
          </div>
        </div>
        <div class="col-lg-3">
          <div class="form-check ps-0 q-box">
            <label for="business_name" class="form-label">
              City
            </label>
            <input
              type="text"
              id="business_name"
              class="form-control"
              placeholder="e.g. Alamgir's Restaurant"
            />
          </div>
        </div>
        <div class="col-lg-3">
          <div class="form-check ps-0 q-box">
            <label for="business_name" class="form-label">
              State
            </label>
            <input
              type="text"
              id="business_name"
              class="form-control"
              placeholder="e.g. Alamgir's Restaurant"
            />
          </div>
        </div>
        <div class="col-lg-3">
          <div class="form-check ps-0 q-box">
            <label for="business_name" class="form-label">
              Zip
            </label>
            <input
              type="text"
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

export default Step4;
