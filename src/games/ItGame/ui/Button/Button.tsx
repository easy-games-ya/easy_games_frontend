import React, { FC, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import './Button.scss';
import { ButtonType } from '../../utils/enums';

type ButtonProps = {
  className?: string,
  type: ButtonType.BUTTON | ButtonType.SUBMIT | ButtonType.RESET,
  onClick?: void,
  to?: undefined,
  isDisabled?: boolean,
  children: ReactNode,
};

type LinkProps = {
  className?: string,
  type: ButtonType.LINK,
  onClick?: undefined,
  to: string,
  isDisabled?: boolean,
  children: ReactNode,
};

type ButtonComponentProps = ButtonProps | LinkProps;

const Button: FC<ButtonComponentProps> = ({
  className = '', type, onClick = () => {}, to, isDisabled = false, children,
}) => {
  const navigate = useNavigate(); // хук для использования программной навигации

  return (
    <button
      className={`button ${className}`}
      type={type === ButtonType.LINK ? ButtonType.BUTTON : type}
      onClick={type === ButtonType.LINK ? () => { navigate(to); } : onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
