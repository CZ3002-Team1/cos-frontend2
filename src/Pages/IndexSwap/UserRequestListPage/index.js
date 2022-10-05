import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import apiEndPoint from "./../../../ApiEndPoint/index";

import IndexSwapTable from "../IndexSwapTable";
import { Header1 } from "Styles/Typography";
import SearchBox from "../../../Commons/SearchBox";
import CustomButton from "Commons/CustomButton";
import IndexSwapForm from "./../IndesSwapForm/index";

import "./style.scss";

const UserRequestListPage = () => {
  const { userInfo } = useSelector(
    (state) => state.persistedReducer.UserReducer
  );
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

  const handleDelete = (record) => {
    console.log(record);
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
        .get(`${apiEndPoint}api/indexSwap/${userInfo.Email}`)
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
    <div className="indexSwapUserRequest-page">
      <div className="indexSwapUserRequest-page__title">
        <Header1>Index Swap</Header1>
      </div>
      <div className="indexSwapUserRequest-page__filters">
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
        <CustomButton type="danger" onClick={() => setIsFormOpen(true)}>
          Add Request
        </CustomButton>
      </div>
      <div className="indexSwapUserRequest-page__table-wrapper">
        <IndexSwapTable
          data={displayData}
          deleteAllowed={true}
          onDelete={handleDelete}
        />
      </div>
      <IndexSwapForm
        isOpen={isFormOpen}
        onCancel={() => setIsFormOpen(false)}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default UserRequestListPage;
