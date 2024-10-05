import React, { useState } from "react";
import RangeSlider from "../../components/RangeSlider/RangeSlider";
import BreadCrumb from '../../components/Breadcrumb/BreadCrumb';
const RangeSlide = () => {
  const [rangeValue, setRangeValue] = useState(0);
  return (
    <><BreadCrumb /><RangeSlider
      min={0}
      max={100}
      value={rangeValue}
      onChange={(e) => {
        setRangeValue(+e.target.value);
      } }
      firstGradiant="Aqua"
      secondGradiant="BlueViolet"
      secondaryBgColor="White"
      rangeValue /></>
  );
};

export default RangeSlide;
