// import React from 'react'
import NavBar from "../components/NavBar/NavBar";
import Bar2 from "../components/bar/bar2";
import Footer from "../components/Footer/Footer";
import Gambar1 from "../../assets/bengkel8.jpg";
import Gambar2 from "../../assets/aneka-motor-6.png";
import Gambar3 from "../../assets/aneka-motor-5.png";
import Gambar4 from "../../assets/aneka-motor-4.png";
import Gambar5 from "../../assets/aneka-motor-3.png";
import Gambar6 from "../../assets/aneka-motor-2.jpg";

function BengkelMitra() {
  return (
    <div>
      <NavBar />

      <div className="px-10">
        <Bar2 />
        <div className="bar flex  border-b-2 border-info-color mb-8 gap-8 max-sm:mb-5 max-sm:gap-5">
          <div className=" bar p-2  border-primary-color border-b-8">
            <a className="font-bold" href="#">
              Galeri
            </a>
          </div>
          <div className="p-2">
            <a className="" href="#">
              Suku Cadang
            </a>
          </div>
          <div className="p-2">
            <a className="" href="#">
              Ulasan
            </a>
          </div>
        </div>
        {/* ======================= Gambar ========================================================== */}
        <div className="galery flex-col mb-10">
          <div className="w-full mb-1">
            <img className="h-1/5" src={Gambar1} alt="" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default BengkelMitra;
