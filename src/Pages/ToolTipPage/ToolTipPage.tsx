import React from 'react'
import ToolTip from '../../components/ToolTip/ToolTip'
import BreadCrumb from '../../components/Breadcrumb/BreadCrumb';
const ToolTipPage = () => {
  return (
    <div>
      <BreadCrumb/>
      <ToolTip
            tooltipLabel={`tooltip(click me)`}
            tootTipContent={`ewrewrewr`}
          ></ToolTip>
    </div>
  )
}

export default ToolTipPage