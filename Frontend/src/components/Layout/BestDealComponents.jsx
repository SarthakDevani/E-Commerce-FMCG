/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
//import { useSelector } from "react-redux";
import styles from "../../styles/styles";
import ProductCardComponents from "../ProductCard/ProductCardComponents.jsx";
import { productData } from "../../static/data.jsx";

const BestDeals = () => {
  const [data, setData] = useState([]);
  //const { allProducts } = useSelector((state) => state.products);
  useEffect(() => {
    const d1 = productData;

    const d = d1 && d1.sort((a, b) => b.sold_out - a.sold_out);
    const firstFive = d && d.slice(0, 5);
    //const allProductsData = allProducts ? [...allProducts] : [];
    //const sortedData = allProductsData?.sort((a, b) => b.sold_out - a.sold_out);
    //const firstFive = sortedData && sortedData.slice(0, 5);
    setData(firstFive);
  }, []);

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Best Deals</h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
          {data && data.length !== 0 && (
            <>
              {data &&
                data.map((i, index) => (
                  <ProductCardComponents data={i} key={index} />
                ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BestDeals;
