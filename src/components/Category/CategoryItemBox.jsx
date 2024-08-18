import { IMAGE_URL } from "@/helpers/apiUrl";
import CustomerService from "@/services/CustomerService";
import { useCustomerAboutStore } from "@/store/useCustomerAboutStore";
import { Box, Dialog, DialogContent, DialogContentText } from "@mui/material";
import { useState } from "react";
import CustomerLoginModal from "../Modal/CustomerLoginModal";

const CategoryItemBox = ({ item, index }) => {
  const userProfile = useCustomerAboutStore((state) => state.customer);
  const [messageData, setMessageData] = useState("");
  const [messageOpen, setMessageOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const handleSubmitMessage = () => {
    const payload = {
      business_profile: item.businessProfile.id,
      message: messageData,
      sub_category: item.subCategory
    };

    const res = CustomerService.sendMessageToBusiness(payload).then((data) => {
      console.log(data);
    });
  };
  return (
    <>
      <div className="card mb-4" key={index}>
        <div className="row g-3">
          <div className="col-md-4">
            <div
              id={`carouselExampleFade${index}`}
              className="carousel slide carousel-fade"
            >
              <div className="carousel-inner">
                {/* {item.sliders.length > 0 && item.sliders.map((image, i) => (
                    <div className={`carousel-item ${i === 0 ? 'active' : ''}`} key={i}>
                        <img
                        src={image.src}
                        className="d-block w-100 rounded-3 "
                        alt="..."
                        />
                    </div>
                ))} */}
                <div className={`carousel-item active`} key={1}>
                  <img
                    src={
                      item?.businessProfile?.business_logo
                        ? `${IMAGE_URL}/uploads/business-logo/${item?.businessProfile?.business_logo}`
                        : ""
                    }
                    className="d-block w-100 rounded-3 "
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target={`#carouselExampleFade${index}`}
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target={`#carouselExampleFade${index}`}
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card-body p-0">
              <div className="d-sm-flex justify-content-sm-between align-items-center mb-2">
                <div className="d-flex align-items-center">
                  <div className="avatar avatar-sm">
                    <img
                      className="avatar-img rounded-circle"
                      src={
                        item?.businessProfile?.business_logo
                          ? `${IMAGE_URL}/uploads/business-logo/${item?.businessProfile?.business_logo}`
                          : ""
                      }
                      alt="avatar"
                    />
                  </div>
                  <div className="ms-2">
                    <h5 className="mb-0">
                      <a href={`/listing-details/${item?.businessProfile.slug}`}>
                        {item?.businessProfile?.business_name}
                      </a>
                    </h5>
                    <p className="small mb-0 mb-sm-0 pb-0">
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>{" "}
                      <strong>5.0</strong>
                      (1.5k Reviews) .{" "}
                      <span className="fw-bold text-danger">Closed</span>
                      until 11:30
                    </p>
                  </div>
                </div>
              </div>
              <ul className="list-inline mb-1">
                <li className="list-inline-item fw-light">
                  <i className="fa fa-envelope text-dark me-1"></i>5 Years in
                  business
                </li>
                <li className="list-inline-item fw-light">
                  <i className="fa fa-times text-danger me-1"></i>
                  Family-Owned and Operated
                </li>
                <li className="list-inline-item fw-light">
                  <i className="fa fa-wifi text-primary me-1"></i>
                  Discount Available
                </li>
              </ul>
              <p className="text-truncate-2 d-none d-lg-block pb-0 mb-2">
                {item?.businessProfile?.business_description}
              </p>
              <ul className="list-inline mb-1">
                {/* {item.tags.length > 0 && item.tags.map((tag, i) => (
                    <li className="list-inline-item fw-light" key={i}>
                        <a
                        className="btn btn-light btn-sm py-0 px-1 btn-secondary-soft"
                        href="#"
                        >
                        {tag.name}
                        </a>
                    </li>
                ))} */}
              </ul>
              <ul className="list-inline mb-1">
                <li className="list-inline-item fw-light">
                  <i className="fa fa-check text-success me-1"></i>
                  Accepts Credit Cards
                </li>
                <li className="list-inline-item fw-light">
                  <i className="fa fa-times text-danger me-1"></i>Offers Takeout
                </li>
                <li className="list-inline-item fw-light">
                  <i className="fa fa-check text-success me-1"></i>
                  Offers Catering
                </li>
                <li className="list-inline-item fw-light">
                  <i className="fa fa-times text-danger me-1"></i>Offers Takeout
                </li>
                <li className="list-inline-item fw-light">
                  <i className="fa fa-times text-danger me-1"></i>Offer
                </li>
              </ul>
              <div className="d-sm-flex justify-content-sm-between align-items-center mb-0">
                <div className="mt-0 mb-0">
                  <div className="d-sm-flex">
                    <a href="cart.php">
                      <button className="btn btn-sm btn-outline-dark border-dark-subtle me-2">
                        Order
                      </button>
                    </a>
                    <a href="book-restaurant.php">
                      <button className="btn btn-sm btn-outline-dark border-dark-subtle me-2">
                        Reservation
                      </button>
                    </a>
                    <button className="btn btn-sm btn-outline-dark border-dark-subtle me-2">
                      Directions
                    </button>
                    <a href="tel:+8801722620039">
                      <button className="btn btn-sm btn-outline-dark border-dark-subtle me-2">
                        Call
                      </button>
                    </a>
                    <span onClick={() => setMessageOpen(true)}>
                      <button className="btn btn-sm btn-outline-dark border-dark-subtle me-2">
                        Message
                      </button>
                    </span>
                    <a
                      href=""
                      data-bs-toggle="modal"
                      data-bs-target="#joinlater"
                    >
                      <button className="btn btn-sm btn-outline-dark border-dark-subtle me-2">
                        Join Later
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Dialog
        class="modal fade"
        open={messageOpen}
        maxWidth="sm"
        onClose={() => {
          setMessageOpen(false);
          setMessageData("");
        }}
      >
        <Box className="modal-dialog modal-dialog-scrollable modal-md">
          <DialogContent className="modal-content">
            <DialogContentText>
              <div className="header bg-transparent border-bottom p-3">
                <h5 className="header-title text-danger">
                  Send Massage
                  <button
                    style={{ float: "right", fontSize: "12px" }}
                    type="button"
                    className="btn-close justify-content-end float-right"
                    aria-label="Close"
                    onClick={() => setMessageOpen(false)}
                  ></button>
                </h5>
                <span>
                  We'll remind you when to join based on live wait times
                </span>
              </div>
              <Box className="modal-body" sx={{ padding: "10px" }}>
                <div className="row g-3">
                  {/* <div className="col-6">
                  <label
                    for="fast_name"
                    className="form-label fw-bold text-dark"
                  >
                    Fast Name <span className="star">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control fast_name"
                    id="fast_name"
                    title="fast_name"
                    placeholder="John"
                    required
                    value={messageData?.first_name}
                    onChange={(e) => {
                      setMessageData({
                        ...messageData,
                        first_name: e.target.value
                      })
                    }}
                  />
                  <div className="valid-feedback">Looks Goods</div>
                  <div className="invalid-feedback">
                    Please enter fast name.
                  </div>
                </div>
                <div className="col-6">
                  <label
                    for="last_name"
                    className="form-label fw-bold text-dark"
                  >
                    Last name <span className="star">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control last_name"
                    id="last_name"
                    title="last_name"
                    placeholder="Doe"
                    required
                    value={messageData?.last_name}
                    onChange={(e) => {
                      setMessageData({
                        ...messageData,
                        last_name: e.target.value
                      })
                    }}
                  />
                  <div className="valid-feedback">Looks Goods</div>
                  <div className="invalid-feedback">
                    Please enter last name.
                  </div>
                </div>
                <div className="col-6">
                  <label
                    for="email_address"
                    className="form-label fw-bold text-dark"
                  >
                    Email Address <span className="star">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control email_address"
                    id="email_address"
                    title="email_address"
                    placeholder="johndoe@gmail.com"
                    required
                    value={messageData?.email}
                    onChange={(e) => {
                      setMessageData({
                        ...messageData,
                        email: e.target.value
                      })
                    }}
                  />
                  <div className="valid-feedback">Looks Goods</div>
                  <div className="invalid-feedback">
                    Please enter your email address.
                  </div>
                </div>
                <div className="col-6">
                  <label
                    for="mobile_number"
                    className="form-label fw-bold text-dark"
                  >
                    Mobile number <span className="star">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control mobile_number"
                    id="mobile_number"
                    title="mobile_number"
                    placeholder="+1-237-3456"
                    required
                    value={messageData?.mobile_no}
                    onChange={(e) => {
                      setMessageData({
                        ...messageData,
                        mobile_no: e.target.value
                      })
                    }}
                  />
                  <div className="valid-feedback">Looks Goods</div>
                  <div className="invalid-feedback">
                    Please enter your mobile number.
                  </div>
                </div> */}
                  <div className="col-12">
                    <label
                      for="your_massage"
                      className="form-label fw-bold text-dark"
                    >
                      Your Massage <span className="star">*</span>
                    </label>
                    <textarea
                      type="text"
                      className="form-control your_massage"
                      id="your_massage"
                      title="your_massage"
                      placeholder="Share a few details so we can get you in touch with the business"
                      required
                      value={messageData}
                      onChange={(e) => {
                        setMessageData(e.target.value);
                      }}
                    ></textarea>
                    <div className="valid-feedback">Looks Goods</div>
                    <div className="invalid-feedback">
                      Please enter your massage.
                    </div>
                  </div>
                  <p className="mt-0 mb-0 pt-2 pb-0">
                    We will send your information to the business to help get
                    you a response. By continuing you agree 2nd A friendly{" "}
                    <a href="terms-and-condition.php">
                      <span className="text-primary">Terms of service</span>
                    </a>{" "}
                    and{" "}
                    <a href="privacy-policy.php">
                      <span className="text-primary">Privecy Policy.</span>
                    </a>
                  </p>
                  <div className="col-6">
                    <div className="mt-3 ms-1">
                      {!userProfile && (
                        <span>
                          Already have an account?
                          <span
                            style={{ color: "#066ac9", cursor: "pointer" }}
                            onClick={() => setLoginOpen(true)}
                          >
                            {" "}
                            Sign in
                          </span>
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                      <button
                        className=" btn btn-primary-soft"
                        onClick={() => handleSubmitMessage()}
                      >
                        Send Massage
                      </button>
                    </div>
                  </div>
                </div>
              </Box>
            </DialogContentText>
          </DialogContent>
        </Box>
      </Dialog>
      <CustomerLoginModal
        openLogin={loginOpen}
        closeModal={() => setLoginOpen(false)}
      />
    </>
  );
};

export default CategoryItemBox;
