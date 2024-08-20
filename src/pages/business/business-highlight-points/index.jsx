import SidebarInformation from "@/components/Business/SidebarInformation";
import BusinessView from "@/components/HOC/BusinessView";
import { useBusinessAboutStore } from "@/store";

const BusinessHighlight = () => {
  const userProfile = useBusinessAboutStore((state) => state.businessProfile);
  return (
    <BusinessView>
      <main>
        <section class="p-0 m-0">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="d-flex justify-content-between align-items-center">
                  <button
                    class="btn btn-link d-xl-none mb-0 float-start px-0 mt-2 pb-0"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasSidebar"
                    aria-controls="offcanvasSidebar"
                  >
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
                <h5 class="text-danger mb-2">Business Highlight Points</h5>
                <div class="d-flex justify-content-left">
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb breadcrumb-dots my-0 py-0">
                      <li class="breadcrumb-item">
                        <a href="index.php">Home</a>
                      </li>
                      <li class="breadcrumb-item">Business Information</li>
                      <li class="breadcrumb-item">Business Highlight Points</li>
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
              <div class="col-xl-3">
                <SidebarInformation profile={userProfile} />
              </div>
              <div class="col-xl-9">
                <div class="row">
                  <div class="col-12">
                    <div class="bg-gray">
                      <h5 class="header-title mb-0 fw-normal text-dark">
                        Business Highlight Points
                      </h5>
                    </div>
                  </div>
                  <div class="col-12 mt-2 mb-4">
                    <ul class="list-group list-group-borderless">
                      <li class="list-group-item">
                        <i class="bi bi-caret-right"></i> 30 years in business
                      </li>
                      <li class="list-group-item">
                        <i class="bi bi-caret-right"></i> Certified
                        professionals
                      </li>
                      <li class="list-group-item">
                        <i class="bi bi-caret-right"></i> Locally owned &
                        operated
                      </li>
                      <li class="list-group-item">
                        <i class="bi bi-caret-right"></i> Available by
                        appointment
                      </li>
                      <li class="list-group-item">
                        <i class="bi bi-caret-right"></i> Consultations
                        available
                      </li>
                      <li class="list-group-item">
                        <i class="bi bi-caret-right"></i> Women-owned & operated
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-4 bg-light-input">
                    <input
                      class="form-control event_name"
                      id="event_name"
                      title="event_name"
                      type="text"
                      placeholder="Spring Fun Fest"
                      required=""
                    />
                  </div>
                  <div class="col-md-2 bg-light-input">
                    <button type="submit" class="btn btn-sm btn-dark">
                      <i class="fas fa-sm fa-fw fa-plus"></i> Add More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </BusinessView>
  );
};

export default BusinessHighlight;
