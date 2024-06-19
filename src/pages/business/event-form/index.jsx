import SidebarInformation from "@/components/Business/SidebarInformation";
import BusinessView from "@/components/HOC/BusinessView";
import React from "react";

const EventsForm = () => {
  return (
    <main>
      <section className="p-0 m-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-between align-items-center">
                <button
                  className="btn btn-link d-xl-none mb-0 float-start px-0 mt-2 pb-0"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasSidebar"
                  aria-controls="offcanvasSidebar"
                >
                  <i className="fas fa-sliders-h"></i> Business Information
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-3 bg-light mb-4">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h5 className="text-danger mb-2">EventsForm</h5>
              <div className="d-flex justify-content-left">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-dots my-0 py-0">
                    <li className="breadcrumb-item">
                      <a href="index.php">Home</a>
                    </li>
                    <li className="breadcrumb-item">Business Information</li>
                    <li className="breadcrumb-item">Event Form</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-1 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-md-3">
              <SidebarInformation />
            </div>
            <div className="col-xl-9 col-md-9">
              <form class="row g-3 needs-validation mt-2" novalidate>
                <div class="col-md-6 col-sm-12 bg-light-input">
                  <label
                    class="form-label fw-normal text-black"
                    for="event_name"
                  >
                    Event Title <span class="star">*</span>
                  </label>
                  <input
                    class="form-control event_name"
                    id="event_name"
                    title="event_name"
                    type="text"
                    placeholder="Spring Fun Fest at Parkway Bank Park"
                    required
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please enter event name.</div>
                </div>
                <div class="col-md-6 col-sm-12 bg-light-input">
                  <label class="form-label fw-normal text-dark" for="image">
                    Image <span class="star">*</span>
                  </label>
                  <input
                    class="form-control image"
                    type="file"
                    id="image"
                    title="image"
                    required
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please upload image.</div>
                </div>
                <div class="col-md-6 bg-light-input">
                  <label for="" class="form-label fw-bold text-dark">
                    Category <span class="star">*</span>
                  </label>
                  <select class="form-select" id="" autofocus required>
                    <option value="">Please Select</option>
                    <option value="1">Food & Drink</option>
                    <option value="2">Restaurant</option>
                    <option value="3">Auto Service</option>
                  </select>
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please select a category.</div>
                </div>
                <div class="col-md-6 col-sm-12 bg-light-input">
                  <label class="form-label fw-normal text-dark" for="date_time">
                    From Date <span class="star">*</span>
                  </label>
                  <input
                    class="form-control date_time"
                    id="date_time"
                    title="date_time"
                    type="datetime-local"
                    placeholder=""
                    required
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please enter date & time.</div>
                </div>
                <div class="col-md-6 col-sm-12 bg-light-input">
                  <label class="form-label fw-normal text-dark" for="date_time">
                    End Date <span class="star">*</span>
                  </label>
                  <input
                    class="form-control date_time"
                    id="date_time"
                    title="date_time"
                    type="datetime-local"
                    placeholder=""
                    required
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please enter date & time.</div>
                </div>
                <div class="col-md-6 col-sm-12 bg-light-input">
                  <label class="form-label fw-normal text-dark" for="location">
                    Venue Name <span class="star">*</span>
                  </label>
                  <input
                    class="form-control location"
                    id="location"
                    title="location"
                    type="text"
                    placeholder="W 13th St, New York"
                    autofocus
                    required
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please enter address.</div>
                </div>
                <div class="col-md-6 col-sm-12 bg-light-input">
                  <label class="form-label fw-normal text-dark" for="location">
                    Ticket Price <span class="star">*</span>
                  </label>
                  <input
                    class="form-control location"
                    id="location"
                    title="location"
                    type="text"
                    placeholder="W 13th St, New York"
                    autofocus
                    required
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please enter address.</div>
                </div>

                <div class="col-md-6 col-sm-12 bg-light-input">
                  <label class="form-label fw-normal text-dark" for="location">
                    Address <span class="star">*</span>
                  </label>
                  <input
                    class="form-control location"
                    id="location"
                    title="location"
                    type="text"
                    placeholder="W 13th St, New York"
                    autofocus
                    required
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please enter address.</div>
                </div>
                <div class="col-md-6 col-sm-12 bg-light-input">
                  <label class="form-label fw-normal text-dark" for="location">
                    Phone <span class="star">*</span>
                  </label>
                  <input
                    class="form-control location"
                    id="location"
                    title="location"
                    type="text"
                    placeholder="W 13th St, New York"
                    autofocus
                    required
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please enter address.</div>
                </div>
                <div class="col-md-6 col-sm-12 bg-light-input">
                  <label class="form-label fw-normal text-dark" for="location">
                    City <span class="star">*</span>
                  </label>
                  <input
                    class="form-control location"
                    id="location"
                    title="location"
                    type="text"
                    placeholder="W 13th St, New York"
                    autofocus
                    required
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please enter address.</div>
                </div>
                <div class="col-md-6 col-sm-12 bg-light-input">
                  <label class="form-label fw-normal text-dark" for="location">
                    State <span class="star">*</span>
                  </label>
                  <input
                    class="form-control location"
                    id="location"
                    title="location"
                    type="text"
                    placeholder="W 13th St, New York"
                    autofocus
                    required
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please enter address.</div>
                </div>
                <div class="col-md-6 col-sm-12 bg-light-input">
                  <label class="form-label fw-normal text-dark" for="location">
                    Website <span class="star">*</span>
                  </label>
                  <input
                    class="form-control location"
                    id="location"
                    title="location"
                    type="text"
                    placeholder="W 13th St, New York"
                    autofocus
                    required
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please enter address.</div>
                </div>

                <div class="col-md-12 col-sm-12 bg-light-input">
                  <label
                    class="form-label fw-normal text-dark"
                    for="event_detail"
                  >
                    Event Detail <span class="star">*</span>
                  </label>
                  <textarea
                    class="form-control event_detail"
                    rows="10"
                    type="text"
                    id="event_detail"
                    title="event_detail"
                    placeholder="Write about event details here..."
                    required
                  ></textarea>
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please enter event detail.</div>
                </div>
                <div class="d-sm-flex justify-content-end mb-3">
                  <button type="submit" class="btn btn-dark mb-0">
                    Save changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BusinessView(EventsForm, "Events Form");
