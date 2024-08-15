import AccountSidebar from "@/components/Business/AccountSidebar";
import ActivityLogs from "@/components/Business/ActivityLog";
import BusinessView from "@/components/HOC/BusinessView";
import UserView from "@/components/HOC/UserView";
import UserAccountSidebar from "@/components/User/AccountSidebar";
import UserActivityLogs from "@/components/User/ActivityLog";

const Activity = () => {
  return (
    <UserView title="Activity Logs">
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
                    <i class="fas fa-sliders-h"></i> Activity Logs
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
                <h5 class="text-danger mb-2">Activity Logs</h5>
                <div class="d-flex justify-content-left">
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb breadcrumb-dots my-0 py-0">
                      <li class="breadcrumb-item">
                        <a href="index.php">Home</a>
                      </li>
                      <li class="breadcrumb-item">Business</li>
                      <li class="breadcrumb-item">Activity Logs</li>
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
                <UserAccountSidebar />
              </div>
              <div class="col-xl-9">
                <UserActivityLogs />
              </div>
            </div>
          </div>
        </section>
      </main>
    </UserView>
  );
};

export default Activity;
