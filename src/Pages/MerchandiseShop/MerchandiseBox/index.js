import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "antd";
import { DeleteOutlined, FormOutlined } from "@ant-design/icons";

import { Body2, Header2 } from "Styles/Typography/index";

import "./style.scss";
import EditMerchandiseForm from "../EditMerchandiseForm";
import { useDispatch } from "react-redux";
import { editMerchandise } from "../ShopReducer";

const MerchandiseBox = ({ data, editMode, onDelete }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const showDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const handleConfirmDelete = () => {
    onDelete(data._id);
    closeDeleteModal();
  };

  const showEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleSubmitEdit = ({ File, ...rest }) => {
    const submitValues = {
      ...rest,
      PhotoUrl: File ? File[0].response.photoUrl : data.PhotoUrl,
    };
    dispatch(editMerchandise({ values: submitValues, _id: data._id }));
  };

  return (
    <div
      className="merch-box"
      onClick={editMode ? undefined : () => navigate(`/shop/${data._id}`)}
    >
      <div className="merch-box__top">
        <img className="merch-box__top__img" src={data.PhotoUrl} />
      </div>
      <div className="merch-box__bottom">
        <div className="merch-box__bottom__header">
          <Header2>{data.Name}</Header2>
          {editMode && (
            <div>
              <FormOutlined
                className="merch-box__bottom__header__edit"
                onClick={showEditModal}
              />
              <DeleteOutlined
                className="merch-box__bottom__header__delete"
                onClick={showDeleteModal}
              />
            </div>
          )}
        </div>
        <Body2>Price: {data.Price}</Body2>
      </div>
      <Modal
        title="Confirm Delete"
        open={isDeleteModalOpen}
        onOk={handleConfirmDelete}
        onCancel={closeDeleteModal}
      />
      <EditMerchandiseForm
        isOpen={isEditModalOpen}
        onCancel={closeEditModal}
        onSubmit={handleSubmitEdit}
        data={data}
      />
    </div>
  );
};

export default MerchandiseBox;
