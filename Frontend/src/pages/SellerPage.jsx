/* eslint-disable no-unused-vars */
import React from "react";
import HeaderComponents from "../components/Layout/HeaderComponents.jsx";

const SellerPage = () => {
  return (
    <div>
      <HeaderComponents />

      <div className="max-w-[1200px] mx-auto py-10 px-4 sm:px-6">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-[335px] sticky top-5">
            hello
            {/* <ProfileSideBarComponents active={active} setActive={setActive} /> */}
          </div>
          <div className="flex-grow">
            ji
            {/* <ProfileContentcComponents active={active} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerPage;
