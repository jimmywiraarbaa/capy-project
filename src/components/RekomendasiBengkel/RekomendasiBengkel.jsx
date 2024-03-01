// import React from 'react';
import { useRef, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { TfiBookmark } from "react-icons/tfi";
import { CiShare2 } from "react-icons/ci";
import { SlLocationPin } from "react-icons/sl";
import { LuClock3 } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import Bengkel1 from "../../../assets/bengkel1.jpeg";
import { Link } from "react-router-dom";

function RekomendasiBengkel() {
  const eleRefRekomendasi = useRef(null);
  const eleRefFavorit = useRef(null);

  useEffect(() => {
    const mouseLeaveHandler = (eleRef) => {
      const ele = eleRef.current;
      if (!ele) return;

      ele.style.cursor = "grab";
      ele.style.removeProperty("user-select");
    };

    const eleRekomendasi = eleRefRekomendasi.current;
    const eleFavorit = eleRefFavorit.current;

    window.addEventListener("mouseleave", () => {
      mouseLeaveHandler(eleRekomendasi);
      mouseLeaveHandler(eleFavorit);
    });

    return () => {
      window.removeEventListener("mouseleave", () => {
        mouseLeaveHandler(eleRekomendasi);
        mouseLeaveHandler(eleFavorit);
      });
    };
  }, []);

  const mouseDownHandler = (eleRef) => (e) => {
    const ele = eleRef.current;
    if (!ele) return;

    ele.style.cursor = "grabbing";
    ele.style.userSelect = "none";

    const pos = {
      left: ele.scrollLeft,
      top: ele.scrollTop,
      x: e.clientX,
      y: e.clientY,
    };

    const mouseMoveHandler = (e) => {
      const dx = e.clientX - pos.x;
      const dy = e.clientY - pos.y;

      ele.scrollTop = pos.top - dy;
      ele.scrollLeft = pos.left - dx;
    };

    const mouseUpHandler = () => {
      ele.style.cursor = "grab";
      ele.style.removeProperty("user-select");

      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseup", mouseUpHandler);
    };

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
  };

  return (
    <section className="mx-8">
      <h5 className="judul flex justify-center">
        <b>Rekomendasi bengkel</b>
      </h5>
      <p className="okee p-5">
        <b>Rekomendasi Mitra</b>
      </p>
      {/* rekomendasi */}
      <div
        className="rekomendasi flex overflow-auto whitespace-nowrap no-scrollbar"
        id="container"
        ref={eleRefRekomendasi}
        style={{ cursor: "grab" }}
        onMouseDown={mouseDownHandler(eleRefRekomendasi)}
      >
        {[...Array(15)].map((_, index) => (
          <div key={index} className="card ml-8 shadow-xl rounded-xl max-sm:w-1/2">
            <img className="rounded-t-xl pointer-events-none" src={Bengkel1} alt="" />
            <div className="mt-2 mx-5 mb-4 rounded-lg">
              <div className="rating flex justify-between items-center mb-2">
                <div className="flex">
                  <FaStar className="mr-1 text-base fill-secondary-color max-sm:text-xs" />
                  <FaStar className="mr-1 text-base fill-secondary-color max-sm:text-xs" />
                  <FaStar className="mr-1 text-base fill-secondary-color max-sm:text-xs" />
                  <FaStar className="mr-1 text-base fill-secondary-color max-sm:text-xs" />
                  <FaStar className="text-base fill-secondary-color max-sm:text-xs" />
                </div>
                <div className="flex">
                  <div className="mr-2 p-0.5 rounded-full border-2 border-info-color">
                    <TfiBookmark className="text-lg text-info-color outline-8 max-sm:text-xs" />
                  </div>
                  <div className="p-0.5 rounded-full border-2 border-info-color">
                    <CiShare2 className="text-lg text-info-color outline-8 max-sm:text-xs" />
                  </div>
                </div>
              </div>
              <h2 className="font-bold text-lg max-sm:text-lg">
                Aneka Bengkel
              </h2>
              <div className="mt-3 max-sm:mt-1">
                <div className="flex mb-1">
                  <SlLocationPin className="mr-2" />
                  <p className="text-xs">
                    Aru Lubeg, Lubuk Begalung ajjskdjkfsj dkfjdsk fjk
                  </p>
                </div>
                <div className="flex mb-1">
                  <LuClock3 className="mr-2" />
                  <p className="text-xs">09.00-18.00 WIB</p>
                </div>
                <div className="flex">
                  <IoCallOutline className="mr-2" />
                  <p className="text-xs">081234543</p>
                </div>
              </div>
              <div className="flex justify-end mt-3">
                <Link
                  to={"#"}
                  className="rounded-full px-4 py-2 text-xs text-white bg-success-color max-sm:text-xs"
                >
                  Selengkapnya
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Mitra End */}
      <p className="okee p-5">
        <b>Bengkel Favorit</b>
      </p>
      {/* Bengkel Favorit */}
      <div
        className="favorit flex overflow-x-auto whitespace-nowrap no-scrollbar"
        id="container"
        ref={eleRefFavorit}
        style={{ cursor: "grab" }}
        onMouseDown={mouseDownHandler(eleRefFavorit)}
      >
        {[...Array(15)].map((_, index) => (
          <div key={index} className="card ml-8 shadow-xl rounded-xl max-sm:w-1/2">
            <img className="rounded-t-xl pointer-events-none" src={Bengkel1} alt="" />
            <div className="mt-2 mx-5 mb-4 rounded-lg">
              <div className="rating flex justify-between items-center mb-2">
                <div className="flex">
                  <FaStar className="mr-1 text-base fill-secondary-color max-sm:text-xs" />
                  <FaStar className="mr-1 text-base fill-secondary-color max-sm:text-xs" />
                  <FaStar className="mr-1 text-base fill-secondary-color max-sm:text-xs" />
                  <FaStar className="mr-1 text-base fill-secondary-color max-sm:text-xs" />
                  <FaStar className="text-base fill-secondary-color max-sm:text-xs" />
                </div>
                <div className="flex">
                  <Link className="mr-2 p-0.5 rounded-full border-2 border-info-color">
                    <TfiBookmark className="text-lg text-info-color outline-8 max-sm:text-xs" />
                  </Link>
                  <div className="p-0.5 rounded-full border-2 border-info-color">
                    <CiShare2 className="text-lg text-info-color outline-8 max-sm:text-xs" />
                  </div>
                </div>
              </div>
              <h2 className="font-bold text-lg max-sm:text-lg">
                Aneka Bengkel
              </h2>
              <div className="mt-3 max-sm:mt-1">
                <div className="flex mb-1">
                  <SlLocationPin className="mr-2" />
                  <p className="text-xs">
                    Aru Lubeg, Lubuk Begalung ajjskdjkfsj dkfjdsk fjk
                  </p>
                </div>
                <div className="flex mb-1">
                  <LuClock3 className="mr-2" />
                  <p className="text-xs">09.00-18.00 WIB</p>
                </div>
                <div className="flex">
                  <IoCallOutline className="mr-2" />
                  <p className="text-xs">081234543</p>
                </div>
              </div>
              <div className="flex justify-end mt-3">
                <Link
                  to={"#"}
                  className="rounded-full px-4 py-2 text-xs text-white bg-success-color max-sm:text-xs"
                >
                  Selengkapnya
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RekomendasiBengkel;
