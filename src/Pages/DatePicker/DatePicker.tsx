import React from "react";
import DatePicker from "../../components/DatePicker/DatePicker";
import BreadCrumb from "../../components/Breadcrumb/BreadCrumb";
import { FaRegCalendarCheck } from "react-icons/fa6";
const DatePickerPage = () => {
  return (
    <div>
      <BreadCrumb />
      <h3>Without min max value</h3>
      <DatePicker dateFormate="MMMM DD, YYYY" />
      <h3>With min max value (oct 01 2024 to dec 31 2024)</h3>

      <DatePicker
        minDate={new Date("Oct 01 2024")}
        maxDate={new Date("Dec 31 2024")}
        dateIcon={<FaRegCalendarCheck />}
      />
    </div>
  );
};

export default DatePickerPage;
