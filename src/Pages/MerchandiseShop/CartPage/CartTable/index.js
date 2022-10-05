import { Table } from "antd";
import React from "react";

import { removeItemFromCart } from "../../CartReducer";

import { DeleteOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { Body1 } from "Styles/Typography";

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
    return <Body1 className="bottom">Total Price: ${sum.toFixed(2)}</Body1>;
  };

  const columns = [
    {
      title: "Item Name",
      dataIndex: "Name",
      key: "Name",
      render: (_, { Name }) => <Body1>{Name}</Body1>,
    },
    {
      title: "Size",
      dataIndex: "Size",
      key: "Size",
      render: (_, { Size }) => <Body1>{Size}</Body1>,
    },
    {
      title: "Color",
      dataIndex: "Color",
      key: "Color",
      render: (_, { Color }) => <Body1>{Color}</Body1>,
    },
    {
      title: "Quantity",
      dataIndex: "Quantity",
      key: "Quantity",
      render: (_, { Quantity }) => <Body1>{Quantity}</Body1>,
    },
    {
      title: "Price",
      dataIndex: "Price",
      key: "Price",
      render: (_, { Price }) => <Body1>${Price}</Body1>,
    },
    {
      title: "Total",
      render: (row) => {
        return <Body1>${(row.Price * row.Quantity).toFixed(2)}</Body1>;
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
