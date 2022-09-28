import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import _ from "lodash";

import { logOut } from "Pages/General/UserReducer";

import "./style.scss";

//* Assets
import SCSEClubLogo from "./Assets/SCSE.png";
import Log_Out from "./Assets/Log_Out.svg";
import NavbarSelection from "./components/NavbarSelection";

// import { ENUM_USER_TYPES } from "../../App/Constant";

export default function Navbar() {
  const dispatch = useDispatch();
  // const { pathname } = useLocation();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector(
    (state) => state.persistedReducer.UserReducer
  );
  // const { name, personal_email } = useSelector(
  //   (state) => state.userReducer.userData
  // );

  // useEffect(() => {
  //   if (!name) {
  //     if (userType === ENUM_USER_TYPES.buyer) {
  //       dispatch(getUserAction());
  //     }
  //   }
  // }, [isRegistered]);

  return (
    <div className="navbar">
      <div className="navbar__left">
        <div
          className="navbar__left__logo"
          onClick={() => {
            navigate("/Events");
          }}
        >
          <img src={SCSEClubLogo} className="navbar__left__logo__icon" />
        </div>
        {isLoggedIn && (
          <div className="navbar__left__selections">
            <NavbarSelection target="/events">Events</NavbarSelection>
            <NavbarSelection target="/shop">Shop</NavbarSelection>
            <NavbarSelection target="index-swap">Index Swap</NavbarSelection>
          </div>
        )}
      </div>

      <div className="navbar__right">
        {isLoggedIn && (
          <Log_Out
            className="navbar__right__logout"
            onClick={() => {
              dispatch(logOut());
              navigate("/");
            }}
          />
        )}
      </div>
    </div>
  );
}
