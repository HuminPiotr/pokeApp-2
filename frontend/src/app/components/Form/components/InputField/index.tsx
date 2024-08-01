import "./styles.scss";

import React from 'react';

interface InputfieldProps {
  title: string;
  value: string;
  name: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const InputField: React.FC<InputfieldProps> = ({title, value, name, placeholder="", onChange, required}) => {
  return (
    <div className="inputField">
      <label htmlFor={name} className="inputField__label">{title}</label>
      <input 
        type="text" 
        name={name} 
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="inputField__input"
       />

    </div>
  )
}

export default InputField