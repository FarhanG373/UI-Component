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
  LabelName?:any,
}

function TextField({
  TextFieldClass,
  TextFieldId,
  Type: Element = "input",
  value,
  name,
  PlaceHolder,
  LabelName
}:Props) {
  return (
    <>
      {LabelName &&
        <Label Labelfor={TextFieldId}>{LabelName}</Label>
      }
      <Element className={TextFieldClass} id={TextFieldId} name={name} value={value} placeholder={PlaceHolder} />
      </>
  )
}

export default TextField
