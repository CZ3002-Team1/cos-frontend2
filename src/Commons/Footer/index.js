import _ from 'lodash';
import React from 'react';
import { Button } from 'antd';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Body1 } from 'Styles/Typography';
import { CustomButton } from '../CustomButton';

import './style.scss';

import { socialMedia, websitePINTU, emailPINTU } from './constants';

export default function Footer() {
  const { pathname } = useLocation();

  return (
    <div className="footer">
      {pathname !== '/login' && <div className="footer__whiteMargin" />}
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__top__left">
            <a href={websitePINTU}>
              <Body1 className="footer__top__left__website">
                PINTU Website
              </Body1>
            </a>
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
          <div className="footer__top__right">
            <Body1 className="footer__top__right__feedback">
              Send us your feedback!
            </Body1>
            <CustomButton
              className="footer__top__right__mailbutton "
              white
              name="Contact us"
              href={emailPINTU}
            ></CustomButton>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="footer__bottom__copyright">©PINTU 2022</p>
          <Link to="/policy">
            <p className="footer__bottom__rules"> Rules and Policies</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
