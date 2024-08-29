import React, { useState } from "react";
import "./TabMenu.scss";
import Tab from "./Tab";

export interface Props {
  Label: any[];
  Value: any[];
}
const TabMenu = ({ Label, Value }: Props) => {
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (index: number) => {
    setActiveTab(index + 1);
  };
  return (
    <>
      <div className="tabs-container" role="tabpanel">
        <div className="tabs" role="tablist">
          {Label.map((tab: any, index: number) => (
            <Tab
              key={index}
              label={Label[index]}
              onClick={() => handleTabClick(index)}
              isActive={index + 1 === activeTab}
            />
          ))}
        </div>
        <div className="tab-content">
          {activeTab &&
            Value.map((tab: any, index: number) => (
              <div
                key={index}
                className={`content${activeTab === index + 1 ? " " + "active" : ""}`}
              >
                {Value[index]}
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default TabMenu;
