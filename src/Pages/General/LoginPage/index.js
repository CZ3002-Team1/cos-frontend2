import React from "react";
import { Form, Input } from "antd";
import { axios } from "axios";

import CustomButton from "Commons/CustomButton";
import apiEndPoint from "./../../../EndPoint/index";

import "./style.scss";
const LoginPage = () => {
  const onFinish = async (values) => {
    const res = await axios.post(`${apiEndPoint}api/auth/login`);
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
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          requiredMark={false}
          labelCol={{
            span: 3,
          }}
          wrapperCol={{
            span: 16,
          }}
        >
          <Form.Item
            name="email"
            rules={[
              () => ({
                validator(_, value) {
                  if (!value && value.endsWith("@e.ntu.edu.sg")) {
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
            name="password"
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
            <CustomButton type="primary" htmlType="submit">
              Submit
            </CustomButton>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
