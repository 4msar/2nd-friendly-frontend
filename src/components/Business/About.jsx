import { IMAGE_URL } from "@/helpers/apiUrl";
import useSnackbar from "@/hooks/useSnackbar";
import useToken from "@/hooks/useToken";
import BusinessService from "@/services/BusinessService";
import { useBusinessAboutStore } from "@/store";
import { Button, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";

const  AboutBusiness = () => {
  const snackbar = useSnackbar();
  const isAuthenticated = useToken();
  const [loading, setLoading] = useState(false);
  const userProfile = useBusinessAboutStore((state) => state.businessProfile);
  const userInfo = useBusinessAboutStore((state) => state.businessOwner);
  const allState = useBusinessAboutStore((state) => state.allState);
  const setUserProfile = useBusinessAboutStore(
    (state) => state.setBusinessProfile
  );

  const [fieldError, setFieldError] = useState("");

  const setAllAboutData = useBusinessAboutStore(
    (state) => state.setAboutAllData
  );

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
  const getAboutBusiness = async () => {
    const res = await BusinessService.aboutBusiness().then((data) => {
      if (data.data.status === "success") {
        setAllAboutData(data.data);
      }
    });
  };

  const updateAboutBusiness =  () => {
  
    setLoading(true);
    const payload = {
      ...userProfile,
      image: convertedImage,
      old_image: userProfile.business_logo ?? "",
      first_name : userProfile.first_name ?? userInfo.first_name,
      last_name : userProfile.last_name ?? userInfo.last_name,
    };
    const res = BusinessService.aboutBusinessSave(payload).then(
      (data) => {
        console.log(data.data);
        if (data.data.status === "success") {
          snackbar(data.data.message, {variant: "success"})
          getAboutBusiness();
          setLoading(false);
          setFieldError("");
        } else{
          setFieldError(data.data.fieldErrors)
          setLoading(false)
        }
      }
    );
  };


  return (
    <div className="row g-3 needs-validation">  
      {/* <form class="row g-3 needs-validation" noValidate> */}
        <div class="col-12 justify-content-center align-items-center">
          <label class="form-label fw-normal text-dark">Business Logo</label>
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
                  src={selectedImage || `${IMAGE_URL}/uploads/business-logo/${userProfile?.business_logo}`}
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
          <label class="form-label fw-normal text-black" for="company_name">
            Company name <span class="star">*</span>
          </label>
          <input
            class="form-control business_name"
            type="text"
            title="business_name"
            id="business_name"
            placeholder="e. g. Redwood Solutions Co."
            required
            value={userProfile?.business_name}
            onChange={(e) =>
              setUserProfile({ ...userProfile, business_name: e.target.value })
            }
          />
          <div class="valid-feedback">Looks good!</div>
          {fieldError?.business_name && (
            <div class="text-danger">Please enter company name.</div>
           )}
        </div>
        <div class="col-md-6 col-sm-12 bg-light-input">
          <label class="form-label fw-normal text-dark" for="official_email">
            Official email <span class="star">*</span>
          </label>
          <input
            class="form-control official_email"
            type="email"
            title="official_email"
            id="official_email"
            placeholder="e. g. johndoe@gmail.com"
            
            required
            value={userProfile?.official_email}
            onChange={(e) =>
              setUserProfile({ ...userProfile, official_email: e.target.value })
            }
          />
          <div class="valid-feedback">Looks good!</div>
          {fieldError?.official_email && (
          <div class="text-danger">Please enter email address.</div>
          )}
        </div>
        <div class="col-md-6 col-sm-12 bg-light-input">
          <label class="form-label fw-normal text-dark" for="official_phone">
            Official phone <span class="star">*</span>
          </label>
          <input
            type="number"
            class="form-control official_phone"
            title="official_phone"
            id="official_phone"
            placeholder="e.g. (234)567-890"
            
            required
            value={userProfile?.official_phone}
            onChange={(e) =>
              setUserProfile({ ...userProfile, official_phone: e.target.value })
            }
          />
          <div class="valid-feedback">Looks good!</div>
          {fieldError?.official_phone && (
            <div class="text-danger">Please enter phone number.</div>
          )}
        </div>
        <div class="col-md-6 col-sm-12 bg-light-input">
          <label
            class="form-label fw-normal text-dark"
            for="Official_address_line1"
          >
            Official address <span class="star">*</span>
          </label>
          <input
            class="form-control address_line_1"
            id="Official_address_line1"
            title="Official_address_line1"
            type="text"
            placeholder="e.g. 123 Main Street, apt 4B"
            
            required
            value={userProfile?.Official_address_line1}
            onChange={(e) =>
              setUserProfile({
                ...userProfile,
                Official_address_line1: e.target.value,
              })
            }
          />
          <div class="valid-feedback">Looks good!</div>
          {fieldError?.Official_address_line1 && (
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
          {fieldError?.city && (
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
            {allState.length > 0 && allState.map((state, index) => (
              <option value={state.id} key={index}>{state.name}</option>
            ))}
            
          </select>
          <div class="valid-feedback">Looks good!</div>
          {fieldError?.state && (
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
          {fieldError?.zip && (
            <div class="text-danger">Please enter zip code.</div>
          )}
        </div>
        <div class="col-md-6 col-sm-4 bg-light-input">
          <label class="form-label fw-normal text-dark" for="website_link">
            Website
          </label>
          <input
            class="form-control website"
            type="url"
            id="website_link"
            title="website_link"
            placeholder="e. g. www.2ndafriendly.com"
            
            value={userProfile?.website_link}
            onChange={(e) =>
              setUserProfile({ ...userProfile, website_link: e.target.value })
            }
          />
          <div class="valid-feedback">Looks good!</div>
          {fieldError?.website_link && (

          <div class="text-danger">Please enter website.</div>
          )}
        </div>
        <div class="col-md-12 col-sm-4 bg-light-input">
          <label class="form-label fw-normal text-dark" for="history">
            History <span class="star">*</span>
          </label>
          <textarea
            class="form-control website"
            rows="4"
            type="text"
            id="history"
            title="history"
            placeholder="Write the history of your business."
            
            required
            value={userProfile?.history}
            onChange={(e) =>
              setUserProfile({ ...userProfile, history: e.target.value })
            }
          ></textarea>
          <div class="valid-feedback">Looks good!</div>
          {fieldError?.history && (

          <div class="text-danger">Please enter history.</div>
          )}
        </div>
        <div class="header mb-2 border-bottom">
          <h5 class="header-title text-danger mb-0 pb-1">Company Owner</h5>
        </div>
        <div class="col-md-6 col-sm-12 bg-light-input">
          <label class="form-label fw-normal text-black" for="first_name">
            First name <span class="star">*</span>
          </label>
          <input
            value={userProfile?.first_name ?? userInfo?.first_name}
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
          {fieldError?.first_name && (

          <div class="text-danger">Please enter first name.</div>
          )}
        </div>
        <div class="col-md-6 col-sm-12 bg-light-input">
          <label class="form-label fw-normal text-dark" for="last_name">
            Last name <span class="star">*</span>
          </label>
          <input
            value={userProfile?.last_name ?? userInfo?.last_name}
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
          {fieldError?.last_name && (
            <div class="text-danger">Please enter last name.</div>
          )}
        </div>
        <div class="d-sm-flex justify-content-end mb-3">
          <Button
            sx={{display: 'flex', justifyContent: 'center', gap:2, background: "#000", color: '#fff'}}
            type="submit"
            class="btn btn-primary-soft mb-0"
            onClick={updateAboutBusiness}
            disabled={loading}
            startIcon={loading ?  <CircularProgress size={15} /> : ""}
            variant="contained"
          >
          
             
              Save changes
            
          </Button>
        </div>
        
      {/* </form> */}
    </div>
  );
};

export default AboutBusiness;
