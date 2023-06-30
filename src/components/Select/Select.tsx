import React from 'react';
import './Select.scss';
export interface Props {
  selectClass?: any;
  selectId?: any;
  selectValue: any;
  children?: any;
}
const Select = ({
  selectClass,
  selectId,
  selectValue,
  children
}:Props) => {
  return (
    <select className={`select${selectClass?(' ' + selectClass) :''}`} id={selectId} value={selectValue} onChange={(e) => e.target.value}>
      {children}
    </select>
  )
}

export default Select