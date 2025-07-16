import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header__main flex items-center text-lg !px-[4rem] !py-12 fixed top-0 left-0 w-screen bg-zinc-600">
      <div className="lp flex-1">
        <h1 className="logo text-3xl font-medium">armor</h1>
      </div>
      <div className="rp flex-1 flex items-center justify-between">
        <nav className="flex items-center gap-[3rem]">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/products"}>Products</NavLink>
        </nav>

        <button className="w-5 h-5 bg-black rounded-full cursor-pointer"></button>
      </div>
    </header>
  );
};

export default Header;
