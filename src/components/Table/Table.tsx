import React from "react";
import './Table.scss'
export interface Props {
  cols: Array<any>;
  data: Array<any>;
  bordered?: boolean;
  hoverable?: boolean;
  striped?: boolean;
  isDark?: boolean;
}
const Table = ({ cols, data, bordered, hoverable, striped, isDark }: Props) => {
  return (
    <div className="tableWrap">
      <table
        className={`table
        ${bordered ? " " + "table-bordered" : ""}
        ${hoverable ? " " + "table-hover" : ""}
        ${striped ? " " + "table-striped" : ""}
        ${isDark ? " " + "table-dark" : ""}
        `}
      >
        <thead>
          <tr>
            {cols?.map((headerItem:any, index:any) => (
              <th key={index} data-title={headerItem.title}>{headerItem.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((item:any, index:any) => (
            <tr key={index}>
              {cols.map((col:any, key:any) => (
                <td data-title={col.title} key={key}>{col.render(item)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
