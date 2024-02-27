// import React from 'react'
import profile from "../../assets/profile-akun.jpg";
import Logo from "../../assets/Logo.png";
import { FaUser } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { MdOutlineHandshake } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import { SlCamera } from "react-icons/sl";


function Profile() {
  return (
    <div>
      <div className="static">
        <div
          className="flex pt-19 pb-80 bg-black justify-center items-center static mb-96">
          <img
            className="items-center"
            src={Logo}
            alt=""
            style={{ paddingTop: "3rem" }}
          />
        </div>

        {/* Formulir */}
        <div className="absolute border rounded-3xl top-32 inset-x-40  bg-white py-20 max-sm:py-14 max-sm:inset-x-5">
          <h1 className="text-xl font-semibold text-center mb-12 max-sm:text-lg">Profile Saya</h1>
          <div className="flex items-center max-sm:flex-col">
            {/* Nav Ikon */}
            <div className="flex border drop-shadow-lg rounded-xl mr-28 ml-20 max-sm:mr-0 max-sm:ml-0 max-sm:mb-10">
              <div className="flex-col py-4 px-4 max-sm:flex max-sm:flex-row">
                <div className="rounded-full p-4 bg-primary-color mb-8 max-sm:mr-5 max-sm:p-3 max-sm:mb-0">
                  <FaUser className="text-2xl text-secondary-color max-sm:text-lg" />
                </div>
                <div className="rounded-full p-4 bg-primary-color mb-8 max-sm:mr-5 max-sm:p-3 max-sm:mb-0">
                  <MdHistory className="text-2xl text-secondary-color  max-sm:text-lg" />
                </div>
                <div className="rounded-full p-4 bg-primary-color mb-8 max-sm:mr-5 max-sm:p-3 max-sm:mb-0">
                  <MdOutlineHandshake className="text-2xl text-secondary-color max-sm:text-lg" />
                </div>
                <div className="rounded-full p-4 bg-primary-color max-sm:p-3">
                  <MdOutlineLogout className="text-2xl text-secondary-color max-sm:text-lg" />
                </div>
              </div>
            </div>
            {/* Nav Ikon */}

            {/* Form */}
            <div className="w-96 mr-6 max-sm:mr-0 max-sm:w-auto max-sm:order-3">
              <form action="">
                <div className="mb-7">
                  <label htmlFor="name">Nama Lengkap</label>
                  <div className="flex justify-between border-b-2 border-primary-color">
                    <input className="border-none w-full" type="text" />
                    <button>
                      <BiEditAlt className="text-3xl font-thin" />
                    </button>
                  </div>
                </div>

                <div className="mb-7">
                  <label htmlFor="name">Email</label>
                  <div className="flex justify-between border-b-2 border-primary-color">
                    <input className="border-none w-full" type="email" />
                    <button>
                      <BiEditAlt className="text-3xl font-thin" />
                    </button>
                  </div>
                </div>

                <div className="">
                  <label htmlFor="name">No Handphone</label>
                  <div className="flex justify-between border-b-2 border-primary-color">
                    <input className="border-none w-full" type="number" />
                    <button>
                      <BiEditAlt className="text-3xl font-thin" />
                    </button>
                  </div>
                </div>


                <button className="rounded-lg w-full py-2 mt-16 bg-primary-color text-secondary-color" type="submit">Simpan</button>
              </form>
            </div>

            {/* Profile */}
            <div className="flex justify-center max-sm:order-2 max-sm:mb-6">
              <div
                className="flex relative w-44 h-44  justify-center items-center m-1 mr-2 text-xl rounded-full ml-7"
              >
                <img
                  className="rounded-full"
                  src={profile}
                  alt=""
                />
                <div className="bg-black rounded-full w-10 h-10 absolute bottom-0 right-5 flex items-center justify-center">
                  <button className="">
                    <SlCamera className="text-secondary-color" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Formulir */}
      </div>
    </div>
  );
}

export default Profile;
