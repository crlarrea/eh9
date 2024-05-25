import React from "react";
import { Logo } from "./Logo";
import { FiShoppingBag } from "react-icons/fi";


export const Nav = () => {
  return (
    <nav>
      <Logo />

      <div className="shopping-trolley">
        <FiShoppingBag />
      </div>
    </nav>
  );
};
