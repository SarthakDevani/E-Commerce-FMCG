/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import styles from "../../styles/styles";
import CountDownComponents from "./CountDownComponents.jsx";
import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { addTocart } from "../../redux/actions/cart";
// import { toast } from "react-toastify";
import { productData } from "../../static/data";

const EventCardComponents = ({ active }) => {
  //   const { cart } = useSelector((state) => state.cart);
  //   const dispatch = useDispatch();

  //   const addToCartHandler = (data) => {
  // const isItemExists = cart && cart.find((i) => i._id === data._id);
  // if (isItemExists) {
  //   toast.error("Item already in cart!");
  // } else {
  //   if (data.stock < 1) {
  // toast.error("Product stock limited!");
  //   } else {
  // const cartData = { ...data, qty: 1 };
  // dispatch(addTocart(cartData));
  // toast.success("Item added to cart successfully!");
  //   }
  // }
  //   };

  return (
    <div
      className={`w-full bg-white rounded-lg ${
        active ? "unset" : "mb-12"
      } shadow-lg hover:shadow-xl transition-shadow duration-300 p-6`}
    >
      <div className="flex flex-col lg:flex-row ">
        {/* Product Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkau_0XTDoRSLg9hzZQ8xYE6v9lPpe6nocwg&s"
            alt=""
            className="w-full h-[400px] object-contain rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Iphone 14pro max 8/256GB
          </h2>

          <p className="text-gray-600 leading-relaxed">
            lorem vubvubjbvjdbojvbOUEBJVDJLjjdbviybj CBIvhb XCh vih IHDC XNV
            iehbifhvivh IHXc ehbfiibxCBICbeiubBIYEvcih Xjc UBWIVIhx ICH
            IHBEIYVCIH ihC IHeiHVIh ijv IRBVSBROGBGA fb
          </p>

          {/* Price and Sales Info */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <h5 className="text-xl text-red-500 line-through">1099$</h5>
              <h5 className="text-2xl font-bold text-gray-900">999$</h5>
            </div>
            <span className="text-green-600 font-medium">120 sold</span>
          </div>

          {/* Countdown Timer */}
          <div className="py-4">
            <CountDownComponents />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            {/* <Link to={`/product/${data._id}?isEvent=true`}>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                See Details
              </button>
            </Link> */}
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
EventCardComponents.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default EventCardComponents;

// import React from "react";
// import styles from "../../styles/styles";
// import CountDownComponents from "./CountDownComponents.jsx";
// import { Link } from "react-router-dom";
// // import { useDispatch, useSelector } from "react-redux";
// // import { addTocart } from "../../redux/actions/cart";
// // import { toast } from "react-toastify";
// import { productData } from "../../static/data";

// const EventCardComponents = () => {
//   // const { cart } = useSelector((state) => state.cart);
//   // const dispatch = useDispatch();

//   // const addToCartHandler = (data) => {
//   //   const isItemExists = cart && cart.find((i) => i._id === data._id);
//   //   if (isItemExists) {
//   //     toast.error("Item already in cart!");
//   //   } else {
//   //     if (data.stock < 1) {
//   //       toast.error("Product stock limited!");
//   //     } else {
//   //       const cartData = { ...data, qty: 1 };
//   //       dispatch(addTocart(cartData));
//   //       toast.success("Item added to cart successfully!");
//   //     }
//   //   }
//   // };
//   return (
//     <div className={`w-full block bg-white rounded-lg lg:flex p-2 mb-12`}>
//       <div className="w-full lg:-w[50%] m-auto">
//         <img
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkau_0XTDoRSLg9hzZQ8xYE6v9lPpe6nocwg&s"
//           alt=""
//         />
//       </div>
//       <div className="w-full lg:[w-50%] flex flex-col justify-center">
//         <h2 className={`${styles.productTitle}`}>Iphone 14pro max 8/256GB</h2>
//         <p>
//           lorem vubvubjbvjdbojvbOUEBJVDJLjjdbviybj CBIvhb XCh vih IHDC XNV
//           iehbifhvivh IHXc ehbfiibxCBICbeiubBIYEvcih Xjc UBWIVIhx ICH IHBEIYVCIH
//           ihC IHeiHVIh ijv IRBVSBROGBGA fb
//         </p>
//         <div className="flex py-2 justify-between">
//           <div className="flex">
//             <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">
//               1099$
//             </h5>
//             <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
//               999$
//             </h5>
//           </div>
//           <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">
//             120 sold
//           </span>
//         </div>
//         <CountDownComponents />
//         <br />
//         <div className="flex items-center">
//           {/* <Link to={`/product/${data._id}?isEvent=true`}>
//             <div className={`${styles.button} text-[#fff]`}>See Details</div>
//           </Link> */}
//           <div className={`${styles.button} text-[#fff] ml-5`}>Add to cart</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventCardComponents;
