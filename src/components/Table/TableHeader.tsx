import React from "react";
import "./Table.scss";
export interface Props {
  tableHeader: any;
}
const TableHeader = ({ tableHeader }: Props) => {
  return (
    <thead>
      <tr>
        {Object?.keys(tableHeader[0])?.map((key:any) => {
          return <th key={key}>{key}</th>;
        })}
      </tr>
    </thead>
  );
};

export default TableHeader;
