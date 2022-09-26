import React from "react";
import EventsBox from "./EventsBox/index";

import "./style.scss";
const EventsPage = () => {
  return (
    <div className="events-page">
      <div className="events-page__events-wrapper">
        <EventsBox />
        <EventsBox />
        <EventsBox />
        <EventsBox />
        <EventsBox />
      </div>
    </div>
  );
};

export default EventsPage;
