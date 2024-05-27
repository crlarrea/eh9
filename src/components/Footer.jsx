import React from "react";
import logo from "../assets/img/eh9_logo.webp";
import { WeAreOpen } from "./WeAreOpen";

export const Footer = () => {
  return (
    <>
      <article>
        <h2>opening times</h2>
        <div>
          <p>
            <span>Mon - Fri</span> 9 am - 5 pm
          </p>
          <p>
            <span>Sat - Sun</span> 10 am - 4 pm
          </p>
        </div>
      </article>
      <article></article>
      <article>
        <img src={logo} />
      </article>
    </>
  );
};
