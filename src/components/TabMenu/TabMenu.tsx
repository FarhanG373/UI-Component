import React, { useState } from "react";
import "./TabMenu.scss";
import Tab from "./Tab";

export interface Props {
  tabs: any[];
}
const TabMenu = ({ tabs }: Props) => {
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (index: number) => {
    setActiveTab(index + 1);
  };
  return (
    <>
      <div className="tabs-container" role="tabpanel">
        <div className="tabs" role="tablist">
          {tabs.map((tab: any, index: number) => (
            <Tab
              key={index}
              label={tab.label}
              onClick={() => handleTabClick(index)}
              isActive={index + 1 === activeTab}
            />
          ))}
        </div>
        <div className="tab-content">
          {activeTab &&
            tabs.map((tab: any, index: number) => (
              <div
                className={`content${activeTab === index + 1 ? " " + "active" : ""}`}
              >
                {tab.value}
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default TabMenu;
