import React, { useState, useEffect } from "react";
import { Body2, Header2 } from "Styles/Typography/index";

import "./style.scss";
import EventDetailModal from "./../EventDetailModal/index";

const EventsBox = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(typeof data.EndDate);
  console.log(new Date(data.EndDate));
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
            {new Date(data.StartDate).toDateString()} -
            {new Date(data.EndDate).toDateString()}
          </Body2>
        </div>
      </div>
      <EventDetailModal data={data} handleClose={closeModal} isOpen={isOpen} />
    </div>
  );
};

export default EventsBox;
