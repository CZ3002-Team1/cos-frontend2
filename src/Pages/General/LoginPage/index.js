import React, { useState } from "react";
import { Form, Input } from "antd";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useDispatch } from "react-redux";

import CustomButton from "Commons/CustomButton";
import apiEndPoint from "../../../ApiEndPoint";

import { getToken } from "../UserReducer";

import "./style.scss";
import { store } from "../../../App/Redux/store";
const LoginPage = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  console.log(store.getState());

  const onFinish = () => {
    form.validateFields().then((values) => {
      form.resetFields();
      console.log(values);
      dispatch(getToken(values));
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login-page">
      <div className="login-page__form-wrapper">
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinishFailed={onFinishFailed}
          form={form}
          requiredMark={false}
          labelCol={{
            span: 3,
          }}
          wrapperCol={{
            span: 16,
          }}
        >
          <Form.Item
            name="Email"
            rules={[
              () => ({
                validator(_, value) {
                  if (value && value.endsWith("@e.ntu.edu.sg")) {
                    return Promise.resolve();
                  }

                  return Promise.reject(
                    new Error("Please use a valid school email!")
                  );
                },
              }),
            ]}
          >
            <Input addonBefore="Email" />
          </Form.Item>
          <Form.Item
            name="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password addonBefore="Password" />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <CustomButton type="primary" onClick={onFinish}>
              Submit
            </CustomButton>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
