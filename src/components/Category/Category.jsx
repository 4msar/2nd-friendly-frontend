import React from "react";
import CategoryBox from "./CategoryBox";
import { categories } from "../dummy_data/data";
import { usePublicPageStore } from "@/store";

const Category = () => {
  const category_list = usePublicPageStore((state) => state.allCategory);
  return (
    <section class="pt-0">
      <div class="container">
        <div class="row mb-4">
          <div class="col-12">
            <h2 class="fw-normal text-center">
              Our <span class="corporate-color">Categories</span>
            </h2>
            <p class="mb-0 text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
        </div>
        <div class="row g-4">
          {category_list.length > 0 &&
            category_list.map((item, index) => (
              <CategoryBox
                title={item.name}
                subtitle={item.subCategory}
                icon={"fas fa-home"}
                url={item.slug}
                index={index}
              />
            ))}
        </div>
      </div>
    </section>
  );
};
export default Category;
