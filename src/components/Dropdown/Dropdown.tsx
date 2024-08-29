import React, { useState, useEffect, useRef } from "react";
import "./Dropdown.scss";
export interface Props {
  fieldClass?: any;
  fieldId?: any;
  children: any;
  filedFocus?: any;
  fieldBlur?: any;
  fieldClick?: any;
  dropdownClass?: any;
  dropdownBtnName: any;
}

const Dropdown = ({
  children,
  fieldId,
  fieldClass,
  filedFocus,
  fieldBlur,
  dropdownClass,
  dropdownBtnName,
}: Props) => {
  const [fClick, setFclick] = useState(false);

  useEffect(() => {
    if (fClick) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [fClick]);
  const dropdownRef = useRef<any>();
  const handleClickOutside = (event: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setFclick(false);
      console.log(fClick);
    }
  };
  return (
    <div className="drop_down" ref={dropdownRef}>
      <button
        className={`dropdownBtn${fieldClass ? " " + fieldClass : ""} ${
          fClick ? "dropOpen" : "dropClose"
        }`}
        id={fieldId}
        onBlur={fieldBlur}
        onFocus={filedFocus}
        onClick={() => setFclick(!fClick)}
      >
        {dropdownBtnName}
      </button>
      {fClick && (
        <div
          className={`drop_container${
            dropdownClass ? " " + dropdownClass : ""
          }`}
          onClick={() => setFclick(!fClick)}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
