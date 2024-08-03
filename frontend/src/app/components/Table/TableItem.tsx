'use client';
import "./styles.scss";

import React, {useState} from 'react'
import { GenderType } from "@/app/types/pokemon";

interface TableItemProps {
  name: string;
  ability: string;
  gender: GenderType;
  id: number;
  removeFunction: (id: number) => Promise<void>; 
}

const TableItem: React.FC<TableItemProps> =  ({ name, ability, gender, id, removeFunction }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getGenderIcon = ( gender: GenderType): string => {
    if(gender === 'male' ) return '♂︎';
    if(gender === 'female' ) return '♀︎';
    if(gender === 'genderless' ) return '⚤';
    else return '';
  }

  return (
    <li className="tableItem">
        <p 
          className="tableItem__name"
          >
          <span className="tableItem__iconInfo" onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>ℹ︎</span>
          { name } 
          <span className="tableItem__gender">{getGenderIcon(gender)}</span>
        </p>

        {isHovered && (
          <span className="tableItem__tooltip">
            {ability}
          </span>
        )}
        <button className="tableItem__deleteButton" onClick={() => removeFunction(id)}>usuń</button>
    </li>
  )
} 

export default TableItem;