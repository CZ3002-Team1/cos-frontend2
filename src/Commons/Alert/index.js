import { Alert } from 'antd';
import React from 'react';
import { ToastContainer, toast, cssTransition } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import './style.scss';

const Collapse = cssTransition({
  enter: 'expand-in',
  exit: 'collapse-out',
});

export const AlertContainer = (props) => {
  return (
    <ToastContainer
      theme="colored"
      position="top-center"
      autoClose={5000}
      pauseOnFocusLoss={false}
      pauseOnHover={true}
      transition={Collapse}
      limit={2}
      closeOnClick={false}
      rtl={false}
      className={'AlertContainer'}
      toastClassName={'AlertContainer__toast'}
      bodyClassName={'AlertContainer__body'}
    />
  );
};

export const errorAlert = (props = {}) => {
  const {
    className,
    message = '',
    error,
    options = {},
    onClose,
    ...rest
  } = props;

  if (error) {
    const detailMsg = _.get(error, 'response.data.detail');
    const errMsg = _.get(error, 'message');

    if (!detailMsg || typeof detailMsg !== 'string') {
      console.error('Alert message should be of type string');
      return toast.error(errMsg);
    }

    return toast.error(detailMsg);
  } else {
    if (message && typeof message === 'string') {
      return toast.error(message);
    }
  }
};

export const successAlert = (props = {}) => {
  const { message = '', ...rest } = props;

  if (message && typeof message === 'string') {
    return toast.success(message);
  }
};
