/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  product: null,
};

export const productSlice = createSlice({
  name: "getproducts",
  initialState,
  reducers: {
    storeProduct: (state, action) => {
      // Just modify state, don't return
      state.value = 1;
      state.product = action.payload;
    },
  },
});

export const { storeProduct } = productSlice.actions;
export default productSlice.reducer;
