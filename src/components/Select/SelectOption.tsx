import React from 'react'
export interface Props {
  children?: any;
}
const SelectOption = ({children}:Props) => {
  return (
    <option>
      {children}
    </option>
  )
}

export default SelectOption
