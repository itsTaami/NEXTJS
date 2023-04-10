import React from "react";
import Search from "./search";

const navBar = () => {
  return (
    <div className="bg-gray-800 h-20 flex justify-center items-center">
      <div className=" container mx-auto w-full flex justify-between">
        <h1 className="font-bold text-2xl w-44 text-center self-center text-white">
          Movie Review
        </h1>
        <Search />
        <div className="flex justify-between w-2/5">
          <button className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
            MOVIES
          </button>
          <button className=" text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
            TV SHOWS
          </button>
          <button className=" text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
            {" "}
            MOVIE TRIVIA
          </button>
          <button className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
            NEWS
          </button>
          <button className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
            SHOWTIMES
          </button>
          <button className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
            LOGIN/SIGNUP
          </button>
        </div>
      </div>
    </div>
  );
};

export default navBar;
