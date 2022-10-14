import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getMyOrders } from "./MyOrderReducer";
import { Header1, Header2 } from "Styles/Typography";

import "./style.scss";
import Orders from "./Orders/index";

const MyOrdersPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const myOrdersData = useSelector(
    (state) => state.persistedReducer.MyOrderReducer
  );
  const { userInfo } = useSelector(
    (state) => state.persistedReducer.UserReducer
  );
  useEffect(() => {
    if (myOrdersData.status === "empty") {
      dispatch(getMyOrders(userInfo.Email));
    }
  }, []);
  return (
    <div className="my-orders-page">
      <Header1>Your Orders</Header1>
      {myOrdersData.status === "fulfilled" && myOrdersData.orders.length === 0 && (
        <div>
          <Header2>You have no orders yet</Header2>
        </div>
      )}
      {myOrdersData.orders.map((data) => (
        <Orders orderData={data} key={data._id} />
      ))}
    </div>
  );
};

export default MyOrdersPage;
