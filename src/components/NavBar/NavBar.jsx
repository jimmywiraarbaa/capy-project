// import React from 'react'
// import "./NavBar.css";
import React from "react";

function Navbar() {
  return (
    <nav
      className="bg-white shadow-lg"
      style={{ position: "fixed", width: "100%" }}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center px-4 py-3">
          <a
            className="text-xl font-bold text-gray-800"
            href="#"
            data-aos="fade-right"
          >
            Nexus
          </a>
          <button className="block lg:hidden focus:outline-none" type="button">
            <svg
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <div className="hidden lg:flex lg:items-center lg:w-auto">
            <div className="text-sm">
              <a
                href="#"
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-800 mr-10"
                data-aos="zoom-in"
              >
                Beranda
              </a>
              <a
                href="#"
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-800 mr-10"
                data-aos="zoom-in"
              >
                Bengkel
              </a>
              <a
                href="#"
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-800 mr-10"
                data-aos="zoom-in"
              >
                Suku Cadang
              </a>
              <a
                href="#"
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-800"
                data-aos="zoom-in"
              >
                FaQ
              </a>
            </div>
            <div className="text-sm lg:flex-grow">
              <a
                href="#"
                className="block lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-600 mr-4"
                data-aos="fade-left"
              >
                Daftar
              </a>
              <a
                href="#"
                className="block lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-600"
                data-aos="fade-left"
              >
                Masuk
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
