import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Blog } from "../components/Blog";
import { Article } from "../components/Article";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";

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
                <Blog />
              </>
            }
          />
          <Route path="/article/:id" element={<Article />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  </>
);
