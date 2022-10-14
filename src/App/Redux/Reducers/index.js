import { combineReducers } from "redux";

import UserReducer from "../../../Pages/General/UserReducer";
import IndexSwapReducer from "../../../Pages/IndexSwap/IndexSwapReducer";
import CartReducer from "../../../Pages/MerchandiseShop/CartReducer";
import EventReducer from "../../../Pages/Events/EventReducer";
import ShopReducer from "../../../Pages/MerchandiseShop/ShopReducer";
import MyOrderReducer from "../../../Pages/MerchandiseShop/MyOrdersPage/MyOrderReducer";

const appReducers = combineReducers({
  UserReducer,
  CartReducer,
  IndexSwapReducer,
  EventReducer,
  ShopReducer,
  MyOrderReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "USER_LOGOUT") {
    localStorage.removeItem("persist:root");
    localStorage.removeItem("token");
    return appReducers(undefined, action);
  }

  return appReducers(state, action);
};

export default rootReducer;
