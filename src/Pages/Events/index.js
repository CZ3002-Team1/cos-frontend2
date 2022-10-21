import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import { createNewEvent, deleteEvent, getEvents } from "./EventReducer";

import { DatePicker } from "antd";
import EventsBox from "./EventsBox/index";
import { Header1, Header2, Body1 } from "Styles/Typography";
import CustomButton from "Commons/CustomButton";
import NewEventForm from "./NewEventForm";

import "./style.scss";

const EventsPage = () => {
  const dispatch = useDispatch();
  const eventInfo = useSelector((state) => state.persistedReducer.EventReducer);
  const { userInfo } = useSelector(
    (state) => state.persistedReducer.UserReducer
  );

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [displayData, setDisplayData] = useState(eventInfo.eventList);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    if (eventInfo.status === "empty") {
      dispatch(getEvents());
    }
  }, []);

  useEffect(() => setDisplayData(eventInfo.eventList), [eventInfo]);

  const handleClose = () => {
    setIsFormOpen(false);
  };

  const handleSubmit = ({ Name, Dates, Time, Description, File }) => {
    const submitValues = {
      Name,
      StartDate: Dates[0].format("YYYY-MM-DD"),
      EndDate: Dates[1].format("YYYY-MM-DD"),
      Time: `${Time[0].format("h:mm a")} - ${Time[1].format("h:mm a")}`,
      Description,
      PhotoUrl: File[0].response.photoUrl,
    };
    dispatch(createNewEvent(submitValues));
  };

  const handleDelete = (_id) => {
    dispatch(deleteEvent(_id));
  };

  const handleDateFilter = (date) => {
    console.log(date);
    if (date === null) {
      setDisplayData(eventInfo.eventList);
    } else {
      const filteredEvent = eventInfo.eventList.filter((event) => {
        const startDate = moment(event.StartDate, "YYYY-MM-DD");
        const endDate = moment(event.endDate, "YYYY-MM-DD");
        return date >= startDate && date <= endDate;
      });
      setDisplayData(filteredEvent);
    }
  };

  return (
    <div className="events-page">
      <div className="events-page__title">
        <Header1>Welcome Back {userInfo.Name}</Header1>
        <div>
          <Header1>Events </Header1>

          {userInfo.IsAdmin && (
            <div className="events-page__title__button">
              <CustomButton onClick={() => setIsFormOpen(true)} type="button">
                Add Event
              </CustomButton>
              <CustomButton
                onClick={() => setEditMode(!editMode)}
                type="button"
              >
                {editMode ? "Done Editing" : "Edit Event"}
              </CustomButton>
            </div>
          )}
          <div>
            <Body1>Filter by month: </Body1>
            <DatePicker onChange={handleDateFilter} picker="month" />
          </div>
          {eventInfo.status === "fulfilled" &&
            eventInfo.eventList.length === 0 && (
              <div>
                <Header2>There are currently no events</Header2>
              </div>
            )}
        </div>
      </div>
      <div className="events-page__events-wrapper">
        {displayData ? (
          displayData.map((d) => (
            <EventsBox
              data={d}
              key={d._id}
              editMode={editMode}
              onDelete={handleDelete}
            />
          ))
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
