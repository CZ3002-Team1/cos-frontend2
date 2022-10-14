import React, { useState } from "react";
import { Body2, Header2 } from "Styles/Typography/index";
import { useDispatch } from "react-redux";

import { Modal } from "antd";
import { DeleteOutlined, FormOutlined } from "@ant-design/icons";
import EventDetailModal from "./../EventDetailModal/index";

import "./style.scss";
import EditEventForm from "../EditEventForm";
import { editEvent } from "../EventReducer";

const EventsBox = ({ data, editMode, onDelete }) => {
  console.log(data);
  const dispacth = useDispatch();
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

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

  const showEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleSubmitEdit = ({ Name, Dates, Time, Description, File }) => {
    const submitValues = {
      Name,
      StartDate: Dates[0].format("YYYY-MM-DD"),
      EndDate: Dates[1].format("YYYY-MM-DD"),
      Time: `${Time[0].format("h:mm a")} - ${Time[1].format("h:mm a")}`,
      Description,
      PhotoUrl: File ? File[0].response.photoUrl : data.PhotoUrl,
    };
    dispacth(editEvent({ _id: data._id, values: submitValues }));
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
              <div>
                <FormOutlined
                  className="events-box__bottom__header__edit"
                  onClick={showEditModal}
                />
                <DeleteOutlined
                  className="events-box__bottom__header__delete"
                  onClick={showDeleteModal}
                />
              </div>
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
      <EditEventForm
        isOpen={isEditModalOpen}
        onCancel={closeEditModal}
        onSubmit={handleSubmitEdit}
        data={data}
      />
    </div>
  );
};

export default EventsBox;
