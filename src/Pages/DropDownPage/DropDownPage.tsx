import React from 'react'
import Dropdown from '../../components/Dropdown/Dropdown';
import List from '../../components/List/List';
import ListItem from '../../components/List/ListItem';

const DropDownPage = () => {
  return (
    <div>
      <Dropdown dropdownBtnName={`DropDown`}>
      <List ListStyleType="none" Type="ul">
        <ListItem>123</ListItem>
        <ListItem>123</ListItem>
        <ListItem>123</ListItem>
        <ListItem>123</ListItem>
        <ListItem>123</ListItem>
      </List>
       </Dropdown>
    </div>
  )
}

export default DropDownPage