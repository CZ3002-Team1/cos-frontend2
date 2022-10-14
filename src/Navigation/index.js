import React from "react";
import { Route, Routes } from "react-router-dom";

import App from "../App";
import EventsPage from "Pages/Events";
import LandingPage from "Pages/General/LandingPage";
import LoginPage from "Pages/General/LoginPage";
import RegisterPage from "Pages/General/RegisterPage";
import ShopPage from "Pages/MerchandiseShop";
import MerchandisePage from "Pages/MerchandiseShop/MerchandisePage";
import IndexSwapPage from "Pages/IndexSwap/index";
import CartPage from "Pages/MerchandiseShop/CartPage/index";
import PaymentSuccessfulPage from "Pages/MerchandiseShop/PaymentSuccessfulPage";
import PaymentFailPage from "Pages/MerchandiseShop/PaymentFailPage";
import UserRequestListPage from "Pages/IndexSwap/UserRequestListPage";
import MyOrdersPage from "Pages/MerchandiseShop/MyOrdersPage";

import { UserRoute } from "./PrivateRoute";

const MainNavigation = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        {/* public page */}
        <Route index element={<LandingPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />

        {/* private route */}
        <Route
          path="events"
          element={
            <UserRoute>
              <EventsPage />
            </UserRoute>
          }
        />
        <Route path="shop">
          <Route
            index
            element={
              <UserRoute>
                <ShopPage />
              </UserRoute>
            }
          />
          <Route
            path=":itemId"
            element={
              <UserRoute>
                <MerchandisePage />
              </UserRoute>
            }
          />
        </Route>
        <Route path="cart">
          <Route
            index
            element={
              <UserRoute>
                <CartPage />
              </UserRoute>
            }
          />
          <Route
            path="success"
            element={
              <UserRoute>
                <PaymentSuccessfulPage />
              </UserRoute>
            }
          />
          <Route
            path="fail"
            element={
              <UserRoute>
                <PaymentFailPage />
              </UserRoute>
            }
          />
        </Route>

        <Route
          path="my-orders"
          element={
            <UserRoute>
              <MyOrdersPage />
            </UserRoute>
          }
        />

        <Route path="index-swap">
          <Route
            index
            element={
              <UserRoute>
                <IndexSwapPage />
              </UserRoute>
            }
          />
          <Route
            path="my-request"
            element={
              <UserRoute>
                <UserRequestListPage />
              </UserRoute>
            }
          />
        </Route>
      </Route>
    </Routes>
  );
};

export default MainNavigation;
