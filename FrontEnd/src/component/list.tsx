import React from "react";

const List = () => {
  return (
    <>
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
    </>
  );
};

export default List;
