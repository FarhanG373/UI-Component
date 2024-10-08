import React from 'react';
import Label from '../../components/Label/Label';
import TextField from '../../components/TextField/TextField';
import BreadCrumb from '../../components/Breadcrumb/BreadCrumb';
const FormElement = () => {
  return (
    <div>
      <BreadCrumb></BreadCrumb>
      <Label Labelfor={`123`}>Input text</Label>
      <TextField Type='input' SubType={'text'} TextFieldId={`123`}></TextField>
      <Label Labelfor={`1234`}>Text area </Label>
      <TextField Type='textarea' TextFieldId={`1234`}></TextField>
    </div>
  )
}

export default FormElement