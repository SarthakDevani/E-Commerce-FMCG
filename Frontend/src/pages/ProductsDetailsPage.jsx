/* eslint-disable no-unused-vars */

import HeaderComponents from "../components/Layout/HeaderComponents";
import FooterComponents from "../components/Layout/FooterComponents";
import ProductsDetailsComponents from "../components/Product/ProductsDetailsComponents.jsx";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams, useSearchParams } from "react-router-dom";
import { productData } from "../static/data.jsx";

import SuggestedProductComponents from "../components/Product/SuggestedProduct.jsx";
// import { useSelector } from "react-redux";

const ProductsDetailsPage = () => {
  //   const { allProducts } = useSelector((state) => state.products);
  //   const { allEvents } = useSelector((state) => state.events);
  const { id } = useParams();
  const { name } = useParams();
  const [data, setData] = useState(null);
  const productName = name.replace(/-/g, " ");
  //   const [searchParams] = useSearchParams();
  //   const eventData = searchParams.get("isEvent");

  useEffect(() => {
    const data = productData.find((i) => i.name === productName);
    setData(data);
  }, [productName]); // Add productName to dependency array

  return (
    <div>
      <HeaderComponents activeHeading={1} />
      <ProductsDetailsComponents data={data} />
      {data && <SuggestedProductComponents data={data} />}
      <FooterComponents />
    </div>
  );
};

export default ProductsDetailsPage;
