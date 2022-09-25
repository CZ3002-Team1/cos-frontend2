import React from "react";
import { useNavigate } from "react-router-dom";

import "./style.scss";

import { Body1 } from "Styles/Typography";

const NavbarSelection = ({ children, target }) => {
  const navigate = useNavigate();
  return (
    <div className="navbar-selection" onClick={() => navigate(target)}>
      <Body1 className="navbar-selection__text">{children}</Body1>
    </div>
  );
};

export default NavbarSelection;
