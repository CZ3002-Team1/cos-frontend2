import _ from "lodash";
import React, { useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { handleUserLogout, getUserAction, refreshToken } from '../../Pages/General/UserReducer/Actions';
import "./style.scss";
import { Body1 } from "Styles/Typography";

//* Assets
import SCSEClubLogo from "./Assets/SCSE.png";
import UserCircle from "./Assets/UserCircle.svg";
import Log_Out from "./Assets/Log_Out.svg";
import NavbarSelection from "./components/NavbarSelection";

// import { ENUM_USER_TYPES } from "../../App/Constant";

export default function Navbar() {
  // const dispatch = useDispatch();
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
            navigate("/");
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

      {/* <div className="navbar__right">
        {(isRegistered || (isLoggedIn && pathname === "/login")) && (
          <>
            <Link to="/profile" className="navbar__right__profile">
              <UserCircle className="navbar__right__profile__icon" />
              TODO: change to seller name
              <Body1 className="navbar__right__profile__name">
                {userType === ENUM_USER_TYPES.buyer
                  ? _.first(_.words(name))
                  : _.first(_.split(personal_email, "@"))}
              </Body1>
            </Link>
            <Log_Out
              className="navbar__right__logout"
              onClick={() => {
                dispatch(handleUserLogout({ navigate }));
              }}
            />
          </>
        )}
      </div> */}
    </div>
  );
}
