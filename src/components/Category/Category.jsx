import React from 'react'
import CategoryBox from './CategoryBox'

const Category = () => {
  return (
    <section class="pt-0">
    <div class="container">
        <div class="row mb-4">
            <div class="col-12">
                <h2 class="fw-normal text-center">Our <span class="corporate-color">Categories</span></h2>
                <p class="mb-0 text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            </div>
        </div>
        <div class="row g-4">
            <CategoryBox title="Food & Dining" subtitle="4 Sub Categories" icon="fas fa-utensils" />
            
            <div class="col-sm-6 col-lg-4 col-xl-4">
                <div class="card card-body shadow rounded-3">
                    <div class="d-flex align-items-center">
                        <div class="icon-lg bg-danger bg-opacity-10 rounded-circle text-danger"><i class="fas fa-home"></i></div>
                        <div class="ms-3">
                            <h5 class="mb-0"><a href="home-garden.php" class="stretched-link">Home & Garden</a></h5>
                            <span>11 Sub Categories</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-4">
                <div class="card card-body shadow rounded-3">
                    <div class="d-flex align-items-center">
                        <div class="icon-lg bg-blue bg-opacity-10 rounded-circle text-blue"><i class="fas fa-notes-medical"></i></div>
                        <div class="ms-3">
                            <h5 class="mb-0"><a href="health-medicine.php" class="stretched-link">Health & Medicine</a></h5>
                            <span>20 Sub Categories</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-4">
                <div class="card card-body shadow rounded-3">
                    <div class="d-flex align-items-center">
                        <div class="icon-lg bg-success bg-opacity-10 rounded-circle text-success"><i class="fas fa-car"></i></div>
                        <div class="ms-3">
                            <h5 class="mb-0"><a href="automotive.php" class="stretched-link">Automotive</a></h5>
                            <span>9 Sub Categories</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-4">
                <div class="card card-body shadow rounded-3">
                    <div class="d-flex align-items-center">
                        <div class="icon-lg bg-orange bg-opacity-10 rounded-circle text-orange"><i class="bi bi-person"></i></div>
                        <div class="ms-3">
                            <h5 class="mb-0"><a href="personal-care-services.php" class="stretched-link">Personal Care & Services</a></h5>
                            <span>9 Sub Categories</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-4">
                <div class="card card-body shadow rounded-3">
                    <div class="d-flex align-items-center">
                        <div class="icon-lg bg-primary bg-opacity-10 rounded-circle text-primary"><i class="fas fa-laptop"></i></div>
                        <div class="ms-3">
                            <h5 class="mb-0"><a href="Computers & Electronics.php" class="stretched-link">Computers & Electronics</a></h5>
                            <span>2 Sub Categories</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-4">
                <div class="card card-body shadow rounded-3">
                    <div class="d-flex align-items-center">
                        <div class="icon-lg bg-info bg-opacity-10 rounded-circle text-info"><i class="bi bi-person-workspace"></i></div>
                        <div class="ms-3">
                            <h5 class="mb-0"><a href="construction-contractors.php" class="stretched-link">Construction & Contractors</a></h5>
                            <span>12 Sub Categories</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-4">
                <div class="card card-body shadow rounded-3">
                    <div class="d-flex align-items-center">
                        <div class="icon-lg bg-warning bg-opacity-15 rounded-circle text-warning"><i class="bi bi-headphones"></i></div>
                        <div class="ms-3">
                            <h5 class="mb-0"><a href="entertainment.php" class="stretched-link">Entertainment</a></h5>
                            <span>5 Sub Categories</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-4">
                <div class="card card-body shadow rounded-3">
                    <div class="d-flex align-items-center">
                        <div class="icon-lg bg-orange bg-opacity-10 rounded-circle text-orange"><i class="bi bi-hammer"></i></div>
                        <div class="ms-3">
                            <h5 class="mb-0"><a href="legal-financial.php" class="stretched-link">Legal & Financial</a></h5>
                            <span>6 Sub Categories</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-4">
                <div class="card card-body shadow rounded-3">
                    <div class="d-flex align-items-center">
                        <div class="icon-lg bg-primary bg-opacity-10 rounded-circle text-primary"><i class="bi bi-house"></i></div>
                        <div class="ms-3">
                            <h5 class="mb-0"><a href="real-estate.php" class="stretched-link">Real Estate</a></h5>
                            <span>1 Sub Categories</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-4">
                <div class="card card-body shadow rounded-3">
                    <div class="d-flex align-items-center">
                        <div class="icon-lg bg-info bg-opacity-10 rounded-circle text-info"><i class="bi bi-shop"></i></div>
                        <div class="ms-3">
                            <h5 class="mb-0"><a href="manufacturing-wholesale-distribution.php" class="stretched-link">Manufacturing, Wholesale</a></h5>
                            <span>3 Sub Categories</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-4">
                <div class="card card-body shadow rounded-3">
                    <div class="d-flex align-items-center">
                        <div class="icon-lg bg-warning bg-opacity-15 rounded-circle text-warning"><i class="fas fa-store"></i></div>
                        <div class="ms-3">
                            <h5 class="mb-0"><a href="merchants.php" class="stretched-link">Merchants (Retail)</a></h5>
                            <span>5 Sub Categories</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-4">
                <div class="card card-body shadow rounded-3">
                    <div class="d-flex align-items-center">
                        <div class="icon-lg bg-warning bg-opacity-15 rounded-circle text-warning"><i class="fas fa-info-circle"></i></div>
                        <div class="ms-3">
                            <h5 class="mb-0"><a href="miscellaneous.php" class="stretched-link">Miscellaneous</a></h5>
                            <span>3 Sub Categories</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-4">
                <div class="card card-body shadow rounded-3">
                    <div class="d-flex align-items-center">
                        <div class="icon-lg bg-warning bg-opacity-15 rounded-circle text-warning"><i class="fas fa-user-graduate fa-fw"></i></div>
                        <div class="ms-3">
                            <h5 class="mb-0"><a href="education.php" class="stretched-link">Education</a></h5>
                            <span>4 Sub Categories</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-4">
                <div class="card card-body shadow rounded-3">
                    <div class="d-flex align-items-center">
                        <div class="icon-lg bg-warning bg-opacity-15 rounded-circle text-warning"><i class="fas fa-headset"></i></div>
                        <div class="ms-3">
                            <h5 class="mb-0"><a href="business-support-supplies.php" class="stretched-link">Business Support & Supplies</a></h5>
                            <span>5 Sub Categories</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Category