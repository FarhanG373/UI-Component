import React, { useState, useEffect } from "react";
import { TableColumn } from "./TableColumn";
import Table from "../components/Table/Table";
const TabelPage = () => {
  const [rows, setRows] = useState<Array<any>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((rows) => {
        setLoading(true);
        setRows(rows);
      });
  };

  useEffect(() => {
    fetchData();
  }, [loading]);
  const handleEdit = (item: any) => () => {
    alert(item);
  };
  return <Table cols={TableColumn(handleEdit)} data={rows} />;
};

export default TabelPage;
