import React from 'react'

const UserSecurity = () => {
  return (
    <div>
    <div class="border-bottom mb-2 pb-2">
      <h5 class="mb-0 mb-sm-0 text-danger pb-0 fw-bold">Change Password</h5>
      <p class="mb-0 pb-0">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy.{" "}
      </p>
    </div>
    <div class="row">
      <form class="needs-validation" noValidate>
        <div class="col-sm-12 col-md-12 col-lg-6">
          <div class="mb-2 pt-2">
            <label class="form-label fw-normal text-dark">
              Old Password <span class="star">*</span>
            </label>
            <input
              type="text"
              class="form-control"
              id="old_password"
              name="old_password"
              placeholder="************"
              
              required
            />
            <div class="valid-feedback">Looks good!</div>
            <div class="invalid-feedback">Please enter old password.</div>
          </div>
          <div class="mb-2 pt-2">
            <label class="form-label fw-normal text-dark">
              New Password <span class="star">*</span>
            </label>
            <input
              type="text"
              class="form-control"
              id="new_password"
              name="new_password"
              placeholder="************"
              
              required
            />
            <div class="valid-feedback">Looks good!</div>
            <div class="invalid-feedback">Please enter password.</div>
          </div>
          <div class="mb-2 pt-2">
            <label
              class="form-label fw-normal text-dark"
              
            >
              Confirm New Password <span class="star">*</span>
            </label>
            <input
              type="text"
              class="form-control confirm_new_password"
              id="confirm_new_password"
              name="confirm_new_password"
              placeholder="************"
              
              required
            />
            <div class="valid-feedback">Looks good!</div>
            <div class="invalid-feedback">Please enter confirm password.</div>
          </div>
          <div class="mb-2 pt-2">
            <button type="submit" class="btn btn-dark mb-0 float-start">
              Save changes
            </button>
          </div>
        </div>
      </form>
    </div>
    <div class="clearfix">&nbsp;</div>
    <div class="border-bottom mb-2 pb-2">
      <h5 class="mb-0 mb-sm-0 text-danger pb-0 fw-bold">Change Email</h5>
      <p class="mb-0 pb-0">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy.{" "}
      </p>
    </div>
    <div class="row">
      <form class="needs-validation" noValidate>
        <div class="col-sm-12 col-md-12 col-lg-6">
          <div class="mb-2 pt-2">
            <p>
              Your current email address is{" "}
              <a href="#"> arinorheim@hotmail.com</a>
            </p>
          </div>
          <div class="mb-2 pt-2">
            <label class="form-label fw-normal text-dark">
              Enter your new email ID <span class="star">*</span>
            </label>
            <input
              type="text"
              class="form-control new_email"
              id="new_email"
              name="new_email"
              placeholder="arinorheim@hotmail.com"
              
              required
            />
            <div class="valid-feedback">Looks good!</div>
            <div class="invalid-feedback">Please enter new email.</div>
          </div>
          <div class="mb-2 pt-2">
            <button type="submit" class="btn btn-dark mb-0 float-start">
              Update Email
            </button>
          </div>
        </div>
      </form>
    </div>
    <div class="clearfix">&nbsp;</div>
    <div class="border-bottom mb-2 pb-2">
      <h5 class="mb-0 mb-sm-0 text-danger pb-0 fw-bold">
        Change Phone Number
      </h5>
      <p class="mb-0 pb-0">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy.{" "}
      </p>
    </div>
    <div class="row">
      <form class="needs-validation" noValidate>
        <div class="col-sm-12 col-md-12 col-lg-6">
          <div class="mb-2 pt-2">
            <label
              class="form-label fw-normal text-dark"
              
            >
              Old Phone Number <span class="star">*</span>
            </label>
            <input
              type="text"
              class="form-control old_phone_number"
              id="old_phone_number"
              name="old_phone_number"
              placeholder="+123456789"
              
              required
            />
            <div class="valid-feedback">Looks good!</div>
            <div class="invalid-feedback">Please enter old password.</div>
          </div>
          <div class="mb-2 pt-2">
            <label
              class="form-label fw-normal text-dark"
              
            >
              New Phone Number <span class="star">*</span>
            </label>
            <input
              type="text"
              class="form-control new_phone_number"
              id="new_phone_number"
              name="new_phone_number"
              placeholder="+123456789"
              
              required
            />
            <div class="valid-feedback">Looks good!</div>
            <div class="invalid-feedback">Please enter password.</div>
          </div>
          <div class="mb-2 pt-2">
            <label
              class="form-label fw-normal text-dark"
              
            >
              Confirm New Phone Number <span class="star">*</span>
            </label>
            <input
              type="text"
              class="form-control confirm_new_phone_number"
              id="confirm_new_phone_number"
              name="confirm_new_phone_number"
              placeholder="+123456789"
              
              required
            />
            <div class="valid-feedback">Looks good!</div>
            <div class="invalid-feedback">Please enter confirm password.</div>
          </div>
          <div class="mb-2 pt-2">
            <button type="submit" class="btn btn-dark mb-0 float-start">
              Save changes
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
  )
}

export default UserSecurity