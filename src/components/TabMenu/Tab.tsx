import React, { useState } from "react";
import Button from "../Button/Button";
export interface Props {
  label: any;
  onClick: () => void;
  isActive: boolean;
}
const Tab = ({ label, onClick, isActive }: Props) => (
  <Button
    customClass={`tab${isActive ? " " + "active" : ""}`}
    onClick={onClick}
  >
    {label}
  </Button>
);

export default Tab;
