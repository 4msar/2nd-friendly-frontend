import SidebarInformation from "@/components/Business/SidebarInformation";
import BusinessView from "@/components/HOC/BusinessView";
import { capitalize, isEmpty } from "@/helpers/functions";
import useToken from "@/hooks/useToken";
import BusinessService from "@/services/BusinessService";
import { useBusinessAboutStore } from "@/store";
import { usePhotoAlbumStore } from "@/store/usePhotoStore";
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import swal from "sweetalert";

const Album = () => {
  const userProfile = useBusinessAboutStore((state) => state.businessProfile);
  const isAuthenticated = useToken();
  const router = useRouter();
  const currentPage = parseInt(router.query.page) || 1;

  const handlePageChange = (page, totalPages) => {
    if (page > 0 && page <= totalPages) {
      router.push(`/business/album?page=${page}`);
    }
  };
  const [open, setOpen] = useState(false);
  const allAlbum = usePhotoAlbumStore((state) => state.allAlbum);
  const setPhotoAlbum = usePhotoAlbumStore((state) => state.setPhotoAlbum);
  const setAlbumId = usePhotoAlbumStore((state) => state.setAlbumId);
  const singleAlbum = usePhotoAlbumStore((state) => state.singleAlbum);
  const setSingleAlbum = usePhotoAlbumStore((state) => state.setSingleAlbum);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
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
      setSingleAlbum({
        ...singleAlbum,
        image: pngDataUrl,
      });
    };
  };

  const getAllPhotoAlbum = () => {
    const res = BusinessService.photoAlbumAll().then((data) => {
      // console.log(data.data);

      if (data.data.status === "success") {
        setPhotoAlbum(data.data.allAlbum);
        //   setAllSubAmenityData(data.data.selectedAmenity);
        // setAllSubCategoryData(data.date)
      }
    });
  };

  const saveAlbum = async (event) => {
    setLoading(true);
    event.preventDefault();
    event.stopPropagation();
    const modalElement = document.getElementById("albumCreate");
    const payload = {
      ...singleAlbum,
      old_image: "",
    };
    const res = await BusinessService.photoAlbumSave(payload).then((data) => {
      if (data.data.status === "success") {
        setLoading(false);
        setOpen(false);
        getAllPhotoAlbum();
        swal("Poof! Album Save successfully!", {
          icon: "success",
        });
        
      } else {
        setLoading(false);
      }
    });
  };

  const updatePhotoAlbum = (data) => {
    setLoading(true);
    
    const payload = {
      ...singleAlbum,
    };
    const res = BusinessService.photoAlbumUpdate(payload).then((data) => {
      if (data.data.status === "success") {
        swal("Poof! Album Update successfully!", {
          icon: "success",
        });
        setOpen(false);
        setLoading(false);
        getAllPhotoAlbum();
      } else {
        setLoading(false);
      }
    });
  };

  const handleDeletePhoto = async (id) => {
    const payload = {
      id: id,
    };

    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this item!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        try {
          const response = await BusinessService.photoAlbumDelete(payload);

          if (response.data.actionStatus == 1) {
            swal("Poof! Your item has been deleted!", {
              icon: "success",
            });
            getAllPhotoAlbum();
            // Optionally, you can refresh the list of items or update the UI
          } else {
            swal(`Error! ${response.data.message}`, {
              icon: "error",
            });
          }
        } catch (error) {
          swal("Error! There was a problem deleting your item.", {
            icon: "error",
          });
        }
      } else {
        swal("Your item is safe!");
      }
    });
  };

  // console.log(singleAlbum);

  useEffect(() => {
    if (isAuthenticated) {
      getAllPhotoAlbum();
    }
  }, [isAuthenticated]);

  return (
    <BusinessView title="Album">
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
                    <Button
                      onClick={() => setOpen(true)}
                      class="btn btn-sm btn-dark mb-0"
                    >
                      Create Album
                    </Button>
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
                                  <Link
                                    onClick={() => setAlbumId(album.id)}
                                    href="/business/album/photos"
                                  >
                                    {capitalize(album.name)}
                                  </Link>
                                </h6>
                              </div>
                            </td>
                            <td>34</td>
                            <td>Feb 15, 2024</td>
                            <td>March 25, 2024</td>
                            <td>
                              <Button
                                onClick={() => {
                                  setOpen(true);
                                  setSingleAlbum(album);
                                }}
                                class="btn btn-sm btn-blue-soft btn-round me-1 mb-0"
                              >
                                <i class="far fa-fw fa-edit"></i>
                              </Button>
                              <Link
                                onClick={() => setAlbumId(album.id)}
                                href="/business/album/photos"
                                class="btn btn-sm btn-success-soft btn-round me-1 mb-0"
                              >
                                <i class="far fa-fw fa-image"></i>
                              </Link>
                              <button
                                class="btn btn-sm btn-danger-soft btn-round mb-0"
                                onClick={() => handleDeletePhoto(album.id)}
                              >
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
                {/* <div className="d-sm-flex justify-content-sm-between align-items-sm-center my-1 ps-2">
                  <p className="mb-0 text-center text-sm-start">
                    Showing {(currentPage - 1) * 10 + 1} to{" "}
                    {Math.min(currentPage * 10, allAlbum?.length)} of{" "}
                    {allAlbum?.length} entries
                  </p>
                  {allAlbum?.length > 10 && (
                    <nav
                    className="d-flex justify-content-center mb-0"
                    aria-label="navigation"
                  >
                    <ul className="pagination pagination-sm pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
                      <li
                        className={`page-item mb-0 ${
                          currentPage === 1 && "disabled"
                        }`}
                      >
                        <a
                          className="page-link"
                          href="#"
                          onClick={() =>
                            handlePageChange(
                              currentPage - 1,
                              Math.ceil(allAlbum?.length / 10)
                            )
                          }
                          tabIndex="-1"
                        >
                          <i className="fas fa-angle-left"></i>
                        </a>
                      </li>
                      {Array.from({ length: allAlbum?.length }, (_, index) => (
                        <li
                          key={index + 1}
                          className={`page-item mb-0 ${
                            currentPage === index + 1 && "active"
                          }`}
                        >
                          <a
                            className="page-link"
                            href="#"
                            onClick={() =>
                              handlePageChange(
                                index + 1,
                                Math.ceil(allAlbum?.length / 10)
                              )
                            }
                          >
                            {index + 1}
                          </a>
                        </li>
                      ))}
                      <li
                        className={`page-item mb-0 ${
                          currentPage === allAlbum?.length && "disabled"
                        }`}
                      >
                        <a
                          className="page-link"
                          href="#"
                          onClick={() =>
                            handlePageChange(
                              currentPage + 1,
                              Math.ceil(allAlbum?.length / 10)
                            )
                          }
                        >
                          <i className="fas fa-angle-right"></i>
                        </a>
                      </li>
                    </ul>
                  </nav>
                  )}
                  
                </div> */}
              </div>
            </div>
          </div>
        </section>
        <Dialog
          class="modal fade"
          open={open}
          width="500px"
          onClose={() => {
            setOpen(false);
            setSingleAlbum("");
            setLoading(false);
          }}
        >
          <Box
            class="modal-dialog modal-dialog-centered"
            sx={{ padding: "20px !important" }}
          >
            <DialogContent class="modal-content">
              <DialogContentText sx={{ padding: "20px" }}>
                {/* <!-- Modal header --> */}
                <div class="modal-header">
                  <h5 class="modal-title text-dark mb-0">Album Create</h5>
                  <button
                    type="button"
                    class="btn btn-sm btn-light mb-0"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={() => {
                      setOpen(false);
                      setSingleAlbum("");
                      setLoading(false);
                    }}
                  >
                    <i class="bi bi-x-lg">x</i>
                  </button>
                </div>
                {/* <!-- Modal body --> */}
                <Box
                  class="modal-body"
                  sx={{
                    padding: "20px !important",
                    marginBottom: "20px !important",
                  }}
                >
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
                        value={singleAlbum?.name}
                        onChange={(e) => {
                          setSingleAlbum({
                            ...singleAlbum,
                            name: e.target.value,
                          });
                        }}
                      />
                      <div class="valid-feedback">Looks good!</div>
                      <div class="invalid-feedback">
                        Please enter album name.
                      </div>
                    </div>
                    <div class="col-md-12 bg-light-input mt-5 mb-3">
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
                      <div class="invalid-feedback">
                        Please enter album name.
                      </div>
                    </div>
                  </div>
                </Box>
                {/* <!-- Modal footer --> */}
                <DialogActions
                  class="modal-footer"
                  sx={{ paddingTop: "20px !important" }}
                >
                  <Button
                    type="button"
                    class="btn btn-danger-soft my-0"
                    data-bs-dismiss="modal"
                    onClick={() => {
                      setOpen(false);
                      setSingleAlbum("");
                      setLoading(false);
                    }}
                    sx={{ marginRight: "10px !important" }}
                  >
                    Close
                  </Button>
                  {!isEmpty(singleAlbum.id) ? (
                    <Button
                      startIcon={loading ? <CircularProgress size={15} /> : ""}
                      onClick={(event) => updatePhotoAlbum(event)}
                      class="btn btn-success-soft my-0"
                      data-bs-dismiss="modal"
                      disabled={loading}
                    >
                      Update
                    </Button>
                  ) : (
                    <Button
                      startIcon={loading ? <CircularProgress size={15} /> : ""}
                      disabled={loading}
                      onClick={(event) => saveAlbum(event)}
                      class="btn btn-success-soft my-0"
                      data-bs-dismiss="modal"
                    >
                      Submit
                    </Button>
                  )}
                </DialogActions>
              </DialogContentText>
            </DialogContent>
          </Box>
        </Dialog>
      </main>
    </BusinessView>
  );
};

export default Album;
