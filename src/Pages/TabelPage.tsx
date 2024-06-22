import React, { useState, useEffect } from 'react';
import Table from '../components/Table/Table';

interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

const TabelPage = () => {
  const [rows, setRows] = useState<Todo[]>();
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    await fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((rows: Todo[]) => {
        setLoading(true);
        setRows(rows);
      });
  };

  useEffect(() => {
    fetchData();
  }, [loading]);

  return (
    <Table tableHeader={rows} tableData={rows}/>
  );
};

export default TabelPage;