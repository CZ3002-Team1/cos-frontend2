import React from "react";
import { useNavigate } from "react-router-dom";

import { Body2, Header2 } from "Styles/Typography/index";

import "./style.scss";

const MerchandiseBox = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="merch-box" onClick={() => navigate(`/shop/${data._id}`)}>
      <div className="merch-box__top">
        <img className="merch-box__top__img" src={data.PhotoUrl} />
      </div>
      <div className="merch-box__bottom">
        <Header2>{data.Name}</Header2>
        <Body2>Price: {data.Price}</Body2>
      </div>
    </div>
  );
};

export default MerchandiseBox;
