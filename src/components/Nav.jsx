import React from "react";
import { Logo } from "./Logo";
import { FiShoppingBag } from "react-icons/fi";
import { Link, NavLink, Navigate } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <Logo />

      <Link to="/">home</Link>
      <Link to="/#menu" onClick={()=>{scrollTo('#menu')}}> menu</Link>
      <Link to="/about">about</Link>

      <div className="shopping-trolley">
        <FiShoppingBag />
      </div>
      <span className="copyright">
        <Link to="https://crlarrea.github.io" target="_blank">
          crlarrea &copy; {new Date(Date.now()).getFullYear()}
        </Link>
      </span>
    </nav>
  );
};
