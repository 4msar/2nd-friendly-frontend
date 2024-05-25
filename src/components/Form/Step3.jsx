import React from "react";

const Step3 = () => {
  return (
    <div class="step">
      <h4 class="text-dark fw-bold mb-2">
        Are you having diarrhoea, stomach pain, conjunctivitis, vomiting and
        headache?
      </h4>
      <div class="form-check ps-0 q-box">
        <div class="mb-2">
          <select class="form-select" aria-label="Default select example">
            <option selected>Category</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <div class="form-check ps-0 q-box">
        <div class="mb-2">
          <select class="form-select" aria-label="Default select example">
            <option selected>Sub Category</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Step3;
