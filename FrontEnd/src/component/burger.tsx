import React, { useState } from "react";
import List from "./list";

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuClick = () => {
    console.log("Menu Clicked");

    setIsMenuOpen(!isMenuOpen);
  };
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;
  return (
    <button
      className="flex flex-col h-12 w-12 border-2 border-black rounded justify-center items-center group"
      onClick={() => setIsOpen(!isOpen)}
    >
      {isMenuOpen && <List />}
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
        // onClick={handleMenuClick}
      />
      {/* <button onClick={handleMenuClick}>Open menu</button> */}
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
        }`}
        // onClick={handleMenuClick}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
        // onClick={handleMenuClick}
      />
    </button>
  );
};

export default Burger;
