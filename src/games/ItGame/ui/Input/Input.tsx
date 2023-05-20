import React, { FC, ChangeEvent } from 'react';
import { InputType } from '../../utils/enums';
import './Input.scss';

interface InputProps {
  className?: string,
  type: InputType,
  name: string,
  value: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
}

const Input: FC<InputProps> = ({
  className, type, name, value, onChange,
}) => {
  return (
    <input className={`input ${className}`} type={type} name={name} value={value} onChange={onChange} />
  );
};

export default Input;
