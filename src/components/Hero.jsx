import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-blue-500 text-white h-screen text-center flex flex-col justify-center items-center">
      <h1 className="text-4xl md:text-8xl font-bold mb-4">Welcome to my Switzerland Vacation Album</h1>
      <p className="text-lg mb-4">Click below to view my photo album:</p>
      <a
        href="/#/thumbnails"
        className="bg-white text-blue-500 px-4 py-2 rounded-lg text-lg hover:bg-blue-100 hover:text-blue-600 transition duration-300 ease-in-out"
      >
        View Album
      </a>
    </div>
  );
};

export default HeroSection;
