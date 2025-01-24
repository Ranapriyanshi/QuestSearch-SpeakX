import React from "react";

const PaginationControls = ({
  currentPage,
  totalPages,
  onPageChange,
  isDisabled,
}) => {
  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    onPageChange(newPage);
    window.scrollTo(0, 0);
  };

  return (
    <div className="pagination-controls">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1 || isDisabled}
      >
        &lt;
      </button>
      {totalPages === 0 ? (
        <span>Page 0 of 0</span>
      ) : (
        <span>
          Page {currentPage} of {totalPages}
        </span>
      )}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages || isDisabled}
      >
        &gt;
      </button>
    </div>
  );
};

export default PaginationControls;
