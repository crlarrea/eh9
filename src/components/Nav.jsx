import React from "react";
import { Logo } from "./Logo";
import { FiShoppingBag } from "react-icons/fi";
import { Link, NavLink, Navigate } from "react-router-dom";

export const Nav = () => {
  const navigationMenu = ["menu", "about"];
  return (
    <nav>
      <Logo />
      <div className="shopping-trolley">
        <FiShoppingBag />
      </div>
    </nav>
  );
};
