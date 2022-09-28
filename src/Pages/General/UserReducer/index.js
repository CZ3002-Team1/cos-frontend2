import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import axios from "axios";
import apiEndPoint from "../../../ApiEndPoint";

const getToken = createAsyncThunk(
  "userReducer/getToken",
  async (values, thunkAPI) => {
    const res = await axios.post(`${apiEndPoint}api/auth/login`, values);
    console.log({ res });
    if (res.data.success === false) {
      alert("login fail");
    }

    return res.data;
  }
);

const userSlice = createSlice({
  name: "userReducer",
  initialState: {
    token: "",
    userInfo: {},
    isLoggedIn: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getToken.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.userInfo = jwtDecode(action.payload.token);
      state.isLoggedIn = true;
    });
  },
});

export { getToken };
export default userSlice.reducer;
