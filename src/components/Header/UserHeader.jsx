import React from "react";
import sp from "@/assets/img/flags/sp.svg";
import uk from "@/assets/img/flags/uk.svg";
import fr from "@/assets/img/flags/fr.svg";
import gr from "@/assets/img/flags/gr.svg";
import logo from "@/assets/img/logo.png";
import user1 from "@/assets/img/user/user-5.jpg";
import user2 from "@/assets/img/user/user-4.jpg";
import user3 from "@/assets/img/user/user-3.jpg";
import user4 from "@/assets/img/user/user-2.jpg";
import user5 from "@/assets/img/user/user-1.jpg";
import Link from "next/link";
import { useAuthStore } from "@/store";

const UserHeader = () => {
  const logOut = useAuthStore((store) => store.resetAuth);
  return (
    <div>
      <div className="navbar-dark bg-light d-none d-xl-block py-1 mx-2 mx-md-4 rounded-bottom-4">
        <div className="container">
          <div className="d-lg-flex justify-content-lg-between align-items-center">
            {/* <!-- Navbar top Left--> */}
            {/* <!-- Top info --> */}
            <ul className="nav align-items-center justify-content-center">
              <li
                className="nav-item me-3"
                data-bs-toggle="tooltip"
                data-bs-animation="false"
                data-bs-placement="bottom"
                data-bs-original-title="Sunday CLOSED"
              >
                <span>
                  <i className="far fa-envelope me-1"></i>support@2ndafriendly.com
                </span>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="tel:+1235869328">
                  <i className="fas fa-headset me-2"></i>+1 234-456-7890
                </a>
              </li>
            </ul>
            {/* <!-- Navbar top Right--> */}
            <div className="nav d-flex align-items-center justify-content-center">
              {/* <!-- Language --> */}
              <div className="dropdown me-3">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdownLanguage"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-globe me-2"></i>Language
                </a>
                <div
                  className="dropdown-menu mt-2 min-w-auto shadow"
                  aria-labelledby="dropdownLanguage"
                >
                  <Link className="dropdown-item me-4" href="#">
                    <img
                      className="fa-fw me-2"
                      src={uk.src}
                      alt=""
                    />
                    English
                  </Link>
                  <Link className="dropdown-item me-4" href="#">
                    <img
                      className="fa-fw me-2"
                      src={sp.src}
                      alt=""
                    />
                    Español
                  </Link>
                  <a className="dropdown-item me-4" href="#">
                    <img
                      className="fa-fw me-2"
                      src={fr.src}
                      alt=""
                    />
                    Français
                  </a>
                  <a className="dropdown-item me-4" href="#">
                    <img
                      className="fa-fw me-2"
                      src={gr.src}
                      alt=""
                    />
                    Deutsch
                  </a>
                </div>
              </div>
              {/* <!-- Top social --> */}
              <ul className="list-unstyled d-flex mb-0">
                <li>
                  {" "}
                  <a className="px-2 nav-link" href="#">
                    <i className="fab fa-facebook"></i>
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a className="px-2 nav-link" href="#">
                    <i className="fab fa-instagram"></i>
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a className="px-2 nav-link" href="#">
                    <i className="fab fa-twitter"></i>
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a className="ps-2 nav-link" href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a className="ps-2 nav-link" href="#">
                    <i className="fab fa-youtube"></i>
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <header className="navbar-light header-static navbar-sticky shadow-sm">
        <nav className="navbar navbar-expand-xl z-index-9">
          <div className="container">
            {/* <!-- Logo START --> */}
            <a className="navbar-brand me-0 py-4" href="/">
              <img
                className="light-mode-item"
                src={logo.src}
                alt="logo"
              />
              <img
                className="dark-mode-item"
                src={logo.src}
                alt="logo"
              />
            </a>
            {/* <!-- Logo END --> */}
            {/* <!-- Responsive navbar toggler --> */}
            <button
              className="navbar-toggler ms-auto"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-animation">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>

            {/* <!-- Main navbar START --> */}
            <div className="navbar-collapse collapse" id="navbarCollapse">
              <ul className="navbar-nav navbar-nav-scroll">
                <li className="nav-item dropdown">
                  {" "}
                  <a className="nav-link" href="/user">
                    <i className="bi bi-house me-2"></i>Home
                  </a>{" "}
                </li>
                <li className="nav-item dropdown">
                  {" "}
                  <a className="nav-link" href="/user/message">
                    <i className="bi bi-chat-right-dots me-2"></i>Message
                  </a>{" "}
                </li>
                <li className="nav-item dropdown">
                  {" "}
                  <a className="nav-link" href="/user/reviews">
                    <i className="bi bi-bell-fill me-2"></i>Reviews
                  </a>{" "}
                </li>
                <li className="nav-item dropdown">
                  {" "}
                  <a className="nav-link" href="/user/wishlist">
                    <i className="bi bi-check-circle-fill me-2"></i>Wishlist
                  </a>{" "}
                </li>
                <li className="nav-item dropdown">
                  {" "}
                  <a className="nav-link" href="/user/support">
                    <i className="bi bi-headset me-2"></i>Support
                  </a>{" "}
                </li>
              </ul>
              {/* <!-- Nav Main menu END --> */}
            </div>
            {/* <!-- Main navbar END --> */}

            {/* <!-- Profile and notification START --> */}
            <ul className="nav flex-row align-items-center list-unstyled ms-xl-auto">
              {/* <!-- Notification dropdown START --> */}
              <li className="nav-item ms-2 ms-sm-3 dropdown d-none d-sm-block">
                {/* <!-- Notification button --> */}
                <a
                  className="btn btn-light btn-round mb-0"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-bs-auto-close="outside"
                >
                  <i className="bi bi-bell fa-fw"></i>
                </a>
                {/* <!-- Notification dote --> */}
                <span className="notif-badge animation-blink"></span>

                {/* <!-- Notification dropdown menu START --> */}
                <div className="dropdown-menu dropdown-animation dropdown-menu-end dropdown-menu-size-md p-0 shadow-lg border-0">
                  <div className="card bg-transparent">
                    <div className="card-header bg-transparent border-bottom py-4 d-flex justify-content-between align-items-center">
                      <h6 className="m-0">
                        Notifications{" "}
                        <span className="badge bg-danger bg-opacity-10 text-danger ms-2">
                          2 new
                        </span>
                      </h6>
                      <a className="small" href="#">
                        Clear all
                      </a>
                    </div>
                    <div className="card-body p-0">
                      <ul className="list-group list-unstyled list-group-flush">
                        {/* <!-- Notif item --> */}
                        <li>
                          <a
                            href="#"
                            className="list-group-item-action border-0 border-bottom d-flex p-3"
                          >
                            <div className="me-3">
                              <div className="avatar avatar-md">
                                <img
                                  className="avatar-img rounded-circle"
                                  src={user1.src}
                                  alt="avatar"
                                />
                              </div>
                            </div>
                            <div>
                              <p className="text-body small m-0">
                                <b>New messages or updates:</b> If it's a social
                                media platform or messaging service.
                              </p>
                              <u className="small">Say congrats</u>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="card-body p-0">
                      <ul className="list-group list-unstyled list-group-flush">
                        {/* <!-- Notif item --> */}
                        <li>
                          <a
                            href="#"
                            className="list-group-item-action border-0 border-bottom d-flex p-3"
                          >
                            <div className="me-3">
                              <div className="avatar avatar-md">
                                <img
                                  className="avatar-img rounded-circle"
                                  src={user2.src}
                                  alt="avatar"
                                />
                              </div>
                            </div>
                            <div>
                              <p className="text-body small m-0">
                                <b>General announcements:</b> Websites send
                                notifications for announcements.
                              </p>
                              <u className="small">Say congrats</u>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="card-body p-0">
                      <ul className="list-group list-unstyled list-group-flush">
                        {/* <!-- Notif item --> */}
                        <li>
                          <a
                            href="#"
                            className="list-group-item-action border-0 border-bottom d-flex p-3"
                          >
                            <div className="me-3">
                              <div className="avatar avatar-md">
                                <img
                                  className="avatar-img rounded-circle"
                                  src={user3.src}
                                  alt="avatar"
                                />
                              </div>
                            </div>
                            <div>
                              <p className="text-body small m-0">
                                <b>Account-related notifications:</b> These
                                could include alerts about changes to your
                              </p>
                              <u className="small">Say congrats</u>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="card-body p-0">
                      <ul className="list-group list-unstyled list-group-flush">
                        {/* <!-- Notif item --> */}
                        <li>
                          <a
                            href="#"
                            className="list-group-item-action border-0 border-bottom d-flex p-3"
                          >
                            <div className="me-3">
                              <div className="avatar avatar-md">
                                <img
                                  className="avatar-img rounded-circle"
                                  src={user4.src}
                                  alt="avatar"
                                />
                              </div>
                            </div>
                            <div>
                              <p className="text-body small m-0">
                                <b>Product or service updates:</b> Websites
                                offering products or services might notify.
                              </p>
                              <u className="small">Say congrats</u>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="card-body p-0">
                      <ul className="list-group list-unstyled list-group-flush">
                        {/* <!-- Notif item --> */}
                        <li>
                          <a
                            href="#"
                            className="list-group-item-action border-0 border-bottom d-flex p-3"
                          >
                            <div className="me-3">
                              <div className="avatar avatar-md">
                                <img
                                  className="avatar-img rounded-circle"
                                  src={user5.src}
                                  alt="avatar"
                                />
                              </div>
                            </div>
                            <div>
                              <p className="text-body small m-0">
                                <b>Activity alerts:</b> Some websites notify you
                                about activity related to your account.
                              </p>
                              <u className="small">Say congrats</u>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="card-footer bg-transparent border-0 py-3 text-center position-relative">
                      <a href="#" className="stretched-link">
                        See all incoming activity
                      </a>
                    </div>
                  </div>
                </div>
                {/* <!-- Notification dropdown menu END --> */}
              </li>
              {/* <!-- Notification dropdown END --> */}

              {/* <!-- Profile dropdown START --> */}
              <li className="nav-item ms-3 dropdown">
                <a
                  className="avatar avatar-sm p-0"
                  href="#"
                  id="profileDropdown"
                  role="button"
                  data-bs-auto-close="outside"
                  data-bs-display="static"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    className="avatar-img rounded-circle"
                    src={user2.src}
                    alt="avatar"
                  />
                </a>

                {/* <!-- Profile dropdown START --> */}
                <ul
                  className="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3"
                  aria-labelledby="profileDropdown"
                >
                  <li className="px-3 mb-3">
                    <div className="d-flex align-items-center">
                      <div className="avatar me-3">
                        <img
                          className="avatar-img rounded-circle shadow"
                          src={user2.src}
                          alt="avatar"
                        />
                      </div>
                      <div>
                        <a className="h6" href="#">
                          Arielle Norheim
                        </a>
                        <p className="small m-0">arinorheim@hotmail.com</p>
                      </div>
                    </div>
                  </li>
                  {/* <!-- Links --> */}
                  <li>
                    {" "}
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      className="dropdown-item bg-danger-soft-hover"
                      href="/user/dashboard"
                    >
                      <i className="bi bi-ui-checks-grid fa-fw me-2"></i>Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item bg-danger-soft-hover"
                      href="/user/account-information"
                    >
                      <i className="bi bi-gear fa-fw me-2"></i>Account Information
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item bg-danger-soft-hover"
                      href="/user/message"
                    >
                      <i className="bi bi-gear fa-fw me-2"></i>My Collection
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item bg-danger-soft-hover"
                      href="/user/support"
                    >
                      <i className="bi bi-info-circle fa-fw me-2"></i>Support
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => logOut()} className="dropdown-item bg-danger-soft-hover" href="#">
                      <i className="bi bi-power fa-fw me-2"></i>Sign Out
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <hr className="dropdown-divider" />
                  </li>
                  {/* <!-- Dark mode options START --> */}
                  <li>
                    <div className="bg-light dark-mode-switch theme-icon-active d-flex align-items-center p-1 rounded mt-2">
                      <button
                        type="button"
                        className="btn btn-sm mb-0"
                        data-bs-theme-value="light"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-sun fa-fw mode-switch"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                          <use href="#"></use>
                        </svg>{" "}
                        Light
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm mb-0"
                        data-bs-theme-value="dark"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-moon-stars fa-fw mode-switch"
                          viewBox="0 0 16 16"
                        >
                          <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
                          <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
                          <use href="#"></use>
                        </svg>{" "}
                        Dark
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm mb-0 active"
                        data-bs-theme-value="auto"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-circle-half fa-fw mode-switch"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
                          <use href="#"></use>
                        </svg>{" "}
                        Auto
                      </button>
                    </div>
                  </li>
                  {/* <!-- Dark mode options END--> */}
                </ul>
                {/* <!-- Profile dropdown END --> */}
              </li>
            </ul>
            {/* <!-- Profile and notification END --> */}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default UserHeader;
