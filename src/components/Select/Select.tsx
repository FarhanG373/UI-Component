import React from 'react';

export interface Props {
  SelectClass?: any;
  SelectId?: any;
  children?: any;
}

const Select = ({
  SelectClass,
  SelectId,
  children,
}:Props) => {
  return (
    <select className={SelectClass} id={SelectId}>
      { children}
    </select>
  )
}

export default Select
