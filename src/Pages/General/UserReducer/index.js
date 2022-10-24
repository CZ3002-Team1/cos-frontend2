import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import axios from "axios";
import apiEndPoint from "../../../ApiEndPoint";

const getToken = createAsyncThunk("userReducer/getToken", async (values) => {
  const res = await axios.post(`${apiEndPoint}api/auth/login`, values);
  if (res.data.success === false) {
    alert(res.data.message);
  }

  return res.data;
});

const registerUser = createAsyncThunk(
  "userReducer/register",
  async (values) => {
    const res = await axios.post(`${apiEndPoint}api/auth/register`, values);
    if (res.data.success === false) {
      alert("register fail");
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
  reducers: {
    logOut: (state) => {
      state.token = "";
      state.userInfo = {};
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getToken.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.userInfo = jwtDecode(action.payload.token);
        state.isLoggedIn = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.userInfo = jwtDecode(action.payload.token);
        state.isLoggedIn = true;
      });
  },
});

export { getToken, registerUser };
export const { logOut } = userSlice.actions;
export default userSlice.reducer;
