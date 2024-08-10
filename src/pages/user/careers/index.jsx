import UserView from "@/components/HOC/UserView";
import UserSidebar from "@/components/User/UserSidebar";
import useToken from "@/hooks/useToken";
import CustomerService from "@/services/CustomerService";
import { useAuthStore, useCustomerStore } from "@/store";
import React, { useEffect, useState } from "react";

const UserCareer = () => {
    const userProfile = useAuthStore((state) => state.user);
  const isAuthenticated = useToken();

  const allCareer = useCustomerStore((state) => state.careerAll);
  const setSupport = useCustomerStore((state) => state.setCareerAll);
  const [viewSupport, setViewSupport] = useState(null);

  const getAllCareer = async () => {
    const res = await CustomerService.careerAll().then((data) => {
      console.log(data);
      setSupport(data.data.allCareer);
    });
  };

  useEffect(() => {
    if (isAuthenticated) {
      getAllCareer();
    }
  }, [isAuthenticated]);
  return (
    <UserView title="Career">
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
                <h5 className="text-danger mb-2">Support</h5>
                <div className="d-flex justify-content-left">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb breadcrumb-dots my-0 py-0">
                      <li className="breadcrumb-item">
                        /user/<a href="index">Home</a>
                      </li>
                      <li className="breadcrumb-item">My Collection</li>
                      <li className="breadcrumb-item active">Support</li>
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
                {/* <?php include("side/user/bar-collection"); ?> */}
                <UserSidebar profile={userProfile} />
              </div>
              <div className="col-xl-9">
                <div className="table-responsive border-0">
                  <table className="table align-middle p-4 mb-0 table-hover border">
                    <thead className="border-bottom bg-light">
                      <tr>
                        <th scope="col" className="border-0 text-dark">
                          Created at
                        </th>
                        <th
                          scope="col"
                          className="border-0 rounded-start text-dark"
                        >
                          Subject
                        </th>
                        <th scope="col" className="border-0 text-dark">
                          Ticket
                        </th>
                        <th scope="col" className="border-0 text-black">
                          Status
                        </th>
                        <th scope="col" className="border-0 text-black">
                          Updated at
                        </th>
                        <th
                          scope="col"
                          className="border-0 rounded-end text-dark"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {allCareer?.length > 0 &&
                        allCareer.map((career, index) => (
                          <tr key={key}>
                            <td>January 26, 2024</td>
                            <td>
                              <h6 className="mt-2 mt-lg-0 mb-0">
                                <a href="/user/support-detail">
                                  Technical Issue
                                </a>
                              </h6>
                            </td>
                            <td>#102356</td>
                            <td className="text-center text-sm-start">
                              <span className="badge bg-success bg-opacity-10 text-success">
                                Closed
                              </span>
                            </td>
                            <td>May 21, 2023</td>
                            <td>
                              <a
                                href="/user/support-detail"
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
                {/* <!-- Pagination START --> */}
                <div className="d-sm-flex justify-content-sm-between align-items-sm-center mt-4 mt-sm-3">
                  <p className="mb-0 text-center text-sm-start">
                    Showing 1 to 8 of 20 entries
                  </p>
                  {/* <!-- Pagination --> */}
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
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </UserView>
  )
}

export default UserCareer;