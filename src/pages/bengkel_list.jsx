// import React from 'react'
import NavBar from "../components/NavBar/NavBar";
import Bar from "../components/bar/bar1";
import Footer from "../components/Footer/Footer";
import Gambar1 from "../../assets/bengkel8.jpg";
import Gambar2 from "../../assets/aneka-motor-6.png";
import Gambar3 from "../../assets/aneka-motor-5.png";
import Gambar4 from "../../assets/aneka-motor-4.png";
import Gambar5 from "../../assets/aneka-motor-3.png";
import Gambar6 from "../../assets/aneka-motor-2.jpg";
import { useRef, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { TfiBookmark } from "react-icons/tfi";
import { CiShare2 } from "react-icons/ci";
import { SlLocationPin } from "react-icons/sl";
import { LuClock3 } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineSearch } from "react-icons/md";

import { Link } from "react-router-dom";

function BengkelList() {
  return (
    <div>
      <NavBar />

      <div className="px-10 mt-8">
        <div className="mb-10 font-bold flex">
          <div className="flex items-center text-xl">
            <p>Bengkel</p>
          </div>

          <div className="container mx-auto flex items-center justify-end">
            <form className="flex" role="search">
              <div className="relative">
                <MdOutlineSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-3xl text-info-color" />
                <input
                  className="form-input pl-12 w-full py-2 px-3 border rounded-lg"
                  type="search"
                  placeholder="cari"
                  aria-label="cari"
                />
              </div>
            </form>
          </div>
        </div>
        {/* ======================= Gambar ========================================================== */}
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="grid grid-cols-5 gap-4 mb-6 max-sm:grid-cols-2 max-sm:mx-auto"
          >
            <div className="card w-40 border-4 shadow-lg border-inherit rounded-lg sm:w-auto ">
              <img
                src="./assets/BEARING 6201 2RS KOYO JAPAN ORIGINAL.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body rounded-lg px-2">
                <h5 className="card-title font-bold mt-1 leading-snug">
                  BEARING 6201 2RS KOYO JAPAN ORIGINAL
                </h5>
                <p className="card-text truncate font-thin decoration-[#1B1C1E] text-xs mt-2">
                  BEARING 6201 2RS KOYO JAPAN ORIGINAL
                </p>
                <div className="mt-5">
                  <p className="card-text font-bold mt-2">Rp. 28.500</p>
                  <div className="flex justify-end mt-[-30px] max-sm:px-6 max-sm:mt-2">
                    <button
                      className=" btn-primary bg-success-color  px-8 py-1 rounded-2xl"
                      style={{ color: "white" }}
                      type="submit"
                    >
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card w-40 border-4 shadow-lg border-inherit rounded-lg sm:w-auto">
              <img
                src="./assets/Filter Saringan Udara Vario 150 125 Nemo Honda Vario 150 125.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body rounded-lg px-2">
                <h5 className="card-title font-bold mt-1 leading-snug">
                  PAKET FULL UPGRADE CVT SPIN SKYWAVE SKYDRIVE MJRT RACING - 7gr
                </h5>
                <p className="card-text truncate font-thin decoration-[#1B1C1E] text-xs mt-2">
                  MOTOR LELET? TIDAK NYAMAN ? TERASA TARIKAN KASAR HINGGA...
                </p>
                <div className="mt-5">
                  <p className="card-text font-bold mt-2">Rp. 670.000</p>
                  <div className="flex justify-end mt-[-30px] max-sm:px-6 max-sm:mt-2">
                    <button
                      className=" btn-primary bg-success-color  px-8 py-1 rounded-2xl"
                      style={{ color: "white" }}
                      type="submit"
                    >
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card w-40 border-4 shadow-lg border-inherit rounded-lg sm:w-auto">
              <img
                src="./assets/BOHLAM DEPAN MOTOR OSRAM HALOGEN BEBEK MATIC 18 25 32 WATT ASLI OSRAM - 18W (1PC).jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body rounded-lg px-2">
                <h5 className="card-title font-bold mt-1 leading-snug">
                  Aki motor beat vario mio revo accu STZ5S sinus pro
                </h5>
                <p className="card-text truncate font-thin decoration-[#1B1C1E] text-xs mt-2">
                  Aki motor beat vario mio revo accu STZ5S sinus pro
                </p>
                <div className="mt-5">
                  <p className="card-text font-bold mt-2">Rp. 81.000</p>
                  <div className="flex justify-end mt-[-30px] max-sm:px-6 max-sm:mt-2">
                    <button
                      className=" btn-primary bg-success-color  px-8 py-1 rounded-2xl"
                      style={{ color: "white" }}
                      type="submit"
                    >
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card w-40 border-4 shadow-lg border-inherit rounded-lg sm:w-auto">
              <img
                src="./assets/Aki untuk segala motor matic ISS YTZ6V Yuasa Aki Kering.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body rounded-lg px-2">
                <h5 className="card-title font-bold mt-1 leading-snug">
                  Aki motor beat vario mio revo accu STZ5S sinus pro
                </h5>
                <p className="card-text truncate font-thin decoration-[#1B1C1E] text-xs mt-2">
                  Aki motor beat vario mio revo accu STZ5S sinus pro
                </p>
                <div className="mt-5">
                  <p className="card-text font-bold mt-2">Rp. 81.000</p>
                  <div className="flex justify-end mt-[-30px] max-sm:px-6 max-sm:mt-2">
                    <button
                      className=" btn-primary bg-success-color  px-8 py-1 rounded-2xl"
                      style={{ color: "white" }}
                      type="submit"
                    >
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card w-40 border-4 shadow-lg border-inherit rounded-lg sm:w-auto">
              <img
                src="./assets/PAKET FULL UPGRADE CVT SPIN SKYWAVE SKYDRIVE MJRT RACING - 7gr.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body rounded-lg px-2">
                <h5 className="card-title font-bold mt-1 leading-snug">
                  Lampu LED Utama Motor Mobil AYOTO M4A H4 AC DC PNP 30 Watt
                </h5>

                <p className="card-text truncate font-thin decoration-[#1B1C1E] text-xs mt-2">
                  Lampu LED Utama Motor Mobil AYOTO M4A H4 AC DC PNP 30 Watt
                </p>

                <div className="mt-5">
                  <p className="card-text  font-bold mt-2">Rp. 92.500</p>
                  <div className="flex justify-end mt-[-30px] max-sm:px-6 max-sm:mt-2">
                    <button
                      className=" btn-primary bg-success-color  px-8 py-1 rounded-2xl"
                      style={{ color: "white" }}
                      type="submit"
                    >
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br />
      <Footer />
    </div>
  );
}

export default BengkelList;
