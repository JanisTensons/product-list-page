import React from "react";
import { PaginationProps } from "../../../types";

const Pagination: React.FC<PaginationProps> = ({
  productsPerPage,
  totalProducts,
  previousPage,
  nextPage,
  currentPage,
  paginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex items-center justify-center position-fixed mt-10 bottom-0 left-0 right-0">
      <nav aria-label="Page navigation example">
        <ul className="flex items-center -space-x-px h-8 text-sm">
          {pageNumbers.map((number) => (
            <button
              key={number}
              className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 ${
                currentPage === number
                  ? "bg-blue-50 text-blue-600 border-blue-300 dark-bg-gray-700 dark-border-gray-700 dark-text-white"
                  : "hover:bg-gray-100 hover-text-gray-700 dark-hover-bg-gray-700 dark-hover-text-white"
              }`}
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
