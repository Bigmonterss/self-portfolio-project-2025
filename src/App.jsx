import { useState, useEffect } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { Gallery } from "./components/sections/Gallery";
import { AnimCursor } from "./components/AnimCursor";
import { Footer } from "./components/Footer";
import { HashRouter, Routes, Route } from "react-router-dom";

import "./index.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const dark = saved === "dark";
    setIsDark(dark);
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", dark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <HashRouter>
      <AnimCursor />
      <Navbar 
        menuOpen={menuOpen} 
        setMenuOpen={setMenuOpen} 
        isDark={isDark} 
        toggleTheme={toggleTheme} 
      />
      <MobileMenu 
        menuOpen={menuOpen} 
        setMenuOpen={setMenuOpen} 
        isDark={isDark} 
        toggleTheme={toggleTheme} 
      />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Projects />
              <Contact />
              <Footer />
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
              <Gallery />
              <Footer />
            </>
          }
        />

        <Route
          path="/gallery"
          element={
            <>
              <Gallery />
              <Footer />
            </>
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
