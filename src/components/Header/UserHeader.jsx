import React from "react";

const UserHeader = () => {
  return (
    <div>
      <div class="navbar-dark bg-light d-none d-xl-block py-1 mx-2 mx-md-4 rounded-bottom-4">
        <div class="container">
          <div class="d-lg-flex justify-content-lg-between align-items-center">
            {/* <!-- Navbar top Left--> */}
            {/* <!-- Top info --> */}
            <ul class="nav align-items-center justify-content-center">
              <li
                class="nav-item me-3"
                data-bs-toggle="tooltip"
                data-bs-animation="false"
                data-bs-placement="bottom"
                data-bs-original-title="Sunday CLOSED"
              >
                <span>
                  <i class="far fa-envelope me-1"></i>support@2ndafriendly.com
                </span>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="tel:+1235869328">
                  <i class="fas fa-headset me-2"></i>+1 234-456-7890
                </a>
              </li>
            </ul>
            {/* <!-- Navbar top Right--> */}
            <div class="nav d-flex align-items-center justify-content-center">
              {/* <!-- Language --> */}
              <div class="dropdown me-3">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="dropdownLanguage"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fas fa-globe me-2"></i>Language
                </a>
                <div
                  class="dropdown-menu mt-2 min-w-auto shadow"
                  aria-labelledby="dropdownLanguage"
                >
                  <a class="dropdown-item me-4" href="#">
                    <img
                      class="fa-fw me-2"
                      src="../assets/img/flags/uk.svg"
                      alt=""
                    />
                    English
                  </a>
                  <a class="dropdown-item me-4" href="#">
                    <img
                      class="fa-fw me-2"
                      src="../assets/img/flags/sp.svg"
                      alt=""
                    />
                    Español
                  </a>
                  <a class="dropdown-item me-4" href="#">
                    <img
                      class="fa-fw me-2"
                      src="../assets/img/flags/fr.svg"
                      alt=""
                    />
                    Français
                  </a>
                  <a class="dropdown-item me-4" href="#">
                    <img
                      class="fa-fw me-2"
                      src="../assets/img/flags/gr.svg"
                      alt=""
                    />
                    Deutsch
                  </a>
                </div>
              </div>
              {/* <!-- Top social --> */}
              <ul class="list-unstyled d-flex mb-0">
                <li>
                  {" "}
                  <a class="px-2 nav-link" href="#">
                    <i class="fab fa-facebook"></i>
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a class="px-2 nav-link" href="#">
                    <i class="fab fa-instagram"></i>
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a class="px-2 nav-link" href="#">
                    <i class="fab fa-twitter"></i>
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a class="ps-2 nav-link" href="#">
                    <i class="fab fa-linkedin-in"></i>
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a class="ps-2 nav-link" href="#">
                    <i class="fab fa-youtube"></i>
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <header class="navbar-light header-static navbar-sticky shadow-sm">
        <nav class="navbar navbar-expand-xl z-index-9">
          <div class="container">
            {/* <!-- Logo START --> */}
            <a class="navbar-brand me-0 py-4" href="/index">
              <img
                class="light-mode-item"
                src="../assets/img/logo.png"
                alt="logo"
              />
              <img
                class="dark-mode-item"
                src="../assets/img/logo.png"
                alt="logo"
              />
            </a>
            {/* <!-- Logo END --> */}
            {/* <!-- Responsive navbar toggler --> */}
            <button
              class="navbar-toggler ms-auto"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-animation">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>

            {/* <!-- Main navbar START --> */}
            <div class="navbar-collapse collapse" id="navbarCollapse">
              <ul class="navbar-nav navbar-nav-scroll">
                <li class="nav-item dropdown">
                  {" "}
                  <a class="nav-link" href="/user">
                    <i class="bi bi-house me-2"></i>Home
                  </a>{" "}
                </li>
                <li class="nav-item dropdown">
                  {" "}
                  <a class="nav-link" href="/user/message">
                    <i class="bi bi-chat-right-dots me-2"></i>Message
                  </a>{" "}
                </li>
                <li class="nav-item dropdown">
                  {" "}
                  <a class="nav-link" href="/user/reviews">
                    <i class="bi bi-bell-fill me-2"></i>Reviews
                  </a>{" "}
                </li>
                <li class="nav-item dropdown">
                  {" "}
                  <a class="nav-link" href="/user/wishlist">
                    <i class="bi bi-check-circle-fill me-2"></i>Wishlist
                  </a>{" "}
                </li>
                <li class="nav-item dropdown">
                  {" "}
                  <a class="nav-link" href="/user/support">
                    <i class="bi bi-headset me-2"></i>Support
                  </a>{" "}
                </li>
              </ul>
              {/* <!-- Nav Main menu END --> */}
            </div>
            {/* <!-- Main navbar END --> */}

            {/* <!-- Profile and notification START --> */}
            <ul class="nav flex-row align-items-center list-unstyled ms-xl-auto">
              {/* <!-- Notification dropdown START --> */}
              <li class="nav-item ms-2 ms-sm-3 dropdown d-none d-sm-block">
                {/* <!-- Notification button --> */}
                <a
                  class="btn btn-light btn-round mb-0"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-bs-auto-close="outside"
                >
                  <i class="bi bi-bell fa-fw"></i>
                </a>
                {/* <!-- Notification dote --> */}
                <span class="notif-badge animation-blink"></span>

                {/* <!-- Notification dropdown menu START --> */}
                <div class="dropdown-menu dropdown-animation dropdown-menu-end dropdown-menu-size-md p-0 shadow-lg border-0">
                  <div class="card bg-transparent">
                    <div class="card-header bg-transparent border-bottom py-4 d-flex justify-content-between align-items-center">
                      <h6 class="m-0">
                        Notifications{" "}
                        <span class="badge bg-danger bg-opacity-10 text-danger ms-2">
                          2 new
                        </span>
                      </h6>
                      <a class="small" href="#">
                        Clear all
                      </a>
                    </div>
                    <div class="card-body p-0">
                      <ul class="list-group list-unstyled list-group-flush">
                        {/* <!-- Notif item --> */}
                        <li>
                          <a
                            href="#"
                            class="list-group-item-action border-0 border-bottom d-flex p-3"
                          >
                            <div class="me-3">
                              <div class="avatar avatar-md">
                                <img
                                  class="avatar-img rounded-circle"
                                  src="../assets/img/user/arielle.jpg"
                                  alt="avatar"
                                />
                              </div>
                            </div>
                            <div>
                              <p class="text-body small m-0">
                                <b>New messages or updates:</b> If it's a social
                                media platform or messaging service.
                              </p>
                              <u class="small">Say congrats</u>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="card-body p-0">
                      <ul class="list-group list-unstyled list-group-flush">
                        {/* <!-- Notif item --> */}
                        <li>
                          <a
                            href="#"
                            class="list-group-item-action border-0 border-bottom d-flex p-3"
                          >
                            <div class="me-3">
                              <div class="avatar avatar-md">
                                <img
                                  class="avatar-img rounded-circle"
                                  src="../assets/img/user/user-2.jpg"
                                  alt="avatar"
                                />
                              </div>
                            </div>
                            <div>
                              <p class="text-body small m-0">
                                <b>General announcements:</b> Websites send
                                notifications for announcements.
                              </p>
                              <u class="small">Say congrats</u>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="card-body p-0">
                      <ul class="list-group list-unstyled list-group-flush">
                        {/* <!-- Notif item --> */}
                        <li>
                          <a
                            href="#"
                            class="list-group-item-action border-0 border-bottom d-flex p-3"
                          >
                            <div class="me-3">
                              <div class="avatar avatar-md">
                                <img
                                  class="avatar-img rounded-circle"
                                  src="../assets/img/user/user-3.jpg"
                                  alt="avatar"
                                />
                              </div>
                            </div>
                            <div>
                              <p class="text-body small m-0">
                                <b>Account-related notifications:</b> These
                                could include alerts about changes to your
                              </p>
                              <u class="small">Say congrats</u>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="card-body p-0">
                      <ul class="list-group list-unstyled list-group-flush">
                        {/* <!-- Notif item --> */}
                        <li>
                          <a
                            href="#"
                            class="list-group-item-action border-0 border-bottom d-flex p-3"
                          >
                            <div class="me-3">
                              <div class="avatar avatar-md">
                                <img
                                  class="avatar-img rounded-circle"
                                  src="../assets/img/user/user-4.jpg"
                                  alt="avatar"
                                />
                              </div>
                            </div>
                            <div>
                              <p class="text-body small m-0">
                                <b>Product or service updates:</b> Websites
                                offering products or services might notify.
                              </p>
                              <u class="small">Say congrats</u>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="card-body p-0">
                      <ul class="list-group list-unstyled list-group-flush">
                        {/* <!-- Notif item --> */}
                        <li>
                          <a
                            href="#"
                            class="list-group-item-action border-0 border-bottom d-flex p-3"
                          >
                            <div class="me-3">
                              <div class="avatar avatar-md">
                                <img
                                  class="avatar-img rounded-circle"
                                  src="../assets/img/user/user-5.jpg"
                                  alt="avatar"
                                />
                              </div>
                            </div>
                            <div>
                              <p class="text-body small m-0">
                                <b>Activity alerts:</b> Some websites notify you
                                about activity related to your account.
                              </p>
                              <u class="small">Say congrats</u>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div class="card-footer bg-transparent border-0 py-3 text-center position-relative">
                      <a href="#" class="stretched-link">
                        See all incoming activity
                      </a>
                    </div>
                  </div>
                </div>
                {/* <!-- Notification dropdown menu END --> */}
              </li>
              {/* <!-- Notification dropdown END --> */}

              {/* <!-- Profile dropdown START --> */}
              <li class="nav-item ms-3 dropdown">
                <a
                  class="avatar avatar-sm p-0"
                  href="#"
                  id="profileDropdown"
                  role="button"
                  data-bs-auto-close="outside"
                  data-bs-display="static"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    class="avatar-img rounded-circle"
                    src="../assets/img/user/arielle.jpg"
                    alt="avatar"
                  />
                </a>

                {/* <!-- Profile dropdown START --> */}
                <ul
                  class="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3"
                  aria-labelledby="profileDropdown"
                >
                  <li class="px-3 mb-3">
                    <div class="d-flex align-items-center">
                      <div class="avatar me-3">
                        <img
                          class="avatar-img rounded-circle shadow"
                          src="../assets/img/user/arielle.jpg"
                          alt="avatar"
                        />
                      </div>
                      <div>
                        <a class="h6" href="#">
                          Arielle Norheim
                        </a>
                        <p class="small m-0">arinorheim@hotmail.com</p>
                      </div>
                    </div>
                  </li>
                  {/* <!-- Links --> */}
                  <li>
                    {" "}
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      class="dropdown-item bg-danger-soft-hover"
                      href="/user/dashboard"
                    >
                      <i class="bi bi-ui-checks-grid fa-fw me-2"></i>Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item bg-danger-soft-hover"
                      href="/user/account-information"
                    >
                      <i class="bi bi-gear fa-fw me-2"></i>Account Information
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item bg-danger-soft-hover"
                      href="/user/message"
                    >
                      <i class="bi bi-gear fa-fw me-2"></i>My Collection
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item bg-danger-soft-hover"
                      href="/user/support"
                    >
                      <i class="bi bi-info-circle fa-fw me-2"></i>Support
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item bg-danger-soft-hover" href="#">
                      <i class="bi bi-power fa-fw me-2"></i>Sign Out
                    </a>
                  </li>
                  <li>
                    {" "}
                    <hr class="dropdown-divider" />
                  </li>
                  {/* <!-- Dark mode options START --> */}
                  <li>
                    <div class="bg-light dark-mode-switch theme-icon-active d-flex align-items-center p-1 rounded mt-2">
                      <button
                        type="button"
                        class="btn btn-sm mb-0"
                        data-bs-theme-value="light"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-sun fa-fw mode-switch"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                          <use href="#"></use>
                        </svg>{" "}
                        Light
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm mb-0"
                        data-bs-theme-value="dark"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-moon-stars fa-fw mode-switch"
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
                        class="btn btn-sm mb-0 active"
                        data-bs-theme-value="auto"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-circle-half fa-fw mode-switch"
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
