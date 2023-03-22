import React from "react";
import "./About.css";
import { FaGithubSquare, FaLinkedin, FaMedium } from "react-icons/fa";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <img src="/PROOF- VIVE STUDIO (14 of 95).jpg" alt="profile pic" />
        <div className="col-2">
          <h2 className="text-black">
            <u>ABOUT</u>
          </h2>

          <span className="line"></span>
          <div className="sm:text-center pb-8 pl-4">
            <p className="text-black text-lg">
              Hi, my name is Jonathan Lammering. As a former senior-level
              Healthcare Administrator who has transitioned to Software
              Engineering, I am eager to apply my problem-solving abilities,
              analytical skills, and team-building expertise, along with my
              recent acquisition of knowledge in JavaScript (ES6), REACT, and
              Ruby on Rails, to make a an impact on the tech industry and
              further my growth as an engineer.
            </p>
            <div className="py-5 text-center">
      <div container max-w-screen-lg mx-auto>
        <div className="flex flex-wrap justify-center gap-2">
          <a href="https://github.com/lammerij" target="blank">
            <FaGithubSquare
              className="bg-stone-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full"
              size={40}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/jonathan-lammering-206247103/"
            target="blank"
          >
            <FaLinkedin
              className="bg-stone-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full"
              size={40}
            />
          </a>
          <a href="https://medium.com/@jonathan.lammering" target="blank">
            <FaMedium
              className="bg-stone-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full"
              size={40}
            />
          </a>
        </div>
      </div>
    </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
