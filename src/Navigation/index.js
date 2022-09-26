import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import EventsPage from "../Pages/Events";
import EventsBox from "../Pages/Events/EventsBox";
import LandingPage from "../Pages/General/LandingPage";
import LoginPage from "../Pages/General/LoginPage";
import RegisterPage from "../Pages/General/RegisterPage";
import ShopPage from "../Pages/MerchandiseShop";
import BuyerDashboardPage from "./../Pages/General/DashboardPage/index";
import IndexSwapPage from "./../Pages/IndexSwap/index";

const MainNavigation = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<LandingPage />} />
        <Route path="dashboard" element={<BuyerDashboardPage />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="index-swap" element={<IndexSwapPage />} />
        <Route path="events-box" element={<EventsBox />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
};

export default MainNavigation;
