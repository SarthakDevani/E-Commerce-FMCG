/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
import ProductCardComponents from "../ProductCard/ProductCardComponents.jsx";
import { productData } from "../../static/data";

const FeaturedProductComponents = () => {
  //   const { allProducts } = useSelector((state) => state.products);

  return (
    <div className="bg-white py-8">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Featured Products
          </h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
          {productData && productData.length !== 0 && (
            <>
              {productData &&
                productData.map((i, index) => (
                  <ProductCardComponents data={i} key={index} />
                ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductComponents;
