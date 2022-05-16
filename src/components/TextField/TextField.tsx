import React from 'react';
import Label from '../Label/Label';

import './TextFiled.scss'

export type type = "input" | 'textarea';

export interface Props {
  TextFieldClass?: any;
  TextFieldId?: any;
  Type: type;
  value?: any,
  name?: any,
  PlaceHolder?: any,
  LabelName?: any
  SubType?: any
}

function TextField({
  TextFieldClass,
  TextFieldId,
  Type: Element = "input",
  value,
  name,
  PlaceHolder,
  LabelName,
  SubType
}:Props) {
  return (
    <>
      {LabelName &&
        <Label Labelfor={TextFieldId}>{LabelName}</Label>
      }
      <Element type={SubType} className={TextFieldClass} id={TextFieldId} name={name} value={value} placeholder={PlaceHolder} onChange={(e)=>e.target.value}/>
      </>
  )
}

export default TextField
