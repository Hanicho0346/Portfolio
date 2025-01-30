import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import arrow from "../../public/assets/arrow.jpg";
import closeIcon from "../../public/assets/close.png";
import menuIcon from "../../public/assets/menu.png";
import moon from "../../public/assets/moon.png";
import sun from "../../public/assets/sun.png"
import logo from "../../public/assets/logo.png"
const NavBar = ({isDarkMode,setIsDarkMode}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const sideMenuRef = useRef(null);

  const toggleMenu = (isOpen) => {
    if (sideMenuRef.current) {
      if (isOpen) {
        sideMenuRef.current.classList.remove("-translate-x-full");
        sideMenuRef.current.classList.add("translate-x-0");
      } else {
        sideMenuRef.current.classList.add("-translate-x-full");
        sideMenuRef.current.classList.remove("translate-x-0");
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full fixed flex items-center justify-between py-4 px-8 lg:px-[8%] z-50 transition-all duration-300 ${
        isScrolled ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""
      }`}
    >
      <a href="#top">
        <Image src={logo} alt="Logo" className="w-12 cursor-pointer" />
      </a>

      <ul
        className={`hidden md:flex items-center gap-6 lg:gap-8 px-12 py-3 rounded-full dark:border dark:border-white/50 dark:bg-transparent ${
          isScrolled ? "" : "bg-white shadow-sm bg-opacity-50"
        }`}
      >
        {["Home", "About", "My Service", "Works", "Contact"].map((section) => (
          <li key={section}>
            <a href={`#${section}`} className="font-Ovo">
              {section}
            </a>
          </li>
        ))}
      </ul>
      <div className="hidden lg:flex items-center gap-4">
        <button onClick={()=>setIsDarkMode(prev=>!prev)}>
          <Image src={isDarkMode? sun: moon} alt="Arrow" className="w-6" />
        </button>
        <a
          href="#Contact"
          className="flex items-center gap-3 px-10 py-2.5 border
           border-gray-500 rounded-full font-Ovo dark:border-white/50"
        >
          Contact
          <Image src={arrow} alt="Arrow" className="w-3" />
        </a>
      </div>


      <button className="block md:hidden ml-3" onClick={() => toggleMenu(true)} aria-label="Open Menu">
        <Image src={menuIcon} alt="Menu Icon" className="w-6" />
      </button>

  
      <ul
        ref={sideMenuRef}
        className="fixed top-0 left-0 bottom-0 w-64
         z-50 h-screen bg-rose-50 transition-transform
          duration-500 transform -translate-x-full dark:bg-darkHover dark:text-white"
      >
        <div className="absolute right-6 top-6">
          <button onClick={() => toggleMenu(false)} aria-label="Close Menu">
            <Image src={closeIcon} alt="Close Icon" className="w-5 cursor-pointer" />
          </button>
        </div>
        {["Home", "About", "My Service", "Works", "Contact"].map((section) => (
          <li key={section}>
            <a href={`#${section}`} onClick={() => toggleMenu(false)} className="font-Ovo">
              {section}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
