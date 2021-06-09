import React from 'react';
import './Flex.scss';

export type direction = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export type wrap = 'nowrap' | 'wrap' | 'wrap-reverse';
export type justify = 'justify-flex-start' | 'justify-flex-end' | 'justify-center' | 'justify-space-between' | 'justify-space-around' | 'justify-space-evenly' | 'justify-start' | 'justify-end' | 'justify-left' | 'justify-right';
export type align = 'align-stretch' | 'align-flex-start' | 'align-flex-end' | 'align-center' | 'align-baseline';
export type width = 'col-1' | 'col-2' | 'col-3' | 'col-4' | 'col-5' | 'col-6' | 'col-7' | 'col-8' | 'col-9' | 'col-10' | 'col-11' | "full-col";

export interface Props {
  FlexDirection?: direction,
  FlexWrap?: wrap,
  FlexJustify?: justify,
  FlexAlign?: align,
  CustomClass?: any,
  FlexWidth?:width,
  children?:any,
}

export const Flex = ({
  CustomClass,
  FlexDirection,
  children,
  FlexWrap,
  FlexJustify,
  FlexAlign,
  FlexWidth

}: Props) => {
  return (
    <div className={`flexDiv ${FlexDirection || ''} ${FlexWrap ? FlexWrap :''} ${FlexJustify || ''} ${FlexAlign || ''} ${FlexWidth || ''} ${CustomClass || ''}`}>
     {children}
    </div>
  )
}

export default Flex;
