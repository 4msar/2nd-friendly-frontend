const Step1 = ({ register, errors }) => {
  return (
    <div class="step">
      <h4 class="text-dark fw-bold mb-2">
        Hello! Let’s start with your business name
      </h4>
      <p>
        We’ll use this information to help you claim your Yelp page. Your
        business will come up automatically if it is already listed.
      </p>
      <div class="form-check ps-0 q-box">
        <div class="mb-2">
          <label for="business_name" class="form-label">
            Business Name <span class="star">*</span>
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
      </div>
    </div>
  );
};

export default Step1;
