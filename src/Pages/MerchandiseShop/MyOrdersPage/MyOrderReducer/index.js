import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiEndPoint from "../../../../ApiEndPoint";

const getMyOrders = createAsyncThunk(
  "myOrderReducer/getShopItems",
  async (email) => {
    console.log({ email });
    const res = await axios.get(`${apiEndPoint}api/order/${email}`);
    console.log({ res });
    if (res.data.success === false) return [];
    else {
      console.log(res.data.data);
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
