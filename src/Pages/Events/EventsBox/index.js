import React from "react";
import { Body2, Header2 } from "Styles/Typography/index";

import "./style.scss";

const EventsBox = () => {
  const data = {
    Name: "Name",
    Description: "string",
    StartDate: "2022-09-26",
    EndDate: "2022-09-26",
    Time: "Time",
    PhotoUrl:
      "https://costeam1.s3.amazonaws.com/fileupload/scanskill-1664157327335-4.png",
  };

  return (
    <div className="events-box">
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
  );
};

export default EventsBox;
