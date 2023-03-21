import React from "react";
import { FaGithubSquare, FaLinkedin, FaMedium } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-5 text-center">
      <div container max-w-screen-lg mx-auto>
        <h1 className="max-w-md w-full text-l font-bold text-[hsl(0,13%,97%)] mx-auto justify-center text-center">
          Jonathan|Lammering
        </h1>
        <div className="flex flex-wrap justify-center gap-2">
          <a href="https://github.com/lammerij" target="blank">
            <FaGithubSquare
              className="bg-stone-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full"
              size={35}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/jonathan-lammering-206247103/"
            target="blank"
          >
            <FaLinkedin
              className="bg-stone-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full"
              size={35}
            />
          </a>
          <a href="https://medium.com/@jonathan.lammering" target="blank">
            <FaMedium
              className="bg-stone-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full"
              size={35}
            />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
