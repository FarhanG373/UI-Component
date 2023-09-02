import React from 'react';
import Label from '../Label/Label';

import './TextFiled.scss'

export type input = "input" | 'textarea';
export type type = 'text' | 'radio' | 'checkbox' | 'color' | 'file' | 'date' | 'time' | 'datetime-local' |'submit' | 'button' | 'email' | 'hidden' | 'image' | 'number' | 'password' | 'range' | 'search' | 'url';

export interface Props {
  TextFieldClass?: any;
  TextFieldId?: any;
  Type: input;
  value?: any,
  name?: any,
  PlaceHolder?: any,
  LabelName?: any
  SubType?: type,
  onClick?: any,
  onBlur?: any,
  onFocus?:any,
}

function TextField({
  TextFieldClass,
  TextFieldId,
  Type: Element = "input",
  value,
  name,
  PlaceHolder,
  LabelName,
  SubType = 'text',
  onClick,
  onBlur,
  onFocus
}:Props) {
  return (
    <>
      {LabelName &&
        <Label Labelfor={TextFieldId}>{LabelName}</Label>
      }
      <Element onClick={onClick} onBlur={onBlur} onFocus={onFocus} type={SubType} className={TextFieldClass} id={TextFieldId} name={name} value={value} placeholder={PlaceHolder} onChange={(e)=>e.target.value}/>
      </>
  )
}

export default TextField
