// import React from 'react'

import profile from "../../assets/profile-akun.jpg";
import Logo from "../../assets/Logo.png";
import { FaUser } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { MdOutlineHandshake } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import { SlCamera } from "react-icons/sl";
import "../../src/components/css/profile.css";
function Riwayat() {
  return (
    <div className="body">
      <div className="flex pt-19 pb-80 bg-black justify-center items-center">
        <img
          className="items-center"
          src={Logo}
          alt=""
          style={{ paddingTop: "3rem" }}
        />
      </div>
      <div className="FOORM">
        <div
          className="form border p-14 justify-center max-w-screen-sm mx-auto"
          style={{
            borderRadius: "25px",
            position: "absolute",
            top: "55%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "white",
            height: "auto", // Mengubah tinggi ke auto agar menyesuaikan konten
            width: "90%", // Menggunakan persentase untuk lebar agar responsif
            maxWidth: "54rem", // Menggunakan maxWidth agar tidak terlalu lebar pada layar besar
            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
            marginTop: "5rem",
          }}
        >
          <select
            className="form-select md:ml-[41rem]"
            aria-label="Default select example"
            style={{ marginLeft: "41rem", borderRadius: "10px" }}
          >
            <option defaultValue> Tanggal</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <h1
            className="text-center font-semibold"
            style={{ marginBottom: "3rem", marginTop: "-1rem" }}
          >
            Riwayat
          </h1>
          <div className="namaform flex justify-center ">
            <div
              className="border p-3 rounded-lg mr-[4rem] max-sm:hidden"
              style={{
                height: "24rem",
                boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
                marginLeft: "-9rem",
              }}
            >
              <div
                className="logobar mb-6
            "
              >
                <a href="#">
                  <p
                    className="rounded-full p-5"
                    style={{ backgroundColor: "#B2B9C4" }}
                  >
                    <FaUser size={30} style={{ color: "#6C6C6C" }} />
                  </p>
                </a>
              </div>
              <div className="mb-6">
                <a href="#">
                  <p
                    className="rounded-full p-5"
                    style={{ backgroundColor: "#B2B9C4" }}
                  >
                    <MdHistory size={30} style={{ color: "#6C6C6C" }} />
                  </p>
                </a>
              </div>
              <div className="mb-6">
                <a href="#">
                  <p
                    className="rounded-full p-5"
                    style={{ backgroundColor: "#B2B9C4" }}
                  >
                    <MdOutlineHandshake
                      size={30}
                      style={{ color: "#6C6C6C" }}
                    />
                  </p>
                </a>
              </div>
              <div className="mb-6">
                <a href="#">
                  <p
                    className="rounded-full p-5"
                    style={{ backgroundColor: "#B2B9C4" }}
                  >
                    <MdOutlineLogout size={30} style={{ color: "#6C6C6C" }} />
                  </p>
                </a>
              </div>
            </div>
            <div className="flex ">
              <form className="flexbox max-sm:w-[23rem]" action="" method="">
                <label className="font-normal" htmlFor="name">
                  KM Sekarang
                </label>
                <div className="flex border-b-2 border-black justify-between mb-7">
                  <div className="w-full">
                    <input
                      autoComplete="none"
                      className="w-full border-none focus:outline-none shadow-none "
                      type="text"
                      id="name"
                      style={{ outline: "none" }}
                    />
                  </div>
                  <div>
                    <button>
                      <BiEditAlt size={30} />
                    </button>
                  </div>
                </div>

                <label className="font-normal" htmlFor="name">
                  KM Sebelum
                </label>
                <div className="flex border-b-2 border-black justify-between mb-7">
                  <div className="w-full">
                    <input
                      autoComplete="none"
                      className="w-full border-none focus:outline-none shadow-none "
                      type="email"
                      id="name"
                      style={{ outline: "none" }}
                    />
                  </div>
                  <div>
                    <button>
                      <BiEditAlt size={30} />
                    </button>
                  </div>
                </div>

                <label className="font-normal" htmlFor="name">
                  Jenis Motor
                </label>
                <div className="flex border-b-2 border-black justify-between">
                  <div className="w-full">
                    <input
                      autoComplete="none"
                      className="w-full border-none focus:outline-none shadow-none "
                      type="number"
                      id="name"
                      style={{ outline: "none" }}
                    />
                  </div>
                  <div>
                    <button>
                      <BiEditAlt size={30} />
                    </button>
                  </div>
                </div>
                <br />
                <label className="font-normal" htmlFor="name">
                  Treatment
                </label>
                <div className="flex border-b-2 border-black justify-between">
                  <div className="w-full">
                    <input
                      autoComplete="none"
                      className="w-full border-none focus:outline-none shadow-none "
                      type="number"
                      id="name"
                      style={{ outline: "none" }}
                    />
                  </div>
                  <div>
                    <button>
                      <BiEditAlt size={30} />
                    </button>
                  </div>
                </div>

                <div className="tombol" style={{ marginTop: "4rem" }}>
                  <button
                    className="rounded-lg bg-black text-yellow-300 max-sm:ml-[-26px]"
                    type="submit"
                    style={{
                      padding: "10px 179px", // Nilai padding ini akan diterapkan sebagai fallback
                    }}
                  >
                    Simpan
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Riwayat;
