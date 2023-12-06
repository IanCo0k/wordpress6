import React from 'react';
import Navbar from './Navbar';
import switz from '../assets/switz.jpg';
import switz1 from '../assets/switz1.jpg';
import switz2 from '../assets/switz2.jpg';
import switz3 from '../assets/switz3.jpg';
import switz4 from '../assets/switz4.jpg';

const ThumbnailGallery = () => {
  return (
    <div>
        <Navbar />
        <div className="min-h-screen mt-4 bg-gray-100 flex justify-center items-center">
      <div className="max-w-4xl">
        <h1 className="text-4xl font-semibold mb-8">Thumbnail Gallery</h1>
        <div className="grid grid-cols-2 gap-4">
          <a href="/#/switz1" className="group">
            <img src={switz} alt="Thumbnail 1" className="w-full rounded-lg shadow-md transform group-hover:scale-105 transition duration-300" />
          </a>
          <a href="/#/switz2" className="group">
            <img src={switz1} alt="Thumbnail 2" className="w-full rounded-lg shadow-md transform group-hover:scale-105 transition duration-300" />
          </a>
          <a href="/#/switz3" className="group">
            <img src={switz2} alt="Thumbnail 3" className="w-full rounded-lg shadow-md transform group-hover:scale-105 transition duration-300" />
          </a>
          <a href="/#/switz4" className="group">
            <img src={switz3} alt="Thumbnail 4" className="w-full rounded-lg shadow-md transform group-hover:scale-105 transition duration-300" />
          </a>
          <a href="/#/switz5" className="group">
            <img src={switz4} alt="Thumbnail 5" className="w-full rounded-lg shadow-md transform group-hover:scale-105 transition duration-300" />
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ThumbnailGallery;
