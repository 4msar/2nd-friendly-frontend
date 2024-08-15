const UserActivityLogs = () => {
  return (
    <>
      <div class="content">
        <div class="-header">
          <h1 class="title fs-5" id="ActivityLog">
            Where you're signed in on
          </h1>
        </div>
        <div class="body pb-1">
          <div class="row border-bottom mb-2 py-1">
            <div class="col-1">
              <span>
                <i class="fas fa-desktop"></i>
              </span>
            </div>
            <div class="col-9 ps-0 mb-2">
              <div class="fw-bold mb-1 ps-2">Mac OS - New York, USA</div>
              <span class="d-inline-block fs-sm text-muted border-end pe-2 me-2">
                Chrome
              </span>
              <span class="fs-sm fw-bold text-success">Active Now</span>
            </div>
            <div class="col-2 ps-6"></div>
          </div>

          <div class="col-12 d-grid gap-2 d-md-flex justify-content-md-end  my-3">
            <button class="btn btn-danger-soft" type="cancel">
              Sign out All Device
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserActivityLogs;
