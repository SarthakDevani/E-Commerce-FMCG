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

const BestSellingPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const d =
      productData &&
      productData.sort((a, b) => {
        a.total_sell - b.total_sell;
      });
    setData(d);
  }, []);

  return (
    <>
      {/* {isLoading ? (
        <Loader />
      ) : ( */}
      <div>
        <HeaderComponents activeHeading={2} />
        <br />
        <br />
        <div className={`${styles.section}`}>
          <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
            {data &&
              data.map((i, index) => (
                <ProductCardComponents data={i} key={index} />
              ))}
          </div>
        </div>
        <FooterComponents />
      </div>
      {/* )} */}
    </>
  );
};

export default BestSellingPage;
