import React from "react";
import { Link } from "react-router-dom";

const Hero = ({ text, image, heading }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
      }}
      className="h-lvh relative top-0 left"
    >
      <div
        className="h-full w-full absolute top-0 left-0 bg-[#00000070] flex justify-center items-center flex-col gap-5"
        data-aos="fade-up"
      >
        <h1 className="text-6xl text-white font-bold tracking-wide">
          {heading}
        </h1>
        <p className="text-white text-xl">
          <Link to={"/"} className="text-primaryGreen">
            Home
          </Link>{" "}
          / {text}
        </p>
      </div>
    </div>
  );
};

export default Hero;
