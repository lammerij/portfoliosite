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
    <div
      id="navbar"
      className="sticky top-0 z-30 text-white flex justify-between items-center h-24  mx-auto px-4 sm:px-10  bg-black"
    >
      <Link to="hero" className="cursor-pointer">
        <img src={logo} className="h-10 w-10 mr-4" alt="logo" />
      </Link>

      <ul className="hidden md:flex">
        <li className="p-4">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-100}
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
            offset={-100}
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
            offset={-100}
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
            offset={-100}
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
        <div
          className={
            nav
              ? "fixed z-10 text-white left-0 top-[0px] w-[75%] h-full ease-in-out duration-500  bg-black md:hidden"
              : "fixed left-[-100%]"
          }
        />
        <ul>
          <li className="p-4">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
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
              offset={-100}
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
              offset={-100}
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
