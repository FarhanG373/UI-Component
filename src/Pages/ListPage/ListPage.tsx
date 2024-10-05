import React from "react";
import List from "../../components/List/List";
import ListItem from "../../components/List/ListItem";
import BreadCrumb from '../../components/Breadcrumb/BreadCrumb';
const ListPage = () => {
  return (
    <div>
      <BreadCrumb/>
      <List ListStyleType="none" Type="ul">
        <ListItem>123</ListItem>
        <ListItem>123</ListItem>
        <ListItem>123</ListItem>
        <ListItem>123</ListItem>
        <ListItem>123</ListItem>
      </List>
    </div>
  );
};

export default ListPage;
