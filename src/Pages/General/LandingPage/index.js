import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import _ from "lodash";

//* Styles
import "./style.scss";

//* Components
import { Header1, Body1 } from "Styles/Typography";
import CustomButton from "Commons/CustomButton";

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="homepage">
      <div className="homepage__left">
        <div className="homepage__left__text">
          <Header1>Welcome to COS</Header1>

          <Body1>A one-stop solution for SCSE member</Body1>
        </div>
        <div className="homepage__left__button">
          <CustomButton onClick={() => navigate("/login")}>Log In</CustomButton>
          <CustomButton onClick={() => navigate("/register")}>
            Register
          </CustomButton>
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
    </div>
  );
}
