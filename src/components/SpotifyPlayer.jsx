import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

import spotifyAnimation from "../assets/img/spotify_animation.json";

export const SpotifyPlayer = () => {
  return (
    <section className="spotify-player">

      <Player
        autoplay
        loop
        src={spotifyAnimation}
        style={{ height: "300px", width: "300px" }}
      >
        <Controls
          visible={false}
          buttons={["play", "repeat", "frame", "debug"]}
        />
      </Player>
      <iframe
        src="https://open.spotify.com/embed/playlist/6LP3gfTJCiMRcxTPN0loAZ"
        width="100%"
        height="152"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </section>
  );
};
