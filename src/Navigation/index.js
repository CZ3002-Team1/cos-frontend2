import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import App from "../App";
import EventsPage from "../Pages/Events";
import EventsBox from "../Pages/Events/EventsBox";
import LandingPage from "../Pages/General/LandingPage";
import LoginPage from "../Pages/General/LoginPage";
import RegisterPage from "../Pages/General/RegisterPage";
import ShopPage from "../Pages/MerchandiseShop";
import BuyerDashboardPage from "./../Pages/General/DashboardPage/index";
import IndexSwapPage from "./../Pages/IndexSwap/index";

import { UserRoute } from "./PrivateRoute";

const MainNavigation = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector(
    (state) => state.persistedReducer.UserReducer
  );

  useEffect(() => {
    if (isLoggedIn) navigate("/events");
  }, [isLoggedIn]);

  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<LandingPage />} />
        <Route path="dashboard" element={<BuyerDashboardPage />} />
        <Route
          path="events"
          element={
            <UserRoute>
              <EventsPage />
            </UserRoute>
          }
        />
        <Route
          path="shop"
          element={
            <UserRoute>
              <ShopPage />
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
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
};

export default MainNavigation;
