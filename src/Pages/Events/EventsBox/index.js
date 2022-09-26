import React, { useState, useEffect } from "react";
import { Body2, Header2 } from "Styles/Typography/index";

import Modal from "antd/lib/modal/Modal";

import "./style.scss";
import EventDetailModal from "./../EventDetailModal/index";

const EventsBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const data = {
    Name: "Having Fun",
    Description: "string",
    StartDate: "2022-09-26",
    EndDate: "2022-09-26",
    Time: "Time",
    PhotoUrl:
      "https://costeam1.s3.amazonaws.com/fileupload/scanskill-1664157327335-4.png",
  };

  const showModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    console.log({ isOpen });
  }, [isOpen]);

  return (
    <div>
      <div className="events-box" onClick={showModal}>
        <div className="events-box__top">
          <img className="events-box__top__img" src={data.PhotoUrl} />
        </div>
        <div className="events-box__bottom">
          <Header2>{data.Name}</Header2>
          <Body2>
            {data.StartDate} - {data.EndDate}
          </Body2>
        </div>
      </div>
      <EventDetailModal data={data} handleClose={closeModal} isOpen={isOpen} />
    </div>
  );
};

export default EventsBox;
