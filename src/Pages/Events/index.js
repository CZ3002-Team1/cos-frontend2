import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createNewEvent, getEvents } from "./EventReducer";

import EventsBox from "./EventsBox/index";
import { Header1 } from "Styles/Typography";
import CustomButton from "Commons/CustomButton";

import "./style.scss";
import NewEventForm from "./NewEventForm";

const EventsPage = () => {
  const dispatch = useDispatch();
  const eventInfo = useSelector((state) => state.persistedReducer.EventReducer);
  const { userInfo } = useSelector(
    (state) => state.persistedReducer.UserReducer
  );

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [displayData, setDisplayData] = useState(eventInfo.eventList);

  useEffect(() => {
    if (eventInfo.status === "empty") {
      dispatch(getEvents());
    }
  }, []);

  useEffect(() => setDisplayData(eventInfo.eventList), [eventInfo]);

  const handleClose = () => {
    setIsFormOpen(false);
  };

  const handleSubmit = async ({ Name, Dates, Time, Description, File }) => {
    const submitValues = {
      Name,
      StartDate: Dates[0].format("YYYY-MM-DD"),
      EndDate: Dates[0].format("YYYY-MM-DD"),
      Time: `${Time[0].format("HH:MM A")} - ${Time[1].format("HH:MM A")}`,
      Description,
      PhotoUrl: File[0].response.photoUrl,
    };
    dispatch(createNewEvent(submitValues));
  };

  return (
    <div className="events-page">
      <div className="events-page__title">
        <Header1>Welcome Back {userInfo.Name}</Header1>
        <div>
          <Header1>Events</Header1>
          {userInfo.IsAdmin && (
            <div className="events-page__title__button">
              <CustomButton onClick={() => setIsFormOpen(true)}>
                Add Event
              </CustomButton>
              <CustomButton>Manage Event</CustomButton>
            </div>
          )}
        </div>
      </div>
      <div className="events-page__events-wrapper">
        {displayData ? (
          displayData.map((d) => <EventsBox data={d} key={d._id} />)
        ) : (
          <div />
        )}
      </div>
      <NewEventForm
        isOpen={isFormOpen}
        onCancel={handleClose}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default EventsPage;
