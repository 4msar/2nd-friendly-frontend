import SidebarInformation from "@/components/Business/SidebarInformation";
import useToken from "@/hooks/useToken";
import { useBusinessAboutStore, usePhotoAlbumStore } from "@/store";
import React, { useEffect, useRef, useState } from "react";
import album from ".";
import BusinessView from "@/components/HOC/BusinessView";
import BusinessService from "@/services/BusinessService";
import { useRouter } from "next/router";
import { IMAGE_URL } from "@/helpers/apiUrl";
import Script from "next/script";
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import swal from "sweetalert";

const Photos = () => {
  const userProfile = useBusinessAboutStore((state) => state.businessProfile);
  const isAuthenticated = useToken();
  const router = useRouter();
  const currentPage = parseInt(router.query.page) || 1;

  const handlePageChange = (page, totalPages) => {
    if (page > 0 && page <= totalPages) {
      router.push(`/business/album/photos?page=${page}`);
    }
  };
  const albumId = usePhotoAlbumStore((state) => state.albumId);
  const [albumPhoto, setAlbumPhoto] = useState("");
  const [title, setTitle] = useState("Test Title");
  const [loading, setLoading] = useState(false);
  const [dataLoading, setDataLoading] = useState(false);
  const setAllPhoto = usePhotoAlbumStore((state) => state.setAllPhoto);
  const allPhoto = usePhotoAlbumStore((state) => state.allPhoto);
  const [open, setOpen] = useState(false);
  const [photoView, setPhotoView] = useState("");

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
      setAlbumPhoto(pngDataUrl);
    };
  };

  // Ref object to reference the input element
  const inputFile = useRef(null);

  // Function to reset the input element
  const handleReset = () => {
    if (inputFile.current) {
      inputFile.current.value = "";
      inputFile.current.type = "text";
      inputFile.current.type = "file";
    }
  };

  const handleSaveAlbumPhoto = (e) => {
    setLoading(true);
    e.preventDefault();
    e.stopPropagation();
    const payload = {
      title: "Empty title",
      image: albumPhoto,
      image_old: "",
      album_id: albumId,
    };

    const res = BusinessService.albumPhotoSave(payload).then((data) => {
      console.log({ data });
      setLoading(false);
      setTitle("");
      handleReset();
      handleGetAlbumPhotos(albumId);
    });
  };

  const handleGetAlbumPhotos = (id) => {
    setDataLoading(true);
    const payload = {
      albumId: id,
    };
    const res = BusinessService.albumPhotoAll(payload).then((data) => {
      console.log(data.data.allPhoto);
      setAllPhoto(data.data.allPhoto);
      setDataLoading(false)
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
          const response = await BusinessService.albumPhotoDelete(payload);

          if (response.data.actionStatus == 1) {
            swal("Poof! Your item has been deleted!", {
              icon: "success",
            });
            setOpen(true);
            handleGetAlbumPhotos(albumId);
            // Optionally, you can refresh the list of items or update the UI
          } else {
            swal("Error! There was a problem deleting your item.", {
              icon: "error",
            });
            setOpen(true);
          }
        } catch (error) {
          swal("Error! There was a problem deleting your item.", {
            icon: "error",
          });
          setOpen(true);
        }
      } else {
        swal("Your item is safe!");
        setOpen(true);
      }
    });
  };

  useEffect(() => {
    if (!albumId) {
      router.push("/business/album");
    }

    handleGetAlbumPhotos(albumId);
  }, [albumId]);

  return (
    <BusinessView title="Photos">
      <main>
      {loading && (
          <div className="preloader-api">
            <div className="preloader-item">
              
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
                <h5 class="text-danger mb-2">Account Logs</h5>
                <div class="d-flex justify-content-left">
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb breadcrumb-dots my-0 py-0">
                      <li class="breadcrumb-item">
                        <a href="index.php">Home</a>
                      </li>
                      <li class="breadcrumb-item">Business Information</li>
                      <li class="breadcrumb-item">
                        <a href="album.php">Albums</a>
                      </li>
                      <li class="breadcrumb-item">Photos</li>
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
                <div class="rounded-2">
                  <div class="header mb-1">
                    <div class="d-sm-flex justify-content-sm-between align-items-center">
                      <h5 class="mb-2 text-danger">All Photo</h5>
                    </div>
                  </div>
                  <div class="py-1 m-2" role="alert">
                    <div class="row">
                      {/* <div class="col-6">
                        <input
                          class="form-control form-control-sm"
                          onChange={(e) => setTitle(e.target.value)}
                          placeholder="Title here..."
                          type="text"
                          id="title"
                          value={title}
                        />
                      </div> */}
                      <div class="col-6">
                        <input
                          ref={inputFile}
                          class="form-control form-control-sm"
                          onChange={(e) => handleImageChange(e)}
                          type="file"
                          id="formFileMultiple"
                          // multiple
                        />
                      </div>
                      <div className="col-2">
                      <div class="d-grid gap-2 d-md-flex justify-content-md-end me-2">
                    <Button
                      disabled={loading}
                      startIcon={loading ? <CircularProgress size={15} /> : ""}
                      variant="contained"
                      class="btn btn-sm btn-dark"
                      onClick={(e) => handleSaveAlbumPhoto(e)}
                    >
                      Submit
                    </Button>
                  </div>
                      </div>
                    </div>
                  </div>

                  
                  <div class="row m-1 mb-0" style={{position: 'relative'}}>
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
                      {allPhoto?.length > 0 &&
                      allPhoto?.map((photo, index) => (
                        <div
                          class="col-2 p-1"
                          key={index}
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            setPhotoView(photo);
                            setOpen(true);
                          }}
                        >
                          <img
                            id="myImg"
                            src={`${IMAGE_URL}/uploads/business-photo/${photo.image}`}
                            alt="Snow"
                            style={{ width: "100%", maxWidth: "600px" }}
                          />
                        </div>
                      ))}
                      </>
                    )}
                    
                  </div>
                  {/* <div class="d-sm-flex justify-content-sm-between align-items-sm-center p-2 mt-3">
                            <p class="mb-0 text-center text-sm-start">Showing 1 to 8 of 20 entries</p>
                            
                            <nav class="d-flex justify-content-center mb-0" aria-label="navigation">
                                <ul class="pagination pagination-sm pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
                                    <li class="page-item mb-0"><a class="page-link" href="#" tabindex="-1"><i class="fas fa-angle-left"></i></a></li>
                                    <li class="page-item mb-0"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item mb-0 active"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item mb-0"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item mb-0"><a class="page-link" href="#"><i class="fas fa-angle-right"></i></a></li>
                                </ul>
                            </nav>
                        </div> */}
                  {/* <div className="d-sm-flex justify-content-sm-between align-items-sm-center my-1 ps-2">
                    <p className="mb-0 text-center text-sm-start">
                      Showing {(currentPage - 1) * 10 + 1} to{" "}
                      {Math.min(currentPage * 10, allPhoto?.length)} of{" "}
                      {allPhoto?.length} entries
                    </p>
                    {allPhoto?.length > 10 && (
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
                                  Math.ceil(allPhoto?.length / 10)
                                )
                              }
                              tabIndex="-1"
                            >
                              <i className="fas fa-angle-left"></i>
                            </a>
                          </li>
                          {Array.from(
                            { length: allPhoto?.length },
                            (_, index) => (
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
                                      Math.ceil(allPhoto?.length / 10)
                                    )
                                  }
                                >
                                  {index + 1}
                                </a>
                              </li>
                            )
                          )}
                          <li
                            className={`page-item mb-0 ${
                              currentPage === allPhoto?.length && "disabled"
                            }`}
                          >
                            <a
                              className="page-link"
                              href="#"
                              onClick={() =>
                                handlePageChange(
                                  currentPage + 1,
                                  Math.ceil(allPhoto?.length / 10)
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
          </div>
        </section>

        <Dialog
          class="modal fade"
          open={open}
          width="500px"
          onClose={() => setOpen(false)}
        >
          <Box
            class="modal-dialog modal-dialog-centered"
            sx={{ padding: "20px !important" }}
          >
            <DialogContent class="modal-content">
              {/* <!-- Modal header --> */}

              {/* <!-- Modal body --> */}
              <Box class="modal-body" sx={{ padding: "20px !important" }}>
                <h5 class="modal-title text-dark mb-0 text-center">
                  {photoView.title}
                </h5>
                <br />
                <img
                  id="myImg"
                  src={`${IMAGE_URL}/uploads/business-photo/${photoView.image}`}
                  alt="Snow"
                />
              </Box>

              <DialogActions>
                <button
                  type="button"
                  class="btn btn-danger-soft my-0"
                  data-bs-dismiss="modal"
                  onClick={() => setOpen(false)}
                >
                  Close
                </button>
                <button
                  onClick={(event) => handleDeletePhoto(photoView.id)}
                  class="btn btn-danger-soft my-0"
                  data-bs-dismiss="modal"
                >
                  Delete
                </button>
              </DialogActions>
            </DialogContent>
          </Box>
        </Dialog>
      </main>
    </BusinessView>
  );
};

export default Photos;
