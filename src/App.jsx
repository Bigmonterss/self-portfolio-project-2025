import { useState, useEffect } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { AnimCursor }from "./components/AnimCursor";
import { Footer } from "./components/Footer";
import "./index.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Theme lifted to App so Navbar and MobileMenu share it
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
    <>
     {/*
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <div 
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
          } bg-black text-gray-100`}
      > </div> */}
      
      <AnimCursor/>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} isDark={isDark} toggleTheme={toggleTheme}/>
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} isDark={isDark} toggleTheme={toggleTheme}/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
