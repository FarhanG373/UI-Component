import React from 'react';
import './Heading.scss';
export type size = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface Props {
  title?: string,
  text?: string,
  Type: size,
  HeadingClass?: any,
  children?: string;
  HeadingId?: any;
}

export const Heading = ({
  
  Type:Element="h2",
  HeadingClass,
  children,
  HeadingId

}: Props) => {
  return <Element className={HeadingClass} id={HeadingId}>{children}</Element>
}

export default Heading;
