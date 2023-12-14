import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { About } from '../components/About';
import { Home } from '../pages/Home';
export const MainRoutes = () => {
  return (
    <BrowserRouter>
    <header>
      <Nav/>
    </header>
    <main>
      <Routes>
        <Route
          path="/"
          element={
            <>
            <Home/>
            </>
          }
        />
         <Route
          path="/about"
          element={
            <About/>
          }
        />
      </Routes>
    </main>
    <footer>
      <Footer/>
    </footer>
  </BrowserRouter>
);
  
}
