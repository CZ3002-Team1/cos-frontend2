import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import apiEndPoint from "../../../ApiEndPoint";

import { Form, InputNumber, Radio } from "antd";
import { Header1, Body1, Body2 } from "Styles/Typography";

import "./style.scss";

const MerchandisePage = () => {
  const { itemId } = useParams();
  const [data, setData] = useState({
    Colors: [],
    Sizes: [],
    Desctiption: "",
    Name: "",
    PhotoUrl: "",
    Price: "",
    Quantity: "",
  });
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`${apiEndPoint}api/merch/${itemId}`);
      setData(res.data.data);
      console.log(res.data.data);
    };
    getData();
  }, []);

  useEffect(() => {
    setColors(
      data.Colors.map((c) => {
        return { label: c.toUpperCase(), value: c };
      })
    );
    setSizes(
      data.Sizes.map((c) => {
        return { label: c.toUpperCase(), value: c };
      })
    );
  }, [data]);

  return (
    <div className="merch-page">
      <div className="merch-page__left">
        <img className="merch-page__left__img" src={data.PhotoUrl} />
      </div>
      <div className="merch-page__right">
        <Header1>{data.Name}</Header1>
        <br />
        <Body1>S${data.Price}</Body1>
        <br />
        <Body2>{data.Description}</Body2>
        <div></div>
        <div>
          <Form>
            <Form.Item label="Color">
              <Radio.Group
                buttonStyle="solid"
                options={colors}
                optionType="button"
              />
            </Form.Item>
            <Form.Item label="Sizes">
              <Radio.Group
                buttonStyle="solid"
                options={sizes}
                optionType="button"
              />
            </Form.Item>
            <Form.Item label="Quantity">
              <InputNumber min={1} max={data.Quantity} />
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default MerchandisePage;
