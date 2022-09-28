import React, { useState, useEffect } from "react";
import axios from "axios";

import IndexSwapTable from "./IndexSwapTable/index";
import SearchBox from "./../../Commons/SearchBox/index";

import "./style.scss";
import { Header1 } from "Styles/Typography";
import { Button } from "antd";
import IndexSwapForm from "./IndesSwapForm";
import apiEndPoint from "./../../ApiEndPoint/index";

const IndexSwapPage = () => {
  const [moduleQuery, setModuleQuery] = useState("");
  const [haveIndexQuery, setHaveIndexQuery] = useState("");
  const [wantIndexQuery, setWantIndexQuery] = useState("");
  const [data, setData] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleModuleSearch = (query) => {
    setModuleQuery(query);
  };
  const handleHaveIndexSearch = (query) => {
    setHaveIndexQuery(query);
  };
  const handleWantIndexSearch = (query) => {
    setWantIndexQuery(query);
  };

  const handleFormSubmit = async (values) => {
    await axios.post(`${apiEndPoint}api/indexSwap`, values).then((res) => {
      console.log(res);
      setData([...data, values]);
      setDisplayData([...data, values]);
    });
  };

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(`${apiEndPoint}api/indexSwap`)
        .then((res) => {
          setDisplayData(res.data.data);
          setData(res.data.data);
        })
        .catch((err) => {
          alert(err.message);
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
        <Button type="danger" onClick={() => setIsFormOpen(true)}>
          Add Request
        </Button>
      </div>
      <div className="indexswap-page__table-wrapper">
        <IndexSwapTable data={displayData} />
      </div>
      <IndexSwapForm
        isOpen={isFormOpen}
        onCancel={() => setIsFormOpen(false)}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default IndexSwapPage;
