import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import heroImg from "../assets/img/hero_image.webp";
export const Hero = () => {
  return (
    <section className="hero">
      <article>
        <h2>now brewing</h2>
        <p>
          Popayan Reserve, Colombia/Washed Roasted by Lucid Coffee Roasters -
          Belfast.
        </p>
        <Link to="/order">
          order now
          <FiArrowRight />
        </Link>
      </article>
      <article>
        <div>
          <img src={heroImg} />
        </div>
      </article>
    </section>
  );
};
