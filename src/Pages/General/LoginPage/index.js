import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Form, Input } from "antd";
import CustomButton from "Commons/CustomButton";

import { getToken } from "../UserReducer";

import "./style.scss";
const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const { isLoggedIn } = useSelector(
    (state) => state.persistedReducer.UserReducer
  );

  const onFinish = () => {
    form.validateFields().then((values) => {
      form.resetFields();
      dispatch(getToken(values)).then(({ payload }) => {
        if (payload.success) navigate("/events");
      });
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    if (isLoggedIn) navigate("/events");
  }, [isLoggedIn]);

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
