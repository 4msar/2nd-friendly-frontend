import SidebarInformation from "@/components/Business/SidebarInformation";
import BusinessView from "@/components/HOC/BusinessView";
import { capitalize } from "@/helpers/functions";
import useToken from "@/hooks/useToken";
import BusinessService from "@/services/BusinessService";
import { useBusinessAboutStore, useBusinessAmenitiesStore } from "@/store";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import swal from "sweetalert";

const Amenities = () => {
  const userProfile = useBusinessAboutStore((state) => state.businessProfile);
  const isAuthenticated = useToken();
  const allAmenity = useBusinessAmenitiesStore((state) => state.allAmenity);
  const allSelectedAmenity = useBusinessAmenitiesStore(
    (state) => state.selectedAmenity
  );
  const [loading, setLoading] = useState(false);
  const [dataLoading, setDataLoading] = useState(false);

  const setAllAmenityData = useBusinessAmenitiesStore(
    (state) => state.setBusinessAmenity
  );
  const setAllSubAmenityData = useBusinessAmenitiesStore(
    (state) => state.setBusinessSelectedAmenity
  );

  const getAmenitiesData = async (e) => {
    setDataLoading(true);
    const res = await BusinessService.amenityAllAndSelected().then((data) => {
      console.log(data.data);
      if (data.data.status === "success") {
        setAllAmenityData(data.data.allAmenity);
        setAllSubAmenityData(data.data.selectedAmenity);
        setDataLoading(false);
        // setAllSubCategoryData(data.date)
      } else {
        setDataLoading(false);
      }
    });
  };

  const addRemoveAminity = async (aminityId, event) => {
    setLoading(true);
    event.preventDefault();
    event.stopPropagation();
    const payload = {
      aminityId,
    };
    const res = await BusinessService.amenityAddRemove(payload).then((data) => {
      if (data.data.status === "success") {
        swal(`Poof! ${data.data.message}`, {
          icon: "success",
        });
        setLoading(false);
        getAmenitiesData();
      } else {
        setLoading(false);
      }
    });
  };

  useEffect(() => {
    if (isAuthenticated) {
      getAmenitiesData();
    }
  }, [isAuthenticated]);

  console.log(userProfile);

  return (
    <BusinessView title="Amenities">
      <main>
        {loading && (
          <div className="preloader-api">
            <div className="preloader-item">
              <div className="spinner-grow text-primary"></div>
            </div>
          </div>
        )}
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
                <h5 className="text-danger mb-2">Amenities</h5>
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

                <div className="row" style={{ position: "relative" }}>
                  {dataLoading ? (
                    <Box
                      sx={{
                        position: "absolute",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div className="spinner-grow text-primary"></div>
                    </Box>
                  ) : (
                    <>
                      {allAmenity.length > 0 &&
                        allAmenity.map((amenity, index) => (
                          <div className="col-sm-12 col-lg-6">
                            <div
                              className="form-check form-switch form-check-md mb-3"
                              key={index}
                              onClick={(event) =>
                                addRemoveAminity(amenity.id, event)
                              }
                            >
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="checkPrivacy1"
                                checked={allSelectedAmenity.includes(
                                  amenity.id
                                )}
                              />
                              <label
                                className="form-check-label"
                                for="checkPrivacy1"
                              >
                                {capitalize(amenity.title)}
                              </label>
                            </div>
                          </div>
                        ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </BusinessView>
  );
};

export default Amenities;
