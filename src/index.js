import React from "react";
import ReactDOM from "react-dom";
import "./style.scss";
import { BrowserRouter } from "react-router-dom";
import MainNavigation from "./Navigation";
import { Provider } from "react-redux";
import { persistor, store } from "./App/Redux/store";
import { PersistGate } from "redux-persist/integration/react";

// Opt-in to Webpack hot module replacement
if (module.hot) module.hot.accept();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <MainNavigation />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("app")
);
