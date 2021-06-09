import React from 'react'

export interface Props {
  ItemClass?: any;
  ItemId?: any;
  children?: any;
}

export const ListItem = ({
  ItemClass,
  ItemId,
  children
}:Props) => {
  return (
    <li className={ItemClass} id={ItemId}>
      {children}
    </li>
  )
}

export default ListItem;
