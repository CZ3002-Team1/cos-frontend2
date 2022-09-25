/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useEffect, useState } from "react";
import _ from "lodash";

//* Styles
import "./style.scss";

//* Components
import { Header1, Body1 } from "Styles/Typography";
import { CustomButton } from "../../../Commons/CustomButton";

//* Assets
import PINTU_landingpage from "./Assets/PINTU_landingpage.png";

export default function HomePage() {
  return (
    <div className="homepage">
      <div className="homepage__left">
        <div className="homepage__left__text">
          <Header1>Connect People</Header1>
          <Header1 className="brightred">
            <br />
            Seamlessly.
          </Header1>

          <br />
          <Body1>
            Step now into an all-in-one platform, providing the best services
            exclusively for Indonesian students at NTU.
          </Body1>
        </div>
        {/* {isLoggedIn && !isRegistered ? (
          <CustomButton
            className="homepage__left__button"
            name="Register"
            onClick={() => {
              navigate("/register");
            }}
          />
        ) : (
          <GoogleLogin
            // TODO: hide this
            clientId={
              "379167155581-cs7f2c9156ts4uo9e8osrtuka3cjk9qi.apps.googleusercontent.com"
            }
            buttonText=""
            render={(props) => {
              return (
                <CustomButton
                  className="homepage__left__button"
                  name="Sign in"
                  loading={loading}
                  {...props}
                />
              );
            }}
            cookiePolicy={"single_host_origin"}
            onSuccess={responseGoogle}
            onFailure={onLoginFail}
          />
        )} */}
      </div>
      <div className="homepage__right">
        <img
          className="homepage__right__img"
          src={PINTU_landingpage}
          alt="PINTU"
        />
      </div>
    </div>
  );
}
