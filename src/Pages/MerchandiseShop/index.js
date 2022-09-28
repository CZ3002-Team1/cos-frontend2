import React, { useState, useEffect } from "react";
import axios from "axios";

import MerchandiseBox from "./MerchandiseBox";
import { Header1 } from "Styles/Typography";

import apiEndPoint from "../../ApiEndPoint";

import "./style.scss";

const ShopPage = () => {
  const [data, setData] = useState([]);
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(`${apiEndPoint}api/merch`)
        .then((res) => {
          console.log(res.data.data);
          setDisplayData(res.data.data);
          setData(res.data.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    };
    getData();
  }, []);
  return (
    <div className="shop-page">
      <div className="shop-page__title">
        <Header1>Merchandise Shop</Header1>
      </div>
      <div className="shop-page__merch-wrapper">
        {displayData ? (
          displayData.map((d) => <MerchandiseBox data={d} key={d._id} />)
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};

export default ShopPage;
