import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.scss';

import pintuVotingLogo from './Assets/PintuVoting.png';
import { Header2 } from 'Styles/Typography';
import { Badge } from 'antd';

const PintuVotingBox = () => {
  const navigate = useNavigate();
  return (
    <div className="box-container">
      <Badge.Ribbon text={'New!'} color={'red'}>
        <div className="pintu-voting">
          <img className="pintu-voting__logo" src={pintuVotingLogo}></img>
          <div className="pintu-voting__bottom">
            <Header2 className="pintu-voting__bottom__text">
              PINTU
              <br />
              Voting
            </Header2>
            <div
              className="pintu-voting__bottom__button"
              onClick={() => navigate('/vote')}
            >
              <div className="pintu-voting__bottom__button__triangle" />
            </div>
          </div>
        </div>
      </Badge.Ribbon>
    </div>
  );
};

export default PintuVotingBox;
