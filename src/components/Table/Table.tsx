import React, { useState } from "react";
import "./Table.scss";
export interface Props {
  cols: Array<any>;
  data: Array<any>;
  bordered?: boolean;
  hoverable?: boolean;
  striped?: boolean;
  isDark?: boolean;
  searchable?: boolean;
}
const Table = ({
  cols,
  data,
  bordered,
  hoverable,
  striped,
  isDark,
  searchable,
}: Props) => {
  const [search, setSearch] = useState<any[]>(data);
  const hadleSearch = (e: any) => {
    const val = e.target.value;
    if (val) {
      setTimeout(() => {
        setSearch([
          ...data.filter((row: any) => {
            return Object.values(row).join("").toLowerCase().includes(val);
          }),
        ]);
      }, 2000);
    } else {
      setTimeout(() => {
        setSearch(data);
      }, 2000);
    }
  };
  return (
    <div className="tableWrap">
      {searchable && (
        <div className="tableOptions">
          <input type="search" placeholder="Search..." onChange={hadleSearch} />
        </div>
      )}

      <table
        className={`table ${bordered ? " " + "table-bordered" : ""} ${
          hoverable ? " " + "table-hover" : ""
        } ${striped ? " " + "table-striped" : ""} ${
          isDark ? " " + "table-dark" : ""
        }`}
      >
        <thead>
          <tr>
            {cols?.map((headerItem: any, index: any) => (
              <th key={index} data-title={headerItem.title}>
                {headerItem.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {search.length !== 0
            ? search?.map((item: any, index: any) => (
                <tr key={index}>
                  {cols.map((col: any, key: any) => (
                    <td data-title={col.title} key={key}>
                      {col.render(item)}
                    </td>
                  ))}
                </tr>
              ))
            : data?.map((item: any, index: any) => (
                <tr key={index}>
                  {cols.map((col: any, key: any) => (
                    <td data-title={col.title} key={key}>
                      {col.render(item)}
                    </td>
                  ))}
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
