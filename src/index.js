import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./style.scss";
import { BrowserRouter } from "react-router-dom";
import MainNavigation from "./Navigation";

// Opt-in to Webpack hot module replacement
if (module.hot) module.hot.accept();

ReactDOM.render(
  <BrowserRouter>
    <MainNavigation />
  </BrowserRouter>,
  document.getElementById("app")
);
