import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

const Pagination = ({
  pages = [1],
  cur = 1,
  nextPage,
  prevPage,
  setCur,
}: any) => {
  return (
    <div className="flex bg-white rounded-lg">
      <button
        onClick={prevPage}
        className="h-12 border-2 border-r-0 border-indigo-600 px-4 rounded-l-lg hover:bg-indigo-600 hover:text-white"
      >
        <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
      </button>
      {pages.map((pg: any) => (
        <button
          key={pg}
          onClick={setCur}
          className={`h-12 border-2 border-r-0 border-indigo-600 w-12 ${
            cur === pg && "bg-indigo-600 text-white"
          }`}
        >
          {pg}
        </button>
      ))}
      <button
        onClick={nextPage}
        className="h-12 border-2 border-r-0 border-indigo-600 px-4 rounded-r-lg hover:bg-indigo-600 hover:text-white"
      >
        <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );
};

export default Pagination;
