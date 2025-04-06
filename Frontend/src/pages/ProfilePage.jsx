/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import HeaderComponents from "../components/Layout/HeaderComponents.jsx";
// import Loader from "../components/Layout/Loader";
import ProfileSideBarComponents from "../components/Profile/ProfileSidebarComponents.jsx";
import ProfileContentcComponents from "../components/Profile/ProfileContentComponents.JSX";
// import { useSelector } from "react-redux";

const ProfilePage = () => {
  //   const { loading } = useSelector((state) => state.user);
  const [active, setActive] = useState(1);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* {loading ? (
        <Loader />
      ) : (
        <> */}
      <HeaderComponents />
      <div className="max-w-[1200px] mx-auto py-10 px-4 sm:px-6">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-[335px] sticky top-5">
            <ProfileSideBarComponents active={active} setActive={setActive} />
          </div>
          <div className="flex-grow">
            <ProfileContentcComponents active={active} />
          </div>
        </div>
      </div>
      {/* </> */}
      {/* )} */}
    </div>
  );
};

export default ProfilePage;
