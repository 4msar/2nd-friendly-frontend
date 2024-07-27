import SidebarInformation from "@/components/Business/SidebarInformation";
import BusinessView from "@/components/HOC/BusinessView";
import useToken from "@/hooks/useToken";
import BusinessService from "@/services/BusinessService";
import { useBusinessAboutStore } from "@/store";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  Modal,
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  backgroundColor: "#ffffff",
  borderRadius: "10px",
  boxShadow: 24,
  padding: "20px",
};

const Support = () => {
  const userProfile = useBusinessAboutStore((state) => state.businessProfile);
  const isAuthenticated = useToken();
  const [open, setOpen] = useState(false);

  const [job, setJob] = useState({
    title: "",
    job_type: "",
    job_level: "",
    department: 0,
    details: "",
    expiration_date: "",
    status: "",
  });

  const handleJobCreate = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const payload = {
      ...job,
    };

    const res = BusinessService.careerCreate(payload).then((data) => {
      console.log({ data });
      if (data.data.status === "success") {
        //   getCategoriesData();
      }
    });
  };
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
              <h5 className="text-danger mb-2">Careers</h5>
              <div className="d-flex justify-content-left">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-dots my-0 py-0">
                    <li className="breadcrumb-item">
                      <a href="index.php">Home</a>
                    </li>
                    <li className="breadcrumb-item">Business Information</li>
                    <li className="breadcrumb-item">Careers</li>
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
            <div class="col-xl-9">
              <div class="col d-md-flex justify-content-between align-items-center mt-3">
                <div>
                  <h5 class="mb-2 mb-sm-0 text-danger pb-0">
                    All Support Message
                  </h5>
                  <p class="mb-0 pb-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
                <div class="d-flex align-items-center mt-2 mt-md-0">
                  <Link
                    href="#"
                    onClick={() => setOpen(!open)}
                    class="btn btn-sm btn-dark mb-3"
                  >
                    Create Ticket
                  </Link>
                </div>
              </div>
              <div class="row g-3 align-items-center justify-content-between mb-2">
                <div class="col-md-8">
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
                <div class="col-md-3">
                  <form>
                    <select
                      class="form-select form-select-sm js-choice border-0 z-index-9 bg-transparent"
                      aria-label=".form-select-sm"
                    >
                      <option value="">Sort by</option>
                      <option>Free</option>
                      <option>Newest</option>
                      <option>Most popular</option>
                      <option>Most Viewed</option>
                    </select>
                  </form>
                </div>
              </div>
              <div class="table-responsive border-0">
                <table class="table align-middle p-4 mb-0 table-hover border">
                  <thead class="border-bottom bg-light">
                    <tr>
                      <th scope="col" class="border-0 text-dark">
                        Ticket ID
                      </th>
                      <th scope="col" class="border-0 rounded-start text-dark">
                        Created Date
                      </th>
                      <th scope="col" class="border-0 text-dark">
                        Ticket Title
                      </th>
                      <th scope="col" class="border-0 text-dark">
                        Ticket Category
                      </th>
                      <th scope="col" class="border-0 text-black">
                        Status
                      </th>
                      <th scope="col" class="border-0 text-black">
                        Updated Date
                      </th>
                      <th scope="col" class="border-0 rounded-end text-dark">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#102356</td>
                      <td>January 26, 2024</td>
                      <td>
                        <a href="support-detail.php" class="fw-bold">
                          Can't create account
                        </a>
                      </td>
                      <td>Account related</td>
                      <td class="text-center text-sm-start">
                        <span class="badge bg-success bg-opacity-10 text-success">
                          In-Progress
                        </span>
                      </td>
                      <td>May 21, 2023</td>
                      <td>
                        <a href="support-form.php" class="text-black">
                          <i class="far fa-fw fa-edit"></i>
                        </a>{" "}
                        <a href="support-detail.php" class="text-black">
                          <i class="far fa-fw fa-eye"></i>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="d-sm-flex justify-content-sm-between align-items-sm-center mt-4 mt-sm-3">
                <p class="mb-0 text-center text-sm-start">
                  Showing 1 to 8 of 20 entries
                </p>
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
      <Dialog
        class="modal fade"
        open={open}
        width="500px"
        onClose={() => setOpen(false)}
      >
        <Box class="modal-dialog modal-dialog-centered">
          <DialogContent class="modal-content">
            {/* <!-- Modal header --> */}
            <div class="modal-header">
              
              <IconButton
                aria-label="close"
                onClick={() => setOpen(false)}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
            </div>
            {/* <!-- Modal body --> */}
            <Box class="modal-body" sx={{ padding: "20px" }}>
            <h5 class="modal-title text-dark mb-0">Job Create</h5><br />
              <div class="row g-3 needs-validation">
                <div class="col-md-6 col-sm-12 bg-light-input">
                  <label
                    class="form-label fw-normal text-black"
                    for="job_title"
                  >
                    Job Title <span class="star">*</span>
                  </label>
                  <input
                    class="form-control job_title"
                    type="text"
                    title="job_title"
                    id="job_title"
                    placeholder="e. g. Need Marketing Manager"
                    required
                    autoComplete="off"
                    onChange={(e) =>
                      setJob({
                        ...job,
                        title: e.target.value,
                      })
                    }
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please enter job title.</div>
                </div>
                <div class="col-md-6 bg-light-input">
                  <label class="form-label fw-bold text-dark" for="job_type">
                    Job Type <span class="star">*</span>
                  </label>
                  <select
                    class="form-select bg-light job_type"
                    id="job_type"
                    name="job_type"
                    autofocus
                    required
                    onChange={(e) =>
                      setJob({
                        ...job,
                        job_type: e.target.value,
                      })
                    }
                  >
                    <option value="">Please Select</option>
                    <option value="1">Full Time</option>
                    <option value="2">Half Time</option>
                    <option value="3">Contractual</option>
                    <option value="4">Hourly</option>
                  </select>
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please select a job type.</div>
                </div>
                <div class="col-md-6 bg-light-input">
                  <label class="form-label fw-bold text-dark" for="job_level">
                    Job Level <span class="star">*</span>
                  </label>
                  <select
                    class="form-select bg-light job_level"
                    id="job_level"
                    name="job_level"
                    autofocus
                    required
                    onChange={(e) =>
                      setJob({
                        ...job,
                        job_level: e.target.value,
                      })
                    }
                  >
                    <option value="">Please Select</option>
                    <option value="1">Entry Level</option>
                    <option value="2">Mid Level</option>
                    <option value="3">High Level</option>
                  </select>
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please select a job level.</div>
                </div>
                <div class="col-md-6 bg-light-input">
                  <label class="form-label fw-bold text-dark" for="department">
                    Department <span class="star">*</span>
                  </label>
                  <select
                    class="form-select bg-light department"
                    id="department"
                    name="department"
                    autofocus
                    required
                    onChange={(e) =>
                      setJob({
                        ...job,
                        department: e.target.value,
                      })
                    }
                  >
                    <option value="">Please Select</option>
                    <option value="1">Marketing</option>
                    <option value="2">Human Resource</option>
                    <option value="3">Account Officer</option>
                  </select>
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">
                    Please select a department.
                  </div>
                </div>
                <div class="col-md-12 col-sm-4 bg-light-input">
                  <label
                    class="form-label fw-normal text-dark"
                    for="job_details"
                  >
                    Job Details <span class="star">*</span>
                  </label>
                  <textarea
                    class="form-control job_details"
                    rows="5"
                    type="text"
                    id="job_details"
                    title="job_details"
                    name="job_details"
                    placeholder="E. g. Please write your job details here..."
                    autofocus
                    required
                    onChange={(e) =>
                      setJob({
                        ...job,
                        details: e.target.value,
                      })
                    }
                  ></textarea>
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">
                    Please enter your job details.
                  </div>
                </div>
                <div class="col-md-6 col-sm-12 bg-light-input">
                  <label class="form-label fw-normal text-dark" for="date_time">
                    From Date <span class="star">*</span>
                  </label>
                  <input
                    class="form-control date_time"
                    id="date_time"
                    title="date_time"
                    type="date"
                    placeholder=""
                    required
                    value={job.expiration_date}
                    onChange={(e) => {
                      setJob({
                        ...job,
                        expiration_date: e.target.value,
                      });
                    }}
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please enter date & time.</div>
                </div>
                <div class="col-md-6 bg-light-input">
                  <label class="form-label fw-bold text-dark" for="status">
                    Status <span class="star">*</span>
                  </label>
                  <select
                    class="form-select bg-light status"
                    id="status"
                    name="status"
                    autofocus
                    required
                    onChange={(e) =>
                      setJob({
                        ...job,
                        status: e.target.value,
                      })
                    }
                  >
                    <option value="">Please Select</option>
                    <option value="1">Active</option>
                    <option value="2">Inactive</option>
                  </select>
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please select a status.</div>
                </div>
              </div>
            </Box>
            {/* <!-- Modal footer --> */}

            <DialogActions>
              <button
                type="button"
                class="btn btn-danger-soft my-0"
                data-bs-dismiss="modal"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
              <button
                onClick={(event) => handleJobCreate(event)}
                class="btn btn-success-soft my-0"
                data-bs-dismiss="modal"
              >
                Submit
              </button>
            </DialogActions>
          </DialogContent>
        </Box>
      </Dialog>
    </main>
  );
};

export default BusinessView(Support, "Support");
