import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

import { addItemToCart } from "../CartReducer";

import apiEndPoint from "../../../ApiEndPoint";

import { Form, InputNumber, Radio } from "antd";
import CustomButton from "Commons/CustomButton";
import { Header1, Body1, Body2 } from "Styles/Typography";

import "./style.scss";

const MerchandisePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { itemId } = useParams();
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [data, setData] = useState({
    Colors: [],
    Sizes: [],
    Description: "",
    Name: "",
    PhotoUrl: "",
    Price: "",
    Quantity: "",
  });

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`${apiEndPoint}api/merch/${itemId}`);
      setData(res.data.data);
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

  const onFinish = (values) => {
    dispatch(
      addItemToCart({
        ...values,
        Id: itemId,
        Name: data.Name,
        Price: data.Price,
      })
    );
  };

  return (
    <div className="merch-page">
      <div className="merch-page__title">
        <Header1>{data.Name}</Header1>
        <div className="shop-page__title__buttons">
          <CustomButton onClick={() => navigate("/Cart")}>My Cart</CustomButton>
          <CustomButton>My Orders</CustomButton>
        </div>
      </div>
      <div className="merch-page__body">
        <div className="merch-page__body__left">
          <img className="merch-page__body__left__img" src={data.PhotoUrl} />
        </div>
        <div className="merch-page__body__right">
          <Body1>S${data.Price}</Body1>
          <br />
          <Body2>{data.Description}</Body2>
          <div></div>
          <div>
            <Form onFinish={onFinish} requiredMark={false}>
              <Form.Item
                label="Color"
                name="Color"
                rules={[{ required: true, message: "Please Pick a Color" }]}
              >
                <Radio.Group
                  buttonStyle="solid"
                  options={colors}
                  optionType="button"
                />
              </Form.Item>
              <Form.Item
                label="Sizes"
                name="Size"
                rules={[{ required: true, message: "Please Pick a Size" }]}
              >
                <Radio.Group
                  buttonStyle="solid"
                  options={sizes}
                  optionType="button"
                />
              </Form.Item>
              <Form.Item
                label="Quantity"
                name="Quantity"
                rules={[{ required: true, message: "Please Input Quantity" }]}
              >
                <InputNumber min={1} max={data.Quantity} />
              </Form.Item>
              <Form.Item>
                <CustomButton htmlType="submit">Add To Cart</CustomButton>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchandisePage;
