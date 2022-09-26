import React, { useState, useEffect } from "react";
import axios from "axios";

import IndexSwapTable from "./IndexSwapTable/index";
import SearchBox from "./../../Commons/SearchBox/index";

import "./style.scss";
import { Header1 } from "Styles/Typography";
const IndexSwapPage = () => {
  const dummyData = [
    {
      StudentName: "string",
      ModuleName: "string",
      ModuleCode: "string",
      HaveIndex: "string",
      WantIndex: "string",
      PhoneNumber: "string",
      TeleHandle: "string",
    },
  ];

  const [moduleQuery, setModuleQuery] = useState("");
  const [haveIndexQuery, setHaveIndexQuery] = useState("");
  const [wantIndexQuery, setWantIndexQuery] = useState("");
  const [data, setData] = useState([]);
  const [displayData, setDisplayData] = useState([]);

  const handleModuleSearch = (query) => {
    setModuleQuery(query);
  };
  const handleHaveIndexSearch = (query) => {
    setHaveIndexQuery(query);
  };
  const handleWantIndexSearch = (query) => {
    setWantIndexQuery(query);
  };

  useEffect(() => {
    const getData = async () => {
      await axios
        .get("http://localhost:5000/api/indexSwap")
        .then((res) => {
          setDisplayData(res.data.data);
          setData(res.data.data);
        })
        .catch((err) => {
          alert(err.message);
          setDisplayData(dummyData);
          setData(dummyData);
        });
    };
    getData();
  }, []);

  useEffect(() => {
    const filtered = data.filter((s) =>
      s["ModuleName"].toLowerCase().startsWith(moduleQuery.toLowerCase())
    );
    setDisplayData(filtered);
  }, [moduleQuery]);

  useEffect(() => {
    const filtered = data.filter((s) =>
      s["HaveIndex"].toLowerCase().startsWith(haveIndexQuery.toLowerCase())
    );
    setDisplayData(filtered);
  }, [haveIndexQuery]);

  useEffect(() => {
    const filtered = data.filter((s) =>
      s["WantIndex"].toLowerCase().startsWith(wantIndexQuery.toLowerCase())
    );
    setDisplayData(filtered);
  }, [wantIndexQuery]);

  return (
    <div className="indexswap-page">
      <div className="indexswap-page__title">
        <Header1>Index Swap</Header1>
      </div>
      <div className="indexswap-page__filters">
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
      <div className="indexswap-page__table-wrapper">
        <IndexSwapTable data={displayData} />
      </div>
    </div>
  );
};

export default IndexSwapPage;
