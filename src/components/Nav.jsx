import React from "react";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { Logo } from "./Logo";

export const Nav = () => {
  const navigation = ["about", "buy online", "blog", "log in"];
  return (
    <nav>
            <FiPlus />

      <Logo />
      <ul>
        {navigation.map((entry, index) => {
          return (
            <li key={`nav-link-${index}`}>
              <Link to={entry.replace(" ", "-")}>{entry}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
