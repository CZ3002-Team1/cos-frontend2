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

// import { ENUM_USER_TYPES } from "../../App/Constant";

export default function Navbar() {
  // const dispatch = useDispatch();
  // const { pathname } = useLocation();
  // const navigate = useNavigate();
  // const { isLoggedIn, isRegistered, userType } = useSelector(
  //   (state) => state.userReducer
  // );
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
      <div
        className="navbar__logo"
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={SCSEClubLogo} className="navbar__logo__icon" />
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
