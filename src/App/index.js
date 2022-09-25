import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./../Commons/Navbar/index";

const App = () => (
  <Fragment>
    <Navbar />
    <Outlet />
  </Fragment>
);

export default App;
