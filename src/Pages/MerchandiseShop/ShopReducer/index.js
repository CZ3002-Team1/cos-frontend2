import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import apiEndPoint from "../../../ApiEndPoint";

const getShopItems = createAsyncThunk("shopReducer/getShopItems", async () => {
  const res = await axios.get(`${apiEndPoint}api/merch`);
  if (res.data.success === false) alert(res.data.message);
  else return res.data.data;
});

const createNewMerchandise = createAsyncThunk(
  "shopReducer/createNewMerchandise",
  async (values) => {
    const res = await axios.post(`${apiEndPoint}api/merch`, values);
    if (res.data.success === false) {
      alert(res.data.message);
    } else return res.data.data;
  }
);

const editMerchandise = createAsyncThunk(
  "shopReducer/editMerchandise",
  async (data) => {
    console.log("subdata", { data });
    const res = await axios.put(
      `${apiEndPoint}api/merch/${data._id}`,
      data.values
    );
    if (res.data.success === false) {
      alert(res.data.message);
    } else return res.data.data;
  }
);

const deleteMerchandise = createAsyncThunk(
  "shopReducer/deleteMerchandise",
  async (_id) => {
    const res = await axios.delete(`${apiEndPoint}api/merch/${_id}`);
    if (res.data.success === false) alert(res.data.message);
    else return { ...res.data, _id };
  }
);

const shopSlice = createSlice({
  name: "shopReducer",
  initialState: {
    itemList: [],
    status: "empty",
  },
  extraReducers: (builder) => {
    builder
      .addCase(getShopItems.fulfilled, (state, action) => {
        state.itemList = action.payload;
        state.status = "fulfilled";
      })
      .addCase(createNewMerchandise.fulfilled, (state, action) => {
        state.itemList.push(action.payload);
      })
      .addCase(editMerchandise.fulfilled, (state, action) => {
        const index = state.itemList.findIndex(
          (item) => item._id == action.payload._id
        );
        state.itemList[index] = action.payload;
      })
      .addCase(deleteMerchandise.fulfilled, (state, action) => {
        state.itemList = state.itemList.filter(
          (item) => item._id !== action.payload._id
        );
      });
  },
});

export {
  getShopItems,
  createNewMerchandise,
  editMerchandise,
  deleteMerchandise,
};
export default shopSlice.reducer;
