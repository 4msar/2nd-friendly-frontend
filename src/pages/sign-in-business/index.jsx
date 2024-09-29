import avatar1 from "@/assets/img/avatar/01.jpg";
import avatar2 from "@/assets/img/avatar/02.jpg";
import avatar3 from "@/assets/img/avatar/03.jpg";
import avatar4 from "@/assets/img/avatar/04.jpg";
import img1 from "@/assets/img/element/02.svg";
import useSnackbar from "@/hooks/useSnackbar";
import useToken from "@/hooks/useToken";
import Authorization from "@/services/Authorization";
import { useAuthStore } from "@/store";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const BusinessSingIn = () => {
  const snackbar = useSnackbar();
  const isAuthenticated = useToken();
  const userProfile = useAuthStore((state) => state.user);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm();

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const onSubmit = async (data) => {
    // toggleLoading(true);
    setLoading(true);
    const res = await Authorization.login(data);
    if(res.status === 401){
      setLoading(false);
      snackbar("Unauthorized", { variant: "error" });
    }
    if (res.status === "success") {
      useAuthStore.setState({
        user: res.user,
        access_token: res.access_token,
        expires_in: res.expires_in * 1000 + Date.now()
      });
      setLoading(false);
      router.push("/business");
    } else {
      setLoading(false);
      console.log("Error", { res });
      snackbar(res.err.message, { variant: "error" });
    }
    // toggleLoading(false);
  };

  useEffect(() => {
    if (isAuthenticated && userProfile.isBusiness) {
      router.push("/business");
    }
  }, [isAuthenticated, userProfile]);

  return (
    <main>
      <Head>
        <title>Sing in Business | 2nd A Friendly</title>
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
                  {/* <!-- Title --> */}
                  <span className="mb-0 fs-1">👋</span>
                  <h1 className="fs-2">Login for business account!</h1>
                  <p className="lead mb-4">
                    Nice to see you! Please log in with your account.
                  </p>
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
                            required: "Email or username can not be empty!"
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
                            type: "password"
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
                        <a href="forgot-password.php" className="text-secondary">
                          <u>Forgot password?</u>
                        </a>
                      </div>
                    </div>
                    {/* <!-- Button --> */}
                    <div className="align-items-center mt-0">
                      <div className="d-grid">
                        <button className="btn btn-primary mb-0" type="submit" disabled={loading}>
                          {loading ? "Loading..." : "Login"}
                        </button>
                      </div>
                    </div>
                  </form>
                  {/* <!-- Form END --> */}
                  {/* <!-- Sign up link --> */}
                  <div className="mt-4 mb-4 text-center">
                    <span>
                      Don't have an account?{" "}
                      <Link href="/sign-up-business">Signup here</Link>
                    </span>
                  </div>
                  <div className="align-items-center mt-0">
                    <div className="d-grid">
                      <button className="btn btn-success mb-0">
                        {" "}
                        <Link className="text-white" href="/sign-in-customer">
                          Customer sign in
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Row END --> */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BusinessSingIn;
