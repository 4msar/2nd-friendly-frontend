import React from "react";

const Step2 = ({register, errors}) => {
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
            {...register("business_name", {
              required: "Business name can not be empty!",
              type: "text"
            })}
            error={!!errors.business_name}
          />
        </div>
        <div class="mb-2">
          <label for="phone" class="form-label">
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            class="form-control"
            placeholder="e.g. Alamgir's Restaurant"
            {...register("phone", {
              required: "Phone can not be empty!",
              type: "text"
            })}
            error={!!errors.phone}
          />
        </div>
        <div class="mb-2">
          <label for="website" class="form-label">
            Website
          </label>
          <input
            type="text"
            id="website"
            class="form-control"
            placeholder="e.g. www.2ndafriendly.live"
            {...register("website", {
              type: "text"
            })}
            error={!!errors.website}
          />
        </div>
      </div>
    </div>
  );
};

export default Step2;
