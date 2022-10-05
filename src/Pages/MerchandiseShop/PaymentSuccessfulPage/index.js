import React from "react";
import { useNavigate } from "react-router-dom";

import { Body1, Header1 } from "Styles/Typography";
import CustomButton from "Commons/CustomButton";

const PaymentSuccessfulPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <Header1> Payment Status</Header1>
        <br />
        <br />
        <Body1>Your payment is successful</Body1>
      </div>
      <br />
      <div>
        <CustomButton onClick={() => navigate("/")}>
          Return to Home Page
        </CustomButton>
        <CustomButton onClick={() => navigate("/shop")}>
          Continue Shopping
        </CustomButton>
      </div>
    </div>
  );
};

export default PaymentSuccessfulPage;
