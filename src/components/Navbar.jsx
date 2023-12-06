import React, { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white font-semibold text-xl">Switzerland Vacation</div>
          <div>
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-gray-300"
            >
              Menu
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="text-center mt-4">
            <ul>
              <li>
                <a href="#" className="text-white hover:text-gray-300 block py-2">
                  Home
                </a>
              </li>
              <li>
                <a href="#/thumbnails" className="text-white hover:text-gray-300 block py-2">
                  Thumbnails
                </a>
              </li>
              <li>
                <a href="#/switz1" className="text-white hover:text-gray-300 block py-2">
                  Switzerland 1
                </a>
              </li>
              <li>
                <a href="#/switz2" className="text-white hover:text-gray-300 block py-2">
                  Switzerland 2
                </a>
              </li>
              <li>
                <a href="#/switz3" className="text-white hover:text-gray-300 block py-2">
                  Switzerland 3
                </a>
              </li>
              <li>
                <a href="#/switz4" className="text-white hover:text-gray-300 block py-2">
                  Switzerland 4
                </a>
              </li>
              <li>
                <a href="#/switz5" className="text-white hover:text-gray-300 block py-2">
                  Switzerland 5
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
