import React, { useState, useEffect } from "react";
import { TableColumn } from "./TableColumn";
import Table from "../../components/Table/Table";
import BreadCrumb from '../../components/Breadcrumb/BreadCrumb';
const TabelPage = () => {
  const [rows, setRows] = useState<Array<any>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((rows) => {
        setLoading(false);
        setRows(rows);
      });
  };

  useEffect(() => {
    fetchData();
  }, [loading]);
  const handleEdit = (item: any) => () => {
    alert(item);
  };
  if (loading) return <div>Loading...</div>;
  return <><BreadCrumb /><Table cols={TableColumn(handleEdit)} data={rows} /></>;
};

export default TabelPage;
