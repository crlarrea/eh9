import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import heroAnimation from "../assets/img/hero_animation.json";

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
        <Link
          to="/#menu"
          onClick={() => {
            scrollTo("#menu");
          }}
          className="btn"
        >
          order now
          <FiArrowRight />
        </Link>
      </article>
      <article>
        <Player
          autoplay
          loop
          src={heroAnimation}
          style={{ height: "300px", width: "300px" }}
        >
          <Controls
            visible={false}
            buttons={["play", "repeat", "frame", "debug"]}
          />
        </Player>
        <div>
          <img src={heroImg} />
        </div>
      </article>
    </section>
  );
};
