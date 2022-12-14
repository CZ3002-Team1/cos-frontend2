import React from "react";

import Modal from "antd/lib/modal/Modal";
import { Body2 } from "Styles/Typography";
const EventDetailModal = ({ data, isOpen, handleClose }) => {
  return (
    <Modal
      title={data.Name}
      open={isOpen}
      onOk={handleClose}
      onCancel={handleClose}
    >
      <Body2>
        Event Date: {new Date(data.StartDate).toDateString()} -{" "}
        {new Date(data.EndDate).toDateString()}
      </Body2>
      <br />
      <Body2>Time: {data.Time}</Body2>
      <br />
      <Body2>Event Details:</Body2>
      <br />
      <Body2>{data.Description}</Body2>
    </Modal>
  );
};

export default EventDetailModal;
