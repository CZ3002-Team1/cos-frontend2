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

import { UserRoute } from "./PrivateRoute";
import CartPage from "./../Pages/MerchandiseShop/CartPage/index";

const MainNavigation = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<LandingPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
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
        <Route
          path="cart"
          element={
            <UserRoute>
              <CartPage />
            </UserRoute>
          }
        />
        <Route
          path="index-swap"
          element={
            <UserRoute>
              <IndexSwapPage />
            </UserRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default MainNavigation;
