import { configureStore } from "@reduxjs/toolkit";

import UserReducer from "../../Pages/General/UserReducer";

export const store = configureStore({
  reducer: {
    UserReducer,
  },
  devTools: true,
});
