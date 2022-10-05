import { Table } from "antd";
import React from "react";

import { removeItemFromCart } from "../../CartReducer";

import { DeleteOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
const CartTable = ({ data }) => {
  const dispatch = useDispatch();

  const handleDelete = (record) => {
    dispatch(removeItemFromCart({ orderId: record.orderId }));
  };

  const columns = [
    {
      title: "Item Name",
      dataIndex: "Name",
      key: "Name",
    },
    {
      title: "Size",
      dataIndex: "Size",
      key: "Size",
    },
    {
      title: "Color",
      dataIndex: "Color",
      key: "Color",
    },
    {
      title: "Quantity",
      dataIndex: "Quantity",
      key: "Quantity",
    },
    {
      title: "Price",
      dataIndex: "Price",
      key: "Price",
      render: (_, { Price }) => <span>${Price}</span>,
    },
    {
      title: "Total",
      render: (row) => {
        console.log({ row });
        return <span>${(row.Price * row.Quantity).toFixed(2)}</span>;
      },
    },
    {
      title: "",
      key: "delete",
      render: (record) => (
        <DeleteOutlined
          className="Table__DeleteIcon"
          alt="trash"
          onClick={() => handleDelete(record)}
        />
      ),
    },
  ];

  return <Table dataSource={data} columns={columns} />;
};

export default CartTable;
