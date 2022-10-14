import React, { useState } from "react";
import { Form, Modal, Input, DatePicker, TimePicker, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import CustomButton from "Commons/CustomButton";
import apiEndPoint from "./../../../ApiEndPoint/index";
import moment from "moment";

const EditEventForm = ({ isOpen, onCancel, onSubmit, data }) => {
  const [isImageReplaced, setIsImageReplaced] = useState(false);
  const dateFormat = "YYYY-MM-DD";
  const timeFormat = "hh:mm A";
  const times = data.Time.split("-");
  const initialData = {
    Name: data.Name,
    Description: data.Description,

    Dates: [
      moment(data.StartDate, dateFormat),
      moment(data.EndDate, dateFormat),
    ],
    Time: [moment(times[0], timeFormat), moment(times[1], timeFormat)],
  };
  const [form] = Form.useForm();

  const normFile = (e) => {
    if (!isImageReplaced) setIsImageReplaced(true);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <div>
      <Modal
        title="Edit Event"
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
              console.log("Validate Failed:", info);
            });
        }}
      >
        <Form
          form={form}
          layout="vertical"
          name="form_in_modal"
          initialValues={initialData}
        >
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
          >
            <Upload
              name="File"
              action={`${apiEndPoint}api/file/uploadFile`}
              listType="picture"
              maxCount={1}
              accept={".png, .jpg, .jpeg"}
            >
              <CustomButton icon={<UploadOutlined />} type="button">
                Click to upload event image (Max: 1)
              </CustomButton>
            </Upload>
          </Form.Item>
          {!isImageReplaced && (
            <div>
              <p>Current Image</p>
              <img src={data.PhotoUrl} style={{ maxWidth: 100 }} />
            </div>
          )}
        </Form>
      </Modal>
    </div>
  );
};

export default EditEventForm;
