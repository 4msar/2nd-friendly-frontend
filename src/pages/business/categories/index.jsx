import SidebarInformation from "@/components/Business/SidebarInformation";
import BusinessView from "@/components/HOC/BusinessView";
import { camelCaseToText, capitalize } from "@/helpers/functions";
import useSnackbar from "@/hooks/useSnackbar";
import useToken from "@/hooks/useToken";
import BusinessService from "@/services/BusinessService";
import { useBusinessAboutStore, useBusinessCategoryStore } from "@/store";
import { useEffect, useState } from "react";
// import swal from "sweetalert";

const Categories = () => {
  const isAuthenticated = useToken();
  const allCategory = useBusinessCategoryStore((state) => state.allCategory);
  const userProfile = useBusinessAboutStore((state) => state.businessProfile);
  const allSelectedCategory = useBusinessCategoryStore(
    (state) => state.selectedSubCategory
  );
  const snackbar = useSnackbar();
  const [loading, setLoading] = useState(false);

  const setAllCategoryData = useBusinessCategoryStore(
    (state) => state.setBusinessCategory
  );
  const setAllSubCategoryData = useBusinessCategoryStore(
    (state) => state.setBusinessSelectedCategory
  );

  const getCategoriesData = async (e) => {
    const res = await BusinessService.categorySubCategoryAll().then((data) => {
      //   console.log(data.data);
      if (data.data.status === "success") {
        setAllCategoryData(data.data.allCategory);
        setAllSubCategoryData(data.data.selectedSubCategory);
        // setAllSubCategoryData(data.date)
      }
    });
  };

  const handleChecked = (id) => {
    const isChecked = allSelectedCategory.includes(toString(id));
    console.log(isChecked);
    return isChecked;
  };

  const addRemoveSubCategory = async (subCatId, event) => {
    setLoading(true);
    event.preventDefault();
    event.stopPropagation();
    const payload = {
      subCatId,
    };
    const res = await BusinessService.addRemoveCategory(payload).then(
      (data) => {
        // if (data.data.status === "success") {
          // swal(`Poof! ${data.data.message}`, {
          //   icon: "success",
          // });
          snackbar(data.data.message, {variant: 'success'});
          setLoading(false);
        getCategoriesData();
        // }
      }
    );
  };

  useEffect(() => {
    if (isAuthenticated) {
      getCategoriesData();
    }
  }, [isAuthenticated]);

 
  // console.log({ allSelectedCategory });
  return (
    <BusinessView>
      <main>
        {loading && (
          <div className="preloader-api">
          <div className="preloader-item">
            <div className="spinner-grow text-primary"></div>
          </div>
        </div>
        )}
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
                <h5 class="text-danger mb-2">Categories & Services</h5>
                <div class="d-flex justify-content-left">
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb breadcrumb-dots my-0 py-0">
                      <li class="breadcrumb-item">
                        <a href="index.php">Home</a>
                      </li>
                      <li class="breadcrumb-item">Business Information</li>
                      <li class="breadcrumb-item">Categories & Services</li>
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
              <div class="col-xl-3 col-md-3">
                <SidebarInformation profile={userProfile} />
              </div>
              <div class="col-xl-9 col-md-9">
                <div class="row">
                  {allCategory.length > 0 &&
                    allCategory.map((category, index) => (
                      <>
                        <div class="col-12">
                          <div class="bg-gray">
                            <h5 class="header-title mb-0 fw-normal text-dark">
                              {camelCaseToText(category.name)}
                            </h5>
                          </div>
                        </div>
                        <div class="col-12 mt-2">
                          <ul class="list-inline mb-0 g-3 ls-0">
                            {category.subCategory.length > 0 &&
                              category.subCategory.map((subCategory, index) => (
                                <li
                                  class="list-inline-item"
                                  key={index}
                                  onClick={(event) =>
                                    addRemoveSubCategory(subCategory.id, event)
                                  }
                                >
                                  <input
                                    type="checkbox"
                                    class="btn-check"
                                    id="btn-check-1"
                                    data-id={subCategory.id}
                                    checked={allSelectedCategory.find(
                                      (i) => i == subCategory.id
                                    )}
                                  />
                                  <label
                                    class="btn btn-sm btn-light btn-primary-soft-check rounded-4"
                                    for="btn-check-1"
                                  >
                                    {capitalize(subCategory.name)}{" "}
                                    {handleChecked(subCategory.id)}
                                  </label>
                                </li>
                              ))}
                          </ul>
                        </div>
                      </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </BusinessView>
  );
};

export default Categories;
