// import React from 'react'
import "./CekKendaraan.css";

function CekKendaraan() {
  return (
    <div>
      <section className="test flex flex-col justify-center  items-center mt-12" id="cek">
        <h1 className="text-2xl font-bold flex justify-center max-sm:text-xl">
          Cek Kendaraan Anda
        </h1>
        <div className=" mt-5 w-96 max-sm:w-72">
          <form action="" method="">
            <div className="flex flex-col mb-6">
              <label className="text-sm font-semibold mb-3" htmlFor="">Masukkan KM Terakhir</label>
              <input className="rounded-xl drop-shadow-lg" type="number" />
            </div>

            <div className="flex flex-col mb-6">
              <label className="text-sm font-semibold mb-3" htmlFor="">Masukkan KM Sekarang</label>
              <input className="rounded-xl drop-shadow-lg" type="number" />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-3" htmlFor="">Jenis Motor</label>
              <select className="rounded-xl p-2" name="" id="">
                <option className="max-sm:text-xl" value="">Matic</option>
                <option value="">Manual</option>
                <option value="">Kopling</option>
              </select>
            </div>

            <div className="flex justify-center mt-8 ">
              <button className="bg-black rounded-lg py-2 text-yellow-400 w-3/4" type="submit">Cek</button>
            </div>
          </form>
        </div>
        {/* Test Kendaraan Motor End */}
        {/* Alasan perlu */}
        <section
          className="why-us flex justify-center mt-16 mb-10"
          style={{ color: "var(--prima)" }}
        >
          <div
            className="card w-96 shadow-md rounded-xl"
            style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.4)" }}
          >
            <div className="card-body text-center p-6">
              <h5 className="card-title">
                <b>Kendaraan anda perlu ganti oli?</b>
              </h5>
              <h6 className="card-subtitle mt-3 mb-3 text-blue-500 font-bold">
                <b>Estimasi Harga Rp 50.000-100.000</b>
              </h6>
              <p className="card-text text-justify">
                Pemeliharaan rutin kendaraan penting, termasuk penggantian oli. Estimasi biaya: Rp50.000-100.000. Perawatan ini
                tidak hanya memastikan kinerja optimal mesin, tetapi juga melindungi dari keausan berlebihan dan mengurangi risiko kerusakan
                mahal di masa mendatang.{" "}
              </p>
            </div>
          </div>
        </section>
        {/* Alasan Perlu End */}
      </section>
    </div>
  );
}

export default CekKendaraan;
