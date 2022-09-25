import React from 'react';
import { useNavigate } from 'react-router-dom';

//* Styles
import './style.scss';
import { Header2 } from 'Styles/Typography';

//* Assets
import shopOpenImg from './Assets/ShopOpen.png';

const PintuShopBox = () => {
  const navigate = useNavigate();
  return (
    <div className="pintu-shops">
      <img
        className="pintu-shops__photo"
        src={shopOpenImg}
        alt="Shop Open"
      ></img>
      <div className="pintu-shops__bottom">
        <Header2 className="pintu-shops__bottom__text">
          PINTU
          <br />
          Shops
        </Header2>
        <div
          className="pintu-shops__bottom__button"
          onClick={() => {
            navigate('/shops');
          }}
        >
          <div className="pintu-shops__bottom__button__triangle"></div>
        </div>
      </div>
    </div>
  );
};

export default PintuShopBox;
