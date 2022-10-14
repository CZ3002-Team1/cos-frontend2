import { Table } from "antd";
import React from "react";

import { removeItemFromCart } from "../../CartReducer";

import { DeleteOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { Body2 } from "Styles/Typography";

import "./style.scss";

const CartTable = ({ data }) => {
  const dispatch = useDispatch();

  const handleDelete = (record) => {
    dispatch(removeItemFromCart({ orderId: record.orderId }));
  };

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
      title: "Size",
      dataIndex: "Size",
      key: "Size",
      render: (_, { Size }) => <Body2>{Size}</Body2>,
    },
    {
      title: "Color",
      dataIndex: "Color",
      key: "Color",
      render: (_, { Color }) => <Body2>{Color}</Body2>,
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
      title: "Total",
      render: (row) => {
        return <Body2>${(row.Price * row.Quantity).toFixed(2)}</Body2>;
      },
    },
    {
      title: "",
      key: "delete",
      render: (record) => (
        <DeleteOutlined
          className="cart-table__delete-icon"
          alt="trash"
          onClick={() => handleDelete(record)}
        />
      ),
    },
  ];

  return <Table dataSource={data} columns={columns} footer={setFooter} />;
};

export default CartTable;
