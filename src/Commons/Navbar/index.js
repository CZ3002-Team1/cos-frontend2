import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import _ from "lodash";
import { LogoutOutlined } from "@ant-design/icons";
import "./style.scss";

//* Assets
import SCSEClubLogo from "./Assets/SCSE.png";
import NavbarSelection from "./components/NavbarSelection";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector(
    (state) => state.persistedReducer.UserReducer
  );

  return (
    <div className="navbar">
      <div className="navbar__left">
        <div
          className="navbar__left__logo"
          onClick={() => {
            navigate("/events");
          }}
        >
          <img src={SCSEClubLogo} className="navbar__left__logo__icon" />
        </div>
        {isLoggedIn && (
          <div className="navbar__left__selections">
            <NavbarSelection target="/events">Events</NavbarSelection>
            <NavbarSelection target="/shop">Shop</NavbarSelection>
            <NavbarSelection target="/index-swap">Index Swap</NavbarSelection>
          </div>
        )}
      </div>

      <div className="navbar__right">
        {isLoggedIn && (
          <div className="navbar__right__logout" title="logout">
            <LogoutOutlined
              className="navbar__right__logout__icon"
              onClick={() => {
                dispatch({ type: "USER_LOGOUT", payload: {} });
                navigate("/");
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
