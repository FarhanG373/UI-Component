import React, { useState, useEffect } from "react";
import "./DatePicker.scss";
import { monthName } from "./Const";
import { getSortedDays, Range, getNumberOfDays } from "./Utils";
export interface Props {
  minDate?: any;
  maxDate?: any;
  customClass?: string;
  id?: string;
}
const DatePicker = ({ minDate, maxDate, customClass, id }: Props) => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
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
  return (
    <div id={id} className={`datePicker${customClass ? ' '+customClass : ''}`} aria-label={`calender ${monthName[currentMonth]} ${currentYear}`} role="region">
      <div className="header">
        <button
          onClick={prevMonth}
          disabled={minDate?.getTime() > getTimeFromState(1)}
          aria-label="go to previous month"
        >
          Prev
        </button>
        <span id="yearHead">{monthName[currentMonth]} {currentYear}</span>
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
                  onClick={handleSelection}
                  aria-label={`date ${day}`}
                  aria-current={selectedDate && selectedDate?.getTime() === new Date(currentYear, currentMonth, day)?.getTime()
                    ? "true"
                    : 'false'}
                  id="day"
                  data-day={day}
                  key={day}
                  disabled={
                    (minDate && minDate?.getTime() > getTimeFromState(day)) ||
                    (maxDate && maxDate?.getTime() < getTimeFromState(day))
                  }
                  className={
                   selectedDate && selectedDate?.getTime() === new Date(currentYear, currentMonth, day)?.getTime()
                      ? "active"
                      : ''
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
  );
};

export default DatePicker;
