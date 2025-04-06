/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  user: null,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    islogin: (state) => {
      // Just modify state, don't return
      state.value = 1;
    },
    checkLogin: (state, action) => {
      // Check if user is logged in
      state.user = action.payload;
    },
    logout: (state) => {
      // Reset state to initial values
      state.value = 0;
      state.user = null;
    },
  },
});

export const { islogin, checkLogin, logout } = loginSlice.actions;
export default loginSlice.reducer;
