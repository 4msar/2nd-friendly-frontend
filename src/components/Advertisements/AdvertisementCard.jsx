import React from "react";

const AdvertisementCard = ({item, index}) => {
  return (
    <div class="card shadow p-0 rounded-2">
      <div class="row g-0">
        <div class="col-md-4">
          <div id={`carouselExampleFade${index}`} class="carousel slide carousel-fade">
            <div class="carousel-inner">
                {item.images.length > 0 && item.images.map((item, i) => (
                     <div class={`carousel-item ${item.class}`}>
                     <img
                       src={item.img.src}
                       class="d-block w-100 rounded-start-2"
                       alt="..."
                     />
                   </div>
                ))}
              
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target={`#carouselExampleFade${index}`}
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target={`#carouselExampleFade${index}`}
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div class="col-md-8">
          <div class="card-body py-2 px-2">
            <div class="d-sm-flex justify-content-sm-between mb-2 mb-sm-2">
              <div>
                <h5 class="card-title mb-0 fw-normal mb-1">
                  <a href="listing-detail.php">
                    {item.title}
                  </a>
                </h5>
                <p class="small mb-0 mb-sm-0 pb-0">
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i> <strong>5.0</strong>{" "}
                  ({item.starCount} Reviews) .{" "}
                  <span class="fw-bold text-danger">{item.status}</span> until {item.time} PM
                </p>
              </div>
            </div>
            <p
              class="text-truncate-1 pb-2 mb-0"
              style={{ fontSize: "14px", lineHeight: "18px" }}
            >
              {item.description}
            </p>
            <p class="small fst-italic mb-0 pb-0">
              {item.address}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisementCard;
