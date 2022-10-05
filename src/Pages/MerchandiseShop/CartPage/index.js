import React from "react";
import { useSelector } from "react-redux";

import { Header1 } from "Styles/Typography";
import { Table } from "antd";
import CartTable from "./CartTable/index";

import "./style.scss";

const CartPage = () => {
  const { items: cartData } = useSelector(
    (state) => state.persistedReducer.CartReducer
  );
  console.log({ cartData });
  return (
    <div className="cart-page">
      <Header1>Cart</Header1>
      <CartTable data={cartData} />
    </div>
  );
};

export default CartPage;
