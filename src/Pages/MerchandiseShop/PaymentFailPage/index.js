import React from "react";
import { useNavigate } from "react-router-dom";

import { Body1, Header1 } from "Styles/Typography";
import CustomButton from "Commons/CustomButton";

const PaymentFailPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <Header1> Payment Status</Header1>
        <br />
        <br />
        <Body1>Your payment has failed. Please try again!</Body1>
      </div>
      <br />
      <div>
        <CustomButton onClick={() => navigate("/")} type="button">
          Home Page
        </CustomButton>
        <CustomButton onClick={() => navigate("/cart")} type="button">
          Return to Cart
        </CustomButton>
      </div>
    </div>
  );
};

export default PaymentFailPage;
