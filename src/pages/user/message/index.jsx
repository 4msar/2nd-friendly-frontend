import UserView from "@/components/HOC/UserView";
import UserSidebar from "@/components/User/UserSidebar";
import useToken from "@/hooks/useToken";
import CustomerService from "@/services/CustomerService";
import { useAuthStore, useUserStore } from "@/store";
import { useCustomerStore } from "@/store/useCustomerStore";
import React, { useEffect, useState } from "react";

const Message = () => {
  const userProfile = useAuthStore((state) => state.user);
  const isAuthenticated = useToken();

  const allMessage = useUserStore((state) => state.allMessage);
  const setMessage = useUserStore((state) => state.setMessage);
  const [viewMessage, setViewMessage] = useState(null);

  const getAllMessages = async () => {
    const res = await CustomerService.messageAll().then((data) => {
      console.log(data);
      setMessage(data.data.allMessage);
    });
  };

  useEffect(() => {
    if (isAuthenticated) {
      getAllMessages();
    }
  }, [isAuthenticated]);
  return (
    <UserView title="Message">
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
                <h5 className="text-danger mb-2">Messages</h5>
                <div className="d-flex justify-content-left">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb breadcrumb-dots my-0 py-0">
                      <li className="breadcrumb-item">
                        <a href="index.php">Home</a>
                      </li>
                      <li className="breadcrumb-item">My Collection</li>
                      <li className="breadcrumb-item active">Messages</li>
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
                <div className="table-responsive border-0">
                  <table className="table border align-middle p-4 mb-0 table-hover">
                    <thead>
                      <tr>
                        <th>Company Name</th>
                        <th>Title & Message</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allMessage?.length > 0 &&
                        allMessage.map((message, index) => (
                          <tr key={index}>
                            <td>
                              <div className="d-sm-flex align-items-center mb-0 mb-sm-0">
                                <div className="avatar avatar-md flex-shrink-0">
                                  <img
                                    className="avatar-img rounded-1"
                                    src="../assets/img/company-logo/1.svg"
                                    alt="avatar"
                                  />
                                </div>
                                <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                                  <h6 className="mb-1">
                                    <a
                                      href="../listing-detail.php"
                                      target="_blank"
                                    >
                                      Skyline Solutions Inc.
                                    </a>
                                  </h6>
                                  <ul className="list-inline mb-0 small">
                                    <li className="list-inline-item fw-light me-2 mb-1 mb-sm-0">
                                      <span className="badge bg-danger bg-opacity-10 text-danger">
                                        Closed Until 10:00 PM
                                      </span>
                                    </li>
                                    <li className="list-inline-item fw-light me-2 mb-1 mb-sm-0">
                                      <i className="fas fa-star text-warning me-1"></i>
                                      4.5/5.0
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </td>
                            <td className="text-center text-sm-start">
                              <span className="fw-normal text-black">
                                Lorem Ipsum is simply dummy text...
                              </span>
                              <br /> It is a long established fact that a
                              reader...
                            </td>
                            <td>
                              <div className="badge bg-success bg-opacity-10 text-success fw-normal">
                                Awaiting
                              </div>
                            </td>
                            <td>April 1, 2024</td>
                            <td>
                              <a
                                href="message-detail.php"
                                className="text-black"
                              >
                                <i className="far fa-fw fa-eye"></i>
                              </a>
                            </td>
                          </tr>
                        ))}
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

export default Message;
