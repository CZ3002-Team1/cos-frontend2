import React, { useEffect } from "react";

//* Styles
import "./style.scss";
import { Header1, Body2 } from "Styles/Typography";

//* Components
import ComingSoonBox from "./Components/ComingSoonBox";
import PintuShopBox from "./Components/PintuShopBox";
import PintuVotingBox from "./Components/PintuVotingBox";
import Carousel from "../../../Commons/Carousel";
// import { useSelector } from 'react-redux';

export default function BuyerDashboardPage() {
  // const { name } = useSelector((state) => state.userReducer.userData);

  return (
    <div className="buyer-dashboard">
      {/* <Header1>Hello, {_.first(_.words(name))}!</Header1> */}
      <Body2>What do you want to do today?</Body2>
      <div className="buyer-dashboard__boxes">
        <Carousel>
          <PintuVotingBox />
          <PintuShopBox />
          <ComingSoonBox />
        </Carousel>
      </div>
    </div>
  );
}
