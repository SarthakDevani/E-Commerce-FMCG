/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  cityStateData: null,
};

export const cityState = createSlice({
  name: "cityState",
  initialState,
  reducers: {
    storecityState: (state, action) => {
      // Just modify state, don't return
      state.value = 1;
      state.cityStateData = action.payload;
    },
  },
});

export const { storecityState } = cityState.actions;
export default cityState.reducer;
