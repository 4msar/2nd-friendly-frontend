import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Authorization from '@/services/Authorization';
import { useAuthStore } from '@/store';
import { useRouter } from 'next/router';
import useToken from '@/hooks/useToken';
import useSnackbar from '@/hooks/useSnackbar';
import { useForm } from 'react-hook-form';
import Link from 'next/link';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

 const CustomerLoginModal = ({openLogin, closeModal})  => {
  
  const isAuthenticated = useToken();
  const snackbar = useSnackbar();
  const userProfile = useAuthStore((state) => state.user);
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const onSubmit = async (data) => {
    // toggleLoading(true);
    setLoading(true);
    const res = await Authorization.login(data);
    if (res.status === "success") {
      useAuthStore.setState({
        user: res.user,
        access_token: res.access_token,
        expires_in: res.expires_in * 1000 + Date.now(),
      });
      setLoading(false);
      closeModal();
      snackbar("Login successfully!", { variant: "success" });
      window.location.reload();
    } else {
      setLoading(false);
      console.log("Error", { res });
        snackbar(res.err.message, { variant: "error" });
    }
    // toggleLoading(false);
  };
  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={closeModal}
        aria-labelledby="customized-dialog-title"
        open={openLogin}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Modal title
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={closeModal}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
        <div className="row">
                <div className="col-sm-10 col-xl-8 m-auto">
                  {/* <!-- Title --> */}
                  
                  <h4>Login for customer account!</h4>
                  
                  {/* <!-- Form START --> */}
                  <form
                    className="row g-3 needs-validation"
                    noValidate
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    {/* <!-- Email --> */}
                    <div className="mb-4">
                      <label for="exampleInputEmail1" className="form-label">
                        Email address <span className="star">*</span>
                      </label>
                      <div className="input-group input-group-lg">
                        <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3">
                          <i className="bi bi-envelope-fill"></i>
                        </span>
                        <input
                          type="email"
                          className="form-control border-0 bg-light rounded-end ps-1"
                          placeholder="E. g. johndoue@gmail.com"
                          id="email"
                          title="email"
                          name="email"
                          required
                          {...register("username", {
                            required: "Email or username can not be empty!",
                          })}
                          error={!!errors.email}
                        />
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">
                          Please enter email address.
                        </div>
                      </div>
                    </div>
                    {/* <!-- Password --> */}
                    <div className="mb-4">
                      <label for="inputPassword5" className="form-label">
                        Password <span className="star">*</span>
                      </label>
                      <div className="input-group input-group-lg">
                        <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3">
                          <i className="fas fa-lock"></i>
                        </span>
                        <input
                          type="password"
                          className="form-control border-0 bg-light rounded-end ps-1"
                          placeholder="E. g. *********"
                          id="password"
                          title="password"
                          name="password0"
                          required
                          {...register("password", {
                            required: "Password or username can not be empty!",
                            type: "password",
                          })}
                          error={!!errors.password}
                        />
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">
                          Please enter password.
                        </div>
                      </div>
                      <div id="passwordHelpBlock" className="form-text">
                        Your password must be 8 characters at least
                      </div>
                    </div>
                    {/* <!-- Check box --> */}
                    <div className="mb-4 d-flex justify-content-between mb-4">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="exampleCheck1"
                        />
                        <label className="form-check-label" for="exampleCheck1">
                          Remember me
                        </label>
                      </div>
                      <div className="text-primary-hover">
                        <a
                          href="forgot-password.php"
                          className="text-secondary"
                        >
                          <u>Forgot password?</u>
                        </a>
                      </div>
                    </div>
                    {/* <!-- Button --> */}
                    <div className="align-items-center mt-0">
                      <div className="d-grid">
                        <button
                          className="btn btn-primary mb-0"
                          type="submit"
                          disabled={loading}
                        >
                          {loading ? "Loading..." : "Login"}
                        </button>
                      </div>
                    </div>
                  </form>
                 
                </div>
              </div>
        </DialogContent>
        {/* <DialogActions>
          <Button autoFocus onClick={closeModal}>
            Save changes
          </Button>
        </DialogActions> */}
      </BootstrapDialog>
    </React.Fragment>
  );
}

export default CustomerLoginModal;
