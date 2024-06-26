import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Blog } from "../components/Blog";
import { Article } from "../components/Article";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { SpotifyPlayer } from "../components/SpotifyPlayer";
import { Menu } from "../components/Menu";

export const MainRoutes = () => (
  <>
    <BrowserRouter>
      <header>
        <Nav />
      </header>

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                
                <Hero />
                <Menu />
                <Blog />
              </>
            }
          />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/about" element={<About />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <SpotifyPlayer />
      </main>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  </>
);
