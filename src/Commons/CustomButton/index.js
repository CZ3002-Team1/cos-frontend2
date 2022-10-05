import { Button } from "antd";
import React from "react";
import "./style.scss";
import { Body2 } from "Styles/Typography";

const CustomButton = ({ children, ...rest }) => {
  return (
    <button className="button" {...rest}>
      <Body2>{children}</Body2>
    </button>
  );
};

export default CustomButton;
