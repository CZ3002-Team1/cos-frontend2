import { Input } from "antd";
import React from "react";

import "./style.scss";
const SearchBox = ({ title, value, onChange, id }) => {
  return (
    <div className="searchbox">
      <Input
        addonBefore={`${title}: `}
        type="text"
        value={value}
        onChange={(event) => onChange(event.currentTarget.value)}
        placeholder="Search..."
        name="query"
        className=" form-control my-3"
        id={id}
      />
    </div>
  );
};

export default SearchBox;
