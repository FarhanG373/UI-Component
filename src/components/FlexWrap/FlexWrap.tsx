import React from 'react';
import './FlexWrap.scss';
export type direction = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export type wrap = 'nowrap' | 'wrap' | 'wrap-reverse';
export type justify = 'justify-flex-start' | 'justify-flex-end' | 'justify-center' | 'justify-space-between' | 'justify-space-around' | 'justify-space-evenly' | 'justify-start' | 'justify-end' | 'justify-left' | 'justify-right';
export type align = 'align-stretch' | 'align-flex-start' | 'align-flex-end' | 'align-center' | 'align-baseline';
export interface Props {
  FlexDirection?: direction,
  FlexWrap?: wrap,
  FlexJustify?: justify,
  FlexAlign?: align,
  CustomClass?: any,
  children?:any,
}
const FlexWrap = ({
  CustomClass,
  FlexDirection,
  children,
  FlexWrap,
  FlexJustify,
  FlexAlign

}: Props) => {
  return (
    <div className={`flexWrap${FlexDirection ? (' ' + FlexDirection) : ''}${FlexWrap ? (" " + FlexWrap) : ''}${FlexJustify ? (" " + FlexJustify) : ''}${FlexAlign ? (" " + FlexAlign) : ''}${CustomClass ?(' ' + CustomClass) :''}`}>{ children}</div>
  )
}

export default FlexWrap