import { combineReducers } from "redux";

import UserReducer from "../../../Pages/General/UserReducer";
import CartReducer from "../../../Pages/MerchandiseShop/CartReducer";

const appReducers = combineReducers({ UserReducer, CartReducer });

const rootReducer = (state, action) => {
  if (action.type === "USER_LOGOUT") {
    localStorage.removeItem("persist:root");
    localStorage.removeItem("token");
    return appReducers(undefined, action);
  }

  return appReducers(state, action);
};

export default rootReducer;
