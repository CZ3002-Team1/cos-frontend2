import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import apiEndPoint from "../../../ApiEndPoint";

const getShopItems = createAsyncThunk("shopReducer/getShopItems", async () => {
  const res = await axios.get(`${apiEndPoint}api/merch`);
  if (res.data.success === false) alert(res.data.message);
  else return res.data.data;
});

const shopSlice = createSlice({
  name: "shopReducer",
  initialState: {
    itemList: [],
    status: "empty",
  },
  extraReducers: (builder) => {
    builder.addCase(getShopItems.fulfilled, (state, action) => {
      state.itemList = action.payload;
      state.status = "fulfilled";
    });
  },
});

export { getShopItems };
export default shopSlice.reducer;
