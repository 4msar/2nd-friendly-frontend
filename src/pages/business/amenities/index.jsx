import SidebarInformation from "@/components/Business/SidebarInformation";
import BusinessView from "@/components/HOC/BusinessView";
import { useBusinessAboutStore } from "@/store";

const Categories = () => {
  const userProfile = useBusinessAboutStore((state) => state.businessProfile);
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
              <h5 className="text-danger mb-2">Categories & Services</h5>
              <div className="d-flex justify-content-left">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-dots my-0 py-0">
                    <li className="breadcrumb-item">
                      <a href="index.php">Home</a>
                    </li>
                    <li className="breadcrumb-item">Business Information</li>
                    <li className="breadcrumb-item">Amenities</li>
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
              <SidebarInformation profile={userProfile} />
            </div>
            <div className="col-xl-9 col-md-9">
              <div className="border-bottom mb-3 pb-2">
                <p className="pb-0 mb-0">
                  These preferences apply to this 2nd A Friendly account only.
                </p>
              </div>
              <div className="row">
                <div className="col-sm-12 col-lg-6">
                  <div className="form-check form-switch form-check-md mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="checkPrivacy1"
                      checked
                    />
                    <label className="form-check-label" for="checkPrivacy1">
                      Takes Reservations
                    </label>
                  </div>
                  <div className="form-check form-switch form-check-md mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="checkPrivacy2"
                    />
                    <label className="form-check-label" for="checkPrivacy2">
                      Offers Takeout
                    </label>
                  </div>
                  <div className="form-check form-switch form-check-md mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="checkPrivacy3"
                      checked
                    />
                    <label className="form-check-label" for="checkPrivacy3">
                      Walk-ins Welcome
                    </label>
                  </div>
                  <div className="form-check form-switch form-check-md mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="checkPrivacy4"
                    />
                    <label className="form-check-label" for="checkPrivacy4">
                      No Delivery
                    </label>
                  </div>
                  <div className="form-check form-switch form-check-md mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="checkPrivacy11"
                      checked
                    />
                    <label className="form-check-label" for="checkPrivacy5">
                      Keto Options
                    </label>
                  </div>
                  <div className="form-check form-switch form-check-md mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="checkPrivacy5"
                    />
                    <label className="form-check-label" for="checkPrivacy5">
                      Vegan Options
                    </label>
                  </div>
                  <div className="form-check form-switch form-check-md mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="checkPrivacy6"
                      checked
                    />
                    <label className="form-check-label" for="checkPrivacy6">
                      Many Vegetarian Options
                    </label>
                  </div>
                  <div className="form-check form-switch form-check-md mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="checkPrivacy7"
                    />
                    <label className="form-check-label" for="checkPrivacy7">
                      Accepts Credit Cards
                    </label>
                  </div>
                  <div className="form-check form-switch form-check-md mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="checkPrivacy8"
                      checked
                    />
                    <label className="form-check-label" for="checkPrivacy8">
                      Accepts Android Pay
                    </label>
                  </div>
                  <div className="form-check form-switch form-check-md mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="checkPrivacy9"
                    />
                    <label className="form-check-label" for="checkPrivacy9">
                      Accepts Apple Pay
                    </label>
                  </div>
                  <div className="form-check form-switch form-check-md mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="checkPrivacy10"
                    />
                    <label className="form-check-label" for="checkPrivacy10">
                      Accepts Cryptocurrency
                    </label>
                  </div>
                  <div className="form-check form-switch form-check-md mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="checkPrivacy11"
                      checked
                    />
                    <label className="form-check-label" for="checkPrivacy11">
                      Intimate, Romantic, ClassNamey, Upscale
                    </label>
                  </div>
                  <div className="form-check form-switch form-check-md mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="checkPrivacy12"
                    />
                    <label className="form-check-label" for="checkPrivacy12">
                      Quiet
                    </label>
                  </div>
                  <div className="form-check form-switch form-check-md mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="checkPrivacy13"
                      checked
                    />
                    <label className="form-check-label" for="checkPrivacy13">
                      Casual Dress
                    </label>
                  </div>
                  <div className="form-check form-switch form-check-md mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="checkPrivacy14"
                    />
                    <label className="form-check-label" for="checkPrivacy14">
                      Good for Groups
                    </label>
                  </div>
                  <div className="form-check form-switch form-check-md mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="checkPrivacy15"
                      checked
                    />
                    <label className="form-check-label" for="checkPrivacy15">
                      Good for Dinner, Dessert
                    </label>
                  </div>
                  <div className="form-check form-switch form-check-md mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="checkPrivacy16"
                    />
                    <label className="form-check-label" for="checkPrivacy16">
                      Good for Working
                    </label>
                  </div>
                  <div className="form-check form-switch form-check-md mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="checkPrivacy17"
                      checked
                    />
                    <label className="form-check-label" for="checkPrivacy17">
                      Street Parking
                    </label>
                  </div>
                  <div className="form-check form-switch form-check-md mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="checkPrivacy18"
                    />
                    <label className="form-check-label" for="checkPrivacy18">
                      Waiter Service
                    </label>
                  </div>
                  <div className="form-check form-switch form-check-md mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="checkPrivacy19"
                      checked
                    />
                    <label className="form-check-label" for="checkPrivacy19">
                      Free Wi-Fi
                    </label>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-6">
                  <div className="form-check form-switch form-check-md mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="checkPrivacy20"
                    />
                    <label className="form-check-label" for="checkPrivacy20">
                      Best nights on Tuesday, Friday, Saturday
                    </label>
                  </div>
                  <div className="form-check form-switch form-check-md mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="checkPrivacy21"
                      checked
                    />
                    <label className="form-check-label" for="checkPrivacy21">
                      Happy Hour Specials
                    </label>
                  </div>
                  <div className="form-check form-switch form-check-md mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="checkPrivacy22"
                    />
                    <label className="form-check-label" for="checkPrivacy22">
                      Full Bar
                    </label>
                  </div>
                  <div className="form-check form-switch form-check-md mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="checkPrivacy23"
                    />
                    <label className="form-check-label" for="checkPrivacy23">
                      Wheelchair Accessible
                    </label>
                  </div>
                  <div className="form-check form-switch form-check-md mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="checkPrivacy24"
                      checked
                    />
                    <label className="form-check-label" for="checkPrivacy24">
                      Latinx-owned
                    </label>
                  </div>
                  <div className="form-check form-switch form-check-md mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="checkPrivacy25"
                    />
                    <label className="form-check-label" for="checkPrivacy25">
                      Women-owned
                    </label>
                  </div>
                  <div className="form-check form-switch form-check-md mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="checkPrivacy26"
                    />
                    <label className="form-check-label" for="checkPrivacy26">
                      Open to All
                    </label>
                  </div>
                  <div className="form-check form-switch form-check-md mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="checkPrivacy27"
                      checked
                    />
                    <label className="form-check-label" for="checkPrivacy27">
                      No Outdoor Seating
                    </label>
                  </div>
                  <div className="form-check form-switch form-check-md mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="checkPrivacy28"
                    />
                    <label className="form-check-label" for="checkPrivacy28">
                      Offers Catering
                    </label>
                  </div>
                  <div className="form-check form-switch form-check-md mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="checkPrivacy29"
                    />
                    <label className="form-check-label" for="checkPrivacy29">
                      Not Good For Kids
                    </label>
                  </div>
                  <div className="form-check form-switch form-check-md mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="checkPrivacy30"
                      checked
                    />
                    <label className="form-check-label" for="checkPrivacy30">
                      Not Good For Dancing
                    </label>
                  </div>
                  <div className="form-check form-switch form-check-md mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="checkPrivacy31"
                    />
                    <label className="form-check-label" for="checkPrivacy31">
                      No Smoking
                    </label>
                  </div>
                  <div className="form-check form-switch form-check-md mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="checkPrivacy32"
                    />
                    <label className="form-check-label" for="checkPrivacy32">
                      No Drive-Thru
                    </label>
                  </div>
                  <div className="form-check form-switch form-check-md mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="checkPrivacy33"
                      checked
                    />
                    <label className="form-check-label" for="checkPrivacy33">
                      Dogs Not Allowed
                    </label>
                  </div>
                  <div className="form-check form-switch form-check-md mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="checkPrivacy34"
                    />
                    <label className="form-check-label" for="checkPrivacy34">
                      No TV
                    </label>
                  </div>
                  <div className="form-check form-switch form-check-md mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="checkPrivacy35"
                      checked
                    />
                    <label className="form-check-label" for="checkPrivacy35">
                      No Heated Outdoor Seating
                    </label>
                  </div>
                  <div className="form-check form-switch form-check-md mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="checkPrivacy36"
                    />
                    <label className="form-check-label" for="checkPrivacy36">
                      No Covered Outdoor Seating
                    </label>
                  </div>
                  <div className="form-check form-switch form-check-md mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="checkPrivacy37"
                      checked
                    />
                    <label className="form-check-label" for="checkPrivacy37">
                      No Private Dining
                    </label>
                  </div>
                  <div className="form-check form-switch form-check-md mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="checkPrivacy38"
                    />
                    <label className="form-check-label" for="checkPrivacy38">
                      Bike Parking
                    </label>
                  </div>
                  <div className="form-check form-switch form-check-md mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="checkPrivacy39"
                      checked
                    />
                    <label className="form-check-label" for="checkPrivacy39">
                      Provides reusable tableware
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BusinessView(Categories, "Amenities");
