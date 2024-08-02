import { AbilityType } from "@/app/types/pokemon";
import "./styles.scss";

import React from 'react';

interface SelectInputProps {
  label: string;
  options: AbilityType[];
  value: AbilityType;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
}


const SelectField: React.FC<SelectInputProps> = ({ label, options, value, onChange, required = true }) => {
  return (
    <div className="selectField">
    <label className="selectField__label">{label}</label>
    <select 
      value={value.name}
      onChange={onChange}
      required={required}
      className="selectField__select"
    >
      <option id="0" value="" className="selectField__option" disabled>Umiejętność</option>
      {options.map((option) => (
        <option key={option.id} value={option.name} className="selectField__option">
          {option.name}
        </option>
      ))}
    </select>
  </div>
  )
}

export default SelectField;