import React from 'react';
import './Paragraph.scss';

export interface Props {
  ParaClass?: any;
  ParaId?: any;
  children?: any;

}

export const Para = ({
  ParaClass,
  ParaId ,
  children
}:Props) => {
  return (
    <p className={ParaClass} id={ParaId}>{ children }</p>
  )
}

export default Para;
