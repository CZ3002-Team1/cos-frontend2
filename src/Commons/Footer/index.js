import React from "react";
import _ from "lodash";

import { Body1 } from "Styles/Typography";

import "./style.scss";

import { socialMedia } from "./constants";

export default function Footer() {
  return (
    <div className="footer">
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
