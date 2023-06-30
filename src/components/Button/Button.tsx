import React from 'react';
import './Button.scss';
export type color = 'primary' | 'secondary' | 'success' | 'danger' | 'ButCustomClass' | 'plain'

export interface Props {
  ButtonClass?:color;
  ButtonId?: any;
  children?: any;
onClick?:any
}

const Button = ({
  ButtonClass = "primary",
  ButtonId,
  children,
  onClick
}: Props) => {
  return (
    <button className={`btn${ButtonClass ? (" " + ButtonClass): ''}`} id={ButtonId} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
