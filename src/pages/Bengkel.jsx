// import React from 'react'
import NavBar from "../components/NavBar/NavBar";
import Bar from "../components/bar/bar";
import Footer from "../components/Footer/Footer";
import Gambar1 from '../../assets/bengkel8.jpg'
import Gambar2 from '../../assets/aneka-motor-6.png'
import Gambar3 from '../../assets/aneka-motor-5.png'
import Gambar4 from '../../assets/aneka-motor-4.png'
import Gambar5 from '../../assets/aneka-motor-3.png'
import Gambar6 from '../../assets/aneka-motor-2.jpg'

function Bengkel() {
  return (
    <div>
      <NavBar />

      <div className="px-10">
        <Bar />
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
          <div className="flex">
            <div className="w-auto mr-1">
              <img className="" src={Gambar2} alt="" />
            </div>
            <div className="flex-col w-auto">
              <div className="flex mb-1">
                <img className="w-1/2 mr-1" src={Gambar3} alt="" />
                <img className="w-1/2" src={Gambar4} alt="" />
              </div>
              <div className="flex">
                <img className="w-1/2 mr-1" src={Gambar5} alt="" />
                <img className="w-1/2" src={Gambar6} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Bengkel;
