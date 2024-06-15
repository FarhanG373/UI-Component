import React from 'react';
import './Button.scss';
export type color = 'primary' | 'secondary' | 'success' | 'danger' | 'ButCustomClass' | 'plain'

export interface Props {
  ButtonClass?:color;
  ButtonId?: any;
  children?: any;
  onClick?: any;
  link?: any;
  customClass?: any;
}

const Button = ({
  ButtonClass = "primary",
  ButtonId,
  children,
  onClick,
  link,
  customClass
}: Props) => {
  return (
    <>
    {
        link ?
          <a href={link} className={`btn btn-link`} id={ButtonId} onClick={onClick}>{children}</a>
          :
          <button className={`btn${ButtonClass ? (" " + ButtonClass): ''}${customClass ? " "+customClass : ''}`} id={ButtonId} onClick={onClick}>
      {children}
    </button>
    }
    </>
    
  )
}

export default Button
