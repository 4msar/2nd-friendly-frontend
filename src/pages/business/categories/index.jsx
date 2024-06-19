import SidebarInformation from '@/components/Business/SidebarInformation'
import BusinessView from '@/components/HOC/BusinessView'
import React from 'react'

const Categories = () => {
  return (
    <main>
    <section class="p-0 m-0">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="d-flex justify-content-between align-items-center">
                        <button class="btn btn-link d-xl-none mb-0 float-start px-0 mt-2 pb-0" type="button"
                                data-bs-toggle="offcanvas" data-bs-target="#offcanvasSidebar"
                                aria-controls="offcanvasSidebar">
                            <i class="fas fa-sliders-h"></i> Business Information
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="py-3 bg-light mb-4">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h5 class="text-danger mb-2">Categories & Services</h5>
                    <div class="d-flex justify-content-left">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb breadcrumb-dots my-0 py-0">
                                <li class="breadcrumb-item"><a href="index.php">Home</a></li>
                                <li class="breadcrumb-item">Business Information</li>
                                <li class="breadcrumb-item">Categories & Services</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="pt-1 pb-5">
        <div class="container">
            <div class="row">
                <div class="col-xl-3 col-md-3">
                   <SidebarInformation />
                   
                </div>
                <div class="col-xl-9 col-md-9">
                    <div class="row">
                        <div class="col-12">
                            <div class="bg-gray">
                                <h5 class="header-title mb-0 fw-normal text-dark">Food & Dining</h5>
                            </div>
                        </div>
                        <div class="col-12 mt-2">
                            <ul class="list-inline mb-0 g-3 ls-0">
                                <li class="list-inline-item">
                                    <input type="checkbox" class="btn-check" id="btn-check-1"/>
                                    <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-1">Desserts, Catering & Supplies</label>
                                </li>
                                <li class="list-inline-item">
                                    <input type="checkbox" class="btn-check" id="btn-check-2"/>
                                    <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-2">Fast Food & Carry Out</label>
                                </li>
                                <li class="list-inline-item">
                                    <input type="checkbox" class="btn-check" id="btn-check-3"/>
                                    <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-3">Grocery, Beverage & Tobacco</label>
                                </li>
                                <li class="list-inline-item">
                                    <input type="checkbox" class="btn-check" id="btn-check-4"/>
                                    <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-4">Restaurants</label>
                                </li>
                            </ul>
                        </div>
                        <div class="col-12">
                            <div class="mt-3">
                                <h5 class="header-title mb-0 fw-normal">Home & Garden</h5>
                            </div>
                        </div>
                        <div class="col-12 mt-2">
                            <ul class="list-inline mb-0 g-3 ls-0">
                                <li class="list-inline-item">
                                    <input type="checkbox" class="btn-check" id="btn-check-5"/>
                                    <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-5">Antiques & Collectibles</label>
                                </li>
                                <li class="list-inline-item">
                                    <input type="checkbox" class="btn-check" id="btn-check-6"/>
                                    <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-6">Cleaning</label>
                                </li>
                                <li class="list-inline-item">
                                    <input type="checkbox" class="btn-check" id="btn-check-7"/>
                                    <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-7">Crafts, Hobbies & Sports</label>
                                </li>
                                <li class="list-inline-item">
                                    <input type="checkbox" class="btn-check" id="btn-check-8"/>
                                    <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-8">Flower Shops </label>
                                </li>
                                <li class="list-inline-item">
                                    <input type="checkbox" class="btn-check" id="btn-check-9"/>
                                    <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-9">Home Furnishings</label>
                                </li>
                                <li class="list-inline-item">
                                    <input type="checkbox" class="btn-check" id="btn-check-10"/>
                                    <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-10">Home Goods</label>
                                </li>
                                <li class="list-inline-item">
                                    <input type="checkbox" class="btn-check" id="btn-check-11"/>
                                    <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-11">Home Improvements & Repairs</label>
                                </li>
                                <li class="list-inline-item">
                                    <input type="checkbox" class="btn-check" id="btn-check-12"/>
                                    <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-12">Landscape & Lawn Service</label>
                                </li>
                                <li class="list-inline-item">
                                    <input type="checkbox" class="btn-check" id="btn-check-13"/>
                                    <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-13">Pest Control</label>
                                </li>
                                <li class="list-inline-item">
                                    <input type="checkbox" class="btn-check" id="btn-check-14"/>
                                    <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-14">Pool Supplies & Service</label>
                                </li>
                                <li class="list-inline-item">
                                    <input type="checkbox" class="btn-check" id="btn-check-15"/>
                                    <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-15">Security System & Services</label>
                                </li>
                            </ul>
                        </div>
                        <div class="col-12">
                            <div class="mt-3">
                                <h5 class="header-title mb-0 fw-normal">Health & Medicine</h5>
                            </div>
                        </div>
                        <div class="col-12 mt-2">
                            <ul class="list-inline mb-0 g-3 ls-0">
                                <li class="list-inline-item">
                                    <input type="checkbox" class="btn-check" id="btn-check-16"/>
                                    <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-16">Acupuncture</label>
                                </li>
                                <li class="list-inline-item">
                                    <input type="checkbox" class="btn-check" id="btn-check-17"/>
                                    <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-17">Assisted Living & Home Health Care</label>
                                </li>
                                <li class="list-inline-item">
                                    <input type="checkbox" class="btn-check" id="btn-check-18"/>
                                    <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-18">Audiologist</label>
                                </li>
                                <li class="list-inline-item">
                                    <input type="checkbox" class="btn-check" id="btn-check-19"/>
                                    <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-19">Chiropractic</label>
                                </li>
                                <li class="list-inline-item">
                                    <input type="checkbox" class="btn-check" id="btn-check-20"/>
                                    <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-20">Clinics & Medical Centers</label>
                                </li>
                                <li class="list-inline-item">
                                    <input type="checkbox" class="btn-check" id="btn-check-21"/>
                                    <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-21">Dental</label>
                                </li>
                                <li class="list-inline-item">
                                    <input type="checkbox" class="btn-check" id="btn-check-22"/>
                                    <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-22">Diet I& Nutrition</label>
                                </li>
                                <li class="list-inline-item">
                                    <input type="checkbox" class="btn-check" id="btn-check-23"/>
                                    <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-23">Laboratory, Imaging & Diagnostic</label>
                                </li>
                                <li class="list-inline-item">
                                    <input type="checkbox" class="btn-check" id="btn-check-24"/>
                                    <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-24">Massage Therapy</label>
                                </li>
                                <li class="list-inline-item">
                                    <input type="checkbox" class="btn-check" id="btn-check-25"/>
                                    <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-25">Mental Health</label>
                                </li>
                                <li class="list-inline-item">
                                    <input type="checkbox" class="btn-check" id="btn-check-26"/>
                                    <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-26">Nurse</label>
                                </li>
                                <li class="list-inline-item">
                                    <input type="checkbox" class="btn-check" id="btn-check-27"/>
                                    <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-27">Optical</label>
                                </li>
                                <li class="list-inline-item">
                                    <input type="checkbox" class="btn-check" id="btn-check-28"/>
                                    <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-28">Pharmacy, Drug & Vitamin Stores</label>
                                </li>
                                <li class="list-inline-item">
                                    <input type="checkbox" class="btn-check" id="btn-check-29"/>
                                    <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-29">Physical Therapy</label>
                                </li>
                                <li class="list-inline-item">
                                    <input type="checkbox" class="btn-check" id="btn-check-30"/>
                                    <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-30">Physicians & Assistants</label>
                                </li>
                                <li class="list-inline-item">
                                    <input type="checkbox" class="btn-check" id="btn-check-31"/>
                                    <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-31">Podiatry</label>
                                </li>
                                <li class="list-inline-item">
                                    <input type="checkbox" class="btn-check" id="btn-check-32"/>
                                    <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-32">Social Worker</label>
                                </li>
                                <li class="list-inline-item">
                                    <input type="checkbox" class="btn-check" id="btn-check-33"/>
                                    <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-33">Animal Hospital</label>
                                </li>
                                <li class="list-inline-item">
                                    <input type="checkbox" class="btn-check" id="btn-check-34"/>
                                    <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-34">Veterinary & Animal Surgeons</label>
                                </li>
                            </ul>
                        </div>
                        <div class="col-12">
                            <div class="mt-3">
                                <h5 class="header-title mb-0 fw-normal">Automotive</h5>
                            </div>
                        </div>
                        <div class="col-12 mt-2">
                            <ul class="list-inline mb-0 g-3 ls-0">
                                <li class="list-inline-item">
                                    <input type="checkbox" class="btn-check" id="btn-check-35"/>
                                    <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-35">Auto Accessories</label>
                                </li>
                                <li class="list-inline-item">
                                    <input type="checkbox" class="btn-check" id="btn-check-36"/>
                                    <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-36">Auto Dealers – New</label>
                                </li>
                                <li class="list-inline-item">
                                    <input type="checkbox" class="btn-check" id="btn-check-37"/>
                                    <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-37">Auto Dealers – Used</label>
                                </li>
                                <li class="list-inline-item">
                                    <input type="checkbox" class="btn-check" id="btn-check-38"/>
                                    <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-38">Detail & Carwash</label>
                                </li>
                                <li class="list-inline-item">
                                    <input type="checkbox" class="btn-check" id="btn-check-39"/>
                                    <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-39">Gas Stations</label>
                                </li>
                                <li class="list-inline-item">
                                    <input type="checkbox" class="btn-check" id="btn-check-40"/>
                                    <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-40">Motorcycle Sales & Repair</label>
                                </li>
                                <li class="list-inline-item">
                                    <input type="checkbox" class="btn-check" id="btn-check-41"/>
                                    <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-41">Rental & Leasing</label>
                                </li>
                                <li class="list-inline-item">
                                    <input type="checkbox" class="btn-check" id="btn-check-42"/>
                                    <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-42">Service, Repair & Parts</label>
                                </li>
                                <li class="list-inline-item">
                                    <input type="checkbox" class="btn-check" id="btn-check-43"/>
                                    <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-43">Towing</label>
                                </li>
                            </ul>
                        </div>
                        <div class="col-12">
                            <div class="mt-3">
                                <h5 class="header-title mb-0 fw-normal">Personal Care & Services</h5>
                            </div>
                        </div>
                        <div class="col-12 mt-2">
                            <ul class="list-inline mb-0 g-3 ls-0">
                                <li class="list-inline-item">
                                    <input type="checkbox" class="btn-check" id="btn-check-44"/>
                                    <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-44">Animal Care & Supplies</label>
                                </li>
                                <li class="list-inline-item">
                                    <input type="checkbox" class="btn-check" id="btn-check-45"/>
                                    <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-45">Barber & Beauty Salons</label>
                                </li>
                                <li class="list-inline-item">
                                    <input type="checkbox" class="btn-check" id="btn-check-46"/>
                                    <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-46">Beauty Supplies</label>
                                </li>
                                <li class="list-inline-item">
                                    <input type="checkbox" class="btn-check" id="btn-check-47"/>
                                    <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-47">Dry Cleaners & Laundromats</label>
                                </li>
                                <li class="list-inline-item">
                                    <input type="checkbox" class="btn-check" id="btn-check-48"/>
                                    <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-48">Exercise & Fitness </label>
                                </li>
                                <li class="list-inline-item">
                                    <input type="checkbox" class="btn-check" id="btn-check-49"/>
                                    <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-49">Massage & Body Works</label>
                                </li>
                                <li class="list-inline-item">
                                    <input type="checkbox" class="btn-check" id="btn-check-50"/>
                                    <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-50">Nail Salons</label>
                                </li>
                                <li class="list-inline-item">
                                    <input type="checkbox" class="btn-check" id="btn-check-51"/>
                                    <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-51">Shoe Repairs</label>
                                </li>
                                <li class="list-inline-item">
                                    <input type="checkbox" class="btn-check" id="btn-check-52"/>
                                    <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-52">Tailors</label>
                                </li>
                            </ul>
                        </div>
                        <div class="col-12">
                            <div class="mt-3">
                                <h5 class="header-title mb-0 fw-normal">Computers & Electronics</h5>
                            </div>
                        </div>
                        <div class="col-12 mt-2">
                            <ul class="list-inline mb-0 g-3 ls-0">
                                <li class="list-inline-item">
                                    <input type="checkbox" class="btn-check" id="btn-check-53"/>
                                    <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-53">Computer Programming & Support</label>
                                </li>
                                <li class="list-inline-item">
                                    <input type="checkbox" class="btn-check" id="btn-check-54"/>
                                    <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-54">Consumer Electronics & Accessories</label>
                                </li>
                                <div class="col-12">
                                    <div class="mt-3">
                                        <h5 class="header-title mb-0 fw-normal">Construction & Contractors</h5>
                                    </div>
                                </div>
                                <div class="col-12 mt-2">
                                    <ul class="list-inline mb-0 g-3 ls-0">
                                        <li class="list-inline-item">
                                            <input type="checkbox" class="btn-check" id="btn-check-55"/>
                                            <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-55">Architects, Landscape Architects</label>
                                        </li>
                                        <li class="list-inline-item">
                                            <input type="checkbox" class="btn-check" id="btn-check-56"/>
                                            <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-56"> Engineers & Surveyors</label>
                                        </li>
                                        <li class="list-inline-item">
                                            <input type="checkbox" class="btn-check" id="btn-check-57"/>
                                            <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-57">Blasting & Demolition </label>
                                        </li>
                                        <li class="list-inline-item">
                                            <input type="checkbox" class="btn-check" id="btn-check-58"/>
                                            <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-58">Building Materials & Supplies</label>
                                        </li>
                                        <li class="list-inline-item">
                                            <input type="checkbox" class="btn-check" id="btn-check-59"/>
                                            <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-59">Construction Companies</label>
                                        </li>
                                        <li class="list-inline-item">
                                            <input type="checkbox" class="btn-check" id="btn-check-60"/>
                                            <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-60">Electricians</label>
                                        </li>
                                        <li class="list-inline-item">
                                            <input type="checkbox" class="btn-check" id="btn-check-61"/>
                                            <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-61">Engineer, Survey</label>
                                        </li>
                                        <li class="list-inline-item">
                                            <input type="checkbox" class="btn-check" id="btn-check-62"/>
                                            <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-62">Environmental Assessments</label>
                                        </li>
                                        <li class="list-inline-item">
                                            <input type="checkbox" class="btn-check" id="btn-check-63"/>
                                            <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-63">Inspectors</label>
                                        </li>
                                        <li class="list-inline-item">
                                            <input type="checkbox" class="btn-check" id="btn-check-64"/>
                                            <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-64">Plaster & Concrete</label>
                                        </li>
                                        <li class="list-inline-item">
                                            <input type="checkbox" class="btn-check" id="btn-check-65"/>
                                            <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-65">Plumbers</label>
                                        </li>
                                        <li class="list-inline-item">
                                            <input type="checkbox" class="btn-check" id="btn-check-66"/>
                                            <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-66">Roofers</label>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-12">
                                    <div class="mt-3">
                                        <h5 class="header-title mb-0 fw-normal">Miscellaneous</h5>
                                    </div>
                                </div>
                                <div class="col-12 mt-2">
                                    <ul class="list-inline mb-0 g-3 ls-0">
                                        <li class="list-inline-item">
                                            <input type="checkbox" class="btn-check" id="btn-check-67"/>
                                            <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-67">Civic Groups</label>
                                        </li>
                                        <li class="list-inline-item">
                                            <input type="checkbox" class="btn-check" id="btn-check-68"/>
                                            <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-68">Funeral Service Providers & Cemetaries</label>
                                        </li>
                                        <li class="list-inline-item">
                                            <input type="checkbox" class="btn-check" id="btn-check-69"/>
                                            <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-69">Miscellaneous</label>
                                        </li>
                                        <li class="list-inline-item">
                                            <input type="checkbox" class="btn-check" id="btn-check-70"/>
                                            <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-70">Utility Companies</label>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-12">
                                    <div class="mt-3">
                                        <h5 class="header-title mb-0 fw-normal">Entertainment</h5>
                                    </div>
                                </div>
                                <div class="col-12 mt-2">
                                    <ul class="list-inline mb-0 g-3 ls-0">
                                        <li class="list-inline-item">
                                            <input type="checkbox" class="btn-check" id="btn-check-71"/>
                                            <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-71">Artists, Writers</label>
                                        </li>
                                        <li class="list-inline-item">
                                            <input type="checkbox" class="btn-check" id="btn-check-72"/>
                                            <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-72">Event Planners & Supplies</label>
                                        </li>
                                        <li class="list-inline-item">
                                            <input type="checkbox" class="btn-check" id="btn-check-73"/>
                                            <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-73">Golf Courses</label>
                                        </li>
                                        <li class="list-inline-item">
                                            <input type="checkbox" class="btn-check" id="btn-check-74"/>
                                            <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-74">Movies</label>
                                        </li>
                                        <li class="list-inline-item">
                                            <input type="checkbox" class="btn-check" id="btn-check-75"/>
                                            <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-75">Productions</label>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-12">
                                    <div class="mt-3">
                                        <h5 class="header-title mb-0 fw-normal">Legal & Financial</h5>
                                    </div>
                                </div>
                                <div class="col-12 mt-2">
                                    <ul class="list-inline mb-0 g-3 ls-0">
                                        <li class="list-inline-item">
                                            <input type="checkbox" class="btn-check" id="btn-check-76"/>
                                            <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-76">Accountants</label>
                                        </li>
                                        <li class="list-inline-item">
                                            <input type="checkbox" class="btn-check" id="btn-check-77"/>
                                            <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-77">Attorneys</label>
                                        </li>
                                        <li class="list-inline-item">
                                            <input type="checkbox" class="btn-check" id="btn-check-78"/>
                                            <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-78">Financial Institutions</label>
                                        </li>
                                        <li class="list-inline-item">
                                            <input type="checkbox" class="btn-check" id="btn-check-79"/>
                                            <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-79">Financial Services</label>
                                        </li>
                                        <li class="list-inline-item">
                                            <input type="checkbox" class="btn-check" id="btn-check-80"/>
                                            <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-80">Insurance</label>
                                        </li>
                                        <li class="list-inline-item">
                                            <input type="checkbox" class="btn-check" id="btn-check-81"/>
                                            <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-81">Other Legal</label>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-12">
                                    <div class="mt-3">
                                        <h5 class="header-title mb-0 fw-normal">Real Estate</h5>
                                    </div>
                                </div>
                                <div class="col-12 mt-2">
                                    <ul class="list-inline mb-0 g-3 ls-0">
                                        <li class="list-inline-item">
                                            <input type="checkbox" class="btn-check" id="btn-check-82"/>
                                            <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-82">Agencies & Brokerage</label>
                                        </li>
                                        <li class="list-inline-item">
                                            <input type="checkbox" class="btn-check" id="btn-check-83"/>
                                            <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-83">Agents & Brokers</label>
                                        </li>
                                        <li class="list-inline-item">
                                            <input type="checkbox" class="btn-check" id="btn-check-84"/>
                                            <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-84">Apartment & Home Rental</label>
                                        </li>
                                        <li class="list-inline-item">
                                            <input type="checkbox" class="btn-check" id="btn-check-85"/>
                                            <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-85">Mortgage Broker & Lender</label>
                                        </li>
                                        <li class="list-inline-item">
                                            <input type="checkbox" class="btn-check" id="btn-check-86"/>
                                            <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-86">Property Management</label>
                                        </li>
                                        <li class="list-inline-item">
                                            <input type="checkbox" class="btn-check" id="btn-check-87"/>
                                            <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-87">Title Company</label>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-12">
                                    <div class="mt-3">
                                        <h5 class="header-title mb-0 fw-normal">Manufacturing, Wholesale, Distribution</h5>
                                    </div>
                                </div>
                                <div class="col-12 mt-2">
                                    <ul class="list-inline mb-0 g-3 ls-0">
                                        <li class="list-inline-item">
                                            <input type="checkbox" class="btn-check" id="btn-check-88"/>
                                            <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-88">Distribution, Import/Export</label>
                                        </li>
                                        <li class="list-inline-item">
                                            <input type="checkbox" class="btn-check" id="btn-check-89"/>
                                            <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-89">Manufacturing</label>
                                        </li>
                                        <li class="list-inline-item">
                                            <input type="checkbox" class="btn-check" id="btn-check-90"/>
                                            <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-90">Wholesale</label>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-12">
                                    <div class="mt-3">
                                        <h5 class="header-title mb-0 fw-normal">Merchants (Retail)</h5>
                                    </div>
                                </div>
                                <div class="col-12 mt-2">
                                    <ul class="list-inline mb-0 g-3 ls-0">
                                        <li class="list-inline-item">
                                            <input type="checkbox" class="btn-check" id="btn-check-91"/>
                                            <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-91">Cards & Gifts</label>
                                        </li>
                                        <li class="list-inline-item">
                                            <input type="checkbox" class="btn-check" id="btn-check-92"/>
                                            <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-92">Clothing & Accessories</label>
                                        </li>
                                        <li class="list-inline-item">
                                            <input type="checkbox" class="btn-check" id="btn-check-93"/>
                                            <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-93">Department Stores, Sporting Goods</label>
                                        </li>
                                        <li class="list-inline-item">
                                            <input type="checkbox" class="btn-check" id="btn-check-94"/>
                                            <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-94">General</label>
                                        </li>
                                        <li class="list-inline-item">
                                            <input type="checkbox" class="btn-check" id="btn-check-95"/>
                                            <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-95">Jewelry</label>
                                        </li>
                                        <li class="list-inline-item">
                                            <input type="checkbox" class="btn-check" id="btn-check-96"/>
                                            <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-96">Shoes</label>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-12">
                                    <div class="mt-3">
                                        <h5 class="header-title mb-0 fw-normal">Education</h5>
                                    </div>
                                </div>
                                <div class="col-12 mt-2">
                                    <ul class="list-inline mb-0 g-3 ls-0">
                                        <li class="list-inline-item">
                                            <input type="checkbox" class="btn-check" id="btn-check-97"/>
                                            <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-97">Adult & Continuing Education</label>
                                        </li>
                                        <li class="list-inline-item">
                                            <input type="checkbox" class="btn-check" id="btn-check-98"/>
                                            <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-98">Early Childhood Education</label>
                                        </li>
                                        <li class="list-inline-item">
                                            <input type="checkbox" class="btn-check" id="btn-check-99"/>
                                            <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-99">Educational Resources</label>
                                        </li>
                                        <li class="list-inline-item">
                                            <input type="checkbox" class="btn-check" id="btn-check-100"/>
                                            <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-100">Other Educational</label>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-12">
                                    <div class="mt-3">
                                        <h5 class="header-title mb-0 fw-normal">Business Support & Supplies</h5>
                                    </div>
                                </div>
                                <div class="col-12 mt-2">
                                    <ul class="list-inline mb-0 g-3 ls-0">
                                        <li class="list-inline-item">
                                            <input type="checkbox" class="btn-check" id="btn-check-101"/>
                                            <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-101">Consultants</label>
                                        </li>
                                        <li class="list-inline-item">
                                            <input type="checkbox" class="btn-check" id="btn-check-102"/>
                                            <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-102">Employment Agency</label>
                                        </li>
                                        <li class="list-inline-item">
                                            <input type="checkbox" class="btn-check" id="btn-check-103"/>
                                            <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-103">Marketing & Communications</label>
                                        </li>
                                        <li class="list-inline-item">
                                            <input type="checkbox" class="btn-check" id="btn-check-104"/>
                                            <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-104">Office Supplies</label>
                                        </li>
                                        <li class="list-inline-item">
                                            <input type="checkbox" class="btn-check" id="btn-check-105"/>
                                            <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-105">Printing & Publishing</label>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-12">
                                    <div class="mt-3">
                                        <h5 class="header-title mb-0 fw-normal">Travel & Transportation</h5>
                                    </div>
                                </div>
                                <div class="col-12 mt-2">
                                    <ul class="list-inline mb-0 g-3 ls-0">
                                        <li class="list-inline-item">
                                            <input type="checkbox" class="btn-check" id="btn-check-106" />
                                            <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-106">Hotel, Motel & Extended Stay</label>
                                        </li>
                                        <li class="list-inline-item">
                                            <input type="checkbox" class="btn-check" id="btn-check-107" />
                                            <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-107">Moving & Storage</label>
                                        </li>
                                        <li class="list-inline-item">
                                            <input type="checkbox" class="btn-check" id="btn-check-108" />
                                            <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-108">Packaging & Shipping</label>
                                        </li>
                                        <li class="list-inline-item">
                                            <input type="checkbox" class="btn-check" id="btn-check-109" />
                                            <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-109">Transportation</label>
                                        </li>
                                        <li class="list-inline-item">
                                            <input type="checkbox" class="btn-check" id="btn-check-110" />
                                            <label class="btn btn-sm btn-light btn-primary-soft-check rounded-4" for="btn-check-110">Travel & Tourism</label>
                                        </li>
                                    </ul>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
  )
}

export default BusinessView(Categories, "Categories")