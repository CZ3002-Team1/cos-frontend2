import React, { useState, useEffect } from "react";
import axios from "axios";

import MerchandiseBox from "./MerchandiseBox";
import { Header1 } from "Styles/Typography";

import apiEndPoint from "../../ApiEndPoint";

import "./style.scss";
import CustomButton from "Commons/CustomButton";
import { useNavigate } from "react-router-dom";

const ShopPage = () => {
  const [displayData, setDisplayData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(`${apiEndPoint}api/merch`)
        .then((res) => {
          setDisplayData(res.data.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    };
    getData();
  }, []);
  return (
    <div className="shop-page">
      <div className="shop-page__title">
        <Header1>Merchandise Shop</Header1>
        <div className="shop-page__title__buttons">
          <CustomButton onClick={() => navigate("/Cart")}>My Cart</CustomButton>
          <CustomButton>My Orders</CustomButton>
        </div>
      </div>
      <div className="shop-page__merch-wrapper">
        {displayData ? (
          displayData.map((d) => <MerchandiseBox data={d} key={d._id} />)
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};

export default ShopPage;
