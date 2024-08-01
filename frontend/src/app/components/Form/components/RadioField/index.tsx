import "./styles.scss";

import React from 'react';
import { GenderType } from "@/app/types/pokemon";

interface RadioFieldProps {
  name: string;
  label: string;
  selectedValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface GenderOption {
  name: string;
  value: GenderType;
}

const RadioField: React.FC<RadioFieldProps> = ({ name, label, selectedValue, onChange }) => {

  const genderOptions: GenderOption[] = [
    { name: "Mężczyzna", value: "male"},  
    { name: "Kobieta", value: "female"},  
    { name: "Bezpłciowy", value: "genderless"}  
  ];

  return (
    <div className="radioField">
      <p className="radioField__title">{label}</p>
      <div className="radioField__radios">
        {genderOptions.map((gender) => (
          <label key={gender.value} htmlFor={gender.value} className="radioField__radio">
            <input
              type="radio"
              id={gender.value}
              name={name}
              value={gender.value}
              checked={selectedValue === gender.value}
              onChange={onChange}
              className="radioField__input"
            />
            {gender.name}
            <span className="radioField__checkmark"></span>
          </label>
        ))}
      </div>

    </div>
  );
};

export default RadioField;