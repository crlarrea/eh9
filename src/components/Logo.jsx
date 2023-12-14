import React from "react";
import logo from "../assets/img/eh9_logo.png";
import { Link } from "react-router-dom";
export const Logo = () => {
  return (
    <Link to="/" className="logo">
      <img src={logo} alt="EH9 logo" loading="lazy" />
      <h1>eh9 | espresso</h1>
      <span>speciality coffee</span>
    </Link>
  );
};
