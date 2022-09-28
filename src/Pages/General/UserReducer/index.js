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
    } else {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userData", jwtDecode(res.data.token));
    }
    return res.data;
  }
);

const userSlice = createSlice({
  name: "userReducer",
  initialState: {
    token: "",
    userInfo: {},
  },
  reducers: {
    // async userLogin(state, action) {
    //   const res = await axios.post(
    //     `${apiEndPoint}api/auth/login`,
    //     action.payload.values
    //   );
    //   console.log({ res });
    //   if (res.data.success === false) {
    //     alert("login fail");
    //   } else {
    //     localStorage.setItem("token", res.data.token);
    //     localStorage.setItem("userData", jwtDecode(res.data.token));
    //   }
    //   state.token = res.data.token;
    //   state.userInfo = jwtDecode(res.data.token);
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getToken.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.userInfo = jwtDecode(action.payload.token);
    });
  },
});

export { getToken };
export default userSlice.reducer;
