import React, { useState } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({
  totalReports,
  setCurrentPage,
}: {
  totalReports: any;
  setCurrentPage: any;
}) => {
  const itemsPerPage = 10;

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const pageCount = Math.ceil(totalReports / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % totalReports;
    setCurrentPage(event.selected + 1);
    setItemOffset(newOffset);
  };

  return (
    <div className="flex items-center justify-between border border-gray-200 bg-white px-4 py-3 dark:bg-gray-dark sm:px-6">
      showing reports from {itemOffset + 1} to {Math.min(endOffset, totalReports)}
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        activeClassName="active"
      />
    </div>
  );
};

export default Pagination;
