/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
import { categoriesData, productData } from "../../static/data.jsx";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import DropDownComponents from "./DropDownComponents.jsx";
import NavbarComponents from "./NavbarComponents.jsx";
import CartComponents from "../Cart/CartComponents.jsx";
import WishlistComponents from "../Wishlist/WishlistComponents.jsx";
import { useSelector } from "react-redux";

const HeaderComponents = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);
  const login = useSelector((state) => state.login.value);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const filteredProducts = term
      ? productData?.filter((product) =>
          product.name.toLowerCase().includes(term.toLowerCase())
        )
      : [];
    setSearchData(filteredProducts);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Header */}
      <div className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden md:flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/">
                <img
                  src="/src/assets/shopping-logo.png"
                  alt="Logo"
                  className="h-12 w-auto"
                />
              </Link>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="w-full py-2 px-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <AiOutlineSearch
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                  size={24}
                />
                {/* Search Results Dropdown */}
                {searchData && searchData.length > 0 && (
                  <div className="absolute w-full mt-2 bg-white rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
                    {searchData.map((item, index) => (
                      <Link
                        key={index}
                        to={`/product/${item.name.replace(/\s+/g, "-")}`}
                        className="flex items-center px-4 py-3 hover:bg-gray-50"
                      >
                        {item.images && item.images[0] && (
                          <img
                            src={item.images[0].url}
                            alt={item.name}
                            className="h-10 w-10 object-cover rounded"
                            onError={(e) => {
                              e.target.src = "/src/assets/placeholder.png"; // Add a placeholder image
                              e.target.onerror = null; // Prevent infinite loop
                            }}
                          />
                        )}
                        <span className="ml-3 text-gray-700">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-6">
              <Link
                to="/seller"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Become Seller
                <IoIosArrowForward className="inline ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Header */}
      <div
        className={`w-full bg-gray-900 ${
          active ? "fixed top-0 left-0 z-50 shadow-md" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between">
            {/* Categories Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropDown(!dropDown)}
                className="flex items-center space-x-2 text-white px-4 py-2 rounded-lg hover:bg-gray-800"
              >
                <BiMenuAltLeft size={24} />
                <span>All Categories</span>
                <IoIosArrowDown size={16} />
              </button>
              {dropDown && (
                <div className="absolute top-full left-0 w-64 mt-1 bg-white rounded-lg shadow-lg">
                  <DropDownComponents
                    categoriesData={categoriesData}
                    setDropDown={setDropDown}
                  />
                </div>
              )}
            </div>

            {/* Navigation */}
            <div className="hidden lg:block">
              <NavbarComponents active={props.activeHeading} />
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-6">
              <button
                onClick={() => setOpenWishlist(true)}
                className="relative text-white hover:text-gray-200"
              >
                <AiOutlineHeart size={24} />
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </button>

              <button
                onClick={() => setOpenCart(true)}
                className="relative text-white hover:text-gray-200"
              >
                <AiOutlineShoppingCart size={24} />
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </button>
              {login ? (
                <Link to="/profile" className="text-white hover:text-gray-200">
                  <CgProfile size={24} />
                </Link>
              ) : (
                <Link to="/login" className="text-white hover:text-gray-200">
                  <CgProfile size={24} />
                </Link>
              )}
            </div>
          </div>
          {/* cart popup */}
          {openCart ? <CartComponents setOpenCart={setOpenCart} /> : null}
          {/* wishlist popup */}
          {openWishlist ? (
            <WishlistComponents setOpenWishlist={setOpenWishlist} />
          ) : null}
        </div>
      </div>
    </>
  );
};

HeaderComponents.propTypes = {
  activeHeading: PropTypes.number,
};

export default HeaderComponents;
