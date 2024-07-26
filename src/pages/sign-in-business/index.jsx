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
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const BusinessSingIn = () => {
  const snackbar = useSnackbar();
  const isAuthenticated = useToken();
  const router = useRouter();
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
    const res = await Authorization.login(data);
    if (res.status === "success") {
      useAuthStore.setState({
        user: res.user,
        access_token: res.access_token,
        expires_in: res.expires_in * 1000 + Date.now()
      });
    } else {
      console.log("Error", { res });
      //   snackbar("Something is wrong", { variant: "error" });
    }
    // toggleLoading(false);
  };

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/business/about-the-business");
    }
  }, [isAuthenticated]);

  return (
    <main>
      <Head>
        <title>Sing in Business | 2nd A Friendly</title>
      </Head>
      <section class="p-0 d-flex align-items-center position-relative overflow-hidden">
        <div class="container-fluid">
          <div class="row">
            {/* <!-- left --> */}
            <div class="col-12 col-lg-6 d-md-flex align-items-center justify-content-center bg-primary bg-opacity-10 vh-lg-100">
              <div class="p-3 p-lg-5">
                <div class="text-center">
                  <h2 class="fw-bold">Welcome to our largest community</h2>
                  <p class="mb-0 h6 fw-light">
                    Let's learn something new today!
                  </p>
                </div>

                <img src={img1.src} class="mt-5" alt="" />
                {/* <!-- Info --> */}
                <div class="d-sm-flex mt-5 align-items-center justify-content-center">
                  {/* <!-- Avatar group --> */}
                  <ul class="avatar-group mb-2 mb-sm-0">
                    <li class="avatar avatar-sm">
                      <img
                        class="avatar-img rounded-circle"
                        src={avatar1.src}
                        alt="avatar"
                      />
                    </li>
                    <li class="avatar avatar-sm">
                      <img
                        class="avatar-img rounded-circle"
                        src={avatar2.src}
                        alt="avatar"
                      />
                    </li>
                    <li class="avatar avatar-sm">
                      <img
                        class="avatar-img rounded-circle"
                        src={avatar3.src}
                        alt="avatar"
                      />
                    </li>
                    <li class="avatar avatar-sm">
                      <img
                        class="avatar-img rounded-circle"
                        src={avatar4.src}
                        alt="avatar"
                      />
                    </li>
                  </ul>
                  <p class="mb-0 h6 fw-light ms-0 ms-sm-3">
                    4k+ business & 10k+ users joined us, now it's your turn.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Right --> */}
            <div class="col-12 col-lg-6 m-auto">
              <div class="row my-5">
                <div class="col-sm-10 col-xl-8 m-auto">
                  {/* <!-- Title --> */}
                  <span class="mb-0 fs-1">👋</span>
                  <h1 class="fs-2">Login for business account!</h1>
                  <p class="lead mb-4">
                    Nice to see you! Please log in with your account.
                  </p>
                  {/* <!-- Form START --> */}
                  <form
                    class="row g-3 needs-validation"
                    novalidate
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    {/* <!-- Email --> */}
                    <div class="mb-4">
                      <label for="exampleInputEmail1" class="form-label">
                        Email address <span class="star">*</span>
                      </label>
                      <div class="input-group input-group-lg">
                        <span class="input-group-text bg-light rounded-start border-0 text-secondary px-3">
                          <i class="bi bi-envelope-fill"></i>
                        </span>
                        <input
                          type="email"
                          class="form-control border-0 bg-light rounded-end ps-1"
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
                        <div class="valid-feedback">Looks good!</div>
                        <div class="invalid-feedback">
                          Please enter email address.
                        </div>
                      </div>
                    </div>
                    {/* <!-- Password --> */}
                    <div class="mb-4">
                      <label for="inputPassword5" class="form-label">
                        Password <span class="star">*</span>
                      </label>
                      <div class="input-group input-group-lg">
                        <span class="input-group-text bg-light rounded-start border-0 text-secondary px-3">
                          <i class="fas fa-lock"></i>
                        </span>
                        <input
                          type="password"
                          class="form-control border-0 bg-light rounded-end ps-1"
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
                        <div class="valid-feedback">Looks good!</div>
                        <div class="invalid-feedback">
                          Please enter password.
                        </div>
                      </div>
                      <div id="passwordHelpBlock" class="form-text">
                        Your password must be 8 characters at least
                      </div>
                    </div>
                    {/* <!-- Check box --> */}
                    <div class="mb-4 d-flex justify-content-between mb-4">
                      <div class="form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="exampleCheck1"
                        />
                        <label class="form-check-label" for="exampleCheck1">
                          Remember me
                        </label>
                      </div>
                      <div class="text-primary-hover">
                        <a href="forgot-password.php" class="text-secondary">
                          <u>Forgot password?</u>
                        </a>
                      </div>
                    </div>
                    {/* <!-- Button --> */}
                    <div class="align-items-center mt-0">
                      <div class="d-grid">
                        <button class="btn btn-primary mb-0" type="submit">
                          Login
                        </button>
                      </div>
                    </div>
                  </form>
                  {/* <!-- Form END --> */}
                  {/* <!-- Sign up link --> */}
                  <div class="mt-4 mb-4 text-center">
                    <span>
                      Don't have an account?{" "}
                      <a href="/sign-up-business">Signup here</a>
                    </span>
                  </div>
                  <div class="align-items-center mt-0">
                    <div class="d-grid">
                      <button class="btn btn-success mb-0">
                        {" "}
                        <a class="text-white" href="/sign-in-customer">
                          Customer sign in
                        </a>
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
