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

const editEvent = createAsyncThunk("eventReducer/editEvent", async (data) => {
  const res = await axios.put(
    `${apiEndPoint}api/event/${data._id}`,
    data.values
  );
  if (res.data.success === false) {
    alert(res.data.message);
  } else return res.data.data;
});

const deleteEvent = createAsyncThunk(
  "eventReducer/deleteEvent",
  async (_id) => {
    const res = await axios.delete(`${apiEndPoint}api/event/${_id}`);
    if (res.data.success === false) alert(res.data.message);
    else return { ...res.data, _id };
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
      })
      .addCase(editEvent.fulfilled, (state, action) => {
        const index = state.eventList.findIndex(
          (event) => event._id === action.payload._id
        );
        state.eventList[index] = action.payload;
      })
      .addCase(deleteEvent.fulfilled, (state, action) => {
        state.eventList = state.eventList.filter(
          (event) => event._id !== action.payload._id
        );
      });
  },
});

export { getEvents, createNewEvent, editEvent, deleteEvent };
export default eventSlice.reducer;
