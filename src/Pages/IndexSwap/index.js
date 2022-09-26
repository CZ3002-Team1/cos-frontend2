import React, { useState, useEffect } from "react";

import IndexSwapTable from "./IndexSwapTable/index";
import SearchBox from "./../../Commons/SearchBox/index";

import "./style.scss";
import { Header1 } from "Styles/Typography";
const IndexSwapPage = () => {
  const data = [
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
  const [displayData, setDisplayData] = useState(data);

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
