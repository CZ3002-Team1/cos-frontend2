import { Table } from "antd";
import React from "react";
import { Body1, Body2 } from "Styles/Typography";

const Orders = ({ orderData }) => {
  const items = orderData.Items;

  const setFooter = (data) => {
    const sum = data.reduce(
      (total, item) => total + item.Price * item.Quantity,
      0
    );
    return <Body2 className="bottom">Total Price: ${sum.toFixed(2)}</Body2>;
  };

  const columns = [
    {
      title: "Item Name",
      dataIndex: "Name",
      key: "Name",
      render: (_, { Name }) => <Body2>{Name}</Body2>,
    },
    {
      title: "Quantity",
      dataIndex: "Quantity",
      key: "Quantity",
      render: (_, { Quantity }) => <Body2>{Quantity}</Body2>,
    },
    {
      title: "Price",
      dataIndex: "Price",
      key: "Price",
      render: (_, { Price }) => <Body2>${Price}</Body2>,
    },
    {
      title: "Total Price",
      key: "TotalPrice",
      render: (_, { Price, Quantity }) => (
        <Body2>${(Price * Quantity).toFixed(2)}</Body2>
      ),
    },
  ];

  return (
    <div>
      <Body1>Order ID: {orderData._id}</Body1>
      <br />
      <Body1>Status: {orderData.Status}</Body1>
      <Table columns={columns} dataSource={items} footer={setFooter} />
    </div>
  );
};

export default Orders;
