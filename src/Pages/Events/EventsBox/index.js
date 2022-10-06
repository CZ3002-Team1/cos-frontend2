import React, { useState } from "react";
import { Body2, Header2 } from "Styles/Typography/index";

import EventDetailModal from "./../EventDetailModal/index";
import { DeleteOutlined } from "@ant-design/icons";
import { Modal } from "antd";

import "./style.scss";

const EventsBox = ({ data, editMode, onDelete }) => {
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const showEventModal = () => {
    setIsEventModalOpen(true);
  };

  const closeEventModal = () => {
    setIsEventModalOpen(false);
  };

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
    <div>
      <div
        className="events-box"
        onClick={editMode ? undefined : showEventModal}
      >
        <div className="events-box__top">
          <img className="events-box__top__img" src={data.PhotoUrl} />
        </div>
        <div className="events-box__bottom">
          <div className="events-box__bottom__header">
            <Header2>{data.Name}</Header2>
            {editMode && (
              <DeleteOutlined
                className="events-box__bottom__header__delete"
                onClick={showDeleteModal}
              />
            )}
          </div>
          <Body2>
            {new Date(data.StartDate).toDateString()} -{" "}
            {new Date(data.EndDate).toDateString()}
          </Body2>
        </div>
      </div>
      <EventDetailModal
        data={data}
        handleClose={closeEventModal}
        isOpen={isEventModalOpen}
      />
      <Modal
        title="Confirm Delete"
        open={isDeleteModalOpen}
        onOk={handleConfirmDelete}
        onCancel={closeDeleteModal}
      />
    </div>
  );
};

export default EventsBox;
