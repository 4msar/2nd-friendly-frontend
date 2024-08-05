import SidebarInformation from "@/components/Business/SidebarInformation";
import BusinessView from "@/components/HOC/BusinessView";
import useToken from "@/hooks/useToken";
import BusinessService from "@/services/BusinessService";
import { useBusinessAboutStore, useVideoStore } from "@/store";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Videos = () => {
  const userProfile = useBusinessAboutStore((state) => state.businessProfile);
  const isAuthenticated = useToken();
  const [videoState, setVideoState] = useState({
    title: "",
    link: "",
  });

  const router = useRouter();

  const allVideo = useVideoStore((state) => state.allVideo);
  const setVideo = useVideoStore((state) => state.setVideo);
  const [viewVideo, setViewVideo] = useState(null);

  const getAllVideos = async () => {
    const res = await BusinessService.embeddedVideoAll().then((data) => {
      console.log({ data });
      setVideo(data.data.allVideo);
    });
  };

  const handleSaveVideo = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    const payload = {
      title: videoState.title,
      link: videoState.link,
    };

    const res = await BusinessService.embeddedVideoSave(payload).then(
      (data) => {
        if (data.data.status === "success") {
          getAllVideos();
        }
      }
    );
  };

  useEffect(() => {
    if (isAuthenticated) {
      getAllVideos();
    }
  }, [isAuthenticated]);
  return (
    <BusinessView title="Videos">
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
                <h5 class="text-danger mb-2">Videos</h5>
                <div class="d-flex justify-content-left">
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb breadcrumb-dots my-0 py-0">
                      <li class="breadcrumb-item">
                        <a href="index.php">Home</a>
                      </li>
                      <li class="breadcrumb-item">Business Information</li>
                      <li class="breadcrumb-item">Videos</li>
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
                <div class="col d-md-flex justify-content-between align-items-center border-bottom pb-2 mb-1">
                  <div>
                    <h5 class="mb-2 mb-sm-0 text-danger pb-0">All Videos</h5>
                  </div>
                  <div class="d-flex align-items-center mt-2 mt-md-0">
                    <a
                      href="#"
                      class="btn btn-sm btn-dark mb-0"
                      data-bs-target="#videoCreateDialog"
                      data-bs-toggle="modal"
                    >
                      Add Video
                    </a>
                  </div>
                </div>
                <div class="row p-2">
                  {allVideo?.length > 0 ? (
                    <>
                      {allVideo.map((video, index) => (
                        <div class="col-md-3 col-sm-12 p-1" key={index}>
                          <iframe
                            width="220"
                            height="220"
                            src={video.link}
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                          ></iframe>
                        </div>
                      ))}
                    </>
                  ) : (
                    <div>
                      <p>Video not found! Please add your first video!</p>
                    </div>
                  )}
                </div>
                {/* <!-- Pagination --> */}
                <div class="d-sm-flex justify-content-sm-between align-items-sm-center p-2 mt-3">
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
          id="videoCreateDialog"
          tabindex="-1"
          aria-labelledby="videoCreateDialog"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              {/* <!-- Modal header --> */}
              <div class="modal-header">
                <h5 class="modal-title text-dark mb-0" id="videoCreateDialog">
                  Vide Add
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
                    <label for="video_title" class="form-label">
                      Video title
                    </label>
                    <input
                      type="text"
                      class="form-control video_title"
                      id="video_title"
                      title="video_title"
                      placeholder="E.g. Pizza Party"
                      required
                      onChange={(e) =>
                        setVideoState({
                          ...videoState,
                          title: e.target.value,
                        })
                      }
                    />
                    <div class="valid-feedback">Looks good!</div>
                    <div class="invalid-feedback">Please enter album name.</div>
                  </div>
                  <div class="col-md-12 bg-light-input mt-5">
                    <label for="album_name" class="form-label">
                      Video Link <span class="star">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control album_name"
                      id="album_name"
                      title="album_name"
                      placeholder="http"
                      required
                      onChange={(e) =>
                        setVideoState({
                          ...videoState,
                          link: e.target.value,
                        })
                      }
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
                  onClick={(event) => handleSaveVideo(event)}
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
    </BusinessView>
  );
};

export default Videos;
