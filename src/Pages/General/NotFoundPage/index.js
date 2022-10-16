import React from "react";
import { useNavigate } from "react-router-dom";
import { Header2 } from "Styles/Typography/index";
import CustomButton from "Commons/CustomButton/index";
import brokenRobot from "./Assets/brokenRobot.jpg";

import "./style.scss";
const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="notfound-page">
      <img src={brokenRobot} className="notfound-page__left" />
      <div className="notfound-page__right">
        <Header2>This Page Does Not Exist</Header2>
        <br />

        <CustomButton onClick={() => navigate("/")}>Back to home</CustomButton>
      </div>
    </div>
  );
};

export default NotFoundPage;
