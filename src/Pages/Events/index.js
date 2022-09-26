import React from "react";
import EventsBox from "./EventsBox/index";

import "./style.scss";
import { Header1 } from "Styles/Typography";
const EventsPage = () => {
  return (
    <div className="events-page">
      <div className="events-page__title">
        <Header1>Events</Header1>
      </div>
      <div className="events-page__events-wrapper">
        <EventsBox />
        <EventsBox />
        <EventsBox />
        <EventsBox />
        <EventsBox />
        <EventsBox />
        <EventsBox />
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
