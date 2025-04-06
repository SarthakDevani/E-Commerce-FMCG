/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { navItems } from "../../static/data";

const NavbarComponents = ({ active }) => {
  NavbarComponents.propTypes = {
    active: PropTypes.number.isRequired,
  };
  return (
    <nav className="hidden lg:flex items-center space-x-4">
      {navItems &&
        navItems.map((item, index) => (
          <div key={index} className="relative group">
            <Link
              to={item.url}
              className={`
                px-4 py-2 
                font-medium 
                transition-colors 
                duration-200
                ${
                  active === index + 1
                    ? "text-green-400 hover:text-green-500"
                    : "text-gray-100 hover:text-gray-300"
                }
              `}
            >
              {item.title}
              <span
                className={`
                absolute 
                bottom-0 
                left-0 
                w-full 
                h-0.5 
                bg-green-400 
                transform 
                scale-x-0 
                group-hover:scale-x-100 
                transition-transform 
                duration-200
                ${active === index + 1 ? "scale-x-100" : ""}
              `}
              ></span>
            </Link>
          </div>
        ))}
    </nav>
  );
};

export default NavbarComponents;
