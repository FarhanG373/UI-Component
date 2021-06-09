import React from 'react';
import './Label.scss';
export interface Props {
  LabelClass?: any,
  LabelId?: any,
  children?: any,
  Labelfor?: any,
  
}

const Label = ({
  LabelClass,
  LabelId,
  Labelfor,
  children
}:Props) => {
  return (
    <label className={LabelClass} id={LabelId} htmlFor={Labelfor}>
      {children}
    </label>
  )
}

export default Label
