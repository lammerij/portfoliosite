import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
import logo from "../pics/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      id="navbar"
      className="sticky top-0 z-30 text-white flex justify-between items-center h-24  mx-auto px-4 sm:px-10  bg-black"
    >
      <div className="flex text-center">
        <Link
          to="hero"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="flex items-center cursor-pointer "
        >
          <img src={logo} className="h-10 w-10 mr-4" alt="logo" />
        </Link>
      </div>

      <ul className="hidden md:flex">
        <li className="p-4 font-mono">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={handleNav}
            className="cursor-pointer hover:text-[#fc4e4e]"
          >
            Home
          </Link>
        </li>
        <li className="p-4 font-mono">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={handleNav}
            className="cursor-pointer hover:text-[#fc4e4e]"
          >
            About
          </Link>
        </li>
        <li className="p-4 font-mono">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={handleNav}
            className="cursor-pointer hover:text-[#fc4e4e]"
          >
            Projects
          </Link>
        </li>
        <li className="p-4 font-mono">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={handleNav}
            className="cursor-pointer hover:text-[#fc4e4e]"
          >
            Contact
          </Link>
        </li>
      </ul>

      <div onClick={handleNav} className="block m-2 md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          nav
            ? "fixed z-10 text-white left-0 top-[0px] w-[75%] h-full ease-in-out duration-500  bg-black md:hidden"
            : "fixed left-[-100%]"
        }
      >
        <ul>
          <li className="p-4 pt-8 border-b  flex">
            <img src={logo} className="h-10 w-10 mr-4" alt="logo" />
          </li>
          <li className="p-4 font-mono border-b border-white">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={handleNav}
              className="cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li className="p-4 font-mono border-b border-white">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={handleNav}
              className="cursor-pointer"
            >
              About
            </Link>
          </li>
          <li className="p-4 font-mono border-b border-white">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={handleNav}
              className="cursor-pointer"
            >
              Projects
            </Link>
          </li>
          <li className="p-4 font-mono  border-b border-white ">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={handleNav}
              className="cursor-pointer"
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
