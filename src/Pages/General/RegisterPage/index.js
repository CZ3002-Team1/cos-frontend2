import React, { useState } from "react";
import { Form, Input } from "antd";
import "./style.scss";
import CustomButton from "Commons/CustomButton";
import axios from "axios";
import apiEndPoint from "../../../ApiEndPoint";

const RegisterPage = () => {
  const [emailInput, setEmailInput] = useState("");
  const [verified, setVerified] = useState(false);
  const [getOTP, setGetOTP] = useState({});

  const generateOTP = async () => {
    const res = await axios.post(`${apiEndPoint}api/auth/createOtp`, {
      Email: emailInput,
    });
    console.log(res.data);
    setGetOTP(res.data);
  };

  const checkOTP = async (otp) => {
    const res = await axios.post(`${apiEndPoint}api/auth/verifyOtp`, {
      Email: emailInput,
      Otp: otp,
    });
    return res;
  };

  const onFinish = async (values) => {
    const res = await axios.post(`${apiEndPoint}api/auth/register`, values);
    console.log({ res });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="register-page">
      <div className="register-page__form-wrapper">
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
            name="Email"
            rules={[
              () => ({
                validator(_, value) {
                  if (value && value.endsWith("@e.ntu.edu.sg")) {
                    setEmailInput(value);
                    return Promise.resolve();
                  }
                  setEmailInput("");
                  return Promise.reject(
                    new Error("Please use a valid school email!")
                  );
                },
              }),
            ]}
          >
            <Input addonBefore="Email" />
          </Form.Item>

          <Form.Item>
            <CustomButton
              disabled={emailInput.length === 0 || verified}
              onClick={generateOTP}
            >
              Generate OTP
            </CustomButton>{" "}
            <span style={{ color: "red" }}>
              {getOTP.message ? getOTP.message : ""}
            </span>
          </Form.Item>

          <Form.Item
            name="OTP"
            hasFeedback
            validateStatus={verified ? "success" : ""}
            rules={[
              {
                required: true,
                message: "Please input OTP!",
              },
              () => ({
                async validator(_, value) {
                  if (value && value.length === 6) {
                    if (verified) return Promise.resolve();
                    const res = await checkOTP(value);
                    if (res.data.success) {
                      setVerified(true);
                      return Promise.resolve();
                    } else {
                      return Promise.reject(new Error("Wrong OTP"));
                    }
                  }
                },
              }),
            ]}
          >
            <Input addonBefore="OTP" maxLength={6} disabled={verified} />
          </Form.Item>

          <Form.Item
            name="Name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input addonBefore="Name" />
          </Form.Item>

          <Form.Item
            name="PhoneNumber"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
            ]}
          >
            <Input addonBefore="Phone No." />
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
            name="reenterPassword"
            rules={[
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (value && getFieldValue("Password") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(new Error("Password Do not Match"));
                },
              }),
            ]}
          >
            <Input.Password addonBefore="Reenter Password" />
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

export default RegisterPage;
