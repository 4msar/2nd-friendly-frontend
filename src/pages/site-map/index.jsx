import PublicView from "@/components/HOC/PublicView";
import React from "react";

const SiteMap = () => {
  return (
    <main>
      <section className="pt-4 pb-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-dots my-0 py-0">
                  <li className="breadcrumb-item">
                    <a href="index.php">
                      <i className="bi bi-house me-1"></i> Home
                    </a>
                  </li>
                  <li className="breadcrumb-item active">Site Map</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-2 mb-3 pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-xxl-12">
              <div className="mb-0 border-bottom">
                <h4 className="mt-0 mb-1 mt-2">Site Map</h4>
                <p className="mb-0 pb-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="position-relative pt-0">
        <div className="container">
          <div
            className="row g-4 filter-container overflow-hidden"
            data-isotope='{"layoutMode": "masonry"}'
          >
            <div className="col-sm-6 col-lg-4 grid-item">
              <div className="card bg-light h-100">
                <div className="card-header bg-light pb-0 border-0">
                  <h5 className="card-title mb-0 mt-2">Food & Dining</h5>
                </div>
                {/* <!-- List --> */}
                <div className="card-body">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="food-dining.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Desserts, Catering & Supplies
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="food-dining.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Fast Food & Carry Outo
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="food-dining.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Grocery, Beverage & Tobacco
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="food-dining.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Restaurants
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 grid-item">
              <div className="card bg-light h-100">
                <div className="card-header bg-light pb-0 border-0">
                  <h5 className="card-title mb-0 mt-2">Home & Garden</h5>
                </div>
                {/* <!-- List --> */}
                <div className="card-body">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="home-garden.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Antiques & Collectibles
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="home-garden.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Cleaning
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="home-garden.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Crafts, Hobbies & Sports
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="home-garden.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Flower Shops
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="home-garden.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Home Furnishings
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="home-garden.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Home Goods
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="home-garden.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Home Improvements & Repairs
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="home-garden.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Landscape & Lawn Service
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="home-garden.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Pest Control
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="home-garden.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Pool Supplies & Service
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="home-garden.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Security System & Services
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 grid-item">
              <div className="card bg-light h-100">
                <div className="card-header bg-light pb-0 border-0">
                  <h5 className="card-title mb-0 mt-2">Health & Medicine</h5>
                </div>
                {/* <!-- List --> */}
                <div className="card-body">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="health-medicine.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Acupuncture
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="health-medicine.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Assisted Living & Home Health Care
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="health-medicine.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Audiologist
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="health-medicine.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Chiropractic
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="health-medicine.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Clinics & Medical Centers
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="health-medicine.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Dental
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="health-medicine.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Diet I& Nutrition
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="health-medicine.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Laboratory, Imaging & Diagnostic
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="health-medicine.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Massage Therapy{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="health-medicine.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Mental Health
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="health-medicine.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Nurse
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="health-medicine.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Optical
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="health-medicine.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Pharmacy, Drug & Vitamin Stores
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="health-medicine.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Physical Therapy
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="health-medicine.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Physicians & Assistants
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="health-medicine.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Podiatry
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="health-medicine.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Social Worker
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="health-medicine.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Animal Hospital
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="health-medicine.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Veterinary & Animal Surgeons
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 grid-item">
              <div className="card bg-light h-100">
                <div className="card-header bg-light pb-0 border-0">
                  <h5 className="card-title mb-0 mt-2">Automotive</h5>
                </div>
                {/* <!-- List --> */}
                <div className="card-body">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="automotive.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Auto Accessories
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="automotive.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Auto Dealers – New
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="automotive.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Auto Dealers – Used
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="automotive.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Detail & Carwash{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="automotive.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Gas Stations
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="automotive.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Motorcycle Sales & Repair
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="automotive.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Rental & Leasing
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="automotive.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Service, Repair & Parts
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="automotive.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Towing
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 grid-item">
              <div className="card bg-light h-100">
                <div className="card-header bg-light pb-0 border-0">
                  <h5 className="card-title mb-0 mt-2">
                    Personal Care & Services
                  </h5>
                </div>
                {/* <!-- List --> */}
                <div className="card-body">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex"
                        href="personal-care-services.php"
                      >
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Animal Care & Supplies
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex"
                        href="personal-care-services.php"
                      >
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Barber & Beauty Salons
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex"
                        href="personal-care-services.php"
                      >
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Beauty Supplies
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex"
                        href="personal-care-services.php"
                      >
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Dry Cleaners & Laundromats
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex"
                        href="personal-care-services.php"
                      >
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Exercise & Fitness
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex"
                        href="personal-care-services.php"
                      >
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Massage & Body Works
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex"
                        href="personal-care-services.php"
                      >
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Nail Salons
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex"
                        href="personal-care-services.php"
                      >
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Shoe Repairs
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex"
                        href="personal-care-services.php"
                      >
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Tailors
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 grid-item">
              <div className="card bg-light h-100">
                <div className="card-header bg-light pb-0 border-0">
                  <h5 className="card-title mb-0 mt-2">
                    Computers & Electronics
                  </h5>
                </div>
                {/* <!-- List --> */}
                <div className="card-body">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex"
                        href="computers-electronics.php"
                      >
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Computer Programming & Support
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex"
                        href="computers-electronics.php"
                      >
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Consumer Electronics & Accessories
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 grid-item">
              <div className="card bg-light h-100">
                <div className="card-header bg-light pb-0 border-0">
                  <h5 className="card-title mb-0 mt-2">
                    Construction & Contractors
                  </h5>
                </div>
                {/* <!-- List --> */}
                <div className="card-body">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex"
                        href="construction-contractors.php"
                      >
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Architects, Landscape Architects
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex"
                        href="construction-contractors.php"
                      >
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>{" "}
                        Engineers & Surveyors
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex"
                        href="construction-contractors.php"
                      >
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Blasting & Demolition
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex"
                        href="construction-contractors.php"
                      >
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Building Materials & Supplies
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex"
                        href="construction-contractors.php"
                      >
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Construction Companies{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex"
                        href="construction-contractors.php"
                      >
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Electricians
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex"
                        href="construction-contractors.php"
                      >
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Engineer, Survey
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex"
                        href="construction-contractors.php"
                      >
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Environmental Assessments
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex"
                        href="construction-contractors.php"
                      >
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Inspectors
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex"
                        href="construction-contractors.php"
                      >
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Plaster & Concrete
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex"
                        href="construction-contractors.php"
                      >
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Plumbers
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex"
                        href="construction-contractors.php"
                      >
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Roofers
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 grid-item">
              <div className="card bg-light h-100">
                <div className="card-header bg-light pb-0 border-0">
                  <h5 className="card-title mb-0 mt-2">Entertainment</h5>
                </div>
                {/* <!-- List --> */}
                <div className="card-body">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="entertainment.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Artists, Writers{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="entertainment.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Event Planners & Supplies
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="entertainment.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Golf Courses
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="entertainment.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Movies
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="entertainment.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Productions
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 grid-item">
              <div className="card bg-light h-100">
                <div className="card-header bg-light pb-0 border-0">
                  <h5 className="card-title mb-0 mt-2">Legal & Financial</h5>
                </div>
                {/* <!-- List --> */}
                <div className="card-body">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="legal-financial.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Accountants
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="legal-financial.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Attorneys
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="legal-financial.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Financial Institutions
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="legal-financial.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Financial Services
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="legal-financial.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Insurance
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="legal-financial.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Other Legal
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 grid-item">
              <div className="card bg-light h-100">
                <div className="card-header bg-light pb-0 border-0">
                  <h5 className="card-title mb-0 mt-2">Real Estate</h5>
                </div>
                {/* <!-- List --> */}
                <div className="card-body">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="real-estate.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Agencies & Brokerage
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="real-estate.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Agents & Brokers
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="real-estate.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Apartment & Home Rental
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="real-estate.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Mortgage Broker & Lender
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="real-estate.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Property Management
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="real-estate.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Title Company
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 grid-item">
              <div className="card bg-light h-100">
                <div className="card-header bg-light pb-0 border-0">
                  <h5 className="card-title mb-0 mt-2">
                    Manufacturing, Wholesale, Distribution
                  </h5>
                </div>
                {/* <!-- List --> */}
                <div className="card-body">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex"
                        href="manufacturing-wholesale-distribution.php"
                      >
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Distribution, Import/Export
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex"
                        href="manufacturing-wholesale-distribution.php"
                      >
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Manufacturing
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex"
                        href="manufacturing-wholesale-distribution.php"
                      >
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Wholesale
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 grid-item">
              <div className="card bg-light h-100">
                <div className="card-header bg-light pb-0 border-0">
                  <h5 className="card-title mb-0 mt-2">Merchants (Retail)</h5>
                </div>
                {/* <!-- List --> */}
                <div className="card-body">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="merchants.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Cards & Gifts{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="merchants.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Clothing & Accessories
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="merchants.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Department Stores, Sporting Goods
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="merchants.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        General
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="merchants.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Jewelry
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="merchants.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Shoes
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 grid-item">
              <div className="card bg-light h-100">
                <div className="card-header bg-light pb-0 border-0">
                  <h5 className="card-title mb-0 mt-2">Miscellaneous</h5>
                </div>
                {/* <!-- List --> */}
                <div className="card-body">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="miscellaneous.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Civic Groups
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="miscellaneous.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Funeral Service Providers & Cemetaries
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="miscellaneous.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Miscellaneous
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="miscellaneous.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Utility Companies
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 grid-item">
              <div className="card bg-light h-100">
                <div className="card-header bg-light pb-0 border-0">
                  <h5 className="card-title mb-0 mt-2">Education</h5>
                </div>
                {/* <!-- List --> */}
                <div className="card-body">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="education.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Adult & Continuing Education
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="education.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Early Childhood Education
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="education.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Educational Resources
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link d-flex" href="education.php">
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Other Educational{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 grid-item">
              <div className="card bg-light h-100">
                <div className="card-header bg-light pb-0 border-0">
                  <h5 className="card-title mb-0 mt-2">
                    Business Support & Supplies
                  </h5>
                </div>
                {/* <!-- List --> */}
                <div className="card-body">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex"
                        href="business-support-supplies.php"
                      >
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Consultants
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex"
                        href="business-support-supplies.php"
                      >
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Employment Agency
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex"
                        href="business-support-supplies.php"
                      >
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Marketing & Communications{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex"
                        href="business-support-supplies.php"
                      >
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Office Supplies{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex"
                        href="business-support-supplies.php"
                      >
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Printing & Publishing
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 grid-item">
              <div className="card bg-light h-100">
                <div className="card-header bg-light pb-0 border-0">
                  <h5 className="card-title mb-0 mt-2">
                    Travel & Transportation
                  </h5>
                </div>
                {/* <!-- List --> */}
                <div className="card-body">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex"
                        href="travel-transportation.php"
                      >
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Hotel, Motel & Extended Stay
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex"
                        href="travel-transportation.php"
                      >
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Moving & Storage
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex"
                        href="travel-transportation.php"
                      >
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Packaging & Shipping
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex"
                        href="travel-transportation.php"
                      >
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Transportation
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex"
                        href="travel-transportation.php"
                      >
                        <i className="fas fa-angle-right text-primary pt-1 me-2"></i>
                        Travel & Tourism
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PublicView(SiteMap, "Site Map");
