import React from 'react';
import { Input } from 'antd';

//* Styles
import './style.scss';

export const CustomInput = (props) => {
  const {
    width = 300,
    className = '',
    placeholder = '',
    ...rest
  } = props;

  return (
    <Input style={{ width: width }} className={`customInput ${className}`} placeholder={placeholder} {...rest} />
  )
};
