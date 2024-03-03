// import React from 'react'
import { Link } from "react-router-dom";

import { CiShare2 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

function bar1() {
  return (
    <>
      <div className="flex border border-primary-color rounded-3xl my-6 px-20 py-11 justify-between max-sm:flex-col max-sm:px-3 max-sm:py-6">
        <div className="w-1/2 max-sm:w-full">
          <div>
            <h1 className="text-2xl font-bold mb-1 max-sm:text-center">Aneka Motor</h1>
            <p className="mb-3 max-sm:text-center">Aru Lubeg, Lubuk Begalung</p>
            <p className="text-justify text-ellipsis text-balance overflow-hidden ">Sebuah perusahaan yang bergerak di bidang industri otomotif.
              Mereka dikenal sebagai produsen motor terkemuka yang menyediakan berbagai jenis kendaraan bermotor,
              mulai dari sepeda motor konvensional hingga skuter modern.</p>
          </div>
          <div className="flex mt-5 max-sm:justify-between">
            <Link to={"#"} className="flex justify-center items-center bg-primary-color text-secondary-color rounded-lg text-lg py-1.5 px-12 mr-7 max-sm:py-0.5 max-sm:px-5 max-sm:text-base max-sm:mr-3">
              Lokasi
            </Link>

            <Link to={"#"} className="flex justify-center items-center border-2 border-primary-color rounded-lg px-5  mr-7 font-semibold max-sm:mr-3 max-sm:text-sm max-sm:py-0.5">
              Hubungi Kami
            </Link>

            <Link to={"#"} className="flex justify-center items-center text-3xl border-2 border-primary-color rounded-lg p-1.5 max-sm:p-0.5">
              <CiShare2 />
            </Link>
          </div>
          <div></div>
        </div>

        <div className="flex justify-center items-center max-sm:mt-3">
          <div className="flex flex-col">
            <div className="flex justify-center items-baseline">
              <FaStar className="flex text-secondary-color text-3xl justify-center items-center mr-3 max-sm:text-2xl" />
              <p className="flex justify-center items-center text-3xl font-bold max-sm:text-2xl">4.9</p>
            </div>
            <p className="text-center mt-2">Rating & Ulasan</p>
          </div>
          <div className=" border-primary-color h-36 mx-14 max-sm:mx-4"
            style={{ borderWidth: '1px' }}
          ></div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-3xl font-bold max-sm:text-2xl">09.00-17.00</p>
            <p className="mt-2">Jam Operasional</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default bar1;
