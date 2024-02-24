// import React from 'react'
import "./CekKendaraan.css";

function CekKendaraan() {
  return (
    <section className="test container mt-10">
      <h1 className="flex justify-center">
        <b>Cek Kendaraan Anda</b>
      </h1>
      <div className="form flex justify-center" data-aos="zoom-in">
        <form action="" method="">
          <label
            htmlFor="last-kilometer"
            style={{ marginTop: "20px", display: "flex" }}
          >
            Input KM Terakhir
          </label>
          <input
            className="form-control mb-4 "
            type="number"
            name=""
            style={{
              width: "26rem",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.4)",
            }}
          />

          <label htmlFor="now-kilometer" style={{ display: "flex" }}>
            Input KM Sekarang
          </label>
          <input
            className="form-control mb-4"
            type="number"
            name=""
            style={{
              width: "26rem",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.4)",
            }}
          />

          <label htmlFor="motorbike-type " style={{ display: "flex" }}>
            Jenis Motor
          </label>
          <select
            className="form-select mb-4 rounded p-2"
            aria-label="Default select example"
            style={{
              width: "26rem",
              borderRadius: "10px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.4)",
            }}
          >
            <option selected>-- Select --</option>
            <option value="matic">Matic</option>
            <option value="manual">Manual</option>
            <option value="clutch">Kopling</option>
          </select>

          <div className="text-center mt-3">
            <button className="button" type="submit">
              Submit
            </button>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              pariatur, sapiente eaque repellat voluptates tempore, vitae
              expedita commodi voluptate non ducimus sit quibusdam magni impedit
              vel cupiditate.{" "}
            </p>
          </div>
        </div>
      </section>
      {/* Alasan Perlu End */}
    </section>
  );
}

export default CekKendaraan;
