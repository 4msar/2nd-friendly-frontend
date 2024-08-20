import companyLogo from "@/assets/img/company-logo/7.svg";
import SidebarInformation from "@/components/Business/SidebarInformation";
import BusinessView from "@/components/HOC/BusinessView";
import { IMAGE_URL } from "@/helpers/apiUrl";
import useToken from "@/hooks/useToken";
import { useBusinessAboutStore } from "@/store";

const MessageDetails = () => {
  const userProfile = useBusinessAboutStore((state) => state.businessProfile);
  const isAuthenticated = useToken();
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
                <h5 class="text-danger mb-2">Messages</h5>
                <div class="d-flex justify-content-left">
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb breadcrumb-dots my-0 py-0">
                      <li class="breadcrumb-item">
                        <a href="index.php">Home</a>
                      </li>
                      <li class="breadcrumb-item">Business Information</li>
                      <li class="breadcrumb-item text-black fw-bold">
                        <a href="message.php">Messages</a>
                      </li>
                      <li class="breadcrumb-item">
                        Lorem Ipsum is simply dummy text
                      </li>
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
                <div
                  class="col d-md-flex justify-content-between align-items-center mb-sm-2 border-bottom "
                  style={{ marginBottom: "0.5rem" }}
                >
                  <div>
                    <h5 class="mb-2 mb-sm-0 text-danger pb-0">
                      {userProfile?.business_name}
                    </h5>
                  </div>
                </div>
                <div class="d-sm-flex">
                  <img
                    class="avatar avatar-lg rounded-circle float-start me-3"
                    src={
                      userProfile?.business_logo
                        ? `${IMAGE_URL}/uploads/business-logo/${userProfile?.business_logo}`
                        : companyLogo.src
                    }
                    alt="avatar"
                  />
                  <div>
                    <div class="mb-3 d-sm-flex justify-content-sm-between align-items-center">
                      <div>
                        <h5 class="m-0">{userProfile?.business_name}</h5>
                        <span class="me-3 small">
                          June 11, 2021 at 6:01 am{" "}
                        </span>
                      </div>
                    </div>
                    <div class="text-end">
                      <div class="collapse show" id="collapseComment">
                        <div class="d-flex mt-3">
                          <textarea
                            class="form-control mb-0"
                            placeholder="Add a comment..."
                            rows="4"
                            cols="88"
                            spellcheck="false"
                          ></textarea>
                          <button class="btn btn-sm btn-primary-soft ms-2 px-4 mb-0 flex-shrink-0">
                            <i class="fas fa-paper-plane fs-5"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="d-sm-flex">
                  <img
                    class="avatar avatar-lg rounded-circle float-start me-3"
                    src="../assets/img/avatar/53.jpg"
                    alt="avatar"
                  />
                  <div>
                    <div class="mb-3 d-sm-flex justify-content-sm-between align-items-center">
                      <div>
                        <h5 class="m-0">Burger King</h5>
                        <span class="me-3 small">
                          June 18, 2021 at 11:55 am
                        </span>
                      </div>
                    </div>
                    <p>
                      Far advanced settling say finished raillery. Offered
                      chiefly farther Satisfied conveying a dependent contented
                      he gentleman agreeable do be. Warrant private blushes
                      removed an in equally totally if. Delivered dejection
                      necessary objection do Mr prevailed. Mr feeling does
                      chiefly cordial in do.{" "}
                    </p>
                  </div>
                </div>
                <hr />
                <div class="d-sm-flex">
                  <img
                    class="avatar avatar-lg rounded-circle float-start me-3"
                    src={
                      userProfile?.business_logo
                        ? `${IMAGE_URL}/uploads/business-logo/${userProfile?.business_logo}`
                        : companyLogo.src
                    }
                    alt="avatar"
                  />
                  <div>
                    <div class="mb-3 d-sm-flex justify-content-sm-between align-items-center">
                      <div>
                        <h5 class="m-0">{userProfile?.business_name}</h5>
                        <span class="me-3 small">
                          August 28, 2021 at 3:08 pm
                        </span>
                      </div>
                    </div>
                    <p>
                      Offered chiefly farther Satisfied conveying a dependent
                      contented he gentleman agreeable do be. Warrant private
                      blushes removed an in equally totally if. Delivered
                      dejection necessary objection do Mr prevailed. Mr feeling
                      does chiefly cordial in do.{" "}
                    </p>
                  </div>
                </div>
                <hr />
                <div class="d-sm-flex">
                  <img
                    class="avatar avatar-lg rounded-circle float-start me-3"
                    src="../assets/img/avatar/53.jpg"
                    alt="avatar"
                  />
                  <div>
                    <div class="mb-3 d-sm-flex justify-content-sm-between align-items-center">
                      <div>
                        <h5 class="m-0">Burger King</h5>
                        <span class="me-3 small">
                          August 29, 2021 at 5:35 pm
                        </span>
                      </div>
                    </div>
                    <p>
                      Chiefly farther Satisfied conveying a dependent contented
                      he gentleman agreeable do be. Warrant private blushes
                      removed an in equally totally if. Delivered dejection
                      necessary objection do Mr prevailed. Mr feeling does
                      chiefly cordial in do.{" "}
                    </p>
                  </div>
                </div>
                <hr />
                <div class="d-sm-flex pb-3">
                  <img
                    class="avatar avatar-lg rounded-circle float-start me-3"
                    src={
                      userProfile?.business_logo
                        ? `${IMAGE_URL}/uploads/business-logo/${userProfile?.business_logo}`
                        : companyLogo.src
                    }
                    alt="avatar"
                  />
                  <div>
                    <div class="mb-3 d-sm-flex justify-content-sm-between align-items-center">
                      <div>
                        <h5 class="m-0">{userProfile?.business_name}</h5>
                        <span class="me-3 small">
                          September 15, 2021 at 8:28 am
                        </span>
                      </div>
                    </div>
                    <p>
                      Chiefly farther Satisfied conveying a dependent contented
                      he gentleman agreeable do be. Warrant private blushes
                      removed an in equally totally if. Delivered dejection
                      necessary objection do Mr prevailed. Mr feeling does
                      chiefly cordial in do.{" "}
                    </p>
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

export default MessageDetails;
