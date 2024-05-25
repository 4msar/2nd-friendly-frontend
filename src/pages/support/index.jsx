import PublicView from "@/components/HOC/PublicView";
import React from "react";

const Support = () => {
  return (
    <main>
      <section className="pt-4 pb-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-dots my-0 py-0">
                  <li className="breadcrumb-item">
                    <a href="index.php">Home</a>
                  </li>
                  <li className="breadcrumb-item">For Business</li>
                  <li className="breadcrumb-item">Support</li>
                </ol>
              </nav>
              <h4 className="fw-normal mt-3">Support</h4>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-0">
        <div className="container">
          <div className="row">
            {/* <!-- Action box item --> */}
            <div className="col-lg-6 position-relative overflow-hidden">
              <div className="bg-primary bg-opacity-10 rounded-3 p-5 h-100">
                {/* <!-- Image --> */}
                <div className="position-absolute bottom-0 end-0 me-3">
                  <img
                    src="assets/img/element/08.svg"
                    className="h-100px h-sm-200px"
                    alt=""
                  />
                </div>
                {/* <!-- Content --> */}
                <div className="row">
                  <div className="col-sm-8 position-relative">
                    <h4 className="mb-1">Are you customer?</h4>
                    <p className="mb-3 fw-light">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry
                    </p>
                    <a href="sign-in.php" className="btn btn-primary mb-0">
                      Login
                    </a>
                    &nbsp;&nbsp;{" "}
                    <a href="sign-up.php" className="btn btn-warning mb-0">
                      Register
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Action box item --> */}
            <div className="col-lg-6 position-relative overflow-hidden">
              <div className="bg-secondary rounded-3 bg-opacity-10 p-5 h-100">
                {/* <!-- Image --> */}
                <div className="position-absolute bottom-0 end-0 me-3">
                  <img
                    src="assets/img/element/15.svg"
                    className="h-100px h-sm-200px"
                    alt=""
                  />
                </div>
                {/* <!-- Content --> */}
                <div className="row">
                  <div className="col-sm-8 position-relative">
                    <h4 className="mb-1">Are you business owner?</h4>
                    <p className="mb-3 fw-light">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry
                    </p>
                    <a href="sign-in.php" className="btn btn-primary mb-0">
                      Login
                    </a>
                    &nbsp;&nbsp;{" "}
                    <a href="sign-up.php" className="btn btn-warning mb-0">
                      Register
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PublicView(Support);
