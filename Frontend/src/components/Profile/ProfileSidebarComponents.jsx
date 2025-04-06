/* eslint-disable no-unused-vars */
import React from "react";
import { AiOutlineLogin, AiOutlineMessage } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineReceiptRefund, HiOutlineShoppingBag } from "react-icons/hi";
import {
  MdOutlineAdminPanelSettings,
  MdOutlinePassword,
  MdOutlineTrackChanges,
} from "react-icons/md";
import { TbAddressBook } from "react-icons/tb";
import { RxPerson } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { server } from "../../server";
// import { toast } from "react-toastify";
// import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const ProfileSidebarComponents = ({ setActive, active }) => {
  const navigate = useNavigate();
  // const { user } = useSelector((state) => state.user);
  // const logoutHandler = () => {
  //   axios
  //     .get(`${server}/user/logout`, { withCredentials: true })
  //     .then((res) => {
  //       toast.success(res.data.message);
  //       window.location.reload(true);
  //       navigate("/login");
  //     })
  //     .catch((error) => {
  //       console.log(error.response.data.message);
  //     });
  // };

  const menuItemClass = (isActive) =>
    `flex items-center cursor-pointer w-full mb-6 p-3 
    rounded-lg transition-all duration-300 hover:bg-gray-50
    ${isActive ? "bg-indigo-50 shadow-sm" : ""}`;

  const iconClass = (isActive) => (isActive ? "#4f46e5" : "#64748b");

  const textClass = (isActive) =>
    `pl-3 800px:block  ${
      isActive ? "text-indigo-600 font-medium" : "text-gray-600"
    }`;

  return (
    <div className="w-full bg-white shadow-lg rounded-xl p-6 transition-all duration-300 hover:shadow-xl">
      <div className={menuItemClass(active === 1)} onClick={() => setActive(1)}>
        <RxPerson size={20} color={iconClass(active === 1)} />
        <span className={textClass(active === 1)}>Profile</span>
      </div>

      <div className={menuItemClass(active === 2)} onClick={() => setActive(2)}>
        <HiOutlineShoppingBag size={20} color={iconClass(active === 2)} />
        <span className={textClass(active === 2)}>Orders</span>
      </div>

      <div className={menuItemClass(active === 3)} onClick={() => setActive(3)}>
        <HiOutlineReceiptRefund size={20} color={iconClass(active === 3)} />
        <span className={textClass(active === 3)}>Refunds</span>
      </div>

      <div
        className={menuItemClass(active === 4)}
        onClick={() => setActive(4) || navigate("/inbox")}
      >
        <AiOutlineMessage size={20} color={iconClass(active === 4)} />
        <span className={textClass(active === 4)}>Inbox</span>
      </div>

      <div className={menuItemClass(active === 5)} onClick={() => setActive(5)}>
        <MdOutlineTrackChanges size={20} color={iconClass(active === 5)} />
        <span className={textClass(active === 5)}>Track Order</span>
      </div>

      <div className={menuItemClass(active === 6)} onClick={() => setActive(6)}>
        <RiLockPasswordLine size={20} color={iconClass(active === 6)} />
        <span className={textClass(active === 6)}>Change Password</span>
      </div>

      <div className={menuItemClass(active === 7)} onClick={() => setActive(7)}>
        <TbAddressBook size={20} color={iconClass(active === 7)} />
        <span className={textClass(active === 7)}>Address</span>
      </div>

      {/* {user && user?.role === "Admin" && (
        <Link to="/admin/dashboard">
          <div
            className="flex items-center cursor-pointer w-full mb-8"
            onClick={() => setActive(8)}
          >
            <MdOutlineAdminPanelSettings
              size={20}
              color={active === 7 ? "red" : ""}
            />
            <span
              className={`pl-3 ${
                active === 8 ? "text-[red]" : ""
              } 800px:block hidden`}
            >
              Admin Dashboard
            </span>
          </div>
        </Link>
      )} */}

      <div
        className="flex items-center cursor-pointer w-full mb-6 p-3 
          rounded-lg transition-all duration-300 hover:bg-red-50"
        // onClick={logoutHandler}
      >
        <AiOutlineLogin size={20} color="#dc2626" />
        <span className="pl-3 800px:block hidden text-red-600 font-medium">
          Log out
        </span>
      </div>
    </div>
  );
};

ProfileSidebarComponents.propTypes = {
  setActive: PropTypes.func.isRequired,
  active: PropTypes.number.isRequired,
};

export default ProfileSidebarComponents;
