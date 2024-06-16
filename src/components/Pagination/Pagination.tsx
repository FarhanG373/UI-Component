import React, { useState } from "react";
import "./Pagination.scss";
export interface Props {
  itemPerPageProp: number;
  totalPagesProp: any;
}
const Pagination = ({ itemPerPageProp, totalPagesProp }: Props) => {
  const pageNumbers = [];
  let itemPerPage = itemPerPageProp;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalPagesProp / itemPerPage);
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  console.log(totalPages);

  return (
    <ul className="pagination">
      <li className={`previous`}>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1 ? true : false}
        >
          Prev
        </button>
      </li>
      {pageNumbers.map((number: number) => (
        <li key={number} className={currentPage === number ? "active" : ""}>
          <button onClick={() => handlePageChange(number)}>{number}</button>
        </li>
      ))}
      <li className={`next`}>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages ? true : false}
        >
          Next
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
