// import React from 'react'
import NavBar from "../components/NavBar/NavBar";
import Bar2 from "../components/bar/bar2";
import Footer from "../components/Footer/Footer";

function SukuCadangMitra() {
  return (
    <div>
      <NavBar />
      <div className="px-10">
        <Bar2 />
        <div className="bar flex border-b-2 border-info-color mb-8 gap-8 max-sm:mb-5 max-sm:gap-5">
          <div className="bar p-2">
            <a className="" href="#">
              Galeri
            </a>
          </div>
          <div className="p-2 border-primary-color border-b-8">
            <a className="font-bold" href="#">
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
        <div className="laman py-32">
          <div className="flex flex-col justify-center items-center mt-[-20px]">
            <img src="./assets/asking-question.svg" alt="" />
            <br />
            <p className="text-center" style={{ color: "#6C6C6C" }}>
              Hmm... Nampaknya mitra ini belum menambahkan produknya
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SukuCadangMitra;
