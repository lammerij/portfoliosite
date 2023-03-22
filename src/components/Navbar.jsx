import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import logo from "../pics/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <Link to="hero">
        <img src={logo} className="h-10 w-10 mr-4" alt="logo" />
      </Link>

      <ul className="hidden md:flex">
        <li className="p-4">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={closeMenu}
            className="cursor-pointer hover:text-[#fafbfc]"
          >
            Home
          </Link>
        </li>
        <li className="p-4">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={closeMenu}
            className="cursor-pointer hover:text-[#fafbfc]"
          >
            About
          </Link>
        </li>
        <li className="p-4">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={closeMenu}
            className="cursor-pointer hover:text-[#fafbfc]"
          >
            Projects
          </Link>
        </li>
        <li className="p-4">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={closeMenu}
            className="cursor-pointer hover:text-[#fafbfc]"
          >
            Contact
          </Link>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
        <ul
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
          <li className="p-4">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={closeMenu}
              className="cursor-pointer hover:text-[#fafbfc]"
            >
              Home
            </Link>
          </li>
          <li className="p-4">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={closeMenu}
              className="cursor-pointer hover:text-[#fafbfc]"
            >
              About
            </Link>
          </li>
          <li className="p-4">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={closeMenu}
              className="cursor-pointer hover:text-[#fafbfc]"
            >
              Projects
            </Link>
          </li>
          <li className="p-4">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={closeMenu}
            className="cursor-pointer hover:text-[#fafbfc]"
          >
            Contact
          </Link>
        </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
