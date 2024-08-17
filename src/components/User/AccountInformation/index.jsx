import { allStateData } from "@/components/dummy_data/data";
import { IMAGE_URL } from "@/helpers/apiUrl";
import useSnackbar from "@/hooks/useSnackbar";
import useToken from "@/hooks/useToken";
import BusinessService from "@/services/BusinessService";
import CustomerService from "@/services/CustomerService";
import { useBusinessAboutStore, useUserStore } from "@/store";
import { useCustomerAboutStore } from "@/store/useCustomerAboutStore";
import { Button, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";

const AboutUser = () => {
  const isAuthenticated = useToken();
  const snackbar = useSnackbar();
  const [loading, setLoading] = useState(false);
  const userProfile = useCustomerAboutStore((state) => state.customerProfile);
  const customer = useCustomerAboutStore((state) => state.customer);
  const userInfo = useUserStore((state) => state.userOwner);
  // const allState = useUserStore((state) => state.allState);
  const setUserProfile = useCustomerAboutStore((state) => state.setCustomerProfile);
  const allState = allStateData;
  const setAllAboutData = useUserStore((state) => state.setAboutAllData);
  const [fieldErrors, setFieldErrors] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [convertedImage, setConvertedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
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
      setConvertedImage(pngDataUrl);
    };
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    document.getElementById("uploadfile-1").value = "";
  };
  const getAboutUser = async () => {
    const res = await CustomerService.aboutCustomer().then((data) => {
      if (data.data.status === "success") {
        setAllAboutData(data.data);
      }
    });
  };

  const updateAboutUser = () => {
    setLoading(true);
    const payload = {
      ...userProfile,
      image: convertedImage ?? "",
      old_image: userProfile.image ?? "",
    };
    const res = CustomerService.aboutCustomerSave(payload).then((data) => {
      if (data.data.status === "success") {
        snackbar(data.data.message, {variant: "success"})
        getAboutUser();
        setLoading(false);
      } else {
        setFieldErrors(data.data.fieldErrors);
        setLoading(false);
      }
    });
  };

  // console.log(customer);
  

  return (
    <>
      {loading && (
        <div className="preloader-api">
          <div className="preloader-item">
            <div className="spinner-grow text-primary"></div>
          </div>
        </div>
      )}
      <div className="row g-3 needs-validation">
        {/* <form class="row g-3 needs-validation" noValidate> */}
        <div class="col-12 justify-content-center align-items-center">
          <label class="form-label fw-normal text-dark">Profile picture</label>
          <div className="d-flex align-items-center">
            <label
              className="position-relative me-4"
              htmlFor="uploadfile-1"
              title="Replace this pic"
            >
              <span className="avatar avatar-xl">
                <img
                  id="uploadfile-1-preview"
                  className="avatar-img rounded-circle border border-white border-3 shadow"
                  src={
                    selectedImage ||
                    `${IMAGE_URL}/uploads/customer-image/${userProfile?.image}`
                  }
                  alt="Preview"
                />
              </span>
              {selectedImage && (
                <button
                  type="button"
                  className="uploadremove"
                  onClick={handleRemoveImage}
                >
                  <i className="bi bi-x text-white"></i>
                </button>
              )}
            </label>
            <label className="btn btn-primary-soft mb-0" htmlFor="uploadfile-1">
              Change Logo
            </label>
            <input
              id="uploadfile-1"
              className="form-control d-none"
              type="file"
              onChange={handleImageChange}
            />
          </div>
        </div>
        <div class="col-md-6 col-sm-12 bg-light-input">
          <label class="form-label fw-normal text-black" for="first_name">
            First name <span class="star">*</span>
          </label>
          <input
            value={userProfile?.first_name ?? customer?.first_name}
            class="form-control first_name"
            type="text"
            title="first_name"
            id="first_name"
            placeholder="e. g. John"
            required
            onChange={(e) =>
              setUserProfile({ ...userProfile, first_name: e.target.value })
            }
          />
          <div class="valid-feedback">Looks good!</div>
          {fieldErrors?.first_name && (
            <div class="text-danger">Please enter first name.</div>
          )}
        </div>
        <div class="col-md-6 col-sm-12 bg-light-input">
          <label class="form-label fw-normal text-dark" for="last_name">
            Last name <span class="star">*</span>
          </label>
          <input
            value={userProfile?.last_name ?? customer?.last_name}
            class="form-control last_name"
            type="text"
            id="last_name"
            title="last_name"
            placeholder="Type your last here"
            required
            onChange={(e) =>
              setUserProfile({ ...userProfile, last_name: e.target.value })
            }
          />
          <div class="valid-feedback">Looks good!</div>
          {fieldErrors?.last_name && (
            <div class="text-danger">Please enter last name.</div>
          )}
        </div>
        {/* <div class="col-md-6 col-sm-12 bg-light-input">
          <label class="form-label fw-normal text-dark" for="username">
            Username <span class="star">*</span>
          </label>
          <input
            value={userProfile?.username ?? userInfo?.username}
            class="form-control username"
            type="text"
            id="username"
            title="username"
            placeholder="Type your last here"
            required
            onChange={(e) =>
              setUserProfile({ ...userProfile, username: e.target.value })
            }
          />
          <div class="valid-feedback">Looks good!</div>
          {fieldErrors?.username && (
            <div class="text-danger">Please enter last name.</div>
          )}
        </div> */}

        <div class="col-md-6 col-sm-12 bg-light-input">
          <label class="form-label fw-normal text-dark" for="email">
            Email <span class="star">*</span>
          </label>
          <input
            type="email"
            class="form-control email"
            title="email"
            id="email"
            placeholder="example@example.com"
            required
            disabled={customer?.email}
            value={customer?.email}
            onChange={(e) =>
              setUserProfile({ ...userProfile, email: e.target.value })
            }
          />
          <div class="valid-feedback">Looks good!</div>
          {fieldErrors?.email && (
            <div class="text-danger">Please enter phone number.</div>
          )}
        </div>
        <div class="col-md-6 col-sm-12 bg-light-input">
          <label class="form-label fw-normal text-dark" for="phone">
            Phone <span class="star">*</span>
          </label>
          <input
            type="number"
            class="form-control phone"
            title="phone"
            id="phone"
            placeholder="e.g. (234)567-890"
            required
            value={userProfile?.mobile_no}
            onChange={(e) =>
              setUserProfile({ ...userProfile, mobile_no: e.target.value })
            }
          />
          <div class="valid-feedback">Looks good!</div>
          {fieldErrors?.mobile_no && (
            <div class="text-danger">Please enter phone number.</div>
          )}
        </div>
        <div class="col-md-6 col-sm-4 bg-light-input">
          <label class="form-label fw-normal text-dark" for="state">
            Gender <span class="star">*</span>
          </label>
          <select
            class="form-select js-choice state"
            id="state"
            title="state"
            aria-label=".form-select-lg"
            required
            value={userProfile?.gender}
            onChange={(e) =>
              setUserProfile({ ...userProfile, gender: e.target.value })
            }
          >
            <option value="">Select Gender</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Other</option>
          </select>
          <div class="valid-feedback">Looks good!</div>
          {fieldErrors?.gender && (
            <div class="text-danger">Please select state.</div>
          )}
        </div>
        <div class="col-md-6 col-sm-12 bg-light-input">
          <label
            class="form-label fw-normal text-dark"
            for="Official_address_line1"
          >
            Address <span class="star">*</span>
          </label>
          <input
            class="form-control address_line_1"
            id="Official_address_line1"
            title="Official_address_line1"
            type="text"
            placeholder="e.g. 123 Main Street, apt 4B"
            required
            value={userProfile?.address}
            onChange={(e) =>
              setUserProfile({
                ...userProfile,
                address: e.target.value,
              })
            }
          />
          <div class="valid-feedback">Looks good!</div>
          {fieldErrors?.address && (
            <div class="text-danger">Please enter office address 1 .</div>
          )}
        </div>
        <div class="col-md-6 col-sm-4 bg-light-input">
          <label class="form-label fw-normal text-dark" for="city">
            City <span class="star">*</span>
          </label>
          <input
            class="form-control city"
            type="text"
            id="city"
            title="city"
            placeholder="e.g. Oxnard"
            required
            value={userProfile?.city}
            onChange={(e) =>
              setUserProfile({ ...userProfile, city: e.target.value })
            }
          />
          <div class="valid-feedback">Looks good!</div>
          {fieldErrors?.city && (
            <div class="text-danger">Please enter city.</div>
          )}
        </div>
        <div class="col-md-6 col-sm-4 bg-light-input">
          <label class="form-label fw-normal text-dark" for="state">
            State <span class="star">*</span>
          </label>
          <select
            class="form-select js-choice state"
            id="state"
            title="state"
            aria-label=".form-select-lg"
            required
            value={userProfile?.state}
            onChange={(e) =>
              setUserProfile({ ...userProfile, state: e.target.value })
            }
          >
            <option value="">Select State</option>
            <option value="1">Select State</option>
            {allState.length > 0 &&
              allState.map((state, index) => (
                <option value={state.id} key={index}>
                  {state.name}
                </option>
              ))}
          </select>
          <div class="valid-feedback">Looks good!</div>
          {fieldErrors?.state && (
            <div class="text-danger">Please select state.</div>
          )}
        </div>
        <div class="col-md-6 col-sm-4 bg-light-input">
          <label class="form-label fw-normal text-dark" for="zip">
            Zip <span class="star">*</span>
          </label>
          <input
            class="form-control zip"
            type="text"
            id="zip"
            title="zip"
            placeholder="e.g. 93030"
            required
            value={userProfile?.zip}
            onChange={(e) =>
              setUserProfile({ ...userProfile, zip: e.target.value })
            }
          />
          <div class="valid-feedback">Looks good!</div>
          {fieldErrors?.zip && (
            <div class="text-danger">Please enter zip code.</div>
          )}
        </div>

        <div class="d-sm-flex justify-content-end mb-3">
          <Button
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              background: "#000",
              color: "#fff",
            }}
            type="submit"
            class="btn btn-primary-soft mb-0"
            onClick={updateAboutUser}
            disabled={loading}
            startIcon={loading ? <CircularProgress size={15} /> : ""}
            variant="contained"
          >
            Save changes
          </Button>
        </div>

        {/* </form> */}
      </div>
    </>
  );
};

export default AboutUser;
