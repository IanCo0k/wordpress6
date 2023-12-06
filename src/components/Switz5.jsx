import React from 'react';
import Navbar from './Navbar';
import switz from '../assets/switz4.jpg';

function Switz5() {
  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-b from-blue-200 to-blue-300 min-h-screen">
        <div className="container mx-auto p-8">
          <h1 className="text-3xl font-semibold text-center text-white mb-4">Switzerland Photo 5</h1>
          <a href='/#/switz5bigger' className="block mx-auto max-w-md">
            <img src={switz} alt="Switzerland Photo 1" className="mt-4 mx-auto w-full rounded-lg shadow-lg" />
          </a>
          <p className="mt-4 text-gray-800 text-lg text-center">
            This is a breathtaking view of Switzerland during the warmer summer months. The landscape is truly magnificent!
          </p>
          <div className="mt-8 flex justify-center">
            <a href="/#/thumbnails" className="text-blue-600 hover:underline text-xl mr-4">
              View Thumbnails
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Switz5;
