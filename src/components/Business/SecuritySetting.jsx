import { isEmpty } from "@/helpers/functions";
import BusinessService from "@/services/BusinessService";
import { useSnackbar } from "notistack";
import React from "react";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import { Button, CircularProgress } from "@mui/material";

const SecuritySetting = () => {
  const [fieldError, setFieldError] = useState("");
  const snackbar = useSnackbar();
  const [password, setPassword] = useState({
    old_password: "",
    password: "",
    confirm_password: "",
  });

  const [phoneNo, setPhoneNo] = useState("");

  const [loading, setLoading] = useState(false);

  const changePassword = () => {
    setLoading(true);
    if (isEmpty(password.old_password)) {
      snackbar("Please enter old password", { variant: "error" });
      setLoading(false);
      return false;
    }
    if (password.password != password.confirm_password) {
      snackbar("Password miss match", { variant: "error" });
      return false;
    }

    const payload = {
      ...password,
    };

    const res = BusinessService.passwordChange(payload).then((data) => {
      if (data.data.status === "success") {
        swal(data.data.message, {
          icon: "success",
        });
        setLoading(false);
        setFieldError("");
        setPassword({
          old_password: "",
          password: "",
          confirm_password: "",
        });
      } else {
        setFieldError(data.data.fieldErrors);
        setLoading(false);
      }
    });
  };

  const changePhone = () => {
    setLoading(true);
    if (isEmpty(phoneNo)) {
      snackbar("Please enter phone number", { variant: "error" });
      setLoading(false);
      return false;
    }
    

    const payload = {
      mobile_no: phoneNo,
    };

    const res = BusinessService.phoneChange(payload).then((data) => {
      console.log(data.data);
      
      if (data.data.status === "success") {
        swal(data.data.message, {
          icon: "success",
        });
        setLoading(false);
        setFieldError("");
      } else {
        setFieldError(data.data.fieldErrors);
        setLoading(false);
      }
    });
  }

  return (
    <div>
      <div class="border-bottom mb-2 pb-2">
        <h5 class="mb-0 mb-sm-0 text-danger pb-0 fw-bold">Change Password</h5>
        <p class="mb-0 pb-0">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy.{" "}
        </p>
      </div>
      <div class="row">
        <form class="needs-validation" noValidate>
          <div class="col-sm-12 col-md-12 col-lg-6">
            <div class="mb-2 pt-2">
              <label class="form-label fw-normal text-dark">
                Old Password <span class="star">*</span>
              </label>
              <input
                type="text"
                class="form-control"
                id="old_password"
                name="old_password"
                placeholder="************"
                value={password?.old_password}
                onChange={(e) =>
                {
                  setPassword({
                    ...password,
                    old_password: e.target.value,
                  });
                  setFieldError({
                    ...fieldError,
                    old_password: ""
                  })
                }
                  
                }
                required
              />
              <div class="valid-feedback">Looks good!</div>
              {fieldError?.old_password && (
                <div class="text-danger">{fieldError.old_password.message}</div>
              )}
            </div>
            <div class="mb-2 pt-2">
              <label class="form-label fw-normal text-dark">
                New Password <span class="star">*</span>
              </label>
              <input
                type="text"
                class="form-control"
                id="password"
                name="password"
                placeholder="************"
                value={password?.password}
                onChange={(e) =>
                {
                  setPassword({
                    ...password,
                    password: e.target.value,
                  });
                  setFieldError({
                    ...fieldError,
                    password: ""
                  })
                }
                }
                required
              />
              <div class="valid-feedback">Looks good!</div>
              {fieldError?.password && (
                <div class="text-danger">{fieldError.password.message}</div>
              )}
            </div>
            <div class="mb-2 pt-2">
              <label class="form-label fw-normal text-dark">
                Confirm New Password <span class="star">*</span>
              </label>
              <input
                type="text"
                class="form-control confirm_password"
                id="confirm_password"
                name="confirm_password"
                placeholder="************"
                value={password?.confirm_password}
                onChange={(e) =>
                 {
                  setPassword({
                    ...password,
                    confirm_password: e.target.value,
                  });
                  setFieldError({
                    ...fieldError,
                    confirm_password: ""
                  })
                 }
                }
                required
              />
              <div class="valid-feedback">Looks good!</div>
              {fieldError?.confirm_password && (
                <div class="text-danger">{fieldError.confirm_password.message}</div>
              )}
            </div>
            <div class="mb-2 pt-2">
              <Button
                disabled={loading}
                startIcon={loading ? <CircularProgress size={15} /> : ""}
                variant="contained"
                onClick={(e) => changePassword(e)}
                class="btn btn-dark mb-0 float-start"
              >
                Save changes
              </Button>
            </div>
          </div>
        </form>
      </div>
      {/* <div class="clearfix">&nbsp;</div>
      <div class="border-bottom mb-2 pb-2">
        <h5 class="mb-0 mb-sm-0 text-danger pb-0 fw-bold">Change Email</h5>
        <p class="mb-0 pb-0">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy.{" "}
        </p>
      </div>
      <div class="row">
        <form class="needs-validation" noValidate>
          <div class="col-sm-12 col-md-12 col-lg-6">
            <div class="mb-2 pt-2">
              <p>
                Your current email address is{" "}
                <a href="#"> arinorheim@hotmail.com</a>
              </p>
            </div>
            <div class="mb-2 pt-2">
              <label class="form-label fw-normal text-dark">
                Enter your new email ID <span class="star">*</span>
              </label>
              <input
                type="text"
                class="form-control new_email"
                id="new_email"
                name="new_email"
                placeholder="arinorheim@hotmail.com"
                required
              />
              <div class="valid-feedback">Looks good!</div>
              {fieldError?.new_email && (
                <div class="text-danger">Please enter new email.</div>
              )}
            </div>
            <div class="mb-2 pt-2">
              <button type="submit" class="btn btn-dark mb-0 float-start">
                Update Email
              </button>
            </div>
          </div>
        </form>
      </div> */}
      {/* <div class="clearfix">&nbsp;</div> */}
      {/* <div class="border-bottom mb-2 pb-2">
        <h5 class="mb-0 mb-sm-0 text-danger pb-0 fw-bold">
          Change Phone Number
        </h5>
        <p class="mb-0 pb-0">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy.{" "}
        </p>
      </div> */}
      {/* <div class="row">
        <form class="needs-validation" noValidate>
          <div class="col-sm-12 col-md-12 col-lg-6">
            <div class="mb-2 pt-2">
              <label class="form-label fw-normal text-dark">
                Old Phone Number <span class="star">*</span>
              </label>
              <input
                type="text"
                class="form-control old_phone_number"
                id="old_phone_number"
                name="old_phone_number"
                placeholder="+123456789"
                required
              />
              <div class="valid-feedback">Looks good!</div>
              {fieldError?.old_phone_number && (
                <div class="text-danger">Please enter old password.</div>
              )}
            </div>
            <div class="mb-2 pt-2">
              <label class="form-label fw-normal text-dark">
                New Phone Number <span class="star">*</span>
              </label>
              <input
                type="text"
                class="form-control new_phone_number"
                id="new_phone_number"
                name="new_phone_number"
                placeholder="+123456789"
                onChange={(e) => setPhoneNo(e.target.value)}
                required
              />
              <div class="valid-feedback">Looks good!</div>
              {fieldError?.mobile_no && (
                <div class="text-danger">Please enter password.</div>
              )}
            </div>
            <div class="mb-2 pt-2">
              <label class="form-label fw-normal text-dark">
                Confirm New Phone Number <span class="star">*</span>
              </label>
              <input
                type="text"
                class="form-control confirm_new_phone_number"
                id="confirm_new_phone_number"
                name="confirm_new_phone_number"
                placeholder="+123456789"
                required
              />
              <div class="valid-feedback">Looks good!</div>
              {fieldError?.confirm_new_phone_number && (
                <div class="text-danger">Please enter confirm password.</div>
              )}
            </div>
            <div class="mb-2 pt-2">
            <Button
                disabled={loading}
                startIcon={loading ? <CircularProgress size={15} /> : ""}
                variant="contained"
                onClick={(e) => changePhone(e)}
                class="btn btn-dark mb-0 float-start"
              >
                Save changes
              </Button>
            </div>
          </div>
        </form>
      </div> */}
    </div>
  );
};

export default SecuritySetting;
