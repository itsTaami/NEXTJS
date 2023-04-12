import React from "react";

const List = () => {
  const items = [
    {
      title: "MOVIES",
    },
    {
      title: "TV SHOWS",
    },
    {
      title: "MOVIE TRIVIA",
    },
    {
      title: "NEWS",
    },
    {
      title: "SHOWTIMES",
    },
    {
      title: "LOGIN/SIGNUP",
    },
  ];
  return (
    <>
      <div className=" absolute p-5 mt-14 -ml-16 bg-white w-48 text-center rounded-xl">
        {items.map((item) => (
          <div>
            <button
              key={item.title}
              className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
            >
              {item.title}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
