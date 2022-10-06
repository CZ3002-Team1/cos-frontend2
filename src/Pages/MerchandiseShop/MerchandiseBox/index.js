import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

import { Body2, Header2 } from "Styles/Typography/index";

import "./style.scss";

const MerchandiseBox = ({ data, editMode, onDelete }) => {
  const navigate = useNavigate();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
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
            <DeleteOutlined
              className="merch-box__bottom__header__delete"
              onClick={showDeleteModal}
            />
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
    </div>
  );
};

export default MerchandiseBox;
