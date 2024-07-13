import React from "react";

const Step5 = ({register, errors}) => {
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
            <label for="first_name" class="form-label">
              First Name
            </label>
            <input
              type="text"
              id="first_name"
              class="form-control"
              placeholder="e.g. Alamgir's Restaurant"
              {...register("first_name", {
                required: "First Name can not be empty!",
                type: "text"
              })}
              error={!!errors.first_name}
            />
          </div>
        </div>
        <div class="col-lg-6">
          <div class="form-check ps-0 q-box">
            <label for="last_name" class="form-label">
              Last Name
            </label>
            <input
              type="text"
              id="last_name"
              class="form-control"
              placeholder="e.g. Alamgir's Restaurant"
              {...register("last_name", {
                required: "Last Name can not be empty!",
                type: "text"
              })}
              error={!!errors.last_name}
            />
          </div>
        </div>
        <div class="col-lg-12">
          <div class="form-check ps-0 q-box">
            <label for="email" class="form-label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              class="form-control"
              placeholder="e.g. Alamgir's Restaurant"
              {...register("email", {
                required: "Business name can not be empty!",
                type: "email"
              })}
              error={!!errors.email}
            />
          </div>
        </div>
        <div class="col-lg-12">
          <div class="form-check ps-0 q-box">
            <label for="password" class="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              class="form-control"
              placeholder="e.g. Alamgir's Restaurant"
              {...register("password", {
                required: "This field can not be empty!",
                type: "password"
              })}
              error={!!errors.password}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step5;
