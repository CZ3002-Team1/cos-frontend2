import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import IndexSwapTable from "./IndexSwapTable/index";
import SearchBox from "./../../Commons/SearchBox/index";
import { Header1 } from "Styles/Typography";
import CustomButton from "Commons/CustomButton";
import IndexSwapForm from "./IndesSwapForm";

import { getSwapRequests } from "./IndexSwapReducer";
import apiEndPoint from "./../../ApiEndPoint/index";

import "./style.scss";

const IndexSwapPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const swapReducerData = useSelector(
    (state) => state.persistedReducer.IndexSwapReducer
  );

  const [moduleQuery, setModuleQuery] = useState("");
  const [haveIndexQuery, setHaveIndexQuery] = useState("");
  const [wantIndexQuery, setWantIndexQuery] = useState("");
  const [data, setData] = useState(swapReducerData.swapRequests);
  const [displayData, setDisplayData] = useState(swapReducerData.swapRequests);
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
    if (swapReducerData.status === "empty") {
      dispatch(getSwapRequests()).then((res) => {
        setData(res.payload);
        setDisplayData(res.payload);
      });
    }
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
        <CustomButton onClick={() => navigate("/index-swap/my-request")}>
          My request
        </CustomButton>
        <CustomButton type="danger" onClick={() => setIsFormOpen(true)}>
          Add Request
        </CustomButton>
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
