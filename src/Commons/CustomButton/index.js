import React from 'react';
import { Button } from 'antd';
import { Fragment } from 'react';
import { LoadingOutlined } from '@ant-design/icons';

//* Styles
import './style.scss';
import { Header1, Text } from 'Styles/Typography';
// import { ReactComponent as RefSvg } from '../Assets/Icon/reference.svg';

const CustomButtonType = {
  Primary: 'primary',
  Secondary: 'secondary',
  Dashed: 'dashed',
  Link: 'link',
  Text: 'text',
}

const ButtonLabel = (props) => {
  const { className, ...rest } = props;
  return <Text className={`ButtonLabel ${className}`} {...rest}>
    {props.children}
  </Text>;
};


export const CustomButton = (props) => {
  const {
    white = false,
    name = '',
    className = '',
    children = <Fragment></Fragment>,
    loading = false,
    font = 'default',
    type,
    isLink = false,
    ...rest
  } = props;
  switch (type) {
    default: {
      return (
        <Button
          className={`
					CustomButtonRoot
					${white && 'CustomButtonRoot__white'}
					${className}
          ${'CustomButtonRoot-' + type}
					`}
          {...rest}
        >
          {loading && (
            <LoadingOutlined
              className={`CustomButtonRoot__loader`}
            />
          )}
          {!loading && children}
          {font === 'Header1' ? (
            <ButtonLabel
              className={`
               CustomButtonRoot__text
               ${type && 'ButtonLabel-secondary'}
               ${white && 'CustomButtonRoot__text__white'}
             `}
            >
              {name}
            </ButtonLabel>
          ) : (
            <ButtonLabel
              className={`
								CustomButtonRoot__text
                ${'ButtonLabel-' + type}
								${white && 'CustomButtonRoot__text__white'}
							`}
            >
              {name}
            </ButtonLabel>
          )}
          {/* {isLink && (
            <RefSvg className={'CustomButtonRoot__reficon'} />
          )} */}
        </Button>
      );
    }
  }
};

export const CircleButton = ({ className, small, children, ...rest }) => {
  return (
    <button {...rest} className={`CircleButtonContainer`} >
      <div
        className={small && 'RoundButton-small ' + `RoundButton ${className}`}

      >
        {children ? children :
          <div className="RoundButton__triangle"></div>
        }
      </div>
    </button>
  )

}