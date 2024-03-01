// import React from 'react'

import profile from "../../assets/profile-akun.jpg";
import Logo from "../../assets/Logo.png";
import { FaUser } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { MdOutlineHandshake } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import { SlCamera } from "react-icons/sl";

function MitraTinjau() {
  return (
    <div className="body">
      <div className="flex pt-19 pb-[8rem] bg-black justify-center items-center max-sm:pb-[6rem]">
        <img
          className="items-center"
          src={Logo}
          alt=""
          style={{ paddingTop: "3rem" }}
        />
      </div>
      {/* ======= form ========== */}

      <div
        className="absolute border rounded-3xl top-32 inset-x-40  bg-white pt-[5rem] pb-[1rem] max-sm:py-14 max-sm:inset-x-5 max-sm:pb-[1.5rem]"
        style={{ boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)" }}
      >
        <div
          className="flex justify-center items-center  gap-[21rem] max-sm:gap-[4rem] max-sm:mt-[0rem] "
          style={{ marginTop: "-2rem" }}
        >
          <div className="flex rounded-full p-4 bg-primary-color mb-8 max-sm:mr-5 max-sm:p-4 max-sm:mb-0">
            <img
              src="./assets/note.svg"
              className="text-2xl text-secondary-color max-sm:text-lg"
            />
          </div>

          <div className="flex rounded-full p-3 bg-primary-color mb-8 max-sm:mr-5 max-sm:p-3 max-sm:mb-0">
            <img
              src="./assets/search.svg"
              className="text-2xl text-secondary-color max-sm:text-lg"
            />
          </div>

          <div className="flex rounded-full p-3 bg-primary-color mb-8 max-sm:p-3 max-sm:mb-0">
            <img
              src="./assets/ph_check-bold.svg"
              className="text-2xl text-secondary-color max-sm:text-lg"
            />
          </div>
        </div>
        <div class="text flex justify-center mt-[-1rem] items-center space-x-80 max-sm:space-x-14 font-normal max-sm:pt-[21px] max-sm:flex-row">
          <p class="pb-1 ">Mendaftar</p>
          <p class="pb-1">Isi Informasi</p>
          <p class="pb-1 ">Terdaftar</p>
        </div>
      </div>
      <div className=" text-justify flex-column justify-center mt-36 px-10">
        <h2 className="mb-10 px-24 max-sm:px-1 text-center font-black text-xl ">
          Terima kasih sudah mendaftar!
        </h2>
        <p className="px-24 max-sm:px-1 ">
          Terima kasih telah bergabung sebagai mitra Nexus! Kami sangat
          menghargai kepercayaan dan dukungan Anda dalam memperluas jangkauan
          layanan kami. Sebagai mitra, Anda tidak hanya menjadi bagian dari
          komunitas kami, tetapi juga berperan penting dalam memberikan layanan
          berkualitas kepada pengguna kami. Dengan kolaborasi dan dedikasi Anda,
          kami yakin akan mencapai kesuksesan bersama dalam memberikan solusi
          yang inovatif dan bermanfaat bagi pengguna sepeda motor kami. Kami
          berkomitmen untuk terus memberikan dukungan penuh kepada Anda dalam
          perjalanan bersama Nexus ini. Terima kasih atas partisipasi Anda dan
          semoga kita bisa meraih banyak kesuksesan di masa depan!
        </p>
        <div className="flex justify-center">
          <button
            className="rounded-lg py-2 bg-primary-color w-[30rem] text-secondary-color font-extrabold mt-10"
            type="submit"
          >
            Lihat Halaman Mitra
          </button>
        </div>
      </div>
    </div>
  );
}

export default MitraTinjau;
