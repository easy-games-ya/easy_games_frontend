import React from 'react';
import './Button.css';

const Button = ({
  children, className = '', onClick = () => {}, isSubmit, isDisabled,
}) => {
  return (
    <button className={`button ${className}`} type={isSubmit ? 'submit' : 'button'} onClick={onClick} disabled={isDisabled}>
      {children}
    </button>
  );
};

export default Button;
