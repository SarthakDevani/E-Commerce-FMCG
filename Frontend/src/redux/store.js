import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/login/loginSlice.js";
import productReducer from "../features/Home/productSlice.js";

export const store = configureStore({
  reducer: {
    login: counterReducer,
    getproducts: productReducer,
  },
});
