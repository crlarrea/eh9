import React from "react";
import logo from "../assets/img/eh9_logo.webp";
import { FaTiktok, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <article>
        <h2>opening times</h2>
        <div>
          <p>
            <span>Mon - Fri:</span> 9 AM - 5 PM
          </p>
          <p>
            <span>Sat - Sun:</span> 10 AM - 4 PM
          </p>
        </div>
      </article>
      <article>
        <h3>Follow us on</h3>
        <div>
          <Link
            to="https://www.instagram.com/eh9.espresso/?hl=en"
            target="_blank"
          >
            <FaInstagram />
          </Link>
          <Link to="https://www.tiktok.com/@eh9.espresso" target="_blank">
            <FaTiktok />
          </Link>
        </div>
      </article>
      <article>
        <img src={logo} />
        <div></div>
      </article>
    </>
  );
};
