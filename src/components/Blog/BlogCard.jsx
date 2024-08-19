import { IMAGE_URL } from "@/helpers/apiUrl";
import Link from "next/link";
import React from "react";

const BlogCard = ({ item, index }) => {
  return (
    <div className="card bg-transparent">
      <div
        id={`carouselBlogFade${index}`}
        className="carousel slide carousel-fade"
      >
        <div className="carousel-inner">
          {/* {item.images?.length > 0 &&
            item.images.map((data, i) => (
              <div className={`carousel-item ${data.class}`} key={i}>
                <img
                  src={data.img.src}
                  className="d-block w-100 rounded-1"
                  alt="..."
                />
              </div>
            ))} */}
            <img
                  src={`${IMAGE_URL}/uploads/blog-image/${item.image}`}
                  className="d-block w-100 rounded-1"
                  alt="..."
                />
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={`#carouselBlogFade${index}`}
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={`#carouselBlogFade${index}`}
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="card-body px-0">
        <h5 className="card-title">
          <a href={`/blogs/${item.slug}`}>{item.title}</a>
        </h5>
        <p className="text-truncate-2">
          {item.details}
        </p>
        <div className="d-flex justify-content-between">
          <h6 className="mb-0">Arielle Norheim</h6>
          <span className="small">Saturday, June 11, 2024</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
