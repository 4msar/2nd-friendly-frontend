const StepEmail = ({ register, errors }) => {
  return (
    <div class="step">
      <h4 class="text-dark fw-bold mb-2">
        What’s your business email address?
      </h4>
      <p>
        We’ll send messages to this address, like requests from potential
        customers. You’ll also use it to login and manage your page. It will not
        be shared publicly or displayed on your page.
      </p>
      <div class="form-check ps-0 q-box">
        <div class="mb-2">
          <label for="email" class="form-label">
            Email Address <span class="star">*</span>
          </label>
          <input
            type="text"
            id="email"
            class="form-control"
            placeholder="support@2ndafriendly.com"
            {...register("email", {
              required: "email can not be empty!",
              type: "text",
            })}
            error={!!errors.email}
          />
        </div>
      </div>
    </div>
  );
};

export default StepEmail;
