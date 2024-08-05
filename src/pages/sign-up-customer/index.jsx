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
import Link from 'next/link';

const SignUpCustomer = () => {
  return (
    <main>
    <section className="p-0 d-flex align-items-center position-relative overflow-hidden">
        <div className="container-fluid">
            <div className="row">
                {/* <!-- left --> */}
                <div className="col-12 col-lg-6 d-md-flex align-items-center justify-content-center bg-primary bg-opacity-10 vh-lg-100">
                    <div className="p-3 p-lg-5">
                        {/* <!-- Title --> */}
                        <div className="text-center">
                            <h2 className="fw-bold">Welcome to our largest community</h2>
                            <p className="mb-0 h6 fw-light">Let's learn something new today!</p>
                        </div>
                        {/* <!-- SVG Image --> */}
                        <img src={img1.src} className="mt-5" alt=""/>
                        {/* <!-- Info --> */}
                        <div className="d-sm-flex mt-5 align-items-center justify-content-center">
                            <ul className="avatar-group mb-2 mb-sm-0">
                                <li className="avatar avatar-sm"><img className="avatar-img rounded-circle" src={avatar1.src} alt="avatar"/></li>
                                <li className="avatar avatar-sm"><img className="avatar-img rounded-circle" src={avatar2.src} alt="avatar"/></li>
                                <li className="avatar avatar-sm"><img className="avatar-img rounded-circle" src={avatar3.src} alt="avatar"/></li>
                                <li className="avatar avatar-sm"><img className="avatar-img rounded-circle" src={avatar4.src} alt="avatar"/></li>
                            </ul>
                            {/* <!-- Content --> */}
                            <p className="mb-0 h6 fw-light ms-0 ms-sm-3">4k+ Students joined us, now it's your turn.</p>
                        </div>
                    </div>
                </div>
                {/* <!-- Right --> */}
                <div className="col-12 col-lg-6 m-auto">
                    <div className="row my-5">
                        <div className="col-sm-10 col-xl-8 m-auto">
                            {/* <!-- Title --> */}
                            <img src={img1.src} className="h-40px mb-2" alt=""/>
                            <h2>Sign up for customer your account!</h2>
                            <p className="lead mb-4">Nice to see you! Please sign up with your account.</p>
                            {/* <!-- Form START --> */}
                            <form className="row g-3 needs-validation" noValidate>
                                <div className="col-md-6">
                                    <label for="first_name" className="form-label">First Name <span className="star">*</span></label>
                                    <div className="input-group input-group-lg">
                                        <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3"><i className="fas fa-user"></i></span>
                                        <input type="text" className="form-control border-0 bg-light rounded-end ps-1" placeholder="E. g. John." title="first_name" id="first_name" name="first_name" minlength="4" maxLength="20"  required/>
                                        <div className="valid-feedback">
                                            Looks good!
                                        </div>
                                        <div className="invalid-feedback">
                                            Please enter first name.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label for="last_name" className="form-label">Last Name <span className="star">*</span></label>
                                    <div className="input-group input-group-lg">
                                        <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3"><i className="fas fa-user"></i></span>
                                        <input type="text" className="form-control border-0 bg-light rounded-end ps-1" placeholder="E. g. Doe." title="last_name" id="last_name"name="last_name" minlength="4" maxLength="20"  required/>
                                        <div className="valid-feedback">
                                            Looks good!
                                        </div>
                                        <div className="invalid-feedback">
                                            Please enter last name.
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Email --> */}
                                <div className="mb-4">
                                    <label for="email" className="form-label">Email <span className="star">*</span></label>
                                    <div className="input-group input-group-lg">
                                        <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3"><i className="bi bi-envelope-fill"></i></span>
                                        <input type="email" className="form-control border-0 bg-light rounded-end ps-1" placeholder="E. g. johndoe@gmail.com" id="email" title="email" name="email" minlength="4" maxLength="20"  required/>
                                        <div className="valid-feedback">
                                            Looks good!
                                        </div>
                                        <div className="invalid-feedback">
                                            Please enter email.
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Password --> */}
                                <div className="mb-4">
                                    <label for="password" className="form-label">Password <span className="star">*</span></label>
                                    <div className="input-group input-group-lg">
                                        <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3"><i className="fas fa-lock"></i></span>
                                        <input type="password" className="form-control border-0 bg-light rounded-end ps-1" placeholder="*********" id="password" title="password" name="password" minlength="4" maxLength="20"  required/>
                                        <div className="valid-feedback">
                                            Looks good!
                                        </div>
                                        <div className="invalid-feedback">
                                            Please enter password.
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Confirm Password --> */}
                                <div className="mb-4">
                                    <label for="confirm_password" className="form-label">Confirm Password <span className="star">*</span></label>
                                    <div className="input-group input-group-lg">
                                        <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3"><i className="fas fa-lock"></i></span>
                                        <input type="password" className="form-control border-0 bg-light rounded-end ps-1" placeholder="*********" id="confirm_password" title="confirm_password" name="confirm_password" minlength="4" maxLength="20"  required/>
                                        <div className="valid-feedback">
                                            Looks good!
                                        </div>
                                        <div className="invalid-feedback">
                                            Please enter confirm password.
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Check box --> */}
                                <div className="mb-4">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="checkbox-1"/>
                                        <label className="form-check-label" for="checkbox-1">By signing up, you agree to the<a href="#"> terms of service</a></label>
                                    </div>
                                </div>
                                {/* <!-- Button --> */}
                                <div className="align-items-center mt-0">
                                    <div className="d-grid">
                                        <button className="btn btn-primary mb-0" type="submit">Sign Up</button>
                                    </div>
                                </div>
                            </form>
                            {/* <!-- Form END -->
                            <!-- Social buttons --> */}
                            <div className="row">
                                {/* <!-- Divider with text --> */}
                                <div className="position-relative my-4">
                                    <hr/>
                                    <p className="small position-absolute top-50 start-50 translate-middle bg-body px-5">Or</p>
                                </div>
                                {/* <!-- Social btn --> */}
                                <div className="col-xxl-6 d-grid">
                                    <a href="#" className="btn bg-google mb-2 mb-xxl-0"><i className="fab fa-fw fa-google text-white me-2"></i>Signup with Google</a>
                                </div>
                                {/* <!-- Social btn --> */}
                                <div className="col-xxl-6 d-grid">
                                    <a href="#" className="btn bg-facebook mb-0"><i className="fab fa-fw fa-facebook-f me-2"></i>Signup with Facebook</a>
                                </div>
                            </div>
                            {/* <!-- Sign up link --> */}
                            <div className="mt-4 mb-4 text-center">
                                <span>Already have an account?<Link href="/sign-in-customer"> Sign in here</Link></span>
                            </div>

                            <div className="align-items-center mt-0">
                                <div className="d-grid">
                                    <button className="btn btn-success mb-0" type="submit"> <Link className="text-white" href="/sign-up-business">Business Sign Up</Link></button>
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