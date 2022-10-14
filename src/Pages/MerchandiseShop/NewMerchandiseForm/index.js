import React, { useState } from "react";
import { Form, Modal, Input, Upload, InputNumber } from "antd";
import { UploadOutlined } from "@ant-design/icons";

import apiEndPoint from "./../../../ApiEndPoint";

import CustomButton from "Commons/CustomButton";
import TagInput from "Commons/TagInput";

const NewMerchandiseForm = ({ isOpen, onCancel, onSubmit }) => {
  const [form] = Form.useForm();
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <div>
      <Modal
        title="Create New Listing"
        open={isOpen}
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onSubmit({ ...values, Colors: colors, Sizes: sizes });
              onCancel();
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
      >
        <Form form={form} layout="vertical" name="form_in_modal">
          <Form.Item
            name="Name"
            rules={[
              {
                required: true,
                message: "Please input the merchandise name!",
              },
            ]}
          >
            <Input addonBefore="Merchandise Name" />
          </Form.Item>
          <Form.Item
            name="Price"
            rules={[
              {
                required: true,
                message: "Please input the merchandise price!",
              },
            ]}
          >
            <InputNumber addonBefore="Price" min={0} />
          </Form.Item>
          <Form.Item
            name="Quantity"
            rules={[
              {
                required: true,
                message: "Please input the merchandise quantity!",
              },
            ]}
          >
            <InputNumber addonBefore="Quantity" min={1} />
          </Form.Item>
          <Form.Item
            name="Colors"
            label="Colors"
            rules={[
              () => ({
                validator() {
                  if (colors.length > 0) {
                    return Promise.resolve();
                  }

                  return Promise.reject(
                    new Error("Please input at least one color!")
                  );
                },
              }),
            ]}
          >
            <TagInput tags={colors} setTags={setColors} title="Color" />
          </Form.Item>
          <Form.Item
            name="Sizes"
            label="Sizes"
            rules={[
              () => ({
                validator() {
                  if (colors.length > 0) {
                    return Promise.resolve();
                  }

                  return Promise.reject(
                    new Error("Please input at least one size!")
                  );
                },
              }),
            ]}
          >
            <TagInput tags={sizes} setTags={setSizes} title="Color" />
          </Form.Item>
          <Form.Item
            name="Description"
            rules={[
              {
                required: true,
                message: "Please input your merchandise description!",
              },
            ]}
          >
            <Input.TextArea placeholder="Merchandise Description" />
          </Form.Item>
          <Form.Item
            name="File"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            extra="Upload Merchandise Image"
            rules={[
              {
                required: true,
                message: "Please input your merchandise image!",
              },
            ]}
          >
            <Upload
              name="File"
              action={`${apiEndPoint}api/file/uploadFile`}
              listType="picture"
              maxCount={1}
            >
              <CustomButton icon={<UploadOutlined />} type="button">
                Click to upload merchandise image
              </CustomButton>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default NewMerchandiseForm;
