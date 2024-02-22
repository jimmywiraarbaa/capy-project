// import React from 'react'
import './CekKendaraan.css';

function CekKendaraan() {
  return (
    <section className="test container mt-6">
      <h2 className="flex justify-center">
        Cek Kendaraan Anda
      </h2>
      <div className="form flex justify-center" data-aos="zoom-in">
        <form action="" method="">
          <label
            htmlFor="last-kilometer"
            style={{ marginTop: "20px", display: "flex" }}
          >
            Input KM Terakhir
          </label>
          <input className="form-control mb-4" type="number" name="" />

          <label htmlFor="now-kilometer" style={{ display: "flex" }}>
            Input KM Sekarang
          </label>
          <input className="form-control mb-4" type="number" name="" />

          <label htmlFor="motorbike-type " style={{ display: "flex" }}>
            Jenis Motor
          </label>
          <select
            className="form-select mb-4"
            aria-label="Default select example"
          >
            <option selected>-- Select --</option>
            <option value="matic">Matic</option>
            <option value="manual">Manual</option>
            <option value="clutch">Kopling</option>
          </select>

          <div className="text-center">
            <button className="button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
      {/* Test Kendaraan Motor End */}
      {/* Alasan perlu */}
      <section
        className="why-us flex justify-center mt-6"
        style={{ color: "var(--prima)" }}
      >
        <div className="card w-96 shadow-md rounded-xl">
          <div className="card-body text-center">
            <h5 className="card-title">
              <b>Kendaraan anda perlu ganti oli?</b>
            </h5>
            <h6 className="card-subtitle mt-3 mb-3 text-blue-500 font-bold">
              <b>Estimasi Harga Rp 50.000-100.000</b>
            </h6>
            <p className="card-text">
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
