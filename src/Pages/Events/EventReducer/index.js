import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import apiEndPoint from "../../../ApiEndPoint";

const getEvents = createAsyncThunk("eventReducer/getEvents", async () => {
  const res = await axios.get(`${apiEndPoint}api/event`);
  if (res.data.success === false) {
    alert(res.data.message);
  } else return res.data.data;
});

const eventSlice = createSlice({
  name: "eventReducer",
  initialState: { eventList: [], status: "empty" },
  extraReducers: (builder) => {
    builder.addCase(getEvents.fulfilled, (state, action) => {
      state.eventList = action.payload;
      state.status = "fulfilled";
    });
  },
});

export { getEvents };
export default eventSlice.reducer;
