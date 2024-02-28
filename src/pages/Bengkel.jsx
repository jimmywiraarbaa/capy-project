// import React from 'react'
import NavBar from "../components/NavBar/NavBar";
import Bar from "../components/bar/bar";
import Footer from "../components/Footer/Footer";
import Gambar1 from '../../assets/bengkel8.jpg'

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
        <div className="galery">
          <div className="w-full">
            <img className="" src={Gambar1} alt="" />
          </div>
          <div className="flex">
            <div>
              <img src={Gambar1} alt="" />
            </div>
            <div className="flex">
              <div className="w-full">
                <img className="w-1/2" src={Gambar1} alt="" />
                <img className="w-1/2" src={Gambar1} alt="" />
              </div>
              <div className="w-full">
                <img className="w-1/2" src={Gambar1} alt="" />
                <img className="w-1/2" src={Gambar1} alt="" />
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
