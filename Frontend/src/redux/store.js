import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/login/loginSlice.js";

export const store = configureStore({
  reducer: {
    login: counterReducer,
  },
});
