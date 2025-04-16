/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  AiOutlineArrowRight,
  AiOutlineCamera,
  AiOutlineDelete,
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
// import { server } from "../../server";
import styles from "../../styles/styles";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { MdTrackChanges } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
// import {
// deleteUserAddress,
//   loadUser,
//   updatUserAddress,
//   updateUserInformation,
// } from "../../redux/actions/user";
import { Country, State } from "country-state-city";
import { useEffect } from "react";
import axios from "axios";
// import { toast } from "react-toastify";
// import axios from "axios";
// import { getAllOrdersOfUser } from "../../redux/actions/order";
import { checkLogin } from "../../features/login/loginSlice.js";

import PropTypes from "prop-types";

const ProfileContentComponents = ({ active }) => {
  const user = useSelector((state) => state.login.user);
  const dispach = useDispatch();
  const [userId, setUserId] = useState(user && user.userId);
  const [firstName, setFirstName] = useState(user && user.firstName);
  const [lastName, setLastName] = useState(user && user.lastName);
  const [email, setEmail] = useState(user && user.email);
  const [password, setPassword] = useState(user && user.password);
  const [phoneNumber, setPhoneNumber] = useState(user && user.contactNum);
  const [gender, setgender] = useState(user && user.gender);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (error)
  //     toast.error(error);
  //     dispatch({ type: "clearErrors" });
  //   }
  //   if (successMessage) {
  //     toast.success(successMessage);
  //     dispatch({ type: "clearMessages" });
  //   }
  // }, [error, successMessage]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updateUserData = {
      userId: userId,
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      gender: gender,
      contactNum: phoneNumber,
      role: "Buyer",
      status: true,
      // userId: userId,
      // firstName: firstName,
      // lastName: lastName,
      // email: email,
      // password: password,
      // gender: gender,
      // contactNum: phoneNumber,
      // role: "Buyer",
      // created_at: 0,
      // status: true,
    };
    const response = await axios.post(
      "http://localhost:8000/update-user",
      updateUserData
    );
    if (response.data) {
      dispach(checkLogin(response.data));
      window.alert("update Successful");
    }
    //   dispatch(updateUserInformation(name, email, phoneNumber, password));
  };

  // const handleImage = async (e) => {
  //   const reader = new FileReader();

  //   reader.onload = () => {
  //     if (reader.readyState === 2) {
  //       setAvatar(reader.result);
  //       axios
  //         .put(
  //           `${server}/user/update-avatar`,
  //           { avatar: reader.result },
  //           {
  //             withCredentials: true,
  //           }
  //         )
  //         .then((response) => {
  //           dispatch(loadUser());
  //           toast.success("avatar updated successfully!");
  //         })
  //         .catch((error) => {
  //           toast.error(error);
  //         });
  //     }
  //   };

  //   reader.readAsDataURL(e.target.files[0]);
  // };

  return (
    <div className="w-full">
      {/* profile */}
      {active === 1 && (
        <>
          <div className="flex justify-center w-full">
            <div className="relative">
              <CgProfile
                size={24}
                className="w-[150px] h-[150px] rounded-full object-cover border-[3px] border-[#3ad132]"
              />
              {/* <div className="w-[30px] h-[30px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px]">
                <input
                  type="file"
                  id="image"
                  className="hidden"
                  onChange={handleImage}
                />
                <label htmlFor="image">
                  <AiOutlineCamera />
                </label>
              </div> */}
            </div>
          </div>
          <br />
          <br />
          <div className="w-full px-5">
            <form onSubmit={handleSubmit} aria-required={true}>
              <div className="w-full 800px:flex block pb-3">
                <div className=" w-[100%] 800px:w-[50%]">
                  <label className="block pb-2">First Name</label>
                  <input
                    type="text"
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className=" w-[100%] 800px:w-[50%]">
                  <label className="block pb-2">Last Name</label>
                  <input
                    type="text"
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className=" w-[100%] 800px:w-[50%]">
                  <label className="block pb-2">Email Address</label>
                  <input
                    type="text"
                    className={`${styles.input} !w-[95%] mb-1 800px:mb-0`}
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="w-full 800px:flex block pb-3">
                <div className=" w-[100%] 800px:w-[50%]">
                  <label className="block pb-2">Phone Number</label>
                  <input
                    type="number"
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>

                <div className=" w-[100%] 800px:w-[50%]">
                  <label className="block pb-2">Enter your password</label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={gender === "Male"}
                        onChange={(e) => setgender(e.target.value)}
                        className="w-5 h-5 accent-blue-500"
                      />
                      Male
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={gender === "Female"}
                        onChange={(e) => setgender(e.target.value)}
                        className="w-5 h-5 accent-pink-500"
                      />
                      Female
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="gender"
                        value="Other"
                        checked={gender === "Other"}
                        onChange={(e) => setgender(e.target.value)}
                        className="w-5 h-5 accent-gray-500"
                      />
                      Other
                    </label>
                  </div>
                </div>
              </div>
              <input
                className={`w-[250px] h-[40px] border border-[#3a24db] text-center text-[#3a24db] rounded-[3px] mt-8 cursor-pointer`}
                required
                value="Update"
                type="submit"
              />
            </form>
          </div>
        </>
      )}

      {/* order */}
      {active === 2 && (
        <div>
          <AllOrders />
        </div>
      )}

      {/* Refund */}
      {active === 3 && (
        <div>
          <AllRefundOrders />
        </div>
      )}

      {/* Track order */}
      {active === 5 && (
        <div>
          <TrackOrder />
        </div>
      )}

      {/* Change Password */}
      {/* {active === 6 && (
        <div>
          <ChangePassword />
        </div>
      )} */}

      {/*  user Address */}
      {active === 7 && (
        <div>
          <Address />
        </div>
      )}
    </div>
  );
};

const AllOrders = () => {
  const { user } = useSelector((state) => state.login.user);
  const { orders } = useSelector((state) => state.login.orders);
  const dispatch = useDispatch();

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },
    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      // Updated cellClassName to use modern DataGrid API
      cellClassName: (params) => {
        return params.row.status === "Delivered" ? "greenColor" : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },
    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },
    {
      field: "actions",
      headerName: "",
      type: "number",
      minWidth: 150,
      flex: 1,
      sortable: false,
      renderCell: (params) => (
        <Link to={`/user/order/${params.row.id}`}>
          <Button>
            <AiOutlineArrowRight size={20} />
          </Button>
        </Link>
      ),
    },
  ];

  const row = [];

  if (Array.isArray(orders)) {
    orders.forEach((item) => {
      if (item?.orderId && item?.orderStatus !== "refunded") {
        row.push({
          id: item.orderId,
          itemsQty: item.details?.quantity || 0,
          total: "US$ " + (item.totalAmount || 0),
          status: item.orderStatus || "Processing",
        });
      }
    });
  }

  return (
    <div className="pl-8 pt-1">
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
      />
    </div>
  );
};

const AllRefundOrders = () => {
  const { user } = useSelector((state) => state.login.user);
  const { orders } = useSelector((state) => state.login.orders);
  const dispatch = useDispatch();

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },
    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      // Updated cellClassName to use modern DataGrid API
      cellClassName: (params) => {
        return params.row.status === "Delivered" ? "greenColor" : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },
    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },
    {
      field: "actions",
      headerName: "",
      type: "number",
      minWidth: 150,
      flex: 1,
      sortable: false,
      renderCell: (params) => (
        <Link to={`/user/order/${params.row.id}`}>
          <Button>
            <AiOutlineArrowRight size={20} />
          </Button>
        </Link>
      ),
    },
  ];

  const row = [];

  if (Array.isArray(orders)) {
    orders.forEach((item) => {
      if (item?.orderId && item?.orderStatus == "refunded") {
        row.push({
          id: item.orderId,
          itemsQty: item.details?.quantity || 0,
          total: "US$ " + (item.totalAmount || 0),
          status: item.orderStatus || "Processing",
        });
      }
    });
  }

  return (
    <div className="pl-8 pt-1">
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
      />
    </div>
  );
};

const TrackOrder = () => {
  const user = useSelector((state) => state.login.user);
  const orders = useSelector((state) => state.login.orders?.orders || []);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getAllOrdersOfUser(user._id));
  // }, []);

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },
    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.row.status === "Delivered" ? "greenColor" : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },
    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },
    {
      field: "actions",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/track/order/${params.row.id}`}>
              <Button>
                <MdTrackChanges size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  // orders &&
  //   orders.forEach((item) => {
  //     row.push({
  //       id: item.orderId,
  //       itemsQty: item.details?.quantity || 0,
  //       total: "US$ " + (item.totalAmount || 0),
  //       status: item.orderStatus || "Processing",
  //     });
  //   });
  if (Array.isArray(orders)) {
    orders.forEach((item) => {
      if (item?.orderId && item?.orderStatus !== "delivered") {
        row.push({
          id: item.orderId,
          itemsQty: item.details?.quantity || 0,
          total: "US$ " + (item.totalAmount || 0),
          status: item.orderStatus || "Processing",
        });
      }
    });
  }

  return (
    <div className="w-full min-h-[400px] p-4">
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "1px solid #f0f0f0",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#f9fafb",
            borderBottom: "none",
          },
        }}
      />
    </div>
  );
};

// const ChangePassword = () => {
//   const [oldPassword, setOldPassword] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const passwordChangeHandler = async (e) => {
//     e.preventDefault();

//     await axios
//       .put(
//         `${server}/user/update-user-password`,
//         { oldPassword, newPassword, confirmPassword },
//         { withCredentials: true }
//       )
//       .then((res) => {
//         toast.success(res.data.success);
//         setOldPassword("");
//         setNewPassword("");
//         setConfirmPassword("");
//       })
//       .catch((error) => {
//         toast.error(error.response.data.message);
//       });
//   };
//   return (
//     <div className="w-full px-5">
//       <h1 className="block text-[25px] text-center font-[600] text-[#000000ba] pb-2">
//         Change Password
//       </h1>
//       <div className="w-full">
//         <form
//           aria-required
//           onSubmit={passwordChangeHandler}
//           className="flex flex-col items-center"
//         >
//           <div className=" w-[100%] 800px:w-[50%] mt-5">
//             <label className="block pb-2">Enter your old password</label>
//             <input
//               type="password"
//               className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
//               required
//               value={oldPassword}
//               onChange={(e) => setOldPassword(e.target.value)}
//             />
//           </div>
//           <div className=" w-[100%] 800px:w-[50%] mt-2">
//             <label className="block pb-2">Enter your new password</label>
//             <input
//               type="password"
//               className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
//               required
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
//             />
//           </div>
//           <div className=" w-[100%] 800px:w-[50%] mt-2">
//             <label className="block pb-2">Enter your confirm password</label>
//             <input
//               type="password"
//               className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
//               required
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             />
//             <input
//               className={`w-[95%] h-[40px] border border-[#3a24db] text-center text-[#3a24db] rounded-[3px] mt-8 cursor-pointer`}
//               required
//               value="Update"
//               type="submit"
//             />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

const Address = () => {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState();
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [addressType, setAddressType] = useState("");

  // Fix the user selector
  const user = useSelector((state) => state.login.user);
  const cityState = useSelector(
    (state) => state.cityState?.cityStateData || []
  );
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updateUserData = {
      // userId: userId,
      // firstName: firstName,
      // lastName: lastName,
      // email: email,
      // password: password,
      // gender: gender,
      // contactNum: phoneNumber,
      // role: "Buyer",
      // status: true,
      // userId: userId,
      // firstName: firstName,
      // lastName: lastName,
      // email: email,
      // password: password,
      // gender: gender,
      // contactNum: phoneNumber,
      // role: "Buyer",
      // created_at: 0,
      // status: true,
    };
    const response = await axios.post(
      "http://localhost:8000/update-user",
      updateUserData
    );
    if (response.data) {
      // dispach(checkLogin(response.data));
      window.alert("update Successful");
    }
    //   dispatch(updateUserInformation(name, email, phoneNumber, password));
  };
  //   const addressTypeData = [
  //     {
  //       name: "Default",
  //     },
  //     {
  //       name: "Home",
  //     },
  //     {
  //       name: "Office",
  //     },
  //   ];

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (addressType === "" || country === "" || city === "") {
  //     toast.error("Please fill all the fields!");
  //   } else {
  //     dispatch(
  //       updatUserAddress(
  //         country,
  //         city,
  //         address1,
  //         address2,
  //         zipCode,
  //         addressType
  //       )
  //     );
  //     setOpen(false);
  //     setCountry("");
  //     setCity("");
  //     setAddress1("");
  //     setAddress2("");
  //     setZipCode(null);
  //     setAddressType("");
  //   }
  // };

  // const handleDelete = (item) => {
  //   const id = item._id;
  //   dispatch(deleteUserAddress(id));
  // };

  return (
    <>
      <div className="flex justify-center w-full">
        <div className="relative">
          {/* <CgProfile
            size={24}
            className="w-[150px] h-[150px] rounded-full object-cover border-[3px] border-[#3ad132]"
          /> */}
          {/* <div className="w-[30px] h-[30px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px]">
                <input
                  type="file"
                  id="image"
                  className="hidden"
                  onChange={handleImage}
                />
                <label htmlFor="image">
                  <AiOutlineCamera />
                </label>
              </div> */}
        </div>
      </div>
      <br />
      <br />
      <div className="w-full px-5">
        <form onSubmit={handleSubmit} aria-required={true}>
          <div className="w-full 800px:flex block pb-3">
            <div className=" w-[100%] 800px:w-[50%]">
              <label className="block pb-2">House Name/No.</label>
              <input
                type="text"
                className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                required
                // value={firstName}
                // onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className=" w-[100%] 800px:w-[50%]">
              <label className="block pb-2">Street</label>
              <input
                type="text"
                className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                required
                // value={lastName}
                // onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className=" w-[100%] 800px:w-[50%]">
              <label className="block pb-2">LandMark</label>
              <input
                type="text"
                className={`${styles.input} !w-[95%] mb-1 800px:mb-0`}
                required
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="w-full pb-2">
            <label className="block pb-2">State</label>
            <select
              name=""
              id=""
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-[95%] border h-[40px] rounded-[5px]"
            >
              <option value="" className="block border pb-2">
                choose your State
              </option>
              {Array.isArray(cityState) && cityState.length > 0 ? (
                cityState.map((item) => (
                  <option key={item.stateId} value={item.stateId}>
                    {item.stateName}
                  </option>
                ))
              ) : (
                <option value="" disabled>
                  No states available
                </option>
              )}
            </select>
          </div>

          <div className="w-full pb-2">
            <label className="block pb-2">City</label>
            <select
              name=""
              id=""
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-[95%] border h-[40px] rounded-[5px]"
            >
              <option value="" className="block border pb-2">
                choose your City
              </option>
              {Array.isArray(cityState) && cityState.length > 0 ? (
                cityState
                  .find((item) => item.stateId === state)
                  ?.cities?.map((city) => (
                    <option key={city.cityId} value={city.cityId}>
                      {city.cityName}
                    </option>
                  ))
              ) : (
                <option value="" disabled>
                  No cities available
                </option>
              )}
            </select>
          </div>

          <div className="w-full 800px:flex block pb-3">
            <div className=" w-[100%] 800px:w-[50%]">
              <label className="block pb-2">Zip code</label>
              <input
                type="number"
                className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                required
                // value={phoneNumber}
                // onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>

          <input
            className={`w-[250px] h-[40px] border border-[#3a24db] text-center text-[#3a24db] rounded-[3px] mt-8 cursor-pointer`}
            required
            value="Update"
            type="submit"
          />
        </form>
      </div>
    </>
  );
};
ProfileContentComponents.propTypes = {
  active: PropTypes.number.isRequired,
};
export default ProfileContentComponents;
