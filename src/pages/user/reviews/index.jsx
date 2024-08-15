import UserView from "@/components/HOC/UserView";
import UserSidebar from "@/components/User/UserSidebar";
import useToken from "@/hooks/useToken";
import CustomerService from "@/services/CustomerService";
import { useAuthStore, useUserStore } from "@/store";
import React, { useEffect, useState } from "react";

const Reviews = () => {
  const userProfile = useAuthStore((state) => state.user);
  const isAuthenticated = useToken();

  const allReview = useUserStore((state) => state.allReview);
  const setReview = useUserStore((state) => state.setReview);
  const [viewMessage, setViewMessage] = useState(null);

  const getAllReview = async () => {
    const res = await CustomerService.reviewAll().then((data) => {
      console.log(data);
      setReview(data.data.allMessage);
    });
  };

  useEffect(() => {
    if (isAuthenticated) {
      getAllReview();
    }
  }, [isAuthenticated]);
  return (
    <UserView title="Reviews">
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
                <h5 className="text-danger mb-2">Reviews</h5>
                <div className="d-flex justify-content-left">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb breadcrumb-dots my-0 py-0">
                      <li className="breadcrumb-item">
                        <a href="index.php">Home</a>
                      </li>
                      <li className="breadcrumb-item">My Collection</li>
                      <li className="breadcrumb-item active">Reviews</li>
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
                <UserSidebar />
              </div>
              <div className="col-xl-9">
                <div className="table-responsive">
                  <table className="table border mb-0 table-hover align-middle">
                    <thead>
                      <tr>
                        <th>Company Name</th>
                        <th>Rating</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allReview?.length > 0 ? (
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="w-60px">
                                <img
                                  src="../assets/img/company-logo/1.svg"
                                  className="rounded-circle"
                                  alt=""
                                />
                              </div>
                              <div className="mb-0 ms-2">
                                <h6 className="mb-0">
                                  <a
                                    href="../listing-detail.php"
                                    target="_blank"
                                  >
                                    Serenade Spiritsand Sips Salon
                                  </a>
                                </h6>
                                <div className="d-sm-flex small">
                                  <span className="badge bg-danger bg-opacity-10 text-danger">
                                    Closed &nbsp; until 11:00 PM
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
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
                                <i className="fas fa-star text-warning"></i>
                              </li>
                            </ul>
                          </td>
                          <td>
                            <a
                              href="#"
                              data-bs-target="#EditReview"
                              data-bs-toggle="modal"
                              className="btn btn-xs btn-blue-soft btn-bg-xs mb-0"
                            >
                              <i className="fas fa-edit"></i>
                            </a>
                            <a
                              href="#"
                              data-bs-target="#viewReview"
                              data-bs-toggle="modal"
                              className="btn btn-xs btn-success-soft mb-0"
                            >
                              <i className="far fa-fw fa-eye"></i>
                            </a>
                            <button className="btn btn-xs btn-danger-soft mb-0">
                              <i className="fas fa-fw fa-times"></i>
                            </button>
                          </td>
                        </tr>
                      ) : (
                        <tr>
                          <td colSpan={3}>
                          <h4 style={{textAlign:"center"}}>Review not found!</h4>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                {/* <div className="d-sm-flex justify-content-sm-between align-items-sm-center mt-4 mt-sm-3">
                  <p className="mb-0 text-center text-sm-start">
                    Showing 1 to 8 of 20 entries
                  </p>
                  
                  <nav
                    className="d-flex justify-content-center mb-0"
                    aria-label="navigation"
                  >
                    <ul className="pagination pagination-sm pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
                      <li className="page-item mb-0">
                        <a className="page-link" href="#" tabindex="-1">
                          <i className="fas fa-angle-left"></i>
                        </a>
                      </li>
                      <li className="page-item mb-0">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item mb-0 active">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item mb-0">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item mb-0">
                        <a className="page-link" href="#">
                          <i className="fas fa-angle-right"></i>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </UserView>
  );
};

export default Reviews;
