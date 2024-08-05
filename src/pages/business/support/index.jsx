import SidebarInformation from "@/components/Business/SidebarInformation";
import BusinessView from "@/components/HOC/BusinessView";
import useToken from "@/hooks/useToken";
import BusinessService from "@/services/BusinessService";
import { useBusinessAboutStore } from "@/store";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  IconButton,
  Modal,
} from "@mui/material";
import Link from "next/link";
import React, { useRef, useState } from "react";
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

  const [support, setSupport] = useState({
    title: "",
    category: "",
    details: "",
    image: "",
    old_image: "",
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        convertToPNG(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const convertToPNG = (dataUrl) => {
    const img = new Image();
    img.src = `${dataUrl}`;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      const pngDataUrl = canvas.toDataURL("image/png");
      setSupport({
        ...support,
        image: pngDataUrl,
      });
    };
  };

  // Ref object to reference the input element
  const inputFile = useRef(null);

  // Function to reset the input element
  const handleReset = () => {
    if (inputFile.current) {
      inputFile.current.value = "";
      inputFile.current.type = "text";
      inputFile.current.type = "file";
    }
  };

  const handleSupportCreate = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const payload = {
      ...support,
    };

    const res = BusinessService.supportCreate(payload).then((data) => {
      console.log({ data });
      if (data.data.status === "success") {
        //   getCategoriesData();
        handleReset();
      }
    });
  };
  return (
    <BusinessView title="Support">
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
                        <th
                          scope="col"
                          class="border-0 rounded-start text-dark"
                        >
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
          tabindex="-1"
          width={700}
          onClose={() => setOpen(false)}
        >
          <DialogContent class="modal-content">
            <DialogContentText>
              <Box sx={{ padding: "20px !important" }}>
                <div class="modal-header">
                  <h5 class="modal-title text-dark mb-0" id="albumCreate">
                    Support Create
                  </h5>
                  <button
                    type="button"
                    class="btn btn-sm btn-light mb-0"
                    onClick={() => setOpen(false)}
                  >
                    <i class="bi bi-x-lg">x</i>
                  </button>
                </div>

                <Box class="modal-body">
                  <div class="row g-3 needs-validation">
                    <div class="col-md-6 col-sm-12 bg-light-input">
                      <label
                        class="form-label fw-normal text-black"
                        for="title"
                      >
                        Support Title <span class="star">*</span>
                      </label>
                      <input
                        class="form-control title"
                        type="text"
                        title="title"
                        id="title"
                        placeholder="e. g. Need Marketing Manager"
                        required
                        autoComplete="off"
                        onChange={(e) =>
                          setSupport({
                            ...support,
                            title: e.target.value,
                          })
                        }
                      />
                      <div class="valid-feedback">Looks good!</div>
                      <div class="invalid-feedback">
                        Please enter job title.
                      </div>
                    </div>
                    <div class="col-md-6 bg-light-input">
                      <label
                        class="form-label fw-bold text-dark"
                        for="category"
                      >
                        Job Type <span class="star">*</span>
                      </label>
                      <select
                        class="form-select bg-light category"
                        id="category"
                        name="category"
                        
                        required
                        onChange={(e) =>
                          setSupport({
                            ...support,
                            category: e.target.value,
                          })
                        }
                      >
                        <option value="">Please Select</option>
                        <option value="1">Technical Issues</option>
                        <option value="2">Billing and Payments</option>
                        <option value="3">Product Inquiries</option>
                        <option value="4">Complaints and Feedback</option>
                        <option value="5">Account Management</option>
                        <option value="6">Policy Questions</option>
                      </select>
                      <div class="valid-feedback">Looks good!</div>
                      <div class="invalid-feedback">
                        Please select a job type.
                      </div>
                    </div>

                    <div class="col-md-12 col-sm-4 bg-light-input">
                      <label
                        class="form-label fw-normal text-dark"
                        for="details"
                      >
                        Support Details <span class="star">*</span>
                      </label>
                      <textarea
                        class="form-control details"
                        rows="5"
                        type="text"
                        id="details"
                        title="details"
                        name="details"
                        placeholder="E. g. Please write your job details here..."
                        
                        required
                        onChange={(e) =>
                          setSupport({
                            ...support,
                            details: e.target.value,
                          })
                        }
                      ></textarea>
                      <div class="valid-feedback">Looks good!</div>
                      <div class="invalid-feedback">
                        Please enter your job details.
                      </div>
                    </div>
                    <div class="col-6">
                      <input
                        ref={inputFile}
                        class="form-control form-control-sm"
                        onChange={(e) => handleImageChange(e)}
                        type="file"
                        id="formFileMultiple"
                        multiple
                      />
                    </div>
                  </div>
                </Box>
                <Box mt={2} sx={{ display: "flex", gap: 2 }}>
                  <Button
                    type="button"
                    class="btn btn-danger-soft my-0"
                    data-bs-dismiss="modal"
                    sx={{ marginRight: "10px !important" }}
                  >
                    Close
                  </Button>
                  <Button
                    onClick={(event) => handleSupportCreate(event)}
                    class="btn btn-success-soft my-0"
                    data-bs-dismiss="modal"
                  >
                    Submit
                  </Button>
                </Box>
              </Box>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </main>
    </BusinessView>
  );
};

export default Support;
