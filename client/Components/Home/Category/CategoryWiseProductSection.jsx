import React from "react";
import Category from "./Category";
import Products from "./Products";
import SubCategory from "./SubCategory";

export default function CategoryWiseProductSection() {
  return (
    <>
      <section class="product-area li-laptop-product pt-60 pb-45">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="li-section-title">
                <Category />
                <SubCategory />
              </div>

              <Products />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
