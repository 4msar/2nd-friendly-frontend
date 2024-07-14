const StepAddress = ({ register, errors }) => {
  return (
    <div class="step">
      <h4 class="text-dark fw-bold mb-2">What is your business address?</h4>
      <div class="row">
        <div class="col-lg-12">
          <div class="form-check ps-0 q-box">
            <label for="street_address" class="form-label">
              Address 1 <span class="star">*</span>
            </label>
            <input
              type="text"
              id="street_address"
              class="form-control"
              placeholder="e.g. Alamgir's Restaurant"
              {...register("street_address", {
                required: "Street Address can not be empty!",
                type: "text"
              })}
              error={!!errors.street_address}
            />
          </div>
        </div>
        <div class="col-lg-12">
          <div class="form-check ps-0 q-box">
            <label for="suite" class="form-label">
              Address 2
            </label>
            <input
              type="text"
              id="suite"
              class="form-control"
              placeholder="e.g. Alamgir's Restaurant"
              {...register("suite", {
                required: "Suite can not be empty!",
                type: "text"
              })}
              error={!!errors.suite}
            />
          </div>
        </div>
        <div class="col-lg-4">
          <div class="form-check ps-0 q-box">
            <label for="city" class="form-label">
              City <span class="star">*</span>
            </label>
            <input
              type="text"
              id="city"
              class="form-control"
              placeholder="city"
              {...register("city", {
                required: "City can not be empty!",
                type: "text"
              })}
              error={!!errors.city}
            />
          </div>
        </div>
        <div class="col-lg-4">
          <div class="form-check ps-0 q-box">
            <label for="state" class="form-label">
              State
            </label>
            <input
              type="text"
              id="state"
              class="form-control"
              placeholder="State"
              {...register("state", {
                required: "State can not be empty!",
                type: "text"
              })}
              error={!!errors.state}
            />
          </div>
        </div>
        <div class="col-lg-4">
          <div class="form-check ps-0 q-box">
            <label for="zip" class="form-label">
              Zip
            </label>
            <input
              type="text"
              id="zip"
              class="form-control"
              placeholder="Zip"
              {...register("zip", {
                required: "Zip can not be empty!",
                type: "text"
              })}
              error={!!errors.zip}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepAddress;
