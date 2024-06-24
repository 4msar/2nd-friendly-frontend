import React from 'react'
import Link from "next/link";
import StepForm from "@/components/Form/StepForm";
import signUpImg from "@/assets/img/element/02.svg"
import avatar1 from "@/assets/img/avatar/01.jpg";
import avatar2 from "@/assets/img/avatar/02.jpg";
import avatar3 from "@/assets/img/avatar/03.jpg";
import avatar4 from "@/assets/img/avatar/04.jpg";
import Head from 'next/head';

const SingUp = () => {
  return (
    <main>
        <Head>
            <title>Sing Up | 2nd A Friendly</title>
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

              <img src={signUpImg.src} className="mt-5" alt="" />
              {/* <!-- Info --> */}
              <div className="d-sm-flex mt-5 align-items-center justify-content-center">
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
                  4k+ Business joined us, now it's your turn.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- Right --> */}
          <div className="col-12 col-lg-6 m-auto">
            <div className="row my-5">
              <div className="col-sm-10 col-xl-8 m-auto">
                <img
                  src="assets/img/element/03.svg"
                  className="h-40px mb-2"
                  alt=""
                />
                <h2>Sign up for your account!</h2>
                <p className="lead mb-4">
                  Nice to see you! Please Sign up with your account.
                </p>
                
               <StepForm />
              </div>
              {/* <!-- Social buttons --> */}
              <div className="row">
                {/* <!-- Divider with text --> */}
                <div className="position-relative my-4">
                  <hr />
                  <p className="small position-absolute top-50 start-50 translate-middle bg-body px-5">
                    Or
                  </p>
                </div>
                {/* <!-- Social btn --> */}
                <div className="col-xxl-4 d-grid">
                  <a href="#" className="btn bg-google mb-2 mb-xxl-0">
                    <i className="fab fa-fw fa-google text-white me-2"></i>Signup
                    with Google
                  </a>
                </div>
                {/* <!-- Social btn --> */}
                <div className="col-xxl-4 d-grid">
                  <a href="#" className="btn bg-facebook mb-0">
                    <i className="fab fa-fw fa-facebook-f me-2"></i>Signup with
                    Facebook
                  </a>
                </div>
                {/* <!-- Social btn --> */}
                <div className="col-xxl-4 d-grid">
                  <a href="#" className="btn bg-apple-gray border mb-0">
                    <i className="fab fa-fw fa-apple me-2"></i>Signup with Mac
                  </a>
                </div>
              </div>
              {/* <!-- Sign up link --> */}
              <div className="mt-4 text-center">
                <span>
                  Already have an account?
                  <Link href="sign-in"> Sign in here</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  </main>
  )
}

export default SingUp