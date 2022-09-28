import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./style.scss";
import { BrowserRouter } from "react-router-dom";
import MainNavigation from "./Navigation";
import { Provider } from "react-redux";
import { store } from "./App/Redux/store";

// Opt-in to Webpack hot module replacement
if (module.hot) module.hot.accept();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <MainNavigation />
    </BrowserRouter>
  </Provider>,
  document.getElementById("app")
);
