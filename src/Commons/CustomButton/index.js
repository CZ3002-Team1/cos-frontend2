import { Button } from "antd";
import React from "react";
import "./style.scss";

const CustomButton = ({ children, ...rest }) => {
  return (
    <Button className="button" {...rest}>
      {children}
    </Button>
  );
};

export default CustomButton;
