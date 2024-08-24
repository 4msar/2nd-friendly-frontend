import companyLogo from "@/assets/img/company-logo/7.svg";
import fr from "@/assets/img/flags/fr.svg";
import gr from "@/assets/img/flags/gr.svg";
import sp from "@/assets/img/flags/sp.svg";
import uk from "@/assets/img/flags/uk.svg";
import logo from "@/assets/img/logo.png";
import { useHeaderStyle } from "@/assets/stylesheets/header/headerStylesheet";
import { IMAGE_URL } from "@/helpers/apiUrl";
import { isEmpty } from "@/helpers/functions";
import {
  useAuthStore,
  useBusinessAboutStore,
  usePublicPageStore,
} from "@/store";
import { useCustomerAboutStore } from "@/store/useCustomerAboutStore";
import { Box } from "@mui/material";
import Link from "next/link";

const Header = () => {
  const classes = useHeaderStyle();
  const userProfile = useAuthStore((store) => store.user);
  const expires_in = useAuthStore((state) => state.expires_in);
  const isExpired = Date.now() >= expires_in;
  const topMenu = usePublicPageStore((store) => store.topMenu);
  const moreMenu = usePublicPageStore((store) => store.moreMenu);
  const customer = useCustomerAboutStore((store) => store.customer);
  const customerProfile = useCustomerAboutStore((store) => store.customerProfile);
  const businessProfile = useBusinessAboutStore((store) => store.businessProfile);
  const logOut = useAuthStore((store) => store.resetAuth);
  const resetAbout = useCustomerAboutStore((store) => store.resetAboutData);
  const resetBusinessAbout = useBusinessAboutStore(
    (store) => store.resetBusinessAboutData
  );

  const handleLogout = () => {
    if (userProfile?.isCustomer) {
      resetAbout();
    } else {
      resetBusinessAbout();
    }
    logOut();
  };

  return (
    <div className={classes.root}>
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
                <Link href="mailto:support@2ndafriendly.com">
                  <i className="far fa-envelope me-1"></i>
                  support@2ndafriendly.com
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="tel:+1235869328">
                  <i className="fas fa-headset me-2"></i>+1 235-869-328
                </Link>
              </li>
              {isExpired ? (
                <>
                  <li class="nav-item">
                    <Link class="nav-link" href="/sign-up-business">
                      <i class="fas fa-lock-open me-2"></i>Sign Up
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" href="/sign-in-business">
                      <i class="fas fa-lock me-2"></i>Sign In
                    </Link>
                  </li>
                </>
              ) : (
                <li class="nav-item">
                  <Link
                    class="nav-link"
                    href="#"
                    onClick={() => handleLogout()}
                  >
                    <i class="fas fa-lock-open me-2"></i>Sign Out
                  </Link>
                </li>
              )}
            </ul>
            {/* <!-- Navbar top Right--> */}
            <Box className="nav d-flex align-items-center justify-content-center">
              {/* <!-- Language --> */}
              <Box className="dropdown me-3">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdownLanguage"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-globe me-2"></i>Language
                </Link>
                <Box
                  className="dropdown-menu mt-2 min-w-auto shadow"
                  aria-labelledby="dropdownLanguage"
                >
                  <Link className="dropdown-item me-4" href="#">
                    <img className="fa-fw me-2" src={uk.src} alt="" />
                    English
                  </Link>
                  <Link className="dropdown-item me-4" href="#">
                    <img className="fa-fw me-2" src={sp.src} alt="" />
                    Español
                  </Link>
                  <Link className="dropdown-item me-4" href="#">
                    <img className="fa-fw me-2" src={fr.src} alt="" />
                    Français
                  </Link>
                  <Link className="dropdown-item me-4" href="#">
                    <img className="fa-fw me-2" src={gr.src} alt="" />
                    Deutsch
                  </Link>
                </Box>
              </Box>
              {/* <!-- Top social --> */}
              <ul className="list-unstyled d-flex mb-0">
                <li>
                  {" "}
                  <Link className="px-2 nav-link" href="#">
                    <i className="fab fa-facebook"></i>
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link className="px-2 nav-link" href="#">
                    <i className="fab fa-instagram"></i>
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link className="px-2 nav-link" href="#">
                    <i className="fab fa-twitter"></i>
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link className="ps-2 nav-link" href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link className="ps-2 nav-link" href="#">
                    <i className="fab fa-youtube"></i>
                  </Link>{" "}
                </li>
              </ul>
            </Box>
          </div>
        </div>
      </div>
      <header className="navbar-light header-static navbar-sticky shadow-sm">
        {/* <!-- Logo Nav START --> */}
        <nav className="navbar navbar-expand-xl">
          <div className="container">
            {/* <!-- Logo START --> */}
            <Link className="navbar-brand me-0 py-4" href="/">
              <img className="light-mode-item" src={logo.src} alt="logo" />
              <img className="dark-mode-item" src={logo.src} alt="logo" />
            </Link>
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
            <div
              className="navbar-collapse collapse justify-content-end"
              id="navbarCollapse"
            >
              {/* <!-- Nav Search END --> */}
              <ul className="navbar-nav navbar-nav-scroll">
                {/* <!-- Nav item 1 link --> */}
                {topMenu?.length > 0 &&
                  topMenu?.map((top, index) => (
                    <li className="nav-item dropdown" key={index}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          padding: "0 14px",
                        }}
                      >
                        <Link
                          className="nav-link p-0"
                          href={`/category/${top.slug}`}
                        >
                          {top.name}
                        </Link>
                        <a
                          className="nav-link dropdown-toggle p-0"
                          href="#"
                          id={`dropdownMenu${index}`}
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        ></a>
                      </Box>
                      <ul
                        className="dropdown-menu dropdown-menu-end min-w-auto"
                        data-bs-popper="none"
                      >
                        {top.subCategory?.length > 0 &&
                          top.subCategory.map((sub, index) => (
                            <li key={index}>
                              <Link
                                className="dropdown-item"
                                href={`/category/${top.slug}/${sub.slug}`}
                              >
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </li>
                  ))}

                {/* <!-- Nav item 2 link --> */}
                {/* <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    href="/category/home-garden"
                    id="demoMenu"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Home & Garden
                  </Link>
                  <ul
                    className="dropdown-menu dropdown-menu-end min-w-auto"
                    data-bs-popper="none"
                  >
                    <li>
                      <Link className="dropdown-item" href="/category/home-garden">
                        Antiques & Collectibles
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/category/home-garden">
                        Cleaning
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/category/home-garden">
                        Crafts, Hobbies & Sports
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/category/home-garden">
                        Flower Shops
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/category/home-garden">
                        Home Furnishings
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/category/home-garden">
                        Home Goods
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/category/home-garden">
                        Home Improvements & Repairs
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/category/home-garden">
                        Landscape & Lawn Service
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/category/home-garden">
                        Pest Control
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/category/home-garden">
                        Pool Supplies & Service
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/category/home-garden">
                        Security System & Services
                      </Link>
                    </li>
                  </ul>
                </li> */}
                {/* <!-- Nav item 2 link --> */}
                {/* <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    href="/category/travel-transportation"
                    id="demoMenu"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Travel & Transportation
                  </Link>
                  <ul
                    className="dropdown-menu dropdown-menu-end min-w-auto"
                    data-bs-popper="none"
                  >
                    <li>
                      {" "}
                      <Link
                        className="dropdown-item px-0 mb-1 p-0 fw-light"
                        href="/category/travel-transportation"
                      >
                        Consultants
                      </Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <Link
                        className="dropdown-item px-0 mb-1 p-0 fw-light"
                        href="/category/travel-transportation"
                      >
                        Employment Agency
                      </Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <Link
                        className="dropdown-item px-0 mb-1 p-0 fw-light"
                        href="/category/travel-transportation"
                      >
                        Marketing & Communications
                      </Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <Link
                        className="dropdown-item px-0 mb-1 p-0 fw-light"
                        href="/category/travel-transportation"
                      >
                        Office Supplies
                      </Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <Link
                        className="dropdown-item px-0 mb-1 p-0 fw-light"
                        href="/category/travel-transportation"
                      >
                        Printing & Publishing
                      </Link>{" "}
                    </li>
                  </ul>
                </li> */}
                {/* <!-- Nav item 3 link --> */}
                {/* <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    href="/category/automotive"
                    id="demoMenu"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Automotive
                  </Link>
                  <ul
                    className="dropdown-menu dropdown-menu-end min-w-auto"
                    data-bs-popper="none"
                  >
                    <li>
                      <Link className="dropdown-item" href="/category/automotive">
                        Auto Accessories
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/category/automotive">
                        Auto Dealers–New
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/category/automotive">
                        Auto Dealers–Used
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/category/automotive">
                        Detail & Carwash
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/category/automotive">
                        Gas Stations
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/category/automotive">
                        Motorcycle Sales & Repair
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/category/automotive">
                        Rental & Leasing
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/category/automotive">
                        Service, Repair & Parts
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/category/automotive">
                        Towing
                      </Link>
                    </li>
                  </ul>
                </li> */}
                {/* <!-- Nav item 3 link --> */}
                {/* <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    href="/category/personal-care-services"
                    id="demoMenu"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Personal Care & Services
                  </Link>
                  <ul
                    className="dropdown-menu dropdown-menu-end min-w-auto"
                    data-bs-popper="none"
                  >
                    <li>
                      <Link
                        className="dropdown-item"
                        href="/category/personal-care-services"
                      >
                        Animal Care & Supplies
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        href="/category/personal-care-services"
                      >
                        Barber & Beauty Salons
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        href="/category/personal-care-services"
                      >
                        Beauty Supplies
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        href="/category/personal-care-services"
                      >
                        Dry Cleaners & Laundromats
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        href="/category/personal-care-services"
                      >
                        Exercise & Fitness
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        href="/category/personal-care-services"
                      >
                        Massage & Body Works
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        href="/category/personal-care-services"
                      >
                        Nail Salons
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        href="/category/personal-care-services"
                      >
                        Shoe Repairs
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        href="/category/personal-care-services"
                      >
                        Tailors
                      </Link>
                    </li>
                  </ul>
                </li> */}
                {/* <!-- Nav item 6 Megamenu--> */}
                <li className="nav-item dropdown dropdown-fullwidth">
                  <Link
                    className="nav-link dropdown-toggle p-0"
                    href="#"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    More
                  </Link>
                  <div
                    className="dropdown-menu dropdown-menu-end"
                    data-bs-popper="none"
                  >
                    <div className="row p-4">
                      {/* <!-- Dropdown column item --> */}
                      <div className="col-xl-6 col-xxl-3 mb-3">
                        <h6 className="mb-2 border-bottom pb-2">
                          <Link href="/category/computers-electronics">
                            Computers & Electronics
                          </Link>
                        </h6>
                        <ul className="list-unstyled">
                          <li>
                            {" "}
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/computers-electronics"
                            >
                              Computer Programming & Support
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/computers-electronics"
                            >
                              Consumer Electronics & Accessories
                            </Link>{" "}
                          </li>
                        </ul>
                        <h6 className="mb-2 border-bottom pb-2 mt-4">
                          <Link href="/category/construction-contractors">
                            Construction & Contractors
                          </Link>
                        </h6>
                        <ul className="list-unstyled">
                          <li>
                            {" "}
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/construction-contractors"
                            >
                              Architects, Landscape Architects
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/construction-contractors"
                            >
                              Engineers & Surveyors
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/construction-contractors"
                            >
                              Blasting & Demolition
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/construction-contractors"
                            >
                              Building Materials & Supplies
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/construction-contractors"
                            >
                              Construction Companies
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/construction-contractors"
                            >
                              Electricians
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/construction-contractors"
                            >
                              Engineer, Survey
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/construction-contractors"
                            >
                              Environmental Assessments
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/construction-contractors"
                            >
                              Inspectors
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/construction-contractors"
                            >
                              Plaster & Concrete
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/construction-contractors"
                            >
                              Plumbers
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/construction-contractors"
                            >
                              Roofers
                            </Link>{" "}
                          </li>
                        </ul>
                        <h6 className="mb-2 border-bottom pb-2 mt-4">
                          <Link href="/category/miscellaneous">
                            Miscellaneous
                          </Link>
                        </h6>
                        <ul className="list-unstyled">
                          <li>
                            {" "}
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/miscellaneous"
                            >
                              Civic Groups
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/miscellaneous"
                            >
                              Funeral Service Providers & Cemetaries
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/miscellaneous"
                            >
                              Miscellaneous
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/miscellaneous"
                            >
                              Utility Companies
                            </Link>{" "}
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown column item --> */}
                      <div className="col-xl-6 col-xxl-3 mb-3">
                        <h6 className="mb-2 border-bottom pb-2">
                          <Link href="/category/entertainment">
                            Entertainment
                          </Link>
                        </h6>
                        <ul className="list-unstyled">
                          <li>
                            {" "}
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/entertainment"
                            >
                              Artists, Writers
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/entertainment"
                            >
                              Event Planners & Supplies
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/entertainment"
                            >
                              Golf Courses
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/entertainment"
                            >
                              Movies
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/entertainment"
                            >
                              Productions
                            </Link>{" "}
                          </li>
                        </ul>
                        <h6 className="mb-2 border-bottom pb-2 mt-4">
                          <Link href="/category/legal-financial">
                            Legal & Financial
                          </Link>
                        </h6>
                        <ul className="list-unstyled">
                          <li>
                            {" "}
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/legal-financial"
                            >
                              Accountants
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/legal-financial"
                            >
                              Attorneys
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/legal-financial"
                            >
                              Financial Institutions
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/legal-financial"
                            >
                              Financial Services
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/legal-financial"
                            >
                              Insurance
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/legal-financial"
                            >
                              Other Legal
                            </Link>{" "}
                          </li>
                        </ul>
                        <h6 className="mb-2 border-bottom pb-2 mt-4">
                          <Link href="/category/real-estate">Real Estate</Link>
                        </h6>
                        <ul className="list-unstyled">
                          <li>
                            {" "}
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/real-estate"
                            >
                              Agencies & Brokerage
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/real-estate"
                            >
                              Agents & Brokers
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/real-estate"
                            >
                              Apartment & Home Rental
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/real-estate"
                            >
                              Mortgage Broker & Lender
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/real-estate"
                            >
                              Property Management{" "}
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/real-estate"
                            >
                              Title Company{" "}
                            </Link>{" "}
                          </li>
                        </ul>
                      </div>
                      <div className="col-xl-6 col-xxl-3 mb-3">
                        <h6 className="mb-2 border-bottom pb-2">
                          <Link href="/category/manufacturing_wholesale_distribution">
                            Manufacturing, Wholesale, Distribution
                          </Link>
                        </h6>
                        <ul className="list-unstyled">
                          <li>
                            {" "}
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/manufacturing-wholesale-distribution"
                            >
                              Distribution, Import/Export
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/manufacturing-wholesale-distribution"
                            >
                              Manufacturing
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/manufacturing-wholesale-distribution"
                            >
                              Wholesale
                            </Link>{" "}
                          </li>
                        </ul>
                        <h6 className="mb-2 border-bottom pb-2 mt-4">
                          <Link href="/category/merchants">
                            Merchants (Retail)
                          </Link>
                        </h6>
                        <ul className="list-unstyled">
                          <li>
                            {" "}
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/merchants"
                            >
                              Cards & Gifts
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/merchants"
                            >
                              Department Stores, Sporting Goods
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/merchants"
                            >
                              General
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/merchants"
                            >
                              Jewelry
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/merchants"
                            >
                              Shoes
                            </Link>{" "}
                          </li>
                        </ul>
                        <h6 className="mb-2 border-bottom pb-2 mt-4">
                          <Link href="/category/education">Education</Link>
                        </h6>
                        <ul className="list-unstyled">
                          <li>
                            {" "}
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/education"
                            >
                              Adult & Continuing Education
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/education"
                            >
                              Early Childhood Education
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/education"
                            >
                              Educational Resources
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/education"
                            >
                              Other Educational
                            </Link>{" "}
                          </li>
                        </ul>

                        <h6 className="mb-2 border-bottom pb-2 mt-4">
                          <Link href="/category/business-support-supplies">
                            Business Support & Supplies
                          </Link>
                        </h6>
                        <ul className="list-unstyled">
                          <li>
                            {" "}
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/business-support-supplies"
                            >
                              Consultants
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/business-support-supplies"
                            >
                              Employment Agency
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/business-support-supplies"
                            >
                              Marketing & Communications
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/business-support-supplies"
                            >
                              Office Supplies
                            </Link>{" "}
                          </li>
                          <li>
                            {" "}
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/business-support-supplies"
                            >
                              Printing & Publishing
                            </Link>{" "}
                          </li>
                        </ul>
                      </div>
                      <div className="col-xl-6 col-xxl-3 mb-3">
                        <h6 className="mb-2 border-bottom pb-2">
                          <Link href="/category/health-medicine">
                            Health & Medicine
                          </Link>
                        </h6>
                        <ul className="list-unstyled">
                          <li>
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/health-medicine"
                            >
                              Acupuncture
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/health-medicine"
                            >
                              Assisted Living & Home Health Care
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/health-medicine"
                            >
                              Audiologist
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/health-medicine"
                            >
                              Chiropractic
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/health-medicine"
                            >
                              Clinics & Medical Centers
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/health-medicine"
                            >
                              Dental
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/health-medicine"
                            >
                              Diet I& Nutrition
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/health-medicine"
                            >
                              Laboratory, Imaging & Diagnostic
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/health-medicine"
                            >
                              Massage Therapy
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/health-medicine"
                            >
                              Mental Health
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/health-medicine"
                            >
                              Nurse
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/health-medicine"
                            >
                              Optical
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/health-medicine"
                            >
                              Pharmacy, Drug & Vitamin Stores
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/health-medicine"
                            >
                              Physical Therapy
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/health-medicine"
                            >
                              Physicians & Assistants
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/health-medicine"
                            >
                              Physicians & Assistants
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/health-medicine"
                            >
                              Podiatry
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/health-medicine"
                            >
                              Social Worker
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/health-medicine"
                            >
                              Animal Hospital
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="/category/health-medicine"
                            >
                              Veterinary & Animal Surgeons
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/* <!-- Main navbar END --> */}
            {/* <!-- Nav Search START --> */}
            <div className="nav nav-item dropdown nav-search px-1 px-lg-3">
              <Link
                className="nav-link"
                role="button"
                href="#"
                id="navSearch"
                data-bs-toggle="dropdown"
                aria-expanded="true"
                data-bs-auto-close="outside"
                data-bs-display="static"
              >
                <i className="bi bi-search fs-4"> </i>
              </Link>
              <div
                className="dropdown-menu dropdown-menu-end shadow rounded p-2"
                aria-labelledby="navSearch"
                data-bs-popper="none"
              >
                <form className="input-group">
                  <input
                    className="form-control form-control-sm border-primary"
                    type="search"
                    placeholder="Search..."
                    aria-label="Search"
                  />
                  <button className="btn btn-sm btn-primary m-0" type="submit">
                    Search
                  </button>
                </form>
                <ul className="list-group list-group-borderless p-2 small">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span className="fw-bold">Recent Searches:</span>
                    <button className="btn btn-sm btn-link mb-0 px-0">
                      Clear all
                    </button>
                  </li>
                  <li className="list-group-item text-primary-hover text-truncate">
                    <Link href="#" className="text-body">
                      {" "}
                      <i className="far fa-clock me-1"></i>Digital marketing
                      course for Beginner
                    </Link>
                  </li>
                  <li className="list-group-item text-primary-hover text-truncate">
                    <Link href="#" className="text-body">
                      {" "}
                      <i className="far fa-clock me-1"></i>Customer Life cycle
                    </Link>
                  </li>
                  <li className="list-group-item text-primary-hover text-truncate">
                    <Link href="#" className="text-body">
                      {" "}
                      <i className="far fa-clock me-1"></i>What is Search
                    </Link>
                  </li>
                  <li className="list-group-item text-primary-hover text-truncate">
                    <Link href="#" className="text-body">
                      {" "}
                      <i className="far fa-clock me-1"></i>Facebook ADS
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- Nav Search END --> */}
            {/* <!-- Profile START --> */}
            {!isExpired && (
              <>
              {userProfile?.isCustomer ? (
              <div className="dropdown ms-1 ms-lg-0">
                <Link
                  className="nav-link"
                  role="button"
                  href="#"
                  id="profileDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                  data-bs-auto-close="outside"
                  data-bs-display="static"
                >
                  <div className="avatar me-3">
                        <img
                          className="avatar-img rounded-circle shadow"
                          src={customerProfile?.image ? `${IMAGE_URL}/uploads/customer-image/${customerProfile?.image}` : companyLogo.src}
                          alt="avatar"
                        />
                      </div>
                  {/* <img
                    className="avatar-img rounded-circle"
                    src={`${IMAGE_URL}/uploads/customer-image/${customerProfile?.image}`}
                    alt="logo"
                  /> */}
                </Link>
                <ul
                  className="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3"
                  aria-labelledby="profileDropdown"
                  data-bs-popper="none"
                >
                  {/* <!-- Profile info --> */}
                  <li className="px-3 mb-3">
                    <div className="d-flex align-items-center">
                      <div className="avatar me-3">
                        <img
                          className="avatar-img rounded-circle shadow"
                          
                          src={customerProfile?.image ? `${IMAGE_URL}/uploads/customer-image/${customerProfile?.image}` : companyLogo.src}
                          alt="avatar"
                        />
                      </div>
                      <div>
                        <Link className="h6" href="/#">
                          {`${customer?.first_name} ${customer?.last_name}`}
                        </Link>
                        <p className="small m-0">{userProfile?.email}</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      className="dropdown-item bg-danger-soft-hover"
                      href="/user/dashboard"
                    >
                      <i className="bi bi-ui-checks-grid fa-fw me-2"></i>
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item bg-danger-soft-hover"
                      href="/user/account-information"
                    >
                      <i className="bi bi-gear fa-fw me-2"></i>Account Setting
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item bg-danger-soft-hover"
                      href={`/user/account-information"`}
                    >
                      <i className="fas fa-business-time fa-fw me-2"></i>
                      Customer Information
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item bg-danger-soft-hover"
                      href="/user/support"
                    >
                      <i className="bi bi-headset fa-fw me-2"></i>Support
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item bg-danger-soft-hover"
                      href="#"
                      onClick={() => handleLogout()}
                    >
                      <i className="bi bi-power fa-fw me-2"></i>Sign Out
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <hr className="dropdown-divider" />
                  </li>
                  {/* <li>
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
                  </li> */}
                  {/* <!-- Dark mode options END--> */}
                </ul>
              </div>
            ) : (
              <div className="dropdown ms-1 ms-lg-0">
                <Link
                  className="nav-link"
                  role="button"
                  href="#"
                  id="profileDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                  data-bs-auto-close="outside"
                  data-bs-display="static"
                >
                  
                  <div className="avatar me-3">
                        <img
                          className="avatar-img rounded-circle shadow"
                          src={businessProfile?.business_logo ? `${IMAGE_URL}/uploads/business-logo/${businessProfile?.business_logo}` : companyLogo.src}
                          alt="avatar"
                        />
                      </div>
                </Link>
                <ul
                  className="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3"
                  aria-labelledby="profileDropdown"
                  data-bs-popper="none"
                >
                  {/* <!-- Profile info --> */}
                  <li className="px-3 mb-3">
                    <div className="d-flex align-items-center">
                      <div className="avatar me-3">
                        <img
                          className="avatar-img rounded-circle shadow"
                          src={businessProfile?.business_logo ? `${IMAGE_URL}/uploads/business-logo/${businessProfile?.business_logo}` : companyLogo.src}
                          alt="avatar"
                        />
                      </div>
                      <div>
                        <Link className="h6" href="/#">
                          {businessProfile?.business_name}
                        </Link>
                        <p className="small m-0">{userProfile?.email}</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      className="dropdown-item bg-danger-soft-hover"
                      href="/business/dashboard"
                    >
                      <i className="bi bi-ui-checks-grid fa-fw me-2"></i>
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item bg-danger-soft-hover"
                      href="/business/my-subscription"
                    >
                      <i className="bi bi-gear fa-fw me-2"></i>Account Setting
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item bg-danger-soft-hover"
                      href={`${
                        userProfile?.isCustomer
                          ? "/user/account-information"
                          : "/business/about-the-business"
                      }`}
                    >
                      <i className="fas fa-business-time fa-fw me-2"></i>
                      Business Information
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item bg-danger-soft-hover"
                      href="/business/support"
                    >
                      <i className="bi bi-headset fa-fw me-2"></i>Support
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item bg-danger-soft-hover"
                      href="#"
                      onClick={() => handleLogout()}
                    >
                      <i className="bi bi-power fa-fw me-2"></i>Sign Out
                    </Link>
                  </li>
                  {/* <li>
                    {" "}
                    <hr className="dropdown-divider" />
                  </li> */}
                  {/* <li>
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
                  </li> */}
                  {/* <!-- Dark mode options END--> */}
                </ul>
              </div>
            )}
              </>
            )}
            

            {/* <!-- Profile START --> */}
          </div>
        </nav>
        {/* <!-- Logo Nav END --> */}
      </header>
    </div>
  );
};

export default Header;
