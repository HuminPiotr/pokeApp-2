'use client';
import "./styles.scss";

import React, {useState} from 'react'

interface TableItemProps {
  name: string;
  ability: string;
  id: number;
  removeFunction: (id: number) => Promise<void>; 
}

const TableItem: React.FC<TableItemProps> =  ({ name, ability, id, removeFunction }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <li className="tableItem">
        <p 
          className="tableItem__name"
          >
          <span className="tableItem__iconInfo" onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>ℹ︎</span>
          { name }
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