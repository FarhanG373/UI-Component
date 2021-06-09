import React from 'react';
import "./Wrapper.scss";

export type wrap = 'fixWrap' | 'fluidWrap' | "customWrap";
export interface Props {
  wrapClass: wrap;
  children?: any;
  wrapId?: any;
}

export const Wrapper = ({
  wrapClass = "fixWrap",
  children,
  wrapId
}: Props) => {
  return (
    <div className={wrapClass} id={wrapId}>
      {children}
    </div>
  )
}

export default Wrapper;