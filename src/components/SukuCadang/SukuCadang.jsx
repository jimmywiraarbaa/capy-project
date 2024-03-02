// import React from 'react'

import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import { TfiBookmark } from "react-icons/tfi";
import { CiShare2 } from "react-icons/ci";

import Produk from '../../../assets/fedral-oli.jpg'

function SukuCadang() {
  const eleRefSukuCadang = useRef(null);

  useEffect(() => {
    const mouseLeaveHandler = (eleRef) => {
      const ele = eleRef.current;
      if (!ele) return;

      ele.style.cursor = 'grab';
      ele.style.removeProperty('user-select');
    };

    const eleSukuCadang = eleRefSukuCadang.current;

    window.addEventListener('mouseleave', () => {
      mouseLeaveHandler(eleSukuCadang);
    });

    return () => {
      window.removeEventListener('mouseleave', () => {
        mouseLeaveHandler(eleSukuCadang);
      });
    };
  }, []);

  const mouseDownHandler = (eleRef) => (e) => {
    const ele = eleRef.current;
    if (!ele) return;

    ele.style.cursor = 'grabbing';
    ele.style.userSelect = 'none';

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
      ele.style.cursor = 'grab';
      ele.style.removeProperty('user-select');

      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  };


  return (
    <section className="rekomendasi mt-4">
      <h5 className="judul flex justify-center">
        <b>Suku Cadang Yang Dibutuhkan</b>
      </h5>
      <p className="okee p-5">
        <b>Pilihan Favorit</b>
      </p>
      {/* rekomendasi */}
      <div
        className="rekomendasi flex overflow-auto whitespace-nowrap no-scrollbar"
        id="container"
        ref={eleRefSukuCadang}
        style={{ cursor: "grab" }}
        onMouseDown={mouseDownHandler(eleRefSukuCadang)}
      >
        {[...Array(15)].map((_, index) => (
          <div key={index} className="card ml-8 mb-7 shadow-xl rounded-xl">
            <img className="rounded-t-xl pointer-events-none bg-cover" src={Produk} alt="" />
            <div className="content mt-2 mx-5 mb-4 rounded-lg w-72">
              <div className="flex justify-between items-center mb-2">
                <div className="text-xl font-bold text-balance w-2/3">
                  <h1 className="overflow-hidden text-ellipsis">AHM Oil SPX2 - 0,8LLLLLLLLLLLLLLLLLllllllllllllllllllllllllllllllllllllllllllllllllLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL</h1>
                </div>
                <div className="flex">
                  <Link to={'#'} className="mr-2 p-0.5 rounded-full border-2 border-info-color">
                    <TfiBookmark className="text-lg text-info-color outline-8 max-sm:text-base" />
                  </Link>
                  <Link to={'#'} className="p-0.5 rounded-full border-2 border-info-color">
                    <CiShare2 className="text-lg text-info-color outline-8 max-sm:text-base" />
                  </Link>
                </div>
              </div>
              <div className="deskripsi w-3/4 text-balance h-12 overflow-hidden text-ellipsis">
                <p className="">
                  (Spesifikasi SAE:10W-30, API:SJ, JASO:MB)
                  Nama Resmi Produk: SPX2 10W30 SLMB 0,8L REP
                  Kode Part: 082342MBK0LZ0
                  Kategori: Oli
                </p>
              </div>

              <div className="flex justify-between mt-3">
                <p className="font-bold text-2xl text-ellipsis overflow-hidden">Rp.99.9999999999999</p>
                <Link
                  to={"#"}
                  className="rounded-full px-10 py-2 text-sm text-white bg-success-color max-sm:text-xs"
                >
                  Beli
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SukuCadang;
