/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";

import { useNavigate } from "react-router-dom";
import styles from "../../styles/styles";

const DropDownComponents = ({ categoriesData, setDropDown }) => {
  const navigate = useNavigate();
  const submitHandle = (i) => {
    navigate(`/products?category=${i.title}`);
    setDropDown(false);
    window.location.reload();
  };
  return (
    <div className="pb-4 w-[270px] bg-[#fff] absolute z-30 rounded-b-md shadow-sm">
      {categoriesData &&
        categoriesData.map((i, index) => (
          <div
            key={index}
            className={`${styles.noramlFlex}`}
            onClick={() => submitHandle(i)}
          >
            <img
              src={i.image_Url}
              style={{
                width: "25px",
                height: "25px",
                objectFit: "contain",
                marginLeft: "10px",
                userSelect: "none",
              }}
              alt=""
            />
            <h3 className="m-3 cursor-pointer select-none">{i.title}</h3>
          </div>
        ))}
    </div>
  );
};
DropDownComponents.propTypes = {
  categoriesData: PropTypes.array.isRequired,
  setDropDown: PropTypes.func.isRequired,
};

export default DropDownComponents;
