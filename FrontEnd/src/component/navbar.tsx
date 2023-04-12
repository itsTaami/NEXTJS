import React, { useState } from "react";
import List from "./list";
import Search from "./search";
import Hamburger from "hamburger-react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
// import Burger from "./burger";
// import Menu from "./burger";
import Drop from "./menu";

const navBar = ({ setFilter }: any) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuClick = () => {
    console.log("Menu Clicked");

    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="bg-gray-800 h-20 flex justify-center items-center">
      <div className=" container mx-auto w-full flex justify-between">
        <h1 className="font-bold text-2xl w-44 text-center self-center text-white">
          Movie Review
        </h1>
        <Search setFilter={setFilter} />
        {/* <div className="w-2/5">
          <section className="w-full h-10 flex items-center border border-white-700 rounded-lg ">
            <span className="w-10 h-full hidden md:flex items-center justify-center">
              <MagnifyingGlassIcon className="h-6 w-6 text-gray-300" />
            </span>
            <input
              type="text"
              className="w-full h-full font-medium md:pl-2 focus:outline-none bg-gray-300 "
              placeholder="Search movies, TV, actors, more..."
              onChange={(e) => setFilter(e.target.value)}
            />
            <button className="w-28 h-full bg-blue-800 flex justify-center items-center text-white font-medium rounded-r-lg">
              Search
            </button>
          </section>
        </div> */}
        <div className="flex flex-col">
          <button onClick={handleMenuClick}>
            <Hamburger color="#4FD1C5" />
          </button>
          {isMenuOpen && <List />}
        </div>

        {/* <button><Drop /></button> */}

        {/* <Menu /> */}
        {/* {isMenuOpen && <List />} */}
        {/* <button onClick={handleMenuClick}>
          <Hamburger color="#4FD1C5" />
        </button> */}
        {/* <Burger/> */}
      </div>
    </div>
  );
};

export default navBar;
