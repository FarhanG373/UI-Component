import React, { useState } from "react";
import RangeSlider from "../../components/RangeSlider/RangeSlider";
const RangeSlide = () => {
  const [rangeValue, setRangeValue] = useState(0);
  return (
    <RangeSlider
      min={0}
      max={100}
      value={rangeValue}
      onChange={(e) => {
        setRangeValue(+e.target.value);
      }}
      firstGradiant="Aqua"
      secondGradiant="BlueViolet"
      secondaryBgColor="White"
      rangeValue
    />
  );
};

export default RangeSlide;
