import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;
const cartSlice = createSlice({
  name: "cartReducer",
  initialState: { Items: [] },
  reducers: {
    addItemToCart: (state, action) => {
      state.Items.push({
        ...action.payload,
        orderId: ++lastId,
      });
    },
    removeItemFromCart: (state, action) => {
      state.Items = state.Items.filter(
        (o) => o.orderId !== action.payload.orderId
      );
    },
  },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
