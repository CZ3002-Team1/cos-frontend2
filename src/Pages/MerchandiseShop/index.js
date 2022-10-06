import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getShopItems } from "./ShopReducer";

import MerchandiseBox from "./MerchandiseBox";
import { Header1 } from "Styles/Typography";
import CustomButton from "Commons/CustomButton";

import "./style.scss";

const ShopPage = () => {
  const dispatch = useDispatch();
  const shopData = useSelector((state) => state.persistedReducer.ShopReducer);
  const [displayData, setDisplayData] = useState(shopData.itemList);
  const navigate = useNavigate();

  useEffect(() => {
    if (shopData.status === "empty") {
      dispatch(getShopItems());
    }
  }, []);

  useEffect(() => {
    setDisplayData(shopData.itemList);
  }, [shopData]);

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
