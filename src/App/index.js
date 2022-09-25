import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./../Commons/Navbar/index";
import Footer from "./../Commons/Footer/index";
import "./style.scss";

const App = () => (
  <div>
    <Navbar />
    <div className="app-wrapper">
      <Outlet />
    </div>
    <Footer />
  </div>
);

export default App;
