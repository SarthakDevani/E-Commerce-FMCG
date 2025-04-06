/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import { brandingData, categoriesData } from "../../static/data"; // Fixed import path

const CategoriesComponents = () => {
  const navigate = useNavigate();

  // Error handling for missing data
  if (!brandingData || !categoriesData) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-red-500 text-lg font-medium">
          Error loading category data
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Branding Section */}
      <div className="container mx-auto px-6 hidden sm:block">
        <div className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 bg-white rounded-2xl shadow-lg p-8">
          {brandingData.map((item, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-xl transition-all duration-300 border border-gray-100"
            >
              <div className="text-blue-600 text-2xl">{item.icon}</div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 text-lg mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {item.Description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className="container mx-auto px-6 mb-16" id="categories">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 tracking-tight text-center">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {categoriesData.map((category) => (
            <div
              key={category.id}
              onClick={() => navigate(`/products?category=${category.title}`)}
              className="group relative bg-white rounded-xl shadow-md hover:shadow-xl 
                overflow-hidden cursor-pointer transition-all duration-300
                h-[240px] flex items-center justify-center"
            >
              {/* Image with error handling */}
              {category.image_Url ? (
                <img
                  src={category.image_Url}
                  alt={category.title}
                  className="absolute inset-0 w-full h-full object-cover object-center
                    group-hover:scale-105 transition-transform duration-500 ease-out"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/placeholder-image.jpg"; // Add a placeholder image
                  }}
                />
              ) : (
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-lg font-medium">
                    No image available
                  </span>
                </div>
              )}

              {/* Improved overlay gradient for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>

              {/* Category title with improved visibility */}
              <div className="absolute left-0 bottom-0 w-full p-4 z-20">
                <h3
                  className="text-xl font-bold text-white group-hover:text-blue-300 
                  transition-colors duration-300 drop-shadow-lg"
                >
                  {category.title}
                </h3>
                <p
                  className="text-gray-200 text-sm mt-1 opacity-0 group-hover:opacity-100 
                  transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                >
                  Explore Collection →
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoriesComponents;
