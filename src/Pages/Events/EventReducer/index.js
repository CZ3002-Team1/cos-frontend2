import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import apiEndPoint from "../../../ApiEndPoint";

const getEvents = createAsyncThunk("eventReducer/getEvents", async () => {
  const res = await axios.get(`${apiEndPoint}api/event`);
  if (res.data.success === false) {
    alert(res.data.message);
  } else return res.data.data;
});

const createNewEvent = createAsyncThunk(
  "eventReducer/createNewEvent",
  async (values) => {
    const res = await axios.post(`${apiEndPoint}api/event`, values);
    if (res.data.success === false) {
      alert(res.data.message);
    } else return res.data.data;
  }
);

const eventSlice = createSlice({
  name: "eventReducer",
  initialState: { eventList: [], status: "empty" },
  extraReducers: (builder) => {
    builder
      .addCase(getEvents.fulfilled, (state, action) => {
        state.eventList = action.payload;
        state.status = "fulfilled";
      })
      .addCase(createNewEvent.fulfilled, (state, action) => {
        state.eventList.push(action.payload);
      });
  },
});

export { getEvents, createNewEvent };
export default eventSlice.reducer;
