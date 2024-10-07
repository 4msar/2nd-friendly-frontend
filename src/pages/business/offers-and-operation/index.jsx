import SidebarInformation from "@/components/Business/SidebarInformation";
import BusinessView from "@/components/HOC/BusinessView";
import useToken from "@/hooks/useToken";
import BusinessService from "@/services/BusinessService";
import { useAuthStore, useBusinessAboutStore } from "@/store";
import { useEffect, useState } from "react";

const OffersOperation = () => {
  const userProfile = useBusinessAboutStore((state) => state.businessProfile);
  const user = useAuthStore((state) => state.user);
  const [offers, setOffers] = useState();
  const isAuthenticated = useToken();
  const [title, setTitle] = useState();
  const handleGetMetadata = () => {
    const res = BusinessService.getBusinessMetadata().then((metadata) => {
      console.log({ metadata });
      if (metadata.data.status === "success") {
        setOffers(metadata.data);
      }
    });
  };
console.log(user);

  const handleSaveMetadata = () => {
    const payload = {
      title,
      description: "Offers and operation",
      type: "offers",
      businessProfile: user?.id,
    }
    const res = BusinessService.saveBusinessMetadata(payload).then((data) => {
      console.log({ data });
    });
  };

  useEffect(() => {
    if (isAuthenticated) {
      handleGetMetadata();
    }
  }, [isAuthenticated]);
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
                <h5 class="text-danger mb-2">Offers and Others</h5>
                <div class="d-flex justify-content-left">
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb breadcrumb-dots my-0 py-0">
                      <li class="breadcrumb-item">
                        <a href="index.php">Home</a>
                      </li>
                      <li class="breadcrumb-item">Business Information</li>
                      <li class="breadcrumb-item">Offers and Others</li>
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
                  {/* <div class="col-12">
                    <div class="bg-gray">
                      <h5 class="header-title mb-2 fw-normal text-dark">
                        Featured Advertisement
                      </h5>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        id="featured_ads"
                        name="featured_ads"
                      />
                      <label class="form-check-label" for="featured_ads">
                        Featured Ads
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        id="regular_ads"
                        name="regular_ads"
                      />
                      <label class="form-check-label" for="regular_ads">
                        Regular Ads
                      </label>
                    </div>
                  </div> */}

                  <div class="clearfix">&nbsp;</div>

                  <div class="col-12">
                    <div class="bg-gray">
                      <h5 class="header-title mb-2 fw-normal text-dark">
                        Offers and Others
                      </h5>
                    </div>
                  </div>
                  <div class="col-12 mb-4">
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
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                  </div>
                  <div class="col-md-2 bg-light-input">
                    <button
                      type="submit"
                      class="btn btn-sm btn-dark"
                      onClick={() => handleSaveMetadata()}
                    >
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

export default OffersOperation;
