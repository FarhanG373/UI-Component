import React from "react";
import List from "../../components/List/List";
import ListItem from "../../components/List/ListItem";

const ListPage = () => {
  return (
    <div>
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
