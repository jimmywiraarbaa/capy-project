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
function Profile() {
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
      <div>
        <div
          className="form border p-14 justify-center"
          style={{
            borderRadius: "25px",
            position: "absolute",
            top: "151px",
            left: "184px",
            background: "white",
            height: "36rem",
            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
          }}
        >
          <h1
            className="text-center font-semibold"
            style={{ marginBottom: "3rem", marginTop: "-1rem" }}
          >
            Profile Saya
          </h1>
          <div className="flex justify-center">
            <div
              className="border p-3 rounded-lg mr-32"
              style={{
                height: "24rem",
                boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
              }}
            >
              <div
                className="mb-6
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
            <div className="flex">
              <form action="" method="">
                <label className="font-normal" htmlFor="name">
                  Nama Lengkap
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
                  Email
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
                  No Hanphone
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
                    className="rounded-lg bg-black text-yellow-300"
                    type="submit"
                    style={{ padding: "10px 179px 10px 179px" }}
                  >
                    Simpan
                  </button>
                </div>
              </form>
            </div>
            <div className="flex justify-center">
              <div className="flex relative w-44 h-44 bg-orange-500 justify-center items-center m-1 mr-2 text-xl rounded-full ml-7">
                <img className="rounded-full" src={profile} alt="" />
                <div className="bg-black rounded-full w-10 h-10 absolute bottom-0 right-5 flex items-center justify-center">
                  <button className="">
                    <SlCamera style={{ color: "yellow" }} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
