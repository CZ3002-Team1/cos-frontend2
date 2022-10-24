import React from "react";
import { Form, Modal, Input, DatePicker, TimePicker, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import CustomButton from "Commons/CustomButton";
import apiEndPoint from "./../../../ApiEndPoint/index";

const NewEventForm = ({ isOpen, onCancel, onSubmit }) => {
  const [form] = Form.useForm();

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <div>
      <Modal
        title="Create New Event"
        open={isOpen}
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onSubmit(values);
              onCancel();
            })
            .catch((info) => {
              alert("Validate Failed:", info);
            });
        }}
      >
        <Form form={form} layout="vertical" name="form_in_modal">
          <Form.Item
            name="Name"
            rules={[
              {
                required: true,
                message: "Please input the event name!",
              },
            ]}
          >
            <Input addonBefore="Event Name" />
          </Form.Item>

          <Form.Item
            name="Dates"
            rules={[
              {
                required: true,
                message: "Please input the start and end date!",
              },
            ]}
          >
            <DatePicker.RangePicker addonBefore="Event Date" />
          </Form.Item>
          <Form.Item
            name="Time"
            rules={[
              {
                required: true,
                message: "Please input the start and end date!",
              },
            ]}
          >
            <TimePicker.RangePicker use12Hours format="h:mm a" />
          </Form.Item>
          <Form.Item
            name="Description"
            rules={[
              {
                required: true,
                message: "Please input your event description!",
              },
            ]}
          >
            <Input.TextArea
              addonBefore="Event Description"
              placeholder="Event Description"
            />
          </Form.Item>
          <Form.Item
            name="File"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            extra="Upload Event Image"
            rules={[
              {
                required: true,
                message: "Please input your event image!",
              },
            ]}
          >
            <Upload
              name="File"
              action={`${apiEndPoint}api/file/uploadFile`}
              listType="picture"
              maxCount={1}
              accept="image/*"
            >
              <CustomButton icon={<UploadOutlined />} type="button">
                Click to upload event image (Max: 1)
              </CustomButton>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default NewEventForm;
