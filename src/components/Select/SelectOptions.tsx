import React from 'react'
import './Select.scss';
export interface Props {
  optionValue: any;
  optionLabel:any
}
const SelectOptions = ({optionValue, optionLabel}:Props) => {
  return (
    <option value={optionValue}>{optionLabel}</option>
  )
}

export default SelectOptions