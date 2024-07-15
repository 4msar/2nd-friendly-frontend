import React from 'react'

const AboutBusiness = () => {
  return (
    <form class="row g-3 needs-validation" novalidate>
    <div class="col-12 justify-content-center align-items-center">
      <label class="form-label fw-normal text-dark">
        Business Logo
      </label>
      <div class="d-flex align-items-center">
        <label
          class="position-relative me-4"
          for="uploadfile-1"
          title="Replace this pic"
        >
          <span class="avatar avatar-xl">
            <img
              id="uploadfile-1-preview"
              class="avatar-img rounded-circle border border-white border-3 shadow"
              src="../assets/img/company-logo/1.svg"
              alt=""
            />
          </span>
          <button type="button" class="uploadremove">
            <i class="bi bi-x text-white"></i>
          </button>
        </label>
        <label class="btn btn-primary-soft mb-0" for="uploadfile-1">
          Change Logo
        </label>
        <input
          id="uploadfile-1"
          class="form-control d-none"
          type="file"
        />
      </div>
    </div>
    <div class="col-md-6 col-sm-12 bg-light-input">
      <label
        class="form-label fw-normal text-black"
        for="company_name"
      >
        Company name <span class="star">*</span>
      </label>
      <input
        class="form-control company_name"
        type="text"
        title="company_name"
        id="company_name"
        placeholder="e. g. Redwood Solutions Co."
        required
      />
      <div class="valid-feedback">Looks good!</div>
      <div class="invalid-feedback">Please enter company name.</div>
    </div>
    <div class="col-md-6 col-sm-12 bg-light-input">
      <label
        class="form-label fw-normal text-dark"
        for="official_email"
      >
        Official email <span class="star">*</span>
      </label>
      <input
        class="form-control official_email"
        type="email"
        title="official_email"
        id="official_email"
        placeholder="e. g. johndoe@gmail.com"
        autofocus
        required
      />
      <div class="valid-feedback">Looks good!</div>
      <div class="invalid-feedback">
        Please enter email address.
      </div>
    </div>
    <div class="col-md-6 col-sm-12 bg-light-input">
      <label
        class="form-label fw-normal text-dark"
        for="official_phone"
      >
        Official phone <span class="star">*</span>
      </label>
      <input
        type="number"
        class="form-control official_phone"
        title="official_phone"
        id="official_phone"
        placeholder="e.g. (234)567-890"
        autofocus
        required
      />
      <div class="valid-feedback">Looks good!</div>
      <div class="invalid-feedback">Please enter phone number.</div>
    </div>
    <div class="col-md-6 col-sm-12 bg-light-input">
      <label
        class="form-label fw-normal text-dark"
        for="address_line_1"
      >
        Official address <span class="star">*</span>
      </label>
      <input
        class="form-control address_line_1"
        id="address_line_1"
        title="address_line_1"
        type="text"
        placeholder="e.g. 123 Main Street, apt 4B"
        autofocus
        required
      />
      <div class="valid-feedback">Looks good!</div>
      <div class="invalid-feedback">
        Please enter office address 1 .
      </div>
    </div>
    <div class="col-md-6 col-sm-4 bg-light-input">
      <label class="form-label fw-normal text-dark" for="city">
        City <span class="star">*</span>
      </label>
      <input
        class="form-control city"
        type="text"
        id="city"
        title="city"
        placeholder="e.g. Oxnard"
        autofocus
        required
      />
      <div class="valid-feedback">Looks good!</div>
      <div class="invalid-feedback">Please enter city.</div>
    </div>
    <div class="col-md-6 col-sm-4 bg-light-input">
      <label class="form-label fw-normal text-dark" for="state">
        State <span class="star">*</span>
      </label>
      <select
        class="form-select js-choice state"
        id="state"
        title="state"
        aria-label=".form-select-lg"
        autofocus
        required
      >
        <option value="">Select State</option>
        <option value="AK">Alaska</option>
        <option value="HI">Hawaii</option>
        <option value="CA">California</option>
        <option value="NV">Nevada</option>
        <option value="OR">Oregon</option>
        <option value="WA">Washington</option>
        <option value="AZ">Arizona</option>
        <option value="CO">Colorado</option>
        <option value="ID">Idaho</option>
        <option value="MT">Montana</option>
        <option value="NE">Nebraska</option>
        <option value="NM">New Mexico</option>
        <option value="ND">North Dakota</option>
        <option value="UT">Utah</option>
        <option value="WY">Wyoming</option>
        <option value="AL">Alabama</option>
        <option value="AR">Arkansas</option>
        <option value="IL">Illinois</option>
        <option value="IA">Iowa</option>
        <option value="KS">Kansas</option>
        <option value="KY">Kentucky</option>
        <option value="LA">Louisiana</option>
        <option value="MN">Minnesota</option>
        <option value="MS">Mississippi</option>
        <option value="MO">Missouri</option>
        <option value="OK">Oklahoma</option>
        <option value="SD">South Dakota</option>
        <option value="TX">Texas</option>
        <option value="TN">Tennessee</option>
        <option value="WI">Wisconsin</option>
        <option value="CT">Connecticut</option>
        <option value="DE">Delaware</option>
        <option value="FL">Florida</option>
        <option value="GA">Georgia</option>
        <option value="IN">Indiana</option>
        <option value="ME">Maine</option>
        <option value="MD">Maryland</option>
        <option value="MA">Massachusetts</option>
        <option value="MI">Michigan</option>
        <option value="NH">New Hampshire</option>
        <option value="NJ">New Jersey</option>
        <option value="NY">New York</option>
        <option value="NC">North Carolina</option>
        <option value="OH">Ohio</option>
        <option value="PA">Pennsylvania</option>
        <option value="RI">Rhode Island</option>
        <option value="SC">South Carolina</option>
        <option value="VT">Vermont</option>
        <option value="VA">Virginia</option>
        <option value="WV">West Virginia</option>
      </select>
      <div class="valid-feedback">Looks good!</div>
      <div class="invalid-feedback">Please select state.</div>
    </div>
    <div class="col-md-6 col-sm-4 bg-light-input">
      <label class="form-label fw-normal text-dark" for="zip">
        Zip <span class="star">*</span>
      </label>
      <input
        class="form-control zip"
        type="text"
        id="zip"
        title="zip"
        placeholder="e.g. 93030"
        autofocus
        required
      />
      <div class="valid-feedback">Looks good!</div>
      <div class="invalid-feedback">Please enter zip code.</div>
    </div>
    <div class="col-md-6 col-sm-4 bg-light-input">
      <label class="form-label fw-normal text-dark" for="website">
        Website <span class="star">*</span>
      </label>
      <input
        class="form-control website"
        type="url"
        id="website"
        title="website"
        placeholder="e. g. www.2ndafriendly.com"
        autofocus
        required
      />
      <div class="valid-feedback">Looks good!</div>
      <div class="invalid-feedback">Please enter website.</div>
    </div>
    <div class="col-md-12 col-sm-4 bg-light-input">
      <label class="form-label fw-normal text-dark" for="history">
        History <span class="star">*</span>
      </label>
      <textarea
        class="form-control website"
        rows="4"
        type="text"
        id="history"
        title="history"
        placeholder="Write the history of your business."
        autofocus
        required
      ></textarea>
      <div class="valid-feedback">Looks good!</div>
      <div class="invalid-feedback">Please enter history.</div>
    </div>
    <div class="header mb-2 border-bottom">
      <h5 class="header-title text-danger mb-0 pb-1">
        Company Owner
      </h5>
    </div>
    <div class="col-md-6 col-sm-12 bg-light-input">
      <label
        class="form-label fw-normal text-black"
        for="first_name"
      >
        First name <span class="star">*</span>
      </label>
      <input
        class="form-control first_name"
        type="text"
        title="first_name"
        id="first_name"
        placeholder="e. g. John"
        required
      />
      <div class="valid-feedback">Looks good!</div>
      <div class="invalid-feedback">Please enter first name.</div>
    </div>
    <div class="col-md-6 col-sm-12 bg-light-input">
      <label class="form-label fw-normal text-dark" for="last_name">
        Last name <span class="star">*</span>
      </label>
      <input
        class="form-control last_name"
        type="text"
        id="last_name"
        title="last_name"
        placeholder="Type your last here"
        required
      />
      <div class="valid-feedback">Looks good!</div>
      <div class="invalid-feedback">Please enter last name.</div>
    </div>
    <div class="d-sm-flex justify-content-end mb-3">
      <button type="submit" class="btn btn-primary-soft mb-0">
        Save changes
      </button>
    </div>
  </form>
  )
}

export default AboutBusiness