import React, { useState } from "react";
import SingleAccord from "./SingleAccord";

import "./Accordian.scss";

export interface Props {
  title: any[];
  content: any[];
}

const Accordian = ({ title, content }: Props) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const btnOnClick = (idx: number) => {
    setCurrentIdx((currentValue) => (currentValue !== idx ? idx : -1));
  };
  return (
    <ul className="accordion">
      {title?.map((item: any, idx: any) => (
        <SingleAccord
          key={idx}
          title={title[idx]}
          content={content[idx]}
          isOpen={idx === currentIdx}
          btnOnClick={() => btnOnClick(idx)}
        />
      ))}
    </ul>
  );
};

export default Accordian;
