import React from 'react'
import Dropdown from '../../components/Dropdown/Dropdown';
import List from '../../components/List/List';
import ListItem from '../../components/List/ListItem';
import BreadCrumb from '../../components/Breadcrumb/BreadCrumb';
const DropDownPage = () => {
  return (
    <div>
      <BreadCrumb></BreadCrumb>
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