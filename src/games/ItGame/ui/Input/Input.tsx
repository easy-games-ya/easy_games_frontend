import React from 'react';
import { InputType } from '../../utils/enums';
import './Input.css';

interface InputProps {
  className?: string,
  type: InputType,
  name: string,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const Input: React.FC<InputProps> = ({
  className, type, name, value, onChange,
}) => {
  return (
    <input className={`input ${className}`} type={type} name={name} value={value} onChange={onChange} />
  );
};

export default Input;
