import _ from "lodash";
import React from "react";
import { Button } from "antd";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Body1 } from "Styles/Typography";
import { CustomButton } from "../CustomButton";

import "./style.scss";

import { socialMedia, websitePINTU, emailPINTU } from "./constants";

export default function Footer() {
  const { pathname } = useLocation();

  return (
    <div className="footer">
      {pathname !== "/login" && <div className="footer__whiteMargin" />}
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__top__left">
            <Body1 className="footer__top__left__website">
              Connect with us
            </Body1>

            <div className="footer__top__left__socialmedia">
              {_.map(socialMedia, ({ link, logo }, index) => (
                <a
                  className="footer__top__left__socialmedia__logo"
                  href={link}
                  key={`socialmed-${index}`}
                  target="_blank"
                >
                  <img src={logo} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="footer__bottom__copyright">SCSE Club 2022</p>
        </div>
      </div>
    </div>
  );
}
