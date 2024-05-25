import React from "react";
import { Logo } from "./Logo";
import { FiShoppingBag } from "react-icons/fi";
import { WeAreOpen } from "./WeAreOpen";

export const Nav = () => {
  return (
    <nav>
      <Logo />
      <WeAreOpen />
      <div className="shopping-trolley">
        <FiShoppingBag />
      </div>
    </nav>
  );
};
