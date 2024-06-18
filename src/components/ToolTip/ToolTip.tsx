import React, { useState } from "react";
import "./ToolTip.scss";
export interface Props {
  tootTipContent: any;
  tooltipLabel: any;
  tooltipClass?: any;
  tooltipId?: any;
  tooltipClick?: any;
}
const ToolTip = ({
  tootTipContent,
  tooltipLabel,
  tooltipClass,
  tooltipId,
  tooltipClick,
}: Props) => {
  const [ttOpen, setTTOpen] = useState(false);

  return (
    <div className={`toolTip${ttOpen ? " open" : ""}`}>
      <button
        className={`ttBtn${tooltipClass ? " " + tooltipClass : ""}`}
        id={tooltipId}
        onClick={tooltipClick || (() => setTTOpen(!ttOpen))}
      >
        {tooltipLabel ? tooltipLabel:<span></span>}
      </button>
      <div className={`ttContent`}>{tootTipContent}</div>
    </div>
  );
};

export default ToolTip;
