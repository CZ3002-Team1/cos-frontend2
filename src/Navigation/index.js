import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/General/HomePage";

const MainNavigation = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/login" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default MainNavigation;
