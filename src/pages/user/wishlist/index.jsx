import UserView from "@/components/HOC/UserView";
import UserSidebar from "@/components/User/UserSidebar";
import React from "react";

const WishList = () => {
  return (
    <UserView title="Wish List">
      <main>
        <section className="p-0 m-0">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="d-flex justify-content-between align-items-center">
                  <button
                    className="btn btn-link d-xl-none mb-0 float-start px-0 mt-2 pb-0"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasSidebar"
                    aria-controls="offcanvasSidebar"
                  >
                    <i className="fas fa-sliders-h"></i> My Collection
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-3 bg-light mb-4">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h5 className="text-danger mb-2">Wish List</h5>
                <div className="d-flex justify-content-left">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb breadcrumb-dots my-0 py-0">
                      <li className="breadcrumb-item">
                        <a href="index.php">Home</a>
                      </li>
                      <li className="breadcrumb-item">My Collection</li>
                      <li className="breadcrumb-item active">Wish List</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-1 pb-5">
          <div className="container">
            <div className="row">
              <div className="col-xl-3">
                {/* <?php include("sidebar-collection.php"); ?> */}
                <UserSidebar />
              </div>
              <div className="col-xl-9">
                <div className="row g-4">
                  <div className="col-sm-6 col-lg-4 col-xl-4">
                    <div className="card shadow">
                      <div className="position-absolute top-0 start-100 translate-middle bg-danger rounded-circle lh-1 h-10px p-0">
                        <a href="#">
                          {" "}
                          <i className="bi bi-x text-white fs-5"></i>
                        </a>
                      </div>
                      <img
                        src="../assets/img/category/1.jpg"
                        className="rounded-top-2"
                        alt="course image"
                      />
                      <div className="card-body pb-0">
                        <h5 className="card-title fw-normal">
                          <a href="../listing-detail.php" target="_blank">
                            Burger King
                          </a>
                        </h5>
                        <p className="mb-2 text-truncate-2">
                          Burger King is a global fast-food restaurant chain
                          that specializes in hamburgers, fries, and other
                          fast-food items.
                        </p>
                        {/* <!-- Rating star --> */}
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning"></i>
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning"></i>
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning"></i>
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning"></i>
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="far fa-star text-warning"></i>
                          </li>
                          <li className="list-inline-item ms-2 h6 fw-light mb-0">
                            5.0 (1.5k Reviews){" "}
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Card footer --> */}
                      <div className="card-footer pt-0 pb-3">
                        <hr />
                        <div className="d-flex justify-content-between">
                          <span className="h6 fw-light mb-0">
                            <span className="fw-bold text-danger">Closed</span>{" "}
                            until 11:00 PM
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4 col-xl-4">
                    <div className="card shadow">
                      <div className="position-absolute top-0 start-100 translate-middle bg-danger rounded-circle lh-1 h-10px p-0">
                        <a href="#">
                          {" "}
                          <i className="bi bi-x text-white fs-5"></i>
                        </a>
                      </div>
                      <img
                        src="../assets/img/category/3.jpg"
                        className="rounded-top-2"
                        alt="course image"
                      />
                      <div className="card-body pb-0">
                        <h5 className="card-title fw-normal">
                          <a href="../listing-detail.php" target="_blank">
                            Christian Brothers
                          </a>
                        </h5>
                        <p className="mb-2 text-truncate-2">
                          Christian Brothers Automotive is a chain of automotive
                          repair shops that operates across the United States.
                        </p>
                        {/* <!-- Rating star --> */}
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning"></i>
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning"></i>
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning"></i>
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning"></i>
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="far fa-star text-warning"></i>
                          </li>
                          <li className="list-inline-item ms-2 h6 fw-light mb-0">
                            5.0 (1.5k Reviews){" "}
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Card footer --> */}
                      <div className="card-footer pt-0 pb-3">
                        <hr />
                        <div className="d-flex justify-content-between">
                          <span className="h6 fw-light mb-0">
                            <span className="fw-bold text-success">Open</span>{" "}
                            until 11:00 PM
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4 col-xl-4">
                    <div className="card shadow">
                      <div className="position-absolute top-0 start-100 translate-middle bg-danger rounded-circle lh-1 h-10px p-0">
                        <a href="#">
                          {" "}
                          <i className="bi bi-x text-white fs-5"></i>
                        </a>
                      </div>
                      <img
                        src="../assets/img/category/3.jpg"
                        className="rounded-top-2"
                        alt="course image"
                      />
                      <div className="card-body pb-0">
                        <h5 className="card-title fw-normal">
                          <a href="../listing-detail.php" target="_blank">
                            Christian Brothers
                          </a>
                        </h5>
                        <p className="mb-2 text-truncate-2">
                          Christian Brothers Automotive is a chain of automotive
                          repair shops that operates across the United States.
                        </p>
                        {/* <!-- Rating star --> */}
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning"></i>
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning"></i>
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning"></i>
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="fas fa-star text-warning"></i>
                          </li>
                          <li className="list-inline-item me-0 small">
                            <i className="far fa-star text-warning"></i>
                          </li>
                          <li className="list-inline-item ms-2 h6 fw-light mb-0">
                            5.0 (1.5k Reviews){" "}
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Card footer --> */}
                      <div className="card-footer pt-0 pb-3">
                        <hr />
                        <div className="d-flex justify-content-between">
                          <span className="h6 fw-light mb-0">
                            <span className="fw-bold text-success">Open</span>{" "}
                            until 11:00 PM
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Reviews END --> */}
                {/* <div className="footer pt-4">
                  
                  <div className="d-sm-flex justify-content-sm-between align-items-sm-center">
                    <p className="mb-0 text-center text-sm-start">
                      Showing 1 to 8 of 20 entries
                    </p>
                    
                    <nav
                      className="d-flex justify-content-center mb-0"
                      aria-label="navigation"
                    >
                      <ul className="pagination pagination-sm pagination-primary-soft my-0 py-0">
                        <li className="page-item my-0">
                          <a className="page-link" href="#" tabindex="-1">
                            <i className="fas fa-angle-left"></i>
                          </a>
                        </li>
                        <li className="page-item my-0">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item my-0 active">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item my-0">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item my-0">
                          <a className="page-link" href="#">
                            <i className="fas fa-angle-right"></i>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </UserView>
  );
};

export default WishList;
