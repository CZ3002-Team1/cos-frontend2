import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import EventsBox from "./EventsBox/index";
import { Header1 } from "Styles/Typography";

import apiEndPoint from "../../ApiEndPoint";

import "./style.scss";

const EventsPage = () => {
  const [data, setData] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const { userInfo } = useSelector(
    (state) => state.persistedReducer.UserReducer
  );

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(`${apiEndPoint}api/event`)
        .then((res) => {
          setDisplayData(res.data.data);
          setData(res.data.data);
        })
        .catch((err) => {
          alert(err.message);
          // setDisplayData(dummyData);
          // setData(dummyData);
        });
    };
    getData();
  }, []);

  return (
    <div className="events-page">
      <div className="events-page__title">
        <Header1>Welcome Back {userInfo.Name}</Header1>
        <br />
        <Header1>Events</Header1>
      </div>
      <div className="events-page__events-wrapper">
        {displayData ? (
          displayData.map((d) => <EventsBox data={d} key={d._id} />)
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};

export default EventsPage;
