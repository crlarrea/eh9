import React from "react";
import { Link } from "react-router-dom";
export const Logo = () => {
  return (
    <>
      <Link to="/" className="logo">
        <h1>eh9 | espresso</h1>
        <span>specialty coffee</span>
      </Link>
    </>
  );
};
