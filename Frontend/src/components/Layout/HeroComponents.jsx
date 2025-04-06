/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const HeroComponents = () => {
  return (
    <div
      className="relative min-h-[70vh] md:min-h-[80vh] w-full bg-no-repeat bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Content Container */}
      <div className="relative w-[90%] md:w-[60%] mx-auto text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
          Best Collection for <br />
          <span className="text-blue-600">Home Decoration</span>
        </h1>

        <p className="text-base md:text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
          Discover our curated collection of premium home decorations. Transform
          your living space with our unique and stylish pieces that blend
          comfort with elegance.
        </p>

        <Link
          to="/products"
          className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg 
            hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 
            shadow-lg hover:shadow-xl"
        >
          Shop Now
        </Link>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/50 to-transparent"></div>
    </div>
  );
};

export default HeroComponents;
