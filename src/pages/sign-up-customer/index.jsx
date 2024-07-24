import React from 'react'
import avatar1 from "@/assets/img/avatar/01.jpg";
import avatar2 from "@/assets/img/avatar/02.jpg";
import avatar3 from "@/assets/img/avatar/03.jpg";
import avatar4 from "@/assets/img/avatar/04.jpg";
import img1 from "@/assets/img/element/02.svg";
import useSnackbar from "@/hooks/useSnackbar";
import useToken from "@/hooks/useToken";
import Authorization from "@/services/Authorization";
import { useAuthStore } from "@/store";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const SignUpCustomer = () => {
  return (
    <main>
    <section class="p-0 d-flex align-items-center position-relative overflow-hidden">
        <div class="container-fluid">
            <div class="row">
                {/* <!-- left --> */}
                <div class="col-12 col-lg-6 d-md-flex align-items-center justify-content-center bg-primary bg-opacity-10 vh-lg-100">
                    <div class="p-3 p-lg-5">
                        {/* <!-- Title --> */}
                        <div class="text-center">
                            <h2 class="fw-bold">Welcome to our largest community</h2>
                            <p class="mb-0 h6 fw-light">Let's learn something new today!</p>
                        </div>
                        {/* <!-- SVG Image --> */}
                        <img src={img1.src} class="mt-5" alt=""/>
                        {/* <!-- Info --> */}
                        <div class="d-sm-flex mt-5 align-items-center justify-content-center">
                            <ul class="avatar-group mb-2 mb-sm-0">
                                <li class="avatar avatar-sm"><img class="avatar-img rounded-circle" src={avatar1.src} alt="avatar"/></li>
                                <li class="avatar avatar-sm"><img class="avatar-img rounded-circle" src={avatar2.src} alt="avatar"/></li>
                                <li class="avatar avatar-sm"><img class="avatar-img rounded-circle" src={avatar3.src} alt="avatar"/></li>
                                <li class="avatar avatar-sm"><img class="avatar-img rounded-circle" src={avatar4.src} alt="avatar"/></li>
                            </ul>
                            {/* <!-- Content --> */}
                            <p class="mb-0 h6 fw-light ms-0 ms-sm-3">4k+ Students joined us, now it's your turn.</p>
                        </div>
                    </div>
                </div>
                {/* <!-- Right --> */}
                <div class="col-12 col-lg-6 m-auto">
                    <div class="row my-5">
                        <div class="col-sm-10 col-xl-8 m-auto">
                            {/* <!-- Title --> */}
                            <img src={img1.src} class="h-40px mb-2" alt=""/>
                            <h2>Sign up for customer your account!</h2>
                            <p class="lead mb-4">Nice to see you! Please sign up with your account.</p>
                            {/* <!-- Form START --> */}
                            <form class="row g-3 needs-validation" novalidate>
                                <div class="col-md-6">
                                    <label for="first_name" class="form-label">First Name <span class="star">*</span></label>
                                    <div class="input-group input-group-lg">
                                        <span class="input-group-text bg-light rounded-start border-0 text-secondary px-3"><i class="fas fa-user"></i></span>
                                        <input type="text" class="form-control border-0 bg-light rounded-end ps-1" placeholder="E. g. John." title="first_name" id="first_name" name="first_name" minlength="4" maxlength="20" autofocus required/>
                                        <div class="valid-feedback">
                                            Looks good!
                                        </div>
                                        <div class="invalid-feedback">
                                            Please enter first name.
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <label for="last_name" class="form-label">Last Name <span class="star">*</span></label>
                                    <div class="input-group input-group-lg">
                                        <span class="input-group-text bg-light rounded-start border-0 text-secondary px-3"><i class="fas fa-user"></i></span>
                                        <input type="text" class="form-control border-0 bg-light rounded-end ps-1" placeholder="E. g. Doe." title="last_name" id="last_name"name="last_name" minlength="4" maxlength="20" autofocus required/>
                                        <div class="valid-feedback">
                                            Looks good!
                                        </div>
                                        <div class="invalid-feedback">
                                            Please enter last name.
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Email --> */}
                                <div class="mb-4">
                                    <label for="email" class="form-label">Email <span class="star">*</span></label>
                                    <div class="input-group input-group-lg">
                                        <span class="input-group-text bg-light rounded-start border-0 text-secondary px-3"><i class="bi bi-envelope-fill"></i></span>
                                        <input type="email" class="form-control border-0 bg-light rounded-end ps-1" placeholder="E. g. johndoe@gmail.com" id="email" title="email" name="email" minlength="4" maxlength="20" autofocus required/>
                                        <div class="valid-feedback">
                                            Looks good!
                                        </div>
                                        <div class="invalid-feedback">
                                            Please enter email.
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Password --> */}
                                <div class="mb-4">
                                    <label for="password" class="form-label">Password <span class="star">*</span></label>
                                    <div class="input-group input-group-lg">
                                        <span class="input-group-text bg-light rounded-start border-0 text-secondary px-3"><i class="fas fa-lock"></i></span>
                                        <input type="password" class="form-control border-0 bg-light rounded-end ps-1" placeholder="*********" id="password" title="password" name="password" minlength="4" maxlength="20" autofocus required/>
                                        <div class="valid-feedback">
                                            Looks good!
                                        </div>
                                        <div class="invalid-feedback">
                                            Please enter password.
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Confirm Password --> */}
                                <div class="mb-4">
                                    <label for="confirm_password" class="form-label">Confirm Password <span class="star">*</span></label>
                                    <div class="input-group input-group-lg">
                                        <span class="input-group-text bg-light rounded-start border-0 text-secondary px-3"><i class="fas fa-lock"></i></span>
                                        <input type="password" class="form-control border-0 bg-light rounded-end ps-1" placeholder="*********" id="confirm_password" title="confirm_password" name="confirm_password" minlength="4" maxlength="20" autofocus required/>
                                        <div class="valid-feedback">
                                            Looks good!
                                        </div>
                                        <div class="invalid-feedback">
                                            Please enter confirm password.
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Check box --> */}
                                <div class="mb-4">
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="checkbox-1"/>
                                        <label class="form-check-label" for="checkbox-1">By signing up, you agree to the<a href="#"> terms of service</a></label>
                                    </div>
                                </div>
                                {/* <!-- Button --> */}
                                <div class="align-items-center mt-0">
                                    <div class="d-grid">
                                        <button class="btn btn-primary mb-0" type="submit">Sign Up</button>
                                    </div>
                                </div>
                            </form>
                            {/* <!-- Form END -->
                            <!-- Social buttons --> */}
                            <div class="row">
                                {/* <!-- Divider with text --> */}
                                <div class="position-relative my-4">
                                    <hr/>
                                    <p class="small position-absolute top-50 start-50 translate-middle bg-body px-5">Or</p>
                                </div>
                                {/* <!-- Social btn --> */}
                                <div class="col-xxl-6 d-grid">
                                    <a href="#" class="btn bg-google mb-2 mb-xxl-0"><i class="fab fa-fw fa-google text-white me-2"></i>Signup with Google</a>
                                </div>
                                {/* <!-- Social btn --> */}
                                <div class="col-xxl-6 d-grid">
                                    <a href="#" class="btn bg-facebook mb-0"><i class="fab fa-fw fa-facebook-f me-2"></i>Signup with Facebook</a>
                                </div>
                            </div>
                            {/* <!-- Sign up link --> */}
                            <div class="mt-4 mb-4 text-center">
                                <span>Already have an account?<a href="sign-in-customer.php"> Sign in here</a></span>
                            </div>

                            <div class="align-items-center mt-0">
                                <div class="d-grid">
                                    <button class="btn btn-success mb-0" type="submit"> <a class="text-white" href="sign-up-business.php">Business Sign Up</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
  )
}

export default SignUpCustomer