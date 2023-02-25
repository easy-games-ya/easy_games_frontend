import React, { FC, ReactNode } from 'react';
import { ButtonType } from '../../utils/enums';
import './Button.css';

interface ButtonProps {
  className?: string,
  onClick?: () => {},
  isDisabled?: boolean,
  type: ButtonType,
  children: ReactNode,
}

const Button: FC<ButtonProps> = ({
  className = '', onClick = () => {}, isDisabled = true, type, children,
}) => {
  return (
    <button className={`button ${className}`} type={type} onClick={onClick} disabled={isDisabled}>
      {children}
    </button>
  );
};

export default Button;
