import SidebarInformation from "@/components/Business/SidebarInformation";
import BusinessView from "@/components/HOC/BusinessView";
import { useBusinessAboutStore } from "@/store";

const MySubscription = () => {
    const userProfile = useBusinessAboutStore((state) => state.businessProfile);
    return (
        <BusinessView title="Subscription">
            <div>
            <main>
        <section class="p-0 m-0">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="d-flex justify-content-between align-items-center">
                            <button class="btn btn-link d-xl-none mb-0 float-start px-0 mt-2 pb-0" type="button"
                                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasSidebar"
                                    aria-controls="offcanvasSidebar">
                                <i class="fas fa-sliders-h"></i> Account Information
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
                        <h5 class="text-danger mb-2">Account Logs</h5>
                        <div class="d-flex justify-content-left">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb breadcrumb-dots my-0 py-0">
                                    <li class="breadcrumb-item"><a href="index.php">Home</a></li>
                                    <li class="breadcrumb-item">ABC</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--  Page content START --> */}
        <section class="pt-1 pb-5">
            <div class="container">
                <div class="row">

                    <div class="col-xl-3">
                    <SidebarInformation profile={userProfile} />
                    </div>

                            <div class="col-xl-9">
                        <div class="mb-2 pb-2 border-bottom">
                            <h5 class="mb-0 mb-sm-0 text-danger pb-0">My Subscription</h5>
                            <p class="pb-0 mb-0">Change the password to your business account.</p>
                        </div>


                            <div class="row">

                                <div class="col-6 col-lg-3">
                                    <span>Active Plan</span>
                                    <h5 class="fw-normal">Basic</h5>
                                </div>

                                <div class="col-6 col-lg-3">
                                    <span>Monthly limit</span>
                                    <h5 class="fw-normal">Unlimited</h5>
                                </div>

                                <div class="col-6 col-lg-3">
                                    <span>Cost</span>
                                    <h5 class="fw-normal">$99/Month</h5>
                                </div>


                                <div class="col-6 col-lg-3">
                                    <span>Renewal Date</span>
                                    <h5 class="fw-normal">Dec 17, 2024</h5>
                                </div>
                            </div>


                            <div class="overflow-hidden my-4">
                                <h6 class="mb-0">85%</h6>
                                <div class="progress progress-sm bg-primary bg-opacity-10">
                                    <div class="progress-bar bg-primary aos" role="progressbar" data-aos="slide-right" data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease-in-out" style={{width: "85%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>
                                   <div class="d-sm-flex justify-content-sm-between align-items-center">
                                <div>

                                    <div class="d-sm-flex">
                                        <div class="form-check form-switch form-check-md">
                                            <input class="form-check-input" type="checkbox" id="checkPrivacy1" checked />
                                            <label class="form-check-label" for="checkPrivacy1">Auto Renewal</label>
                                        </div>
                                    </div>
                                    <p class="mb-0 small">Your plan will automatically renew on: 12/17/2024. Payment Amount: USD250</p>
                                </div>

                                <div class="mt-2 mt-sm-0">
                                    <button type="button" class="btn btn-sm btn-danger-soft me-2 mb-0">Cancel plan</button>
                                    <a href="#" class="btn btn-sm btn-success mb-0">Upgrade plan</a>
                                </div>
                            </div>
                                <hr/>

                            <div class="row">
                                <h6 class="mb-3">The plan includes</h6>
                                <div class="col-md-6">
                                    <ul class="list-unstyled">
                                        <li class="mb-3 h6 fw-light"><i class="bi bi-patch-check-fill text-success me-2"></i> Plan include message 1</li>
                                        <li class="mb-3 h6 fw-light"><i class="bi bi-patch-check-fill text-success me-2"></i> Plan include message 2</li>
                                        <li class="mb-3 h6 fw-light"><i class="bi bi-patch-check-fill text-success me-2"></i> Plan include message 3</li>
                                        <li class="mb-3 h6 fw-light"><i class="bi bi-patch-check-fill text-success me-2"></i> Plan include message 4</li>
                                    </ul>
                                </div>

                                <div class="col-md-6">
                                    <ul class="list-unstyled">
                                        <li class="mb-3 h6 fw-light"><i class="bi bi-patch-check-fill text-success me-2"></i> Plan include message 5</li>
                                        <li class="mb-3 h6 fw-light"><i class="bi bi-patch-check-fill text-success me-2"></i> Plan include message 6</li>
                                        <li class="h6 fw-light"><i class="bi bi-patch-check-fill text-success me-2"></i> Plan include message 7</li>
                                    </ul>
                                </div>
                            </div>
                    </div>
                     </div>
            </div>
        </section>
        {/* <!-- ======================= */}
           {/* Page content END --> */}
        </main>
        </div>
        </BusinessView>
    )
}

export default MySubscription;