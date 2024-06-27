import React, { useState } from "react";
import TableHeader from "./TableHeader";
import TableRows from "./TableRows";
export interface Props {
  tableHeader: any;
  tableData: any;
  bordered?: boolean;
  striped?: boolean;
  hoverable?: boolean;
  isDark?: boolean;
  filterVisible?: boolean;
  orderByVisible?: boolean;
  sortVisible?: boolean;
}

export const capitalize = (str: string) => str?.replace(/\b\w/g, (substr) => substr.toUpperCase());

const Table = ({
  tableHeader,
  tableData,
  bordered,
  striped,
  hoverable,
  isDark,
  filterVisible = false,
  orderByVisible = false,
  sortVisible = false,
}: Props) => {
  const [sortedRows, setRows] = useState(tableData);
  const [order, setOrder] = useState("asc");
  const [sortKey, setSortKey] = useState(Object.keys(tableData));
  const handleFilter = (e: any) => {
    const val = e.target.value;
    if (val) {
      setRows([
        ...tableData.filter((row: any) => {
          return Object.values(row).join("").toLowerCase().includes(val);
        }),
      ]);
    } else {
      setRows(tableData);
    }
  };

  const sort = (value: any, order: string) => {
    const returnValue = order === "desc" ? 1 : -1;
    setSortKey(value);
    setRows([
      ...sortedRows.sort((a: any, b: any) => {
        return a[value] > b[value] ? returnValue * -1 : returnValue;
      }),
    ]);
  };

  const updateOrder = () => {
    const updatedOrder = order === "asc" ? "desc" : "asc";
    setOrder(updatedOrder);
    sort(sortKey, updatedOrder);
  };
  return (
    <div className="tableWrap">
      <div className="tableControls">
        {filterVisible === true ? (
          <div className="filter">
            <input
              type="search"
              placeholder="Filter items"
              onChange={handleFilter}
            />
          </div>
        ) : (
          ""
        )}
        {orderByVisible === true ? (
          <select onChange={(event) => sort(event.target.value, order)}>
            {Object.keys(tableData[0]).map((entry, index) => (
              <option value={entry} key={index}>
                Order by {capitalize(entry)}
              </option>
            ))}
          </select>
        ) : (
          ""
        )}
        {sortVisible === true ? (
          <button onClick={updateOrder}>Switch order ({order})</button>
        ) : (
          ""
        )}
      </div>
      {sortedRows.length > 0 ? (
        <table
          className={`table${bordered ? " " + "table-bordered" : ""}${
            hoverable ? " " + "table-hover" : ""
          }${striped ? " " + "table-striped" : ""}${
            isDark ? " " + "table-dark" : ""
          }`}
        >
          {(tableHeader !== undefined || null) &&
          (tableData !== undefined || null) ? (
            <>
              <TableHeader tableHeader={tableHeader}></TableHeader>
              <TableRows
                tableData={tableData}
                sortedRows={sortedRows}
              ></TableRows>
            </>
          ) : null}
        </table>
      ) : (
        <h1>No results... Try expanding the search</h1>
      )}
    </div>
  );
};

export default Table;
