import { configureStore } from "@reduxjs/toolkit";

import UserReducer from "../../Pages/General/UserReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const combinedReducers = combineReducers({ UserReducer });

const persistedReducer = persistReducer(persistConfig, combinedReducers);

export const store = configureStore({
  reducer: {
    persistedReducer,
  },
  devTools: true,
  middleware: [thunk],
});

export const persistor = persistStore(store);
