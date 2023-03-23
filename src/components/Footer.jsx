import React from "react";
import { FaGithubSquare, FaLinkedin} from "react-icons/fa";
import {BsMedium} from "react-icons/bs"

const Footer = () => {
  return (
    <div className="py-5 text-center">
      <div container max-w-screen-lg mx-auto>
        <h1 className="max-w-md w-full text-l font-bold text-[hsl(0,13%,97%)] mx-auto justify-center text-center">
          Jonathan|Lammering © 2023
        </h1>
        <div className="flex flex-wrap justify-center gap-2">
          <a href="https://github.com/lammerij" target="blank">
            <FaGithubSquare
              className="bg-white-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full hover:bg-sky-700"
              size={35}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/jonathanlammering/"
            target="blank"
          >
            <FaLinkedin
              className="bg-white-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full hover:bg-sky-700"
              size={35}
            />
          </a>
          <a href="https://medium.com/@jonathan.lammering" target="blank">
            <BsMedium
              className="bg-white-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full hover:bg-sky-700"
              size={35}
            />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
