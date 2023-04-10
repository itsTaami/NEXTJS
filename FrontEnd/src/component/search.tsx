import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Search = () => {
  return (
    <div className="w-2/5">
      <section className="w-full h-10 flex items-center border border-white-700 rounded-lg ">
        <span className="w-10 h-full hidden md:flex items-center justify-center">
          <MagnifyingGlassIcon className="h-6 w-6 text-gray-300" />
        </span>
        <input
          type="text"
          className="w-full h-full font-medium md:pl-2 focus:outline-none bg-gray-300 "
          placeholder="Search movies, TV, actors, more..."
        />
        <button className="w-28 h-full bg-blue-800 flex justify-center items-center text-white font-medium rounded-r-lg">
          Search
        </button>
      </section>
    </div>
  );
};

export default Search;
