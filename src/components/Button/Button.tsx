import React from 'react';
import './Button.scss';
export type color = 'primary' | 'secondary' | 'success' | 'danger' | 'ButCustomClass'

export interface Props {
  ButtonClass:color;
  ButtonId?: any;
  children?: any;

}

const Button = ({
  ButtonClass = "primary",
  ButtonId,
  children,
}: Props) => {
  return (
    <button className={ButtonClass} id={ButtonId}>
      {children}
    </button>
  )
}

export default Button
