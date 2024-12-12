import React from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';
import NavLogo from '/navlogo.png';
import logo from '/logo4.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-16 max-w-[1240px] mx-auto px-4 text-black bg-gradient-to-r to-emerald-50 from-sky-400 m-6 ml-3 mr-3 rounded-2xl">
      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 text-white text-base">
        <li>
          <a href="#home-section" className="hover:text-blue-500 ">
            Home
          </a>
        </li>
        <li>
          <a href="#skills-section" className="hover:text-blue-500">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects-section" className="hover:text-blue-500">
            Projects
          </a>
        </li>
      </ul>

      {/* Mobile Menu Icon */}
      <div
        onClick={handleNav}
        className={`cursor-pointer md:hidden z-50 relative`}
      >
        {nav ? (
          <AiOutlineClose size={30} className="text-black" />
        ) : (
          <img
            className="rounded-full w-16 h-16"
            src={NavLogo}
            alt="logo img"
          />
        )}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          nav
            ? 'fixed left-0 top-0 w-[60%] h-full border-r border-gray-200 bg-gradient-to-r to-emerald-50 from-sky-100 ease-in-out duration-500 p-4 z-40'
            : 'fixed left-[-100%] top-0 ease-in-out duration-500'
        }
      >
        {/* <img
          className="rounded-lg w-full h-16 mix-blend-multiply"
          src={logo}
          alt="logo img"
        /> */}
        <li className="p-4 mt-14 border-b border-gray-400">
          <a href="#home-section" onClick={handleNav}>
            Home
          </a>
        </li>
        <li className="p-4 border-b border-gray-400">
          <a href="#about-me-section" onClick={handleNav}>
            About Me
          </a>
        </li>
        <li className="p-4 border-b border-gray-400">
          <a href="#project-section" onClick={handleNav}>
            Projects
          </a>
        </li>
        <li className="p-4 border-b border-gray-400">
          <a href="#skill-section" onClick={handleNav}>
            Skills
          </a>
        </li>
        <li className="p-4 border-b border-gray-400">
          <a href="#academic-section" onClick={handleNav}>
            Academic
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
