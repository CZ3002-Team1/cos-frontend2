import React from "react";
import { useNavigate } from "react-router-dom";

import "./style.scss";

import { Body1 } from "Styles/Typography";

const NavbarSelection = ({ children, target, currentLocation }) => {
  const navigate = useNavigate();
  const selected = currentLocation.startsWith(target);
  return (
    <div
      className={`navbar-selection ${selected ? "selected" : ""}`}
      onClick={() => navigate(target)}
    >
      <Body1 className={`navbar-selection__text ${selected ? "selected" : ""}`}>
        {children}
      </Body1>
    </div>
  );
};

export default NavbarSelection;
