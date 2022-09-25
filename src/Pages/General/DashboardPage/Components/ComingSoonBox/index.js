import React from 'react';

//* Styles
import './style.scss';
import { Header2 } from 'Styles/Typography';

//* Assets
import underConstructionImg from './Assets/UnderConst.png';

const ComingSoonBox = () => (
  <div className="coming-soon">
    <img
      className="coming-soon__photo"
      src={underConstructionImg}
      alt="Under Construction"
    />
    <Header2 className="coming-soon__bottom"> Coming Soon</Header2>
  </div>
);

export default ComingSoonBox;
