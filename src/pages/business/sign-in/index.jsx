import React from "react";
import img1 from "@/assets/img/element/02.svg";
import avatar1 from "@/assets/img/avatar/01.jpg";
import avatar2 from "@/assets/img/avatar/02.jpg";
import avatar3 from "@/assets/img/avatar/03.jpg";
import avatar4 from "@/assets/img/avatar/04.jpg";
import Head from "next/head";
import Link from "next/link";

const SingIn = () => {
  return (
    <main>
      <Head>
        <title>Sing In</title>
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
                  <span class="mb-0 fs-1">👋</span>
                  <h1 class="fs-2">Login into 2ndA Friendly!</h1>
                  <p class="lead mb-4">
                    Nice to see you! Please log in with your account.
                  </p>
                  <form class="row g-3 needs-validation" novalidate>
                    <div class="col-md-12">
                      <label for="email" class="form-label">
                        Email <span class="star">*</span>
                      </label>
                      <input
                        type="email"
                        class="form-control email"
                        title="email"
                        id="email"
                        minlength="4"
                        maxlength="20"
                        placeholder="johndoe@gmail.com"
                        aria-describedby=""
                        aria-required="true"
                        autofocus
                        required
                      />
                      <div class="valid-feedback">Looks good!</div>
                      <div class="invalid-feedback">
                        Please enter valid email.
                      </div>
                    </div>
                    <div class="col-md-12">
                      <label for="password" class="form-label">
                        Password <span class="star">*</span>
                      </label>
                      <input
                        type="password"
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                        class="form-control password"
                        id="password"
                        minlength="4"
                        maxlength="20"
                        placeholder="**********"
                        aria-describedby=""
                        aria-required="true"
                        autofocus
                        required
                      />
                      <div class="valid-feedback">Looks good!</div>
                      <div class="invalid-feedback">Please enter password.</div>
                    </div>

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
                    <div class="align-items-center mt-0">
                      <div class="d-grid">
                        <button class="btn btn-primary mb-0" type="submit">
                          Sign Up
                        </button>
                      </div>
                    </div>
                  </form>
                  {/* <!-- Social buttons and divider --> */}
                  <div class="row g-2">
                    {/* <!-- Divider with text --> */}
                    <div class="position-relative my-4">
                      <hr />
                      <p class="small position-absolute top-50 start-50 translate-middle bg-body px-5">
                        Or
                      </p>
                    </div>
                    {/* <!-- Social btn --> */}
                    <div class="col-xxl-4 d-grid">
                      <a href="#" class="btn bg-google mb-2 mb-xxl-0">
                        <i class="fab fa-fw fa-google text-white me-2"></i>Login
                        with Google
                      </a>
                    </div>
                    {/* <!-- Social btn --> */}
                    <div class="col-xxl-4 d-grid">
                      <a href="#" class="btn bg-facebook mb-0">
                        <i class="fab fa-fw fa-facebook-f me-2"></i>Login with
                        Facebook
                      </a>
                    </div>
                    {/* <!-- Social btn --> */}
                    <div class="col-xxl-4 d-grid">
                      <a href="#" class="btn bg-apple-gray border mb-0">
                        <i class="fab fa-fw fa-apple me-2"></i>Login with Apple
                      </a>
                    </div>
                  </div>
                  {/* <!-- Sign up link --> */}
                  <div class="mt-4 text-center">
                    <span>
                      Don't have an account?{" "}
                      <Link href="sign-up">Signup here</Link>
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
