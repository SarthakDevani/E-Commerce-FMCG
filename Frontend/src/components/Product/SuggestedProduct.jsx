/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
// import { useSelector } from "react-redux";
// import { productData } from "../../static/data";
import styles from "../../styles/styles";
import { productData } from "../../static/data";
import ProductCardComponents from "../ProductCard/ProductCardComponents";

const SuggestedProduct = ({ data }) => {
  //   const { allProducts } = useSelector((state) => state.products);
  const [products, setProducts] = useState();

  useEffect(() => {
    const d =
      productData && productData.filter((i) => i.category === data.category);
    setProducts(d);
  }, []);

  return (
    <div>
      {data ? (
        <div className={`p-4 ${styles.section}`}>
          <h2
            className={`${styles.heading} text-[25px] font-[500] border-b mb-5`}
          >
            Related Product
          </h2>
          <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
            {products &&
              products.map((i, index) => (
                <ProductCardComponents data={i} key={index} />
              ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};
SuggestedProduct.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default SuggestedProduct;
