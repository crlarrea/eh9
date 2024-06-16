import React from "react";
import { Logo } from "./Logo";
import { FiShoppingBag } from "react-icons/fi";
import { Link, NavLink, Navigate } from "react-router-dom";

export const Nav = () => {
  const scrollToElement = (id) => {
    const el = document.getElementById(id);
    el.scrollIntoView();
  };
  return (
    <nav>
      <Logo />

      <Link
        to="/#ooncy"
        onClick={() => {
          scrollToElement("ooncy");
        }}
      >
        OONCY
      </Link>
      <Link
        to="/#find-us"
        onClick={() => {
          scrollToElement("find-us");
        }}
      >
        find us
      </Link>
      <Link
        to="/#news"
        onClick={() => {
          scrollToElement("news");
        }}
      >
        news
      </Link>
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
