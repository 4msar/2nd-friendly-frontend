import SidebarInformation from "@/components/Business/SidebarInformation";
import BusinessView from "@/components/HOC/BusinessView";
import useToken from "@/hooks/useToken";
import BusinessService from "@/services/BusinessService";
import { useBusinessAboutStore, useReviewStore } from "@/store";
import React, { useEffect, useState } from "react";

const Reviews = () => {
  const userProfile = useBusinessAboutStore((state) => state.businessProfile);
  const isAuthenticated = useToken();

  const allReview = useReviewStore((state) => state.allReview);
  const setReview = useReviewStore((state) => state.setReview);
  const [viewReview, setViewReview] = useState(null);

  const getAllReviews = async () => {
    const res = await BusinessService.reviewAll().then(
      (data) => {
        console.log(data);
        setReview(data.data.allReview);
      }
    );
  };

  useEffect(() => {
    if (isAuthenticated) {
      getAllReviews();
    }
  }, [isAuthenticated]);
  return (
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
                  <i className="fas fa-sliders-h"></i> Business Information
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
                    <li className="breadcrumb-item">Business Information</li>
                    <li className="breadcrumb-item">Reviews</li>
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
            <div className="col-xl-3 col-md-3">
              <SidebarInformation profile={userProfile} />
            </div>
            <div className="col-xl-9 col-md-9">
              <div class="header">
                <h5 class="mb-2 mb-sm-0 text-danger pb-0">All Reviews</h5>
              </div>
              <div class="row g-3 align-items-center justify-content-between mb-2">
                <div class="col-md-12">
                  <form class="rounded position-relative">
                    <input
                      class="form-control form-control-sm pe-5 bg-transparent"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button
                      class="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset"
                      type="submit"
                    >
                      <i class="fas fa-search fs-6 "></i>
                    </button>
                  </form>
                </div>
              </div>
              <div class="table-responsive">
                <table class="table border mb-0 table-hover align-middle">
                  <thead class="bg-light">
                    <tr>
                      <th class="text-dark">Company Name</th>
                      <th class="text-dark">Rating</th>
                      <th class="text-dark">Date</th>
                      <th class="text-dark">Action</th>
                    </tr>
                  </thead>
                  {allReview?.length > 0 ? (
                    <tbody>
                      {allReview.map((review, index) => (
                        <tr key={index}>
                          <td>
                            <div class="d-sm-flex align-items-center mb-1 mb-sm-0">
                              <div class="avatar avatar-md flex-shrink-0">
                                <img
                                  class="avatar-img rounded-circle"
                                  src="../assets/img/user/user-2.jpg"
                                  alt="avatar"
                                />
                              </div>
                              <div class="ms-0 ms-sm-2 mt-2 mt-sm-0">
                                <h6 class="mb-1">Arielle Norheim </h6>
                                <ul class="list-inline mb-0 small">
                                  <li class="list-inline-item fw-light me-2 mb-1 mb-sm-0">
                                    arinorheim@hotmail.com
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </td>
                          <td>
                            <ul class="list-inline mb-0">
                              <li class="list-inline-item me-0 small">
                                <i class="fas fa-star text-warning"></i>
                              </li>
                              <li class="list-inline-item me-0 small">
                                <i class="fas fa-star text-warning"></i>
                              </li>
                              <li class="list-inline-item me-0 small">
                                <i class="fas fa-star text-warning"></i>
                              </li>
                              <li class="list-inline-item me-0 small">
                                <i class="fas fa-star text-warning"></i>
                              </li>
                              <li class="list-inline-item me-0 small">
                                <i class="fas fa-star text-warning"></i>
                              </li>
                            </ul>
                          </td>
                          <td>January 22, 2024</td>
                          <td>
                            <a
                              href="#"
                              data-bs-target="#EditReview"
                              data-bs-toggle="modal"
                              class="btn btn-xs btn-blue-soft btn-bg-xs mb-0"
                              onClick={() => setViewReview(review)}
                            >
                              <i class="fas fa-edit"></i>
                            </a>
                            <a
                              href="#"
                              data-bs-target="#viewReview"
                              data-bs-toggle="modal"
                              class="btn btn-xs btn-success-soft mb-0"
                              onClick={() => setViewReview(review)}
                            >
                              <i class="far fa-fw fa-eye"></i>
                            </a>
                            <button class="btn btn-xs btn-danger-soft mb-0">
                              <i class="fas fa-fw fa-times"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  ) : (
                    <tr>
                      <p>Review not found!</p>
                    </tr>
                  )}
                </table>
              </div>
              <div class="d-sm-flex justify-content-sm-between align-items-sm-center mt-0 mt-sm-1">
                <p class="mb-0 text-center text-sm-start">
                  Showing 1 to 10 of 20 entries
                </p>
                {/* <!-- Pagination --> */}
                <nav
                  class="d-flex justify-content-center mb-0"
                  aria-label="navigation"
                >
                  <ul class="pagination pagination-sm pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
                    <li class="page-item mb-0">
                      <a class="page-link" href="#" tabindex="-1">
                        <i class="fas fa-angle-left"></i>
                      </a>
                    </li>
                    <li class="page-item mb-0">
                      <a class="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li class="page-item mb-0 active">
                      <a class="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li class="page-item mb-0">
                      <a class="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li class="page-item mb-0">
                      <a class="page-link" href="#">
                        <i class="fas fa-angle-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BusinessView(Reviews, "Reviews");
