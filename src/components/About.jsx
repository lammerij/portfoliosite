import React from "react";
import "./About.css";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <img src="/PROOF- VIVE STUDIO (14 of 95).jpg" alt='profile pic' />
        <div className="col-2">
          <h2 className="text-black">
            <u>ABOUT</u>
          </h2>
          <Link to="hero" className="cursor-pointer hover:text-[#fafbfc]">
            <h4 className="text-black">Back To Top</h4>
          </Link>
          <span className="line"></span>
          <div className='sm:text-center pb-8 pl-4'>
          <p className="text-black text-lg">
            Hi, my name is Jonathan Lammering. As a former senior-level
            Healthcare Administrator who has transitioned to Software
            Engineering, I am eager to apply my problem-solving abilities,
            analytical skills, and team-building expertise, along with my recent
            acquisition of knowledge in JavaScript (ES6), REACT, and Ruby on
            Rails, to make a an impact on the tech industry and further my
            growth as an engineer.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
