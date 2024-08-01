import "./styles.scss";

import React from 'react';

interface SelectInputProps {
  label: string;
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
}


const SelectField: React.FC<SelectInputProps> = ({ label, options, value, onChange, required = true }) => {
  return (
    <div className="selectField">
    <label className="selectField__label">{label}</label>
    <select 
      value={value}
      onChange={onChange}
      required={required}
      className="selectField__select"
    >
      <option value="" className="selectField__option" disabled>Umiejętność</option>
      {options.map((option) => (
        <option key={option} value={option} className="selectField__option">
          {option}
        </option>
      ))}
    </select>
  </div>
  )
}

export default SelectField;