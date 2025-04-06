/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import FooterComponents from "../components/Layout/FooterComponents.jsx";
import HeaderComponents from "../components/Layout/HeaderComponents.jsx";
// import Loader from "../components/Layout/Loader";
import ProductCardComponents from "../components/ProductCard/ProductCardComponents.jsx";
import styles from "../styles/styles";
import { productData } from "../static/data";

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
  //   const { allProducts, isLoading } = useSelector((state) => state.products);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (categoryData === null) {
      const d =
        productData && productData.sort((a, b) => b.total_sell - a.total_sell);
      setData(d);
    } else {
      const d =
        productData && productData.filter((i) => i.category === categoryData);
      setData(d);
    }
    //    window.scrollTo(0,0);
  }, []);

  return (
    <>
      {/* {isLoading ? (
        <Loader />
      ) : ( */}
      <div>
        <HeaderComponents activeHeading={3} />
        <br />
        <br />
        <div className={`${styles.section}`}>
          <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
            {data &&
              data.map((i, index) => (
                <ProductCardComponents data={i} key={index} />
              ))}
          </div>
          {data && data.length === 0 ? (
            <h1 className="text-center w-full pb-[100px] text-[20px]">
              No products Found!
            </h1>
          ) : null}
        </div>
        <FooterComponents />
      </div>
      {/* )} */}
    </>
  );
};

export default ProductsPage;
