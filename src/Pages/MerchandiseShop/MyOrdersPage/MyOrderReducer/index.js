import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiEndPoint from "../../../../ApiEndPoint";

const getMyOrders = createAsyncThunk(
  "myOrderReducer/getShopItems",
  async (email) => {
    const res = await axios.get(`${apiEndPoint}api/order/${email}`);
    if (res.data.success === false) return [];
    else {
      return res.data.data;
    }
  }
);

const myOrderSlice = createSlice({
  name: "myOrderReducer",
  initialState: { orders: [], status: "empty" },
  extraReducers: (builder) => {
    builder.addCase(getMyOrders.fulfilled, (state, action) => {
      state.orders = action.payload;
      state.status = "fulfilled";
    });
  },
});

export { getMyOrders };
export default myOrderSlice.reducer;
