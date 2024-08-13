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
import Link from 'next/link';
import { Button, CircularProgress } from '@mui/material';

const SignUpBusiness = () => {
    const router = useRouter();
    const [loading, setLoading] = useState();
    const [fieldErrors, setFieldErrors] = useState("");
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
    setLoading(true);
    if(business.name === "") {
        snackbar("Please enter business name", { variant: "error" });
        setLoading(false)
        return false;
    }

    if(business.email === "") { 
        snackbar("Please enter name", { variant: "error" });
        setLoading(false)
        return false;
    }
    if(business.password !== business.confirm_password ) {
        setLoading(false)
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
        if(data?.data?.status === "success") {
            setLoading(false)
            snackbar("Successfully sign up!", {variant: "success"});
            router.push('/sign-in-business')
        } else {
            console.log(data?.data?.fieldErrors?.email?.message);
            setFieldErrors(data?.data?.fieldErrors);
            
            setLoading(false)
        }
    });

  }

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
                        <img src={img2.src} className="mt-5" alt=""/>
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
                            <h2>Sign up for business account!</h2>
                            <p className="lead mb-4">Nice to see you! Please sign up with your account.</p>
                            {/* <!-- Form START --> */}
                            <form className="row g-3 needs-validation" novalidate>
                                   {/* <!-- Email --> */}
                                   <div className="mb-4">
                                       <label for="business_name" className="form-label">Business Name <span className="star">*</span></label>
                                       <div className="input-group input-group-lg">
                                           <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3"><i className="bi bi-window-desktop"></i></span>
                                           <input type="text" className="form-control border-0 bg-light rounded-end ps-1" placeholder="E. g. Xyz Solution Ltd." title="business_name" id="business_name" name="business_name" minlength="4" maxlength="20" autofocus required 
                                           onChange={(e) => setBusiness({
                                            ...business,
                                            name: e.target.value
                                           })}
                                            />
                                           
                                       </div>
                                       <div className="valid-feedback">
                                               Looks good!
                                           </div>
                                           <div className="invalid-feedback">
                                               Please enter business name.
                                           </div>
                                   </div>
                                   {/* <!-- Email --> */}
                                   <div className="mb-4">
                                       <label for="business_email" className="form-label">Business Email <span className="star">*</span></label>
                                       <div className="input-group input-group-lg">
                                           <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3"><i className="bi bi-envelope-fill"></i></span>
                                           <input type="email" className="form-control border-0 bg-light rounded-end ps-1" placeholder="E. g. johndoe@gmail.com" id="email" title="business_email" name="business_email" minlength="4" maxlength="30" autofocus required
                                            onChange={(e) => setBusiness({
                                              ...business,
                                              email: e.target.value
                                            })}
                                           />
                                           
                                           
                                       </div>
                                       <div className="valid-feedback">
                                               Looks good!
                                           </div>
                                           {fieldErrors?.email && (
                                            <div className="text-danger">
                                               {fieldErrors?.email?.message}
                                           </div>
                                           )}
                                   </div>
                                   {/* <!-- Password --> */}
                                   <div className="mb-4">
                                       <label for="password" className="form-label">Password <span className="star">*</span></label>
                                       <div className="input-group input-group-lg">
                                           <span className="input-group-text bg-light rounded-start border-0 text-secondary px-3"><i className="fas fa-lock"></i></span>
                                           <input type="password" className="form-control border-0 bg-light rounded-end ps-1" placeholder="*********" id="password" title="password" minlength="4" maxlength="20" autofocus required
                                            onChange={(e) => setBusiness({
                                                ...business,
                                                password: e.target.value
                                               })}
                                           />
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
                                           <input type="password" className="form-control border-0 bg-light rounded-end ps-1" placeholder="*********" id="confirm_password" title="confirm_password" minlength="4" maxlength="20" autofocus required 
                                            onChange={(e) => setBusiness({
                                                ...business,
                                                confirm_password: e.target.value
                                               })}
                                           />
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
                                           <input type="checkbox" className="form-check-input" id="checkbox-1" />
                                           <label className="form-check-label" for="checkbox-1">By signing up, you agree to the<a href="#"> terms of service</a></label>
                                       </div>
                                   </div>
                                   {/* <!-- Button --> */}
                                   <div className="align-items-center mt-0">
                                       <div className="d-grid">
                                           <Button variant="contained" disabled={loading} startIcon={loading ? <CircularProgress size={15} /> : ""} className="btn btn-primary mb-0" onClick={(e) => handleSignUpBusiness(e)}>Sign Up</Button>
                                       </div>
                                   </div>
                               </form>
                            {/* <!-- Form END -->
                            <!-- Social buttons --> */}
                            
                            {/* <!-- Sign up link --> */}
                               <div className="mt-4 mb-4 text-center">
                                   <span>Already have an account?<Link href="/sign-in-business"> Sign in here</Link></span>
                               </div>

                               <div className="align-items-center mt-0">
                                   <div className="d-grid">
                                       <button className="btn btn-success mb-0" type="submit"> <Link className="text-white" href="/sign-up-customer">Customer  Sign Up</Link></button>
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