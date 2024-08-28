import React from "react";

const ExternalApplication = () => {
  return (
    <div>
      {/* <div class="border-bottom mb-4 pb-1">
        <h5 class="mb-0 mb-sm-0 text-danger pb-1 fw-normal">
          Connect with Social Media
        </h5>
      </div>
      <div class="row mt-4">
        <div class="col-lg-6">
          <div class="position-relative mb-4 d-sm-flex bg-success bg-opacity-10 border border-success p-3 rounded">
            <h2 class="fs-1 mb-0 me-3">
              <i class="fab fa-google text-google-icon"></i>
            </h2>
            <div>
              <div class="position-absolute top-0 start-100 translate-middle bg-white rounded-circle lh-1 h-20px">
                <i class="bi bi-check-circle-fill text-success fs-5"></i>
              </div>
              <h6 class="mb-1">Google</h6>
              <p class="mb-1 small">
                You are successfully connected to your Google account
              </p>
              <button type="button" class="btn btn-sm btn-danger mb-0">
                Invoke
              </button>
              <a href="#" class="btn btn-sm btn-link text-body mb-0">
                Learn more
              </a>
            </div>
          </div>
          <div class="mb-4 d-sm-flex border p-3 rounded">
            <h2 class="fs-1 mb-0 me-3">
              <i class="fab fa-linkedin-in text-linkedin"></i>
            </h2>
            <div>
              <h6 class="mb-1">Linkedin</h6>
              <p class="mb-1 small">
                Connect with Linkedin account for a personalized experience
              </p>
              <button type="button" class="btn btn-sm btn-primary mb-0">
                Connect Linkedin
              </button>
              <a href="#" class="btn btn-sm btn-link text-body mb-0">
                Learn more
              </a>
            </div>
          </div>
          <div class="mb-4 d-sm-flex border p-3 rounded">
            <h2 class="fs-1 mb-0 me-3">
              <i class="fab fa-facebook text-facebook"></i>
            </h2>
            <div>
              <h6 class="mb-1">Facebook</h6>
              <p class="mb-1 small">
                Connect with Facebook account for a personalized experience
              </p>
              <button type="button" class="btn btn-sm btn-primary mb-0">
                Connect Facebook
              </button>
              <a href="#" class="btn btn-sm btn-link text-body mb-0">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div> */}
      <div class="border-bottom mb-4 pb-2">
        <h5 class="mb-0 mb-sm-0 text-danger pb-0 fw-normal">
          Social Media Profile
        </h5>
        <p class="pb-0 mb-0">Connect with Social Media Profile</p>
      </div>
      <div class="row mt-4">
        <div class="col-lg-6">
          <div class="mb-3">
            <label class="form-label">
              <i class="fab fa-facebook text-facebook me-2"></i>Enter facebook
              username
            </label>
            <input
              class="form-control"
              type="text"
              placeholder="arielle-norheim"
            />
          </div>
          <div class="mb-3">
            <label class="form-label">
              <i class="bi bi-twitter text-twitter me-2"></i>Enter twitter
              username
            </label>
            <input
              class="form-control"
              type="text"
              placeholder="arielle-norheim"
            />
          </div>
          <div class="mb-3">
            <label class="form-label">
              <i class="fab fa-instagram text-instagram-gradient me-2"></i>Enter
              instagram username
            </label>
            <input
              class="form-control"
              type="text"
              placeholder="arielle-norheim"
            />
          </div>
          <div class="mb-3">
            <label class="form-label">
              <i class="fab fa-youtube text-youtube me-2"></i>Add your youtube
              profile URL
            </label>
            <input
              class="form-control"
              type="text"
              placeholder="https://www.youtube.com/arielle"
            />
          </div>
          <div class="d-flex justify-content-start mt-4">
            <button type="submit" class="btn btn-dark mb-0">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExternalApplication;
