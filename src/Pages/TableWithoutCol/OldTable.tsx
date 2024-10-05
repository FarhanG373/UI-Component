import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "../../components/Table_old/Table";
import BreadCrumb from '../../components/Breadcrumb/BreadCrumb';
const useFeatchData = (url: string) => {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get(url);
        console.log(resp.data);

        const respData = resp.data.map(
          ({
            id,
            address,
            company,
            ...item
          }: {
            id: Number;
            [key: string]: any;
          }) => item
        );
        setData(respData);
      } catch (error) {
        setError("Failed to fetch data");
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { data, isLoading, error };
};
const OldTable = () => {
  const { data, isLoading, error } = useFeatchData(
    "https://jsonplaceholder.typicode.com/users"
  );
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (data && data.length > 0) {
    return <><BreadCrumb /><Table tableData={data} tableHeader={data}></Table></>;
  }
  return <div>No data available</div>;
};

export default OldTable;
