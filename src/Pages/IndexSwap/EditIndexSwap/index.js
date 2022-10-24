import React, { useState } from "react";
import { FormOutlined } from "@ant-design/icons";

import EditIndexSwapForm from "./../EditIndexSwapForm/index";

const EditIndexSwap = ({ record, onEditSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <FormOutlined
        className="indexswap-table__edit-icon"
        alt="trash"
        onClick={() => setIsOpen(true)}
      />
      <EditIndexSwapForm
        isOpen={isOpen}
        onSubmit={onEditSubmit}
        onCancel={() => setIsOpen(false)}
        data={record}
      />
    </div>
  );
};

export default EditIndexSwap;
