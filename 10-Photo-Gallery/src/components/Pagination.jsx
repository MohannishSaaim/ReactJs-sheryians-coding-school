import React from "react";

const Pagination = ({ pageIndex, handlePrev, handleNext }) => {
  return (
    <div className="p-4 flex justify-center items-center gap-4">
      <button
        disabled={pageIndex === 1}
        onClick={handlePrev}
        className="active:scale-90 bg-yellow-300 text-black p-4 rounded font-bold"
      >
        Prev
      </button>
      <span>Page {pageIndex}</span>
      <button
        onClick={handleNext}
        className="active:scale-90 bg-yellow-300 text-black p-4 rounded font-bold"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
