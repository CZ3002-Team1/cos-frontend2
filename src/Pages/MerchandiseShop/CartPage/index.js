import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Header1 } from "Styles/Typography";
import CartTable from "./CartTable/index";

import CustomButton from "Commons/CustomButton";

import "./style.scss";

import apiEndPoint from "../../../ApiEndPoint";
const CartPage = () => {
  const { Items } = useSelector((state) => state.persistedReducer.CartReducer);
  const { Email } = useSelector(
    (state) => state.persistedReducer.UserReducer.userInfo
  );
  const navigate = useNavigate();

  const handleCheckout = async () => {
    const submitData = {
      Items,
      Email,
    };
    const res = await axios.post(
      `${apiEndPoint}api/merch/createCheckoutSession`,
      submitData
    );
    const redirectPage = res.data.url;
    window.location.replace(redirectPage);
  };
  return (
    <div className="cart-page">
      <Header1>Cart</Header1>
      <CartTable data={Items} />
      <CustomButton
        onClick={handleCheckout}
        disabled={Items.length === 0 ? true : false}
      >
        Checkout
      </CustomButton>
    </div>
  );
};

export default CartPage;
