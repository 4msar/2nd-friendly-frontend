import SidebarInformation from "@/components/Business/SidebarInformation";
import BusinessView from "@/components/HOC/BusinessView";
import { capitalize } from "@/helpers/functions";
import useToken from "@/hooks/useToken";
import BusinessService from "@/services/BusinessService";
import { useBusinessAboutStore } from "@/store";
import { usePhotoAlbumStore } from "@/store/usePhotoStore";
import { useEffect, useState } from "react";

const Album = () => {
  const userProfile = useBusinessAboutStore((state) => state.businessProfile);
  const isAuthenticated = useToken();

  const allAlbum = usePhotoAlbumStore((state) => state.allAlbum);
  const setPhotoAlbum = usePhotoAlbumStore((state) => state.setPhotoAlbum);
  const [albumName, setAlbumName] = useState();
  const [convertedImage, setConvertedImage] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
        convertToPNG(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const convertToPNG = (dataUrl) => {
    const img = new Image();
    img.src = `${dataUrl}`;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      const pngDataUrl = canvas.toDataURL("image/png");
      setConvertedImage(pngDataUrl);
    };
  };

  const getAllPhotoAlbum = async () => {
    const res = await BusinessService.photoAlbumAll().then((data) => {
      console.log(data.data);

      if (data.data.status === "success") {
        setPhotoAlbum(data.data.allAlbum);
        //   setAllSubAmenityData(data.data.selectedAmenity);
        // setAllSubCategoryData(data.date)
      }
    });
  };

  const saveAlbum = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    const modalElement = document.getElementById("albumCreate");
    const payload = {
      name: albumName,
      image: convertedImage,
      old_image: ""
    };
    const res = await BusinessService.photoAlbumSave(payload).then((data) => {
      if (data.data.status === "success") {
        getAllPhotoAlbum();
        modalElement.modal("hide");
        setAlbumName("");
        setConvertedImage(null);
      }
    });
  };

  useEffect(() => {
    if (isAuthenticated) {
      getAllPhotoAlbum();
    }
  }, [isAuthenticated]);

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
              <h5 className="text-danger mb-2">Album</h5>
              <div className="d-flex justify-content-left">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-dots my-0 py-0">
                    <li className="breadcrumb-item">
                      <a href="index.php">Home</a>
                    </li>
                    <li className="breadcrumb-item">Business Information</li>
                    <li className="breadcrumb-item">Album</li>
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
              <div class="col d-md-flex justify-content-between align-items-center mb-2">
                <div>
                  <h5 class="mb-2 mb-sm-0 text-danger pb-0">All Album</h5>
                </div>
                <div class="d-flex align-items-center mt-2 mt-md-0">
                  <a
                    href="#"
                    data-bs-target="#albumCreate"
                    data-bs-toggle="modal"
                    class="btn btn-sm btn-dark mb-0"
                  >
                    Create Album
                  </a>
                </div>
              </div>
              <div class="table-responsive rounded-3 ">
                <table class="table table p-4 mb-0 border">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Album Name</th>
                      <th>Quantity</th>
                      <th>Created</th>
                      <th>Updated</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  {allAlbum.length > 0 ? (
                    <tbody>
                      {allAlbum.map((album, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="">
                                <a href="photos.php">
                                  <img
                                    src="../assets/img/restaurent/1.jpg"
                                    class="rounded h-30px"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <h6 class="mb-0 ms-2 table-responsive-title">
                                <a href="#">{capitalize(album.name)}</a>
                              </h6>
                            </div>
                          </td>
                          <td>34</td>
                          <td>Feb 15, 2024</td>
                          <td>March 25, 2024</td>
                          <td>
                            <a
                              href="album-form.php"
                              class="btn btn-sm btn-blue-soft btn-round me-1 mb-0"
                            >
                              <i class="far fa-fw fa-edit"></i>
                            </a>
                            <a
                              href="photos.php"
                              class="btn btn-sm btn-success-soft btn-round me-1 mb-0"
                            >
                              <i class="far fa-fw fa-image"></i>
                            </a>
                            <button class="btn btn-sm btn-danger-soft btn-round mb-0">
                              <i class="fas fa-fw fa-times"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  ) : (
                    <>
                      <p style={{ color: "red", textAlign: "center" }}>
                        Album not found! Please add an album
                      </p>
                    </>
                  )}

                  {/* <!-- Table body END --> */}
                </table>
                {/* <!-- Table END --> */}
              </div>
              <div class="d-sm-flex justify-content-sm-between align-items-sm-center my-1 ps-2">
                <p class="mb-0 text-center text-sm-start">
                  Showing 1 to 8 of 20 entries
                </p>
                {/* <!-- Pagination --> */}
                <nav
                  class="d-flex justify-content-center mb-0"
                  aria-label="navigation"
                >
                  <ul class="pagination pagination-sm pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
                    <li class="page-item mb-0">
                      <a class="page-link" href="#" tabindex="-1">
                        <i class="fas fa-angle-left"></i>
                      </a>
                    </li>
                    <li class="page-item mb-0">
                      <a class="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li class="page-item mb-0 active">
                      <a class="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li class="page-item mb-0">
                      <a class="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li class="page-item mb-0">
                      <a class="page-link" href="#">
                        <i class="fas fa-angle-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        class="modal fade"
        id="albumCreate"
        tabindex="-1"
        aria-labelledby="albumCreate"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            {/* <!-- Modal header --> */}
            <div class="modal-header">
              <h5 class="modal-title text-dark mb-0" id="albumCreate">
                Album Create
              </h5>
              <button
                type="button"
                class="btn btn-sm btn-light mb-0"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i class="bi bi-x-lg"></i>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div class="modal-body">
              <div class="row">
                <div class="col-md-12 bg-light-input">
                  <label for="album_name" class="form-label">
                    Album name <span class="star">*</span>
                  </label>
                  <input
                    type="text"
                    class="form-control album_name"
                    id="album_name"
                    title="album_name"
                    placeholder="E.g. Pizza Party"
                    required
                    onChange={(e) => setAlbumName(e.target.value)}
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please enter album name.</div>
                </div>
                <div class="col-md-12 bg-light-input mt-5">
                  <label for="album_name" class="form-label">
                    Album Thumbnail <span class="star">*</span>
                  </label>
                  <input
                    type="file"
                    class="form-control album_name"
                    id="album_name"
                    title="album_name"
                    placeholder="E.g. Pizza Party"
                    required
                    onChange={handleImageChange}
                  />
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">Please enter album name.</div>
                </div>
              </div>
            </div>
            {/* <!-- Modal footer --> */}
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger-soft my-0"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={(event) => saveAlbum(event)}
                class="btn btn-success-soft my-0"
                data-bs-dismiss="modal"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BusinessView(Album, "Album");
