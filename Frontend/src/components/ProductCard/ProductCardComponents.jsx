/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  AiFillHeart,
  AiFillStar,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";
import { Link } from "react-router-dom";
// import styles from "../../../styles/styles";
// import { useDispatch, useSelector } from "react-redux";
import ProductDetailsCardComponents from "../ProductCard/ProductDetailsCardComponents.jsx";
// ...existing imports and comments...

const ProductCardComponents = ({ data }) => {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);

  // Add error check at the start of component
  //   if (!data || !data.images || !Array.isArray(data.images) || !data.images[0]) {
  //     return null;
  //   }

  //   const { wishlist } = useSelector((state) => state.wishlist);
  //   const { cart } = useSelector((state) => state.cart);
  const d = data.name;
  const product_name = d.replace(/\s+/g, "-");
  //   const dispatch = useDispatch();
  // ...existing commented code...

  return (
    <>
      <div className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-4">
        {/* Action Buttons */}
        <div className="absolute right-3 top-3 z-10 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {click ? (
            <AiFillHeart
              size={22}
              className="cursor-pointer p-1.5 bg-white rounded-full shadow-md hover:shadow-lg transition-all"
              onClick={() => setClick(!click)}
              color="red"
              title="Remove from wishlist"
            />
          ) : (
            <AiOutlineHeart
              size={30}
              className="cursor-pointer p-1.5 bg-white rounded-full shadow-md hover:shadow-lg transition-all"
              onClick={() => setClick(!click)}
              color="#333"
              title="Add to wishlist"
            />
          )}
          <AiOutlineEye
            size={30}
            className="cursor-pointer p-1.5 bg-white rounded-full shadow-md hover:shadow-lg transition-all"
            onClick={() => setOpen(!open)}
            color="#333"
            title="Quick view"
          />
          <AiOutlineShoppingCart
            size={30}
            className="cursor-pointer p-1.5 bg-white rounded-full shadow-md hover:shadow-lg transition-all"
            onClick={() => setOpen(!open)}
            color="#333"
            title="Add to cart"
          />
        </div>

        {/* Product Image */}
        <Link to={`/product/${product_name}`} className="block overflow-hidden">
          <img
            src={data.image_Url[0].url}
            alt={data.name}
            className="w-full h-48 object-contain transform group-hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Shop Name */}
        <Link to="/" className="block mt-4">
          <p className="text-blue-600 text-sm hover:text-blue-700 transition-colors">
            {data.shop.name}
          </p>
        </Link>

        {/* Product Details */}
        <Link to={`/product/${data.id}`} className="block">
          <h4 className="text-gray-800 font-medium mt-2 mb-2 line-clamp-2">
            {data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}
          </h4>

          {/* Ratings */}
          <div className="flex space-x-1 mb-2">
            {[...Array(5)].map((_, index) => (
              <AiFillStar key={index} className="text-yellow-400" size={18} />
            ))}
          </div>

          {/* Price and Sales */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-blue-600">
                ${data.price === 0 ? data.price : data.discount_price}
              </span>
              {data.price > 0 && (
                <span className="text-sm text-gray-500 line-through">
                  ${data.price}
                </span>
              )}
            </div>
            <span className="text-green-500 text-sm font-medium">
              {data.total_sell} sold
            </span>
          </div>
        </Link>

        {/* Commented ProductDetailsCard */}
        {open ? (
          <ProductDetailsCardComponents setOpen={setOpen} data={data} />
        ) : null}
      </div>
    </>
  );
};

ProductCardComponents.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    category: PropTypes.string,
    name: PropTypes.string,

    description: PropTypes.string,
    discount_price: PropTypes.number,

    images: PropTypes.arrayOf(
      PropTypes.shape({
        public_id: PropTypes.string,
        url: PropTypes.string,
      })
    ),
    image_Url: PropTypes.arrayOf(
      PropTypes.shape({
        public_id: PropTypes.string,
        url: PropTypes.string,
      })
    ),
    price: PropTypes.number,
    rating: PropTypes.number,
    shop: PropTypes.shape({
      name: PropTypes.string,
      shop_avatar: PropTypes.object,
      ratings: PropTypes.number,
    }),
    stock: PropTypes.number,
    total_sell: PropTypes.number,
  }),
};

export default ProductCardComponents;
