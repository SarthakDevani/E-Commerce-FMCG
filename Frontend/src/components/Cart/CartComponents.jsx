/* eslint-disable no-unused-vars */
import React, { useState, useCallback } from "react";
import { RxCross1 } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// import { useDispatch, useSelector } from "react-redux";
// import { addTocart, removeFromCart } from "../../redux/actions/cart";
// import { toast } from "react-toastify";

const CartComponents = ({ setOpenCart }) => {
  const cartData = [
    {
      name: "Product 1",
      description: "test",
      price: "123",
    },
    {
      name: "Product 2",
      description: "test",
      price: "123",
    },
    {
      name: "Product 3",
      description: "test",
      price: "123",
    },
  ];
  return (
    <div className="fixed top-0 left-0 w-full bg-black/30 h-screen z-20">
      <div className="fixed top-0 right-0 h-full w-[80%] 800px:w-[25%] bg-white flex flex-col overflow-y-scroll justify-between shadow-lg">
        <div className="flex w-full justify-end pt-5 pr-5">
          <RxCross1
            size={25}
            className="cursor-pointer hover:text-red-500 transition-colors"
            onClick={() => setOpenCart(false)}
          />
        </div>

        {/* Item length */}
        <div className="flex items-center p-4 border-b">
          <IoBagHandleOutline size={25} />
          <h5 className="pl-2 text-xl font-medium">3 items</h5>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto">
          {cartData &&
            cartData.map((i, index) => <CartSingle key={index} data={i} />)}
        </div>

        {/* Checkout Button */}
        <div className="p-4 border-t bg-gray-50">
          <Link to="/checkout">
            <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-md font-semibold transition-colors">
              Checkout Now (USD$1080)
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const CartSingle = ({ data }) => {
  const [value, setValue] = useState(1);
  const totalPrice = data.price * value;

  // Use useCallback to prevent infinite re-renders
  const handleIncrement = useCallback(() => {
    setValue((prev) => prev + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setValue((prev) => (prev === 1 ? 1 : prev - 1));
  }, []);

  return (
    <div className="border-b p-4">
      <div className="flex items-center gap-4">
        {/* Quantity Controls */}
        <div className="flex items-center gap-2">
          <button
            className="w-7 h-7 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center transition-colors"
            onClick={handleIncrement}
          >
            <HiPlus size={18} className="text-white" />
          </button>
          <span className="w-8 text-center">{value}</span>
          <button
            className="w-7 h-7 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
            onClick={handleDecrement}
          >
            <HiOutlineMinus size={16} className="text-gray-600" />
          </button>
        </div>

        {/* Product Image */}
        <img
          src="https://www.shift4shop.com/2015/images/industries/clothing/clothing-apparel.png"
          alt={data.name}
          className="w-24 h-24 object-cover rounded-md"
        />

        {/* Product Details */}
        <div className="flex-1">
          <h3 className="font-medium">{data.name}</h3>
          <p className="text-sm text-gray-600">
            ${data.price} × {value}
          </p>
          <p className="text-lg font-semibold text-red-600">US${totalPrice}</p>
        </div>

        {/* Remove Button */}
        <button className="p-2 hover:text-red-500 transition-colors">
          <RxCross1 size={20} />
        </button>
      </div>
    </div>
  );
};

CartSingle.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
};

CartComponents.propTypes = {
  setOpenCart: PropTypes.func.isRequired,
};

export default CartComponents;
