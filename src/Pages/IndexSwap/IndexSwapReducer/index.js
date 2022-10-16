import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import apiEndPoint from "../../../ApiEndPoint";

const getSwapRequests = createAsyncThunk(
  "indexSwapReducer/getSwapRequest",
  async () => {
    const res = await axios.get(`${apiEndPoint}api/indexSwap`);
    if (res.data.success === false) {
      return [];
    } else return res.data.data;
  }
);

const addSwapRequests = createAsyncThunk(
  "indexSwapReducer/addSwapRequests",
  async (values) => {
    const res = await axios.post(`${apiEndPoint}api/indexSwap`, values);
    if (res.data.success === false) {
      alert(res.data.message);
    } else return res.data.data;
  }
);

const editSwapRequests = createAsyncThunk(
  "indexSwapReducer/editSwapRequests",
  async (data) => {
    const res = await axios.put(
      `${apiEndPoint}api/indexSwap/${data._id}`,
      data.values
    );
    if (res.data.success === false) {
      alert(res.data.message);
    } else return res.data.data;
  }
);

const deleteSwapRequests = createAsyncThunk(
  "indexSwapReducer/deleteSwapRequests",
  async (index) => {
    const res = await axios.delete(`${apiEndPoint}api/indexSwap/${index}`);
    if (res.data.success === false) alert(res.data.message);
    else return { ...res.data, index };
  }
);

const indexSwapSlice = createSlice({
  name: "indexSwapReducer",
  initialState: {
    swapRequests: [],
    status: "empty",
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSwapRequests.fulfilled, (state, action) => {
        state.swapRequests = action.payload;
        state.status = "fulfilled";
      })
      .addCase(addSwapRequests.fulfilled, (state, action) => {
        state.swapRequests.push(action.payload);
      })
      .addCase(editSwapRequests.fulfilled, (state, action) => {
        const index = state.swapRequests.findIndex(
          (request) => (request._id = action.payload._id)
        );
        state.swapRequests[index] = action.payload;
      })
      .addCase(deleteSwapRequests.fulfilled, (state, action) => {
        return {
          ...state,
          swapRequests: state.swapRequests.filter(
            (request) => request._id !== action.payload.index
          ),
        };
      });
  },
});

export {
  getSwapRequests,
  deleteSwapRequests,
  addSwapRequests,
  editSwapRequests,
};
export default indexSwapSlice.reducer;
