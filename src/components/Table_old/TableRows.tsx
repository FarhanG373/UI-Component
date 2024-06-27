import React from "react";
import "./Table.scss";
export interface Props {
  tableData: any;
  sortedRows: any;
}
const TableRows = ({ tableData, sortedRows }: Props) => {
  return (
    <tbody>
      {sortedRows.map((tableData: any) => {
        return (
          <tr>
            {Object.values(tableData).map((row: any, index) => {
              return <td key={index}>{[row]}</td>;
            })}
          </tr>
        );
      })}
      <tr></tr>
    </tbody>
  );
};

export default TableRows;
