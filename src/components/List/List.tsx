import React from 'react';
import './List.scss';
export type listType = 'ol' | 'ul';
export type StyleType = "disc" | 'circle' | 'square' | 'decimal' | 'decimal-leading-zero' | 'lower-roman' | 'upper-roman' | 'lower-greek' | 'lower-latin' | 'upper-latin' | 'armenian' | 'lower-alpha' | 'upper-alpha' | 'none' | 'georgian';

export interface Props {
  TypeClass?: any;
  TypeId?: any;
  Type: listType;
  children?: any;
  ListStyleType?: StyleType;
}

const List = ({
  TypeClass,
  TypeId,
  Type: Element = 'ul',
  children,
  ListStyleType = "none"
}:Props) => {
  return (
    <Element className={TypeClass + " " + ListStyleType} id={TypeId}>
      {children}
    </Element>
  )
}

export default List
