const StepWeb = ({ register, errors }) => {
  return (
    <div class="step">
      <h4 class="text-dark fw-bold mb-2">Do you have a business website?</h4>
      <p>
        Tell ur customers where they can find more information about your
        business.
      </p>
      <div class="form-check ps-0 q-box">
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
              type: "text",
            })}
            error={!!errors.website}
          />
        </div>
      </div>
    </div>
  );
};

export default StepWeb;
