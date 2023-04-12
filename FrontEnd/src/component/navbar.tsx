import React, { useState } from "react";
import List from "./list";
import Search from "./search";
import Hamburger from "hamburger-react";
import Burger from "./burger";
import Menu from "./burger";
import Drop from "./menu";
interface CommonBurgerProps {
  onClick?: () => void;
}

const navBar = () => {
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
        <Search />
        <div className="flex flex-col">
          {isMenuOpen && <List />}

          <button onClick={handleMenuClick}>
            <Hamburger color="#4FD1C5" />
          </button>
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
