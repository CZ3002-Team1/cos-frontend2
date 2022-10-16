import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  addSwapRequests,
  deleteSwapRequests,
  editSwapRequests,
} from "../IndexSwapReducer";

import IndexSwapTable from "../IndexSwapTable";
import { Header1 } from "Styles/Typography";
import CustomButton from "Commons/CustomButton";
import IndexSwapForm from "../IndexSwapForm/index";

import "./style.scss";

const UserRequestListPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector(
    (state) => state.persistedReducer.UserReducer
  );
  const { swapRequests } = useSelector(
    (state) => state.persistedReducer.IndexSwapReducer
  );

  const userSwapRequests = swapRequests.filter(
    (request) => request.Email === userInfo.Email
  );

  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleDelete = (record) => {
    dispatch(deleteSwapRequests(record._id));
  };

  const handleFormSubmit = (values) => {
    dispatch(addSwapRequests(values));
  };

  const handleEditSubmit = (values) => {
    dispatch(editSwapRequests(values));
  };

  return (
    <div className="indexSwapUserRequest-page">
      <div className="indexSwapUserRequest-page__title">
        <Header1>Index Swap</Header1>
      </div>
      <div className="indexSwapUserRequest-page__buttons">
        <CustomButton onClick={() => navigate("/index-swap")} type="button">
          All Request
        </CustomButton>
        <CustomButton onClick={() => setIsFormOpen(true)} type="button">
          Add Request
        </CustomButton>
      </div>
      <div className="indexSwapUserRequest-page__table-wrapper">
        <IndexSwapTable
          data={userSwapRequests}
          editAllowed={true}
          onDelete={handleDelete}
          onEditSubmit={handleEditSubmit}
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
