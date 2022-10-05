import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import IndexSwapTable from "./IndexSwapTable/index";
import { Header1 } from "Styles/Typography";
import CustomButton from "Commons/CustomButton";
import IndexSwapForm from "./IndesSwapForm";

import { addSwapRequests, getSwapRequests } from "./IndexSwapReducer";

import "./style.scss";

const IndexSwapPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const swapReducerData = useSelector(
    (state) => state.persistedReducer.IndexSwapReducer
  );

  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleFormSubmit = async (values) => {
    dispatch(addSwapRequests(values));
  };

  useEffect(() => {
    if (swapReducerData.status === "empty") {
      dispatch(getSwapRequests());
    }
  }, []);

  return (
    <div className="indexswap-page">
      <div className="indexswap-page__title">
        <Header1>Index Swap</Header1>
      </div>
      <div className="indexswap-page__buttons">
        <CustomButton onClick={() => navigate("/index-swap/my-request")}>
          My request
        </CustomButton>
        <CustomButton type="danger" onClick={() => setIsFormOpen(true)}>
          Add Request
        </CustomButton>
      </div>
      <div className="indexswap-page__table-wrapper">
        <IndexSwapTable data={swapReducerData.swapRequests} />
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
