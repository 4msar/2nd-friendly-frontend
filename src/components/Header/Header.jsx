import { useHeaderStyle } from "@/assets/stylesheets/header/headerStylesheet";
import { Box, Container } from "@mui/material";
import React from "react";
import sp from "@/assets/img/flags/sp.svg";
import uk from "@/assets/img/flags/uk.svg";
import fr from "@/assets/img/flags/fr.svg";
import gr from "@/assets/img/flags/gr.svg";
import logo from "@/assets/img/logo.png";
import companyLogo from "@/assets/img/company-logo/7.svg";


const Header = () => {
  const classes = useHeaderStyle();
  return (
    <Box className={classes.root}>
      <Box className="navbar-dark bg-light d-none d-xl-block py-1 mx-2 mx-md-4 rounded-bottom-4">
        <Container>
          <Box className="d-lg-flex justify-content-lg-between align-items-center">
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
                  <i className="far fa-envelope me-1"></i>
                  support@2ndafriendly.com
                </span>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="tel:+1235869328">
                  <i className="fas fa-headset me-2"></i>+1 235-869-328
                </a>
              </li>
            </ul>
            {/* <!-- Navbar top Right--> */}
            <Box className="nav d-flex align-items-center justify-content-center">
              {/* <!-- Language --> */}
              <Box className="dropdown me-3">
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
                <Box
                  className="dropdown-menu mt-2 min-w-auto shadow"
                  aria-labelledby="dropdownLanguage"
                >
                  <a className="dropdown-item me-4" href="#">
                    <img
                      className="fa-fw me-2"
                      src={uk.src}
                      alt=""
                    />
                    English
                  </a>
                  <a className="dropdown-item me-4" href="#">
                    <img
                      className="fa-fw me-2"
                      src={sp.src}
                      alt=""
                    />
                    Español
                  </a>
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
                </Box>
              </Box>
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
            </Box>
          </Box>
        </Container>
      </Box>
      <header className="navbar-light header-static navbar-sticky shadow-sm">
        {/* <!-- Logo Nav START --> */}
        <nav className="navbar navbar-expand-xl">
          <div className="container">
            {/* <!-- Logo START --> */}
            <a className="navbar-brand me-0 py-4" href="index.php">
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
            <div
              className="navbar-collapse collapse justify-content-end"
              id="navbarCollapse"
            >
              {/* <!-- Nav Search END --> */}
              <ul className="navbar-nav navbar-nav-scroll">
                {/* <!-- Nav item 1 link --> */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="food-dining.php"
                    id="demoMenu"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Food & Dining
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end min-w-auto"
                    data-bs-popper="none"
                  >
                    <li>
                      <a className="dropdown-item" href="food-dining.php">
                        Desserts, Catering & Supplies
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="food-dining.php">
                        Fast Food & Carry Out
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="food-dining.php">
                        Grocery, Beverage & Tobacco
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="food-dining.php">
                        Restaurants
                      </a>
                    </li>
                  </ul>
                </li>
                {/* <!-- Nav item 2 link --> */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="home-garden.php"
                    id="demoMenu"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Home & Garden
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end min-w-auto"
                    data-bs-popper="none"
                  >
                    <li>
                      <a className="dropdown-item" href="home-garden.php">
                        Antiques & Collectibles
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="home-garden.php">
                        Cleaning
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="home-garden.php">
                        Crafts, Hobbies & Sports
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="home-garden.php">
                        Flower Shops
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="home-garden.php">
                        Home Furnishings
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="home-garden.php">
                        Home Goods
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="home-garden.php">
                        Home Improvements & Repairs
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="home-garden.php">
                        Landscape & Lawn Service
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="home-garden.php">
                        Pest Control
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="home-garden.php">
                        Pool Supplies & Service
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="home-garden.php">
                        Security System & Services
                      </a>
                    </li>
                  </ul>
                </li>
                {/* <!-- Nav item 2 link --> */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="travel-transportation.php"
                    id="demoMenu"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Travel & Transportation
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end min-w-auto"
                    data-bs-popper="none"
                  >
                    <li>
                      {" "}
                      <a
                        className="dropdown-item px-0 mb-1 p-0 fw-light"
                        href="travel-transportation.php"
                      >
                        Consultants
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a
                        className="dropdown-item px-0 mb-1 p-0 fw-light"
                        href="travel-transportation.php"
                      >
                        Employment Agency
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a
                        className="dropdown-item px-0 mb-1 p-0 fw-light"
                        href="travel-transportation.php"
                      >
                        Marketing & Communications
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a
                        className="dropdown-item px-0 mb-1 p-0 fw-light"
                        href="travel-transportation.php"
                      >
                        Office Supplies
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a
                        className="dropdown-item px-0 mb-1 p-0 fw-light"
                        href="travel-transportation.php"
                      >
                        Printing & Publishing
                      </a>{" "}
                    </li>
                  </ul>
                </li>
                {/* <!-- Nav item 3 link --> */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="automotive.php"
                    id="demoMenu"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Automotive
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end min-w-auto"
                    data-bs-popper="none"
                  >
                    <li>
                      <a className="dropdown-item" href="automotive.php">
                        Auto Accessories
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="automotive.php">
                        Auto Dealers–New
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="automotive.php">
                        Auto Dealers–Used
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="automotive.php">
                        Detail & Carwash
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="automotive.php">
                        Gas Stations
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="automotive.php">
                        Motorcycle Sales & Repair
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="automotive.php">
                        Rental & Leasing
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="automotive.php">
                        Service, Repair & Parts
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="automotive.php">
                        Towing
                      </a>
                    </li>
                  </ul>
                </li>
                {/* <!-- Nav item 3 link --> */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="personal-care-services.php"
                    id="demoMenu"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Personal Care & Services
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end min-w-auto"
                    data-bs-popper="none"
                  >
                    <li>
                      <a
                        className="dropdown-item"
                        href="personal-care-services.php"
                      >
                        Animal Care & Supplies
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="personal-care-services.php"
                      >
                        Barber & Beauty Salons
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="personal-care-services.php"
                      >
                        Beauty Supplies
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="personal-care-services.php"
                      >
                        Dry Cleaners & Laundromats
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="personal-care-services.php"
                      >
                        Exercise & Fitness
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="personal-care-services.php"
                      >
                        Massage & Body Works
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="personal-care-services.php"
                      >
                        Nail Salons
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="personal-care-services.php"
                      >
                        Shoe Repairs
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="personal-care-services.php"
                      >
                        Tailors
                      </a>
                    </li>
                  </ul>
                </li>
                {/* <!-- Nav item 6 Megamenu--> */}
                <li className="nav-item dropdown dropdown-fullwidth">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    More
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-end"
                    data-bs-popper="none"
                  >
                    <div className="row p-4">
                      {/* <!-- Dropdown column item --> */}
                      <div className="col-xl-6 col-xxl-3 mb-3">
                        <h6 className="mb-2 border-bottom pb-2">
                          <a href="computers-electronics.php">
                            Computers & Electronics
                          </a>
                        </h6>
                        <ul className="list-unstyled">
                          <li>
                            {" "}
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="computers-electronics.php"
                            >
                              Computer Programming & Support
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="computers-electronics.php"
                            >
                              Consumer Electronics & Accessories
                            </a>{" "}
                          </li>
                        </ul>
                        <h6 className="mb-2 border-bottom pb-2 mt-4">
                          <a href="construction-contractors.php">
                            Construction & Contractors
                          </a>
                        </h6>
                        <ul className="list-unstyled">
                          <li>
                            {" "}
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="construction-contractors.php"
                            >
                              Architects, Landscape Architects
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="construction-contractors.php"
                            >
                              Engineers & Surveyors
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="construction-contractors.php"
                            >
                              Blasting & Demolition
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="construction-contractors.php"
                            >
                              Building Materials & Supplies
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="construction-contractors.php"
                            >
                              Construction Companies
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="construction-contractors.php"
                            >
                              Electricians
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="construction-contractors.php"
                            >
                              Engineer, Survey
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="construction-contractors.php"
                            >
                              Environmental Assessments
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="construction-contractors.php"
                            >
                              Inspectors
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="construction-contractors.php"
                            >
                              Plaster & Concrete
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="construction-contractors.php"
                            >
                              Plumbers
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="construction-contractors.php"
                            >
                              Roofers
                            </a>{" "}
                          </li>
                        </ul>
                        <h6 className="mb-2 border-bottom pb-2 mt-4">
                          <a href="miscellaneous.php">Miscellaneous</a>
                        </h6>
                        <ul className="list-unstyled">
                          <li>
                            {" "}
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="miscellaneous.php"
                            >
                              Civic Groups
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="miscellaneous.php"
                            >
                              Funeral Service Providers & Cemetaries
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="miscellaneous.php"
                            >
                              Miscellaneous
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="miscellaneous.php"
                            >
                              Utility Companies
                            </a>{" "}
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown column item --> */}
                      <div className="col-xl-6 col-xxl-3 mb-3">
                        <h6 className="mb-2 border-bottom pb-2">
                          <a href="entertainment.php">Entertainment</a>
                        </h6>
                        <ul className="list-unstyled">
                          <li>
                            {" "}
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="entertainment.php"
                            >
                              Artists, Writers
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="entertainment.php"
                            >
                              Event Planners & Supplies
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="entertainment.php"
                            >
                              Golf Courses
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="entertainment.php"
                            >
                              Movies
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="entertainment.php"
                            >
                              Productions
                            </a>{" "}
                          </li>
                        </ul>
                        <h6 className="mb-2 border-bottom pb-2 mt-4">
                          <a href="legal-financial.php">Legal & Financial</a>
                        </h6>
                        <ul className="list-unstyled">
                          <li>
                            {" "}
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="legal-financial.php"
                            >
                              Accountants
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="legal-financial.php"
                            >
                              Attorneys
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="legal-financial.php"
                            >
                              Financial Institutions
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="legal-financial.php"
                            >
                              Financial Services
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="legal-financial.php"
                            >
                              Insurance
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="legal-financial.php"
                            >
                              Other Legal
                            </a>{" "}
                          </li>
                        </ul>
                        <h6 className="mb-2 border-bottom pb-2 mt-4">
                          <a href="real-estate.php">Real Estate</a>
                        </h6>
                        <ul className="list-unstyled">
                          <li>
                            {" "}
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="real-estate.php"
                            >
                              Agencies & Brokerage
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="real-estate.php"
                            >
                              Agents & Brokers
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="real-estate.php"
                            >
                              Apartment & Home Rental
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="real-estate.php"
                            >
                              Mortgage Broker & Lender
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="real-estate.php"
                            >
                              Property Management{" "}
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="real-estate.php"
                            >
                              Title Company{" "}
                            </a>{" "}
                          </li>
                        </ul>
                      </div>
                      <div className="col-xl-6 col-xxl-3 mb-3">
                        <h6 className="mb-2 border-bottom pb-2">
                          <a href="manufacturing_wholesale_distribution.php">
                            Manufacturing, Wholesale, Distribution
                          </a>
                        </h6>
                        <ul className="list-unstyled">
                          <li>
                            {" "}
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="manufacturing-wholesale-distribution.php"
                            >
                              Distribution, Import/Export
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="manufacturing-wholesale-distribution.php"
                            >
                              Manufacturing
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="manufacturing-wholesale-distribution.php"
                            >
                              Wholesale
                            </a>{" "}
                          </li>
                        </ul>
                        <h6 className="mb-2 border-bottom pb-2 mt-4">
                          <a href="merchants.php">Merchants (Retail)</a>
                        </h6>
                        <ul className="list-unstyled">
                          <li>
                            {" "}
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="merchants.php"
                            >
                              Cards & Gifts
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="merchants.php"
                            >
                              Department Stores, Sporting Goods
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="merchants.php"
                            >
                              General
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="merchants.php"
                            >
                              Jewelry
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="merchants.php"
                            >
                              Shoes
                            </a>{" "}
                          </li>
                        </ul>
                        <h6 className="mb-2 border-bottom pb-2 mt-4">
                          <a href="education.php">Education</a>
                        </h6>
                        <ul className="list-unstyled">
                          <li>
                            {" "}
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="education.php"
                            >
                              Adult & Continuing Education
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="education.php"
                            >
                              Early Childhood Education
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="education.php"
                            >
                              Educational Resources
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="education.php"
                            >
                              Other Educational
                            </a>{" "}
                          </li>
                        </ul>

                        <h6 className="mb-2 border-bottom pb-2 mt-4">
                          <a href="business-support-supplies.php">
                            Business Support & Supplies
                          </a>
                        </h6>
                        <ul className="list-unstyled">
                          <li>
                            {" "}
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="business-support-supplies.php"
                            >
                              Consultants
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="business-support-supplies.php"
                            >
                              Employment Agency
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="business-support-supplies.php"
                            >
                              Marketing & Communications
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="business-support-supplies.php"
                            >
                              Office Supplies
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="business-support-supplies.php"
                            >
                              Printing & Publishing
                            </a>{" "}
                          </li>
                        </ul>
                      </div>
                      <div className="col-xl-6 col-xxl-3 mb-3">
                        <h6 className="mb-2 border-bottom pb-2">
                          <a href="health-medicine.php">Health & Medicine</a>
                        </h6>
                        <ul className="list-unstyled">
                          <li>
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="health-medicine.php"
                            >
                              Acupuncture
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="health-medicine.php"
                            >
                              Assisted Living & Home Health Care
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="health-medicine.php"
                            >
                              Audiologist
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="health-medicine.php"
                            >
                              Chiropractic
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="health-medicine.php"
                            >
                              Clinics & Medical Centers
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="health-medicine.php"
                            >
                              Dental
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="health-medicine.php"
                            >
                              Diet I& Nutrition
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="health-medicine.php"
                            >
                              Laboratory, Imaging & Diagnostic
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="health-medicine.php"
                            >
                              Massage Therapy
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="health-medicine.php"
                            >
                              Mental Health
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="health-medicine.php"
                            >
                              Nurse
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="health-medicine.php"
                            >
                              Optical
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="health-medicine.php"
                            >
                              Pharmacy, Drug & Vitamin Stores
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="health-medicine.php"
                            >
                              Physical Therapy
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="health-medicine.php"
                            >
                              Physicians & Assistants
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="health-medicine.php"
                            >
                              Physicians & Assistants
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="health-medicine.php"
                            >
                              Podiatry
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="health-medicine.php"
                            >
                              Social Worker
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="health-medicine.php"
                            >
                              Animal Hospital
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item px-0 mb-1 p-0 fw-light"
                              href="health-medicine.php"
                            >
                              Veterinary & Animal Surgeons
                            </a>
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
              <a
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
              </a>
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
                    <a href="#" className="text-body">
                      {" "}
                      <i className="far fa-clock me-1"></i>Digital marketing course
                      for Beginner
                    </a>
                  </li>
                  <li className="list-group-item text-primary-hover text-truncate">
                    <a href="#" className="text-body">
                      {" "}
                      <i className="far fa-clock me-1"></i>Customer Life cycle
                    </a>
                  </li>
                  <li className="list-group-item text-primary-hover text-truncate">
                    <a href="#" className="text-body">
                      {" "}
                      <i className="far fa-clock me-1"></i>What is Search
                    </a>
                  </li>
                  <li className="list-group-item text-primary-hover text-truncate">
                    <a href="#" className="text-body">
                      {" "}
                      <i className="far fa-clock me-1"></i>Facebook ADS
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- Nav Search END --> */}
            {/* <!-- Profile START --> */}
            <div className="dropdown ms-1 ms-lg-0">
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
                  src={companyLogo.src}
                  alt="avatar"
                />
              </a>
              <ul
                className="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3"
                aria-labelledby="profileDropdown"
              >
                {/* <!-- Profile info --> */}
                <li className="px-3 mb-3">
                  <div className="d-flex align-items-center">
                    <div className="avatar me-3">
                      <img
                        className="avatar-img rounded-circle shadow"
                        src={companyLogo.src}
                        alt="avatar"
                      />
                    </div>
                    <div>
                      <a className="h6" href="#">
                        Redwood Solutions
                      </a>
                      <p className="small m-0">redwood@hotmail.com</p>
                    </div>
                  </div>
                </li>
                <li>
                  {" "}
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a
                    className="dropdown-item bg-danger-soft-hover"
                    href="business/dashboard.php"
                  >
                    <i className="bi bi-ui-checks-grid fa-fw me-2"></i>Dashboard
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item bg-danger-soft-hover"
                    href="business/my-subscription.php"
                  >
                    <i className="bi bi-gear fa-fw me-2"></i>Account Setting
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item bg-danger-soft-hover"
                    href="business/about-the-business.php"
                  >
                    <i className="fas fa-business-time fa-fw me-2"></i>Business
                    Information
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item bg-danger-soft-hover"
                    href="business/support.php"
                  >
                    <i className="bi bi-headset fa-fw me-2"></i>Support
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item bg-danger-soft-hover"
                    href="index.php"
                  >
                    <i className="bi bi-power fa-fw me-2"></i>Sign Out
                  </a>
                </li>
                <li>
                  {" "}
                  <hr className="dropdown-divider" />
                </li>
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
            </div>
            {/* <!-- Profile START --> */}
          </div>
        </nav>
        {/* <!-- Logo Nav END --> */}
      </header>
    </Box>
  );
};

export default Header;
