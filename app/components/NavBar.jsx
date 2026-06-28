"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import arrow from "../../public/assets/arrow.jpg";
import closeIcon from "../../public/assets/close.png";
import menuIcon from "../../public/assets/menu.png";
import moon from "../../public/assets/moon.png";
import sun from "../../public/assets/sun.png";
import logo from "../../public/assets/logo.png";

const NAV_LINKS = ["Home", "About", "My Service", "Works", "Contact"];

const ThemeToggle = ({ isDarkMode, setIsDarkMode }) => (
  <button
    onClick={() => setIsDarkMode((p) => !p)}
    aria-label="Toggle theme"
    className="relative w-10 h-10 rounded-full border border-white/20 bg-white/10 backdrop-blur flex items-center justify-center overflow-hidden hover:bg-white/20 transition-all duration-300"
  >
    <Image
      src={sun}
      alt="light mode"
      width={18}
      height={18}
      className={`absolute transition-all duration-500 ${isDarkMode ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"}`}
    />
    <Image
      src={moon}
      alt="dark mode"
      width={18}
      height={18}
      className={`absolute transition-all duration-500 ${isDarkMode ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"}`}
    />
  </button>
);

const NavBar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const sideMenuRef = useRef(null);

  const toggleMenu = (isOpen) => {
    if (!sideMenuRef.current) return;
    sideMenuRef.current.classList.toggle("-translate-x-full", !isOpen);
    sideMenuRef.current.classList.toggle("translate-x-0", isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`w-full fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-4 px-6 lg:px-[8%] transition-all duration-300 ${
          isScrolled
            ? isDarkMode
              ? "bg-[#020e14]/90 backdrop-blur-xl shadow-lg shadow-teal-900/30"
              : "bg-white/90 backdrop-blur-xl shadow-lg shadow-teal-200/40"
            : "bg-transparent"
        }`}
      >
        <a href="#top" className="group">
          <Image
            src={logo}
            alt="Logo"
            className="w-12 cursor-pointer brightness-200 group-hover:rotate-12 transition-transform duration-300"
          />
        </a>

        <ul className={`hidden md:flex items-center gap-1 px-6 py-2.5 rounded-full border backdrop-blur ${isDarkMode ? "border-white/15 bg-white/10" : "border-teal-200/60 bg-white/60"}`}>
          {NAV_LINKS.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`relative px-4 py-1.5 rounded-full text-sm hover:bg-white/15 transition-all duration-200 font-Ovo ${isDarkMode ? "text-teal-100 hover:text-white" : "text-slate-700 hover:text-teal-700 hover:bg-teal-50"}`}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

          <a
            href="#contact"
            className="group relative hidden lg:flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium shadow-md transition-all duration-200 font-Ovo hover:scale-105 overflow-hidden bg-teal-500 hover:bg-teal-400 text-white shadow-teal-500/30"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative flex items-center gap-2">
              Hire Me
              <Image src={arrow} alt="arrow" className="w-3 invert group-hover:translate-x-1 transition-transform" width={12} height={12} />
            </span>
          </a>

          <button className="block md:hidden" onClick={() => toggleMenu(true)} aria-label="Open Menu">
            <Image src={menuIcon} alt="Menu" className="w-6 invert" />
          </button>
        </div>

        {/* Mobile drawer */}
        <ul
          ref={sideMenuRef}
          className={`fixed top-0 left-0 bottom-0 w-64 z-50 h-screen border-r transform -translate-x-full transition-transform duration-500 flex flex-col pt-20 px-6 gap-2 ${isDarkMode ? "bg-[#020e14] border-teal-900" : "bg-white border-teal-100"}`}
        >
          <div className="absolute right-5 top-5 flex items-center gap-3">
            <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            <button onClick={() => toggleMenu(false)} aria-label="Close Menu">
              <Image src={closeIcon} alt="Close" className={`w-5 ${isDarkMode ? "invert" : ""}`} />
            </button>
          </div>
          {NAV_LINKS.map((section) => (
            <li key={section} className="list-none">
              <a
                href={`#${section}`}
                onClick={() => toggleMenu(false)}
                className={`block px-4 py-3 rounded-xl transition-all duration-200 font-Ovo ${isDarkMode ? "text-teal-100 hover:bg-white/10 hover:text-white" : "text-slate-700 hover:bg-teal-50 hover:text-teal-700"}`}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-500 z-[60] transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </>
  );
};

export default NavBar;
