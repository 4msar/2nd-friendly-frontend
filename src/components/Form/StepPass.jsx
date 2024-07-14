const StepPass = ({ register, errors }) => {
  return (
    <div class="step">
      <h4>Confirm your business account password</h4>
      <p>
        Add the phone number of (Business Name) to help customers connect with
        you.
      </p>
      <div class="row">
        <div class="col-lg-12">
          <div class="form-check ps-0 q-box">
            <label for="password" class="form-label">
              Password <span class="star">*</span>
            </label>
            <input
              type="password"
              id="password"
              class="form-control"
              placeholder="*************"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              {...register("password", {
                required: "First Name can not be empty!",
                type: "password"
              })}
              error={!!errors.password}
              helperText={errors?.password?.message ?? ""}
            />
          </div>
        </div>
        <div class="col-lg-12">
          <div class="form-check ps-0 q-box">
            <label for="confirm_password" class="form-label">
              Confirm Password <span class="star">*</span>
            </label>
            <input
              type="text"
              id="confirm_password"
              class="form-control"
              placeholder="*************"
              {...register("confirm_password", {
                required: "Last Name can not be empty!",
                type: "text"
              })}
              error={!!errors.confirm_password}
              helperText={errors?.confirm_password?.message ?? ""}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepPass;
