import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import apiEndPoint from "../../../ApiEndPoint";

let lastId = 0;
const cartSlice = createSlice({
  name: "cartReducer",
  initialState: { items: [] },
  reducers: {
    addItemToCart: (state, action) => {
      console.log({ action });
      state.items.push({
        ...action.payload,
        orderId: ++lastId,
      });
    },
    removeItemFromCart: (state, action) => {
      console.log({ removed: action.payload.orderId });
      state.items = state.items.filter(
        (o) => o.orderId !== action.payload.orderId
      );
    },
  },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
