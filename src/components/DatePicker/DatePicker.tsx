import React, { useState, useEffect } from "react";
import "./DatePicker.scss";
import { monthName } from "./Const";
import { getSortedDays, Range, getNumberOfDays } from "./Utils";
import { FaRegCalendarDays } from "react-icons/fa6";
import moment from "moment";
export type dateFormate =
  | "DD/MM/YYYY"
  | "DD-MM-YYYY"
  | "MM/DD/YYYY"
  | "MM-DD-YYYY"
  | "MM DD YYYY"
  | "YYYY/MM/DD"
  | "YYYY-MM-DD"
  | "MMM DD, YYYY"
  | "MMM D, YY"
  | "MMMM DD, YYYY"
  | "MMMM D, YY";
export interface Props {
  minDate?: any;
  maxDate?: any;
  customClass?: string;
  id?: string;
  dateIcon?: any;
  dateFormate?: dateFormate;
  ariaLabel?: string;
}
const DatePicker = ({
  minDate,
  maxDate,
  customClass,
  id,
  dateIcon,
  dateFormate = "DD-MM-YYYY",
  ariaLabel = "Select date",
}: Props) => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [open, setOpen] = useState(false);
  const nextMonth = () => {
    if (currentMonth < 11) {
      setCurrentMonth((prev) => prev + 1);
    } else {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    }
  };

  const prevMonth = () => {
    if (currentMonth > 0) {
      setCurrentMonth((prev) => prev - 1);
    } else {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    }
  };

  const handleSelection = (e: any) => {
    if (e.target.id === "day") {
      const dayAttribute = e.target.getAttribute("data-day");
      if (dayAttribute !== null) {
        setSelectedDate(
          new Date(currentYear, currentMonth, parseInt(dayAttribute))
        );
      }
    }
  };
  const getTimeFromState = (_day: any) => {
    return new Date(currentYear, currentMonth, _day).getTime();
  };
  const openDate = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="dateSelection">
        <input
          type="text"
          placeholder={`Select Date`}
          value={
            selectedDate
              ? moment(selectedDate.toLocaleDateString()).format(dateFormate)
              : ""
          }
          readOnly
          disabled
        />
        <button onClick={openDate} aria-label={ariaLabel}>
          {dateIcon ? dateIcon : <FaRegCalendarDays />}
        </button>
      </div>
      {open && (
        <div
          id={id}
          className={`datePicker${customClass ? " " + customClass : ""}`}
          aria-label={`calender ${monthName[currentMonth]} ${currentYear}`}
          role="region"
        >
          <div className="header">
            <button
              onClick={prevMonth}
              disabled={minDate?.getTime() > getTimeFromState(1)}
              aria-label="go to previous month"
            >
              Prev
            </button>
            <span id="yearHead">
              {monthName[currentMonth]} {currentYear}
            </span>
            <button
              aria-label="go to next month"
              onClick={nextMonth}
              disabled={
                maxDate?.getTime() <
                getTimeFromState(getNumberOfDays(currentYear, currentMonth))
              }
            >
              Next
            </button>
          </div>
          <div className="body">
            <div className="days">
              {getSortedDays(currentYear, currentMonth).map((day: any) => {
                return (
                  <div
                    key={day}
                    className={`day ${
                      day === new Date().getDate() &&
                      currentMonth === new Date().getMonth() &&
                      currentYear === new Date().getFullYear()
                        ? "selected"
                        : ""
                    }`}
                  >
                    {day}
                  </div>
                );
              })}
            </div>
            <div className={`dates`}>
              {Range(1, getNumberOfDays(currentYear, currentMonth) + 1).map(
                (day: any) => {
                  return (
                    <button
                      onClick={(e) => {
                        handleSelection(e);
                        openDate();
                      }}
                      aria-label={`date ${day}`}
                      aria-current={
                        selectedDate &&
                        selectedDate?.getTime() ===
                          new Date(currentYear, currentMonth, day)?.getTime()
                          ? "true"
                          : "false"
                      }
                      id="day"
                      data-day={day}
                      key={day}
                      disabled={
                        (minDate &&
                          minDate?.getTime() > getTimeFromState(day)) ||
                        (maxDate && maxDate?.getTime() < getTimeFromState(day))
                      }
                      className={
                        selectedDate &&
                        selectedDate?.getTime() ===
                          new Date(currentYear, currentMonth, day)?.getTime()
                          ? "active"
                          : ""
                      }
                    >
                      {day}
                    </button>
                  );
                }
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DatePicker;
