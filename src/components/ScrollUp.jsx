import React from "react";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { Link } from "react-scroll";

const ScrollUp = () => {
  return (
    <div>
      <Link
        to="hero"
        className="fixed bottom-6 right-3 cursor-pointer text-gray-500 hover:text-[#f14141] md:right-10"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <BsArrowUpCircleFill className="w-8 h-8" />
      </Link>
    </div>
  );
};

export default ScrollUp;