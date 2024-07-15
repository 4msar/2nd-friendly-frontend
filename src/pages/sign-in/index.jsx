import PublicView from "@/components/HOC/PublicView";
import React, { useEffect, useState } from "react";
import img1 from "@/assets/img/element/02.svg";
import avatar1 from "@/assets/img/avatar/01.jpg";
import avatar2 from "@/assets/img/avatar/02.jpg";
import avatar3 from "@/assets/img/avatar/03.jpg";
import avatar4 from "@/assets/img/avatar/04.jpg";
import Link from "next/link";
import Head from "next/head";
import useToken from "@/hooks/useToken";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import useSnackbar from "@/hooks/useSnackbar";

const SingIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, toggleLoading] = useState(false);
  const isAuthenticated = useToken();
 
  const router = useRouter();
  const snackbar = useSnackbar();
//   const navigate = useNavigate();
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm();

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmit = async (data) => {
   
    
  };

  useEffect(() => {
    
    if (isAuthenticated) {
        router.push("/my-account");
    }
  }, [isAuthenticated]);
  return (
    <main>
        <Head>
            <title>Sing In</title>
        </Head>
      <section className="p-0 d-flex align-items-center position-relative overflow-hidden">
        <div className="container-fluid">
          <div className="row">
            {/* <!-- left --> */}
            <div className="col-12 col-lg-6 d-md-flex align-items-center justify-content-center bg-primary bg-opacity-10 vh-lg-100">
              <div className="p-3 p-lg-5">
                <div className="text-center">
                  <h2 className="fw-bold">Welcome to our largest community</h2>
                  <p className="mb-0 h6 fw-light">
                    Let's learn something new today!
                  </p>
                </div>

                <img src={img1.src} className="mt-5" alt="" />
                {/* <!-- Info --> */}
                <div className="d-sm-flex mt-5 align-items-center justify-content-center">
                  {/* <!-- Avatar group --> */}
                  <ul className="avatar-group mb-2 mb-sm-0">
                    <li className="avatar avatar-sm">
                      <img
                        className="avatar-img rounded-circle"
                        src={avatar1.src}
                        alt="avatar"
                      />
                    </li>
                    <li className="avatar avatar-sm">
                      <img
                        className="avatar-img rounded-circle"
                        src={avatar2.src}
                        alt="avatar"
                      />
                    </li>
                    <li className="avatar avatar-sm">
                      <img
                        className="avatar-img rounded-circle"
                        src={avatar3.src}
                        alt="avatar"
                      />
                    </li>
                    <li className="avatar avatar-sm">
                      <img
                        className="avatar-img rounded-circle"
                        src={avatar4.src}
                        alt="avatar"
                      />
                    </li>
                  </ul>
                  <p className="mb-0 h6 fw-light ms-0 ms-sm-3">
                    4k+ business & 10k+ users joined us, now it's your turn.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Right --> */}
            <div className="col-12 col-lg-6 m-auto">
              <div className="row my-5">
                <div className="col-sm-10 col-xl-8 m-auto">
                  <span className="mb-0 fs-1">👋</span>
                  <h1 className="fs-2">Login into 2ndA Friendly!</h1>
                  <p className="lead mb-4">
                    Nice to see you! Please log in with your account.
                  </p>
                  <form className="row g-3 needs-validation" novalidate onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-md-12">
                      <label for="email" className="form-label">
                        Email <span className="star">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control email"
                        title="email"
                        id="email"
                        minlength="4"
                        maxlength="20"
                        placeholder="johndoe@gmail.com"
                        aria-describedby=""
                        aria-required="true"
                        autofocus
                        required
                        {...register("username", {
                          required: "Email or username can not be empty!",
                          type: "email"
                        })}
                        error={!!errors.username}
                      />
                      <div className="valid-feedback">Looks good!</div>
                      <div className="invalid-feedback">
                        Please enter valid email.
                      </div>
                    </div>
                    <div className="col-md-12">
                      <label for="password" className="form-label">
                        Password <span className="star">*</span>
                      </label>
                      <input
                        type={showPassword ? "text" : "password"}
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                        className="form-control password"
                        id="password"
                        minlength="4"
                        maxlength="20"
                        placeholder="**********"
                        aria-describedby=""
                        aria-required="true"
                        autofocus
                        required
                        {...register("password", {
                          required: true,
                          minLength: {
                            value: 4,
                            message: "Password can not be less than 4"
                          },
                          maxLength: {
                            value: 20,
                            message: "Password can not be more than 20"
                          }
                        })}

                      />
                      <div className="valid-feedback">Looks good!</div>
                      <div className="invalid-feedback">
                        Please enter password.
                      </div>
                    </div>

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
                        <Link
                          href="/forgot-password"
                          className="text-secondary"
                        >
                          <u>Forgot password?</u>
                        </Link>
                      </div>
                    </div>
                    <div className="align-items-center mt-0">
                      <div className="d-grid">
                        <button className="btn btn-primary mb-0" type="submit">
                          Sign Up
                        </button>
                      </div>
                    </div>
                  </form>
                  {/* <!-- Social buttons and divider --> */}
                  <div className="row g-2">
                    {/* <!-- Divider with text --> */}
                    <div className="position-relative my-4">
                      <hr />
                      <p className="small position-absolute top-50 start-50 translate-middle bg-body px-5">
                        Or
                      </p>
                    </div>
                    {/* <!-- Social btn --> */}
                    <div className="col-xxl-4 d-grid">
                      <Link href="#" className="btn bg-google mb-2 mb-xxl-0">
                        <i className="fab fa-fw fa-google text-white me-2"></i>
                        Login with Google
                      </Link>
                    </div>
                    {/* <!-- Social btn --> */}
                    <div className="col-xxl-4 d-grid">
                      <Link href="#" className="btn bg-facebook mb-0">
                        <i className="fab fa-fw fa-facebook-f me-2"></i>Login
                        with Facebook
                      </Link>
                    </div>
                    {/* <!-- Social btn --> */}
                    <div className="col-xxl-4 d-grid">
                      <Link href="#" className="btn bg-apple-gray border mb-0">
                        <i className="fab fa-fw fa-apple me-2"></i>Login with
                        Apple
                      </Link>
                    </div>
                  </div>
                  {/* <!-- Sign up link --> */}
                  <div className="mt-4 text-center">
                    <span>
                      Don't have an account?{" "}
                      <Link href="/sign-up">Signup here</Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SingIn;
