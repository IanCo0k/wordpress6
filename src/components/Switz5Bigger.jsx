import React from 'react';
import Navbar from './Navbar';
import switz from '../assets/switz4.jpg';

function SwitzerlandPhotoBigger5() {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl text-blue-600 font-semibold mb-8">Switzerland Photo 5 - Bigger</h1>
        <div className="max-w-screen-lg w-full p-4">
          <div className="image text-center">
            <img src={switz} alt="Switzerland Photo 1" className="max-w-2xl w-full rounded-lg shadow-lg" />
          </div>
          <div className="description mt-8 text-left">
            <p className="text-gray-700 text-lg">
              This is a breathtaking view of the Swiss Alps during the warmer summer months. The landscape is a stunning blend of towering snow-capped peaks, lush green meadows, and crystal-clear lakes. It's a haven for outdoor enthusiasts, offering hiking, skiing, and mountaineering opportunities. Explore charming alpine villages and savor delicious Swiss cuisine. The Swiss Alps are a must-visit destination for anyone seeking natural beauty and adventure.
            </p>
          </div>
        </div>
        <div className="nav mt-8">
          <a href="/#/thumbnails" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Thumbnails</a>
        </div>
      </div>
    </div>
  );
}

export default SwitzerlandPhotoBigger5;
