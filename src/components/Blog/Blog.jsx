import React from "react";
import BlogCard from "./BlogCard";
import { blogPosts } from "../dummy_data/data";

const Blog = () => {
    const posts = blogPosts;
  return (
    <section className="py-5">
      <div className="container position-relative">
        <div className="row mb-3">
          <div className="col-12">
            <h2 className="fw-normal text-center">
              Recent <span className="corporate-color">Blogs</span>
            </h2>
            <p className="mb-0 text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
        </div>
        <div className="row g-3">
            {posts.length > 0 && posts.map((item, index) => (
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <BlogCard item={item} index={index} />
                </div>
            ))}
         
         
        </div>
        <div className="row mt-3">
          <div className="col-12">
            <div className="text-center">
              <a href="blogs.php" className="btn btn-primary-soft">
                View More <i className="fas fa-angle-right ms-0"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
