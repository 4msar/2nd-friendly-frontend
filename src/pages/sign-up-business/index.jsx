import React, { useState } from 'react'
import avatar1 from "@/assets/img/avatar/01.jpg";
import avatar2 from "@/assets/img/avatar/02.jpg";
import avatar3 from "@/assets/img/avatar/03.jpg";
import avatar4 from "@/assets/img/avatar/04.jpg";
import img1 from "@/assets/img/element/03.svg";
import img2 from "@/assets/img/element/02.svg";
import useSnackbar from "@/hooks/useSnackbar";
import useToken from "@/hooks/useToken";
import Authorization from "@/services/Authorization";
import { useAuthStore } from "@/store";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import BusinessService from '@/services/BusinessService';
import axios from 'axios';
import { API_URL } from '@/helpers/apiUrl';

const SignUpBusiness = () => {
  const [business, setBusiness] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const snackbar = useSnackbar();

  const handleSignUpBusiness = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    if(business.name === "") {
        snackbar("Please enter business name", { variant: "error" });
        return false;
    }

    if(business.email === "") { 
        snackbar("Please enter name", { variant: "error" });
        return false;
    }
    if(business.password !== business.confirm_password ) {
        snackbar("Password mismatch", { variant: "error" });
        return false;
    }

    const payload = {
        business_name: business.name,
        email: business.email,
        password: business.password,
        confirm_password: business.confirm_password
    }

    const res = await axios.post(`${API_URL}/business-registration`, payload).then((data) => {
        if(data.status === "success") {
            snackbar(data.message, {variant: "success"});
        }
    });

  }

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
                        <img src={img2.src} class="mt-5" alt=""/>
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
                            <h2>Sign up for business account!</h2>
                            <p class="lead mb-4">Nice to see you! Please sign up with your account.</p>
                            {/* <!-- Form START --> */}
                            <form class="row g-3 needs-validation" novalidate>
                                   {/* <!-- Email --> */}
                                   <div class="mb-4">
                                       <label for="business_name" class="form-label">Business Name <span class="star">*</span></label>
                                       <div class="input-group input-group-lg">
                                           <span class="input-group-text bg-light rounded-start border-0 text-secondary px-3"><i class="bi bi-window-desktop"></i></span>
                                           <input type="text" class="form-control border-0 bg-light rounded-end ps-1" placeholder="E. g. Xyz Solution Ltd." title="business_name" id="business_name" name="business_name" minlength="4" maxlength="20" autofocus required 
                                           onChange={(e) => setBusiness({
                                            ...business,
                                            name: e.target.value
                                           })}
                                            />
                                           <div class="valid-feedback">
                                               Looks good!
                                           </div>
                                           <div class="invalid-feedback">
                                               Please enter business name.
                                           </div>
                                       </div>
                                   </div>
                                   {/* <!-- Email --> */}
                                   <div class="mb-4">
                                       <label for="business_email" class="form-label">Business Email <span class="star">*</span></label>
                                       <div class="input-group input-group-lg">
                                           <span class="input-group-text bg-light rounded-start border-0 text-secondary px-3"><i class="bi bi-envelope-fill"></i></span>
                                           <input type="email" class="form-control border-0 bg-light rounded-end ps-1" placeholder="E. g. johndoe@gmail.com" id="email" title="business_email" name="business_email" minlength="4" maxlength="30" autofocus required
                                            onChange={(e) => setBusiness({
                                              ...business,
                                              email: e.target.value
                                            })}
                                           />
                                           <div class="valid-feedback">
                                               Looks good!
                                           </div>
                                           <div class="invalid-feedback">
                                               Please enter business email.
                                           </div>
                                       </div>
                                   </div>
                                   {/* <!-- Password --> */}
                                   <div class="mb-4">
                                       <label for="password" class="form-label">Password <span class="star">*</span></label>
                                       <div class="input-group input-group-lg">
                                           <span class="input-group-text bg-light rounded-start border-0 text-secondary px-3"><i class="fas fa-lock"></i></span>
                                           <input type="password" class="form-control border-0 bg-light rounded-end ps-1" placeholder="*********" id="password" title="password" minlength="4" maxlength="20" autofocus required
                                            onChange={(e) => setBusiness({
                                                ...business,
                                                password: e.target.value
                                               })}
                                           />
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
                                           <input type="password" class="form-control border-0 bg-light rounded-end ps-1" placeholder="*********" id="confirm_password" title="confirm_password" minlength="4" maxlength="20" autofocus required 
                                            onChange={(e) => setBusiness({
                                                ...business,
                                                confirm_password: e.target.value
                                               })}
                                           />
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
                                           <input type="checkbox" class="form-check-input" id="checkbox-1" />
                                           <label class="form-check-label" for="checkbox-1">By signing up, you agree to the<a href="#"> terms of service</a></label>
                                       </div>
                                   </div>
                                   {/* <!-- Button --> */}
                                   <div class="align-items-center mt-0">
                                       <div class="d-grid">
                                           <button class="btn btn-primary mb-0" onClick={(e) => handleSignUpBusiness(e)}>Sign Up</button>
                                       </div>
                                   </div>
                               </form>
                            {/* <!-- Form END -->
                            <!-- Social buttons --> */}
                            
                            {/* <!-- Sign up link --> */}
                               <div class="mt-4 mb-4 text-center">
                                   <span>Already have an account?<a href="/sign-in-business"> Sign in here</a></span>
                               </div>

                               <div class="align-items-center mt-0">
                                   <div class="d-grid">
                                       <button class="btn btn-success mb-0" type="submit"> <a class="text-white" href="/sign-up-customer">Customer  Sign Up</a></button>
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

export default SignUpBusiness