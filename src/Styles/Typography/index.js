import React from 'react';

import './style.scss';

export const Text = ({ className, children, ...rest }) => {
  return (
    <span className={`TypographyRoot ${className}`} {...rest}>
      {children}
    </span>
  );
};

export const Header1 = (props) => {
  const { className, ...rest } = props;
  return (
    <Text className={`Typo-H H1 ${className}`} {...rest}>
      {props.children}
    </Text>
  );
};

export const Header2 = (props) => {
  const { className, ...rest } = props;
  return (
    <Text className={`Typo-H H2 ${className}`} {...rest}>
      {props.children}
    </Text>
  );
};

export const Header3 = (props) => {
  const { className, ...rest } = props;
  return (
    <Text className={`Typo-H H3 ${className}`} {...rest}>
      {props.children}
    </Text>
  );
};

export const Body1 = (props) => {
  const { className, ...rest } = props;
  return (
    <Text className={`Typo B1 ${className}`} {...rest}>
      {props.children}
    </Text>
  );
};

export const Body2 = (props) => {
  const { className, ...rest } = props;
  return (
    <Text className={`Typo B2 ${className}`} {...rest}>
      {props.children}
    </Text>
  );
};
