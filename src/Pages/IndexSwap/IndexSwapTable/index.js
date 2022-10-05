import { Table } from "antd";
import React from "react";

import { DeleteOutlined } from "@ant-design/icons";

const IndexSwapTable = ({ data, deleteAllowed, onDelete }) => {
  const columns = [
    {
      title: "Student Name",
      dataIndex: "StudentName",
      key: "StudentName",
    },
    {
      title: "Module Name",
      dataIndex: "ModuleName",
      key: "ModuleName",
    },
    {
      title: "Module Code",
      dataIndex: "ModuleCode",
      key: "ModuleCode",
    },
    {
      title: "Current Index",
      dataIndex: "HaveIndex",
      key: "HaveIndex",
    },
    {
      title: "Desired Index",
      dataIndex: "WantIndex",
      key: "WantIndex",
    },
    {
      title: "Phone Number",
      dataIndex: "PhoneNumber",
      key: "PhoneNumber",
    },
    {
      title: "Telegram",
      dataIndex: "TeleHandle",
      key: "TeleHandle",
    },
    {
      title: "",
      key: "delete",
      render: (record) =>
        deleteAllowed && (
          <DeleteOutlined
            className="cart-table__delete-icon"
            alt="trash"
            onClick={() => onDelete(record)}
          />
        ),
    },
  ];
  return <Table dataSource={data} columns={columns} />;
};

export default IndexSwapTable;
