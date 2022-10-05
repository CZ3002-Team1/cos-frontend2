import React from "react";
import { useSelector } from "react-redux";

import { Form, Modal, Input } from "antd";

const IndexSwapForm = ({ isOpen, onCancel, onSubmit }) => {
  const [form] = Form.useForm();
  const { userInfo } = useSelector(
    (state) => state.persistedReducer.UserReducer
  );
  return (
    <Modal
      open={isOpen}
      destroyOnClose={true}
      title="Create New Index Swap"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onSubmit({ ...values, Email: userInfo.Email });
            onCancel();
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form form={form} layout="vertical" name="form_in_modal">
        <Form.Item
          name="StudentName"
          rules={[
            {
              required: true,
              message: "Please input the your name!",
            },
          ]}
        >
          <Input addonBefore="Student Name" />
        </Form.Item>
        <Form.Item
          name="ModuleName"
          rules={[
            {
              required: true,
              message: "Please input the module name!",
            },
          ]}
        >
          <Input addonBefore="Module Name" />
        </Form.Item>
        <Form.Item
          name="ModuleCode"
          rules={[
            {
              required: true,
              message: "Please input the Module Code!",
            },
          ]}
        >
          <Input addonBefore="Module Code" />
        </Form.Item>
        <Form.Item
          name="HaveIndex"
          rules={[
            {
              required: true,
              message: "Please input your current index!",
            },
          ]}
        >
          <Input addonBefore="Current Index" />
        </Form.Item>
        <Form.Item
          name="WantIndex"
          rules={[
            {
              required: true,
              message: "Please input your desired index!",
            },
          ]}
        >
          <Input addonBefore="Desired Index" />
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
          <Input addonBefore="Phone Number" />
        </Form.Item>
        <Form.Item
          name="TeleHandle"
          rules={[
            {
              required: true,
              message: "Please input your telegram handle!",
            },
          ]}
        >
          <Input addonBefore="Telegram" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default IndexSwapForm;
