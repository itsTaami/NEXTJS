import React from "react";

const List = () => {
  const items = [
    {
      title: "Movies",
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
      <div className=" absolute top-20 right-72 p-5 bg-white w-48 text-center rounded-xl">
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
