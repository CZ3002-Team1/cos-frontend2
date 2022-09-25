import React from 'react';
import { Form } from 'antd';

//* Styles
import './style.scss';
import { Body2 } from 'Styles/Typography';
export const FormItem = (props) => {
  const { children = <></>, className = '', label = '', ...rest } = props;

  return (
    <Form.Item {...rest} className={`PSFormItem ${className}`}>
      <span className={`PSFormItem__label ${className}`}>{label}</span>
      {children}
    </Form.Item>
  );
};
