import React, { useState, useEffect } from "react";
import { Table } from "antd";

import { DeleteOutlined, FormOutlined } from "@ant-design/icons";
import SearchBox from "Commons/SearchBox";

import "./style.scss";
import EditIndexSwapForm from "../EditIndexSwapForm";

const IndexSwapTable = ({ data, editAllowed, onDelete, onEditSubmit }) => {
  const [moduleQuery, setModuleQuery] = useState("");
  const [haveIndexQuery, setHaveIndexQuery] = useState("");
  const [wantIndexQuery, setWantIndexQuery] = useState("");
  const [displayData, setDisplayData] = useState(data);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const handleModuleSearch = (query) => {
    setModuleQuery(query);
  };
  const handleHaveIndexSearch = (query) => {
    setHaveIndexQuery(query);
  };
  const handleWantIndexSearch = (query) => {
    setWantIndexQuery(query);
  };

  useEffect(() => setDisplayData(data), [data]);
  useEffect(() => {
    const filtered = data.filter(
      (s) =>
        s["ModuleName"].toLowerCase().startsWith(moduleQuery.toLowerCase()) &&
        s["HaveIndex"].toLowerCase().startsWith(haveIndexQuery.toLowerCase()) &&
        s["WantIndex"].toLowerCase().startsWith(wantIndexQuery.toLowerCase())
    );
    setDisplayData(filtered);
  }, [moduleQuery, haveIndexQuery, wantIndexQuery]);

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
      key: "edit",
      render: (record) =>
        editAllowed && (
          <div>
            <FormOutlined
              className="indexswap-table__edit-icon"
              alt="trash"
              onClick={() => setIsEditOpen(true)}
            />
            <EditIndexSwapForm
              isOpen={isEditOpen}
              onSubmit={onEditSubmit}
              onCancel={() => setIsEditOpen(false)}
              data={record}
            />
          </div>
        ),
    },
    {
      title: "",
      key: "delete",
      render: (record) =>
        editAllowed && (
          <DeleteOutlined
            className="indexswap-table__delete-icon"
            alt="trash"
            onClick={() => onDelete(record)}
          />
        ),
    },
  ];

  return (
    <div>
      <div className="indexswap-table__filters">
        <SearchBox
          title={"Module Name"}
          value={moduleQuery}
          onChange={handleModuleSearch}
        />
        <SearchBox
          title={"Current Index"}
          value={haveIndexQuery}
          onChange={handleHaveIndexSearch}
        />
        <SearchBox
          title={"Desired Index"}
          value={wantIndexQuery}
          onChange={handleWantIndexSearch}
        />
      </div>
      <Table dataSource={displayData} columns={columns} />
    </div>
  );
};

export default IndexSwapTable;
