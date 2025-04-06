/* eslint-disable no-unused-vars */
import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  footercompanyLinks,
  footerProductLinks,
  footerSupportLinks,
} from "../../static/data";

const FooterComponents = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* Subscribe Section */}
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-indigo-600 py-7">
        <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          <span className="text-emerald-400">Subscribe</span> us for get news{" "}
          <br />
          events and offers
        </h1>
        <div>
          <input
            type="text"
            required
            placeholder="Enter your email..."
            className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button className="bg-emerald-400 hover:bg-emerald-500 duration-300 px-5 py-2.5 rounded-lg text-white font-medium md:w-auto w-full">
            Submit
          </button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8 sm:px-8 px-5 py-16">
        {/* Logo and Social Links */}
        <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
          <img
            src="https://shopo.quomodothemes.website/assets/images/logo.svg"
            alt="Logo"
            className="h-12 invert"
          />
          <br />
          <p className="text-gray-300 text-sm mt-4">
            The home and elements needed to create beautiful products.
          </p>
          <div className="flex items-center mt-6 space-x-4">
            <AiFillFacebook
              size={25}
              className="cursor-pointer hover:text-blue-500 transition-colors"
            />
            <AiOutlineTwitter
              size={25}
              className="cursor-pointer hover:text-blue-400 transition-colors"
            />
            <AiFillInstagram
              size={25}
              className="cursor-pointer hover:text-pink-500 transition-colors"
            />
            <AiFillYoutube
              size={25}
              className="cursor-pointer hover:text-red-500 transition-colors"
            />
          </div>
        </ul>

        {/* Company Links */}
        <ul className="text-center sm:text-start">
          <h1 className="mb-4 font-semibold text-lg">Company</h1>
          {footerProductLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-emerald-400 duration-300 text-sm cursor-pointer leading-6 block"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Shop Links */}
        <ul className="text-center sm:text-start">
          <h1 className="mb-4 font-semibold text-lg">Shop</h1>
          {footercompanyLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-emerald-400 duration-300 text-sm cursor-pointer leading-6 block"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Support Links */}
        <ul className="text-center sm:text-start">
          <h1 className="mb-4 font-semibold text-lg">Support</h1>
          {footerSupportLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-emerald-400 duration-300 text-sm cursor-pointer leading-6 block"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer Bottom */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8 border-t border-gray-800">
        <span>© 2020 Becodemy. All rights reserved.</span>
        <span className="hover:text-emerald-400 cursor-pointer">
          Terms · Privacy Policy
        </span>
        <div className="sm:block flex items-center justify-center w-full">
          <img
            src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75"
            alt="Payment Methods"
            className="max-h-8"
          />
        </div>
      </div>
    </div>
  );
};

export default FooterComponents;
