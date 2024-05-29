import React from "react";

export const Spotify = () => {
  return (
    <section className="spotify-player">
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
