const StepInfo = ({ register, errors }) => {
  return (
    <div class="step">
      <h4>Give customers a phone number so they can call your business</h4>
      <p>
        Add the phone number of (Business Name) to help customers connect with
        you.
      </p>
      <div class="row">
        <div class="col-lg-6">
          <div class="form-check ps-0 q-box">
            <label for="first_name" class="form-label">
              First Name <span class="star">*</span>
            </label>
            <input
              type="text"
              id="first_name"
              class="form-control"
              placeholder="e.g. Alamgir's Restaurant"
              {...register("first_name", {
                required: "First Name can not be empty!",
                type: "text",
              })}
              error={!!errors.first_name}
            />
          </div>
        </div>
        <div class="col-lg-6">
          <div class="form-check ps-0 q-box">
            <label for="last_name" class="form-label">
              Last Name <span class="star">*</span>
            </label>
            <input
              type="text"
              id="last_name"
              class="form-control"
              placeholder="e.g. Alamgir's Restaurant"
              {...register("last_name", {
                required: "Last Name can not be empty!",
                type: "text",
              })}
              error={!!errors.last_name}
            />
          </div>
        </div>
        <div class="col-lg-12">
          <div class="form-check ps-0 q-box">
            <label for="mobile" class="form-label">
              Mobile Number <span class="star">*</span>
            </label>
            <input
              type="text"
              id="mobile"
              class="form-control"
              placeholder="+1-212-456-1234"
              {...register("mobile", {
                required: "Business name can not be empty!",
                type: "mobile",
              })}
              error={!!errors.mobile}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepInfo;
