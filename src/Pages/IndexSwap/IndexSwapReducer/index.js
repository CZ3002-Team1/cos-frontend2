import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import apiEndPoint from "../../../ApiEndPoint";

const getSwapRequests = createAsyncThunk(
  "indexSwapReducer/getSwapRequest",
  async () => {
    const res = await axios.get(`${apiEndPoint}api/indexSwap`);
    if (res.data.success === false) {
      alert(res.data.message);
    } else return res.data.data;
  }
);

const indexSwapSlice = createSlice({
  name: "indexSwapReducer",
  initialState: {
    swapRequests: [],
    status: "empty",
  },
  extraReducers: (builder) => {
    builder.addCase(getSwapRequests.fulfilled, (state, action) => {
      state.swapRequests = action.payload;
      state.status = "fulfilled";
    });
  },
});

export { getSwapRequests };
export default indexSwapSlice.reducer;
