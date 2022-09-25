import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./../Commons/Navbar/index";
import Footer from "./../Commons/Footer/index";

const App = () => (
  <Fragment>
    <Navbar />
    <Outlet />
    <Footer />
  </Fragment>
);

export default App;
