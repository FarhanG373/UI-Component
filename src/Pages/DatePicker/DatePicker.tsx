import React from 'react';
import DatePicker from '../../components/DatePicker/DatePicker';
import BreadCrumb from '../../components/Breadcrumb/BreadCrumb';

const DatePickerPage = () => {
  return (
    <div>
      <BreadCrumb/>
      <h3>Without min max value</h3>
      <DatePicker />
      <h3>With min max value (oct 01 2024 to dec 31 2024)</h3>

    <DatePicker minDate={new Date('Oct 01 2024')} maxDate={new Date('Dec 31 2024')}/></div>
  )
}

export default DatePickerPage