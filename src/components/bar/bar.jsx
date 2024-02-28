// import React from 'react'
function bar() {
  return (
    <div className="text-center border-2 rounded-lg  p-10 my-5">
      <div className="flex flex-col lg:flex-row ">
        <div className="Bengkel flex-auto lg:text-left">
          <h1 className="text-xl font-bold">Aneka Motor</h1>
          <p>Aru Lubeg, Lubuk Begalung Nan XX</p>
          <p className="mt-3 text-justify lg:w-96">
            Bengkel Aneka Motor adalah tempat perbaikan dan perawatan motor dengan layanan yang komprehensif.
          </p>
          <div className="BUTTONS flex flex-row items-center justify-center sm:flex-row sm:justify-start gap-4 mt-5 mb-10">
            <a
              href="#"
              className="lokasi inline-block text-sm px-4 py-2 leading-none border-2 border-black hover:border-transparent hover:text-teal-500 mt-4 lg:mt-0 rounded bg-black"
              style={{ color: "#E6EB01" }}
            >
              Lokasi
            </a>
            <a
              href="#"
              className="mitra inline-block text-sm px-4 py-2 leading-none border-2 rounded border-black hover:bg-blue-600 mt-4 lg:mt-0"
            >
              Hubungi Mitra
            </a>
            <a
              href="#"
              className="mitra inline-block text-sm leading-none border-2 rounded border-black hover:bg-blue-600 mt-4 lg:mt-0"
            >
              <img src="./assets/share.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="flex lg:flex-row gap-9">
          <div className="flex items-center justify-center">
            <div className="lg:text-center">
              <p className="font-black text-xl">
                <b>⭐ 4.9</b>
              </p>
              <p>Rating & Ulasan</p>
            </div>
          </div>
          <div className=" w-px bg-gray-400"></div>
          <div className="flex items-center justify-center">
            <div className="lg:text-center">
              <p className="font-black text-xl">
                <b>09:00 - 17:00</b>
              </p>
              <p>Jam operasional Bengkel</p>
            </div>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}

export default bar;
