import React from "react";

export const TableColumn = (handleEdit) => {
  return [
    {
      title: "",
      render: (rowData) => {
        return (
          <>
            <input
              type="checkbox"
              id={rowData.id}
              onClick={handleEdit(rowData.id)}
            />
            <label htmlFor={rowData.id} className="tableLabel">
              <span className="sr-only">{rowData.name}</span>
            </label>
          </>
        );
      },
    },
    {
      title: "id",
      render: (rowData) => {
        return rowData.id;
      },
    },
    {
      title: "Name",
      render: (rowData) => {
        return rowData.name;
      },
    },
    {
      title: "UserName",
      render: (rowData) => {
        return rowData.username;
      },
    },
    {
      title: "Email",
      render: (rowData) => {
        return rowData.email;
      },
    },
    {
      title: "Address",
      render: (rowData) => {
        return (
          <>
            <span>{rowData.address.suite}</span>
            <span>{rowData.address.street}</span>
            <span>{rowData.address.city}</span>
            <span>{rowData.address.zipcode}</span>
          </>
        );
      },
    },
    {
      title: "Action",
      render: (rowData) => {
        return <button onClick={handleEdit(rowData.id)}>Click</button>;
      },
    },
  ];
};
