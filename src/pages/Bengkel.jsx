// import React from 'react'
import NavBar from "../components/NavBar/NavBar";
import Bar from "../components/bar/bar";
import Footer from "../components/Footer/Footer";

function Bengkel() {
  return (
    <div>
      <NavBar />
      <br />
      <Bar />
      <br />
      {/* Gambar */}
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* First image */}
          <div className="col-span-1">
            <img
              src="/assets/aneka motor 6.png"
              alt="."
              className="w-full rounded-lg hover:opacity-75"
            />
          </div>

          {/* Second image */}
          <div className="col-span-1">
            <img
              src="./assets/aneka motor 3.jpg"
              alt=""
              className="w-full rounded-lg hover:opacity-75"
            />
          </div>

          {/* Third image */}
          <div className="col-span-1">
            <img
              src="./assets/aneka motor 4.png"
              alt=""
              className="w-full rounded-lg hover:opacity-75"
            />
          </div>

          {/* Fourth image */}
          <div className="col-span-1">
            <img
              src="./assets/aneka motor 5.jpg"
              alt=""
              className="w-full rounded-lg hover:opacity-75"
            />
          </div>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default Bengkel;
