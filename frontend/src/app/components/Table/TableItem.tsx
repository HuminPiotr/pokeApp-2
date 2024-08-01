'use client';
import "./styles.scss";

import React from 'react'

interface TableItemProps {
  name: string;
  id: number;
  removeFunction: (id: number) => Promise<void>; 
}

const TableItem: React.FC<TableItemProps> =  ({ name, id, removeFunction }) => {

  return (
    <li className="tableItem">
        <p className="tableItem__name">{ name }</p>
        <button className="tableItem__deleteButton" onClick={() => removeFunction(id)}>usuń</button>
    </li>
  )
}

export default TableItem;