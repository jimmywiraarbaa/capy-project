// import React from 'react'
import Logo from "../../assets/Logo.png";
import { GoPlus } from "react-icons/go";

function Profile() {
    return (
        <div>
            <div className="flex pt-19 pb-80 bg-black justify-center items-center mb-96">
                <img
                    className="items-center ml-5"
                    src={Logo}
                    alt="nexus"
                    style={{ paddingTop: "3rem" }}
                />
            </div>

            {/* Parent Formulir */}
            <div
                className="absolute border rounded-3xl top-32 inset-x-40 bg-white py-10 max-sm:py-6 max-sm:inset-x-5 max-sm:w-auto"
                style={{ boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)" }}
            >
                <h1 className="text-xl font-semibold text-center mb-12 max-sm:text-lg max-sm:mb-8">
                    Edit Profil Mitra
                </h1>

                <div className="mx-40 max-sm:mx-7">
                    <form action="">
                        <div className='border-b-2 border-primary-color mb-6 '>
                            <label htmlFor="">Nama Usaha</label>
                            <input className='border-none p-0 mt-1 w-full focus:border-none' name="name" type="text" required />
                        </div>

                        <div className="flex mb-6 max-sm:flex-col max-sm:mb-0">
                            <div className='border-b-2 border-primary-color mb-3 w-full mr-5 max-sm:mr-0 max-sm:mb-6'>
                                <label htmlFor="">Alamat</label>
                                <input className='border-none p-0 mt-1 w-full focus:border-none' name="address" type="text" required />
                            </div>

                            <div className='border-b-2 border-primary-color mb-3 w-full max-sm:mr-0 max-sm:mb-6'>
                                <label htmlFor="">Tautan Alamat (google maps)</label>
                                <input className='border-none p-0 mt-1 w-full focus:border-none' name="" type="text" required />
                            </div>
                        </div>

                        <div className="flex mb-6 max-md:flex-col max-sm:mb-0">
                            <div className='border-b-2 border-primary-color w-full mr-5 max-sm:mr-0 max-sm:mb-6'>
                                <label htmlFor="">No HP Usaha</label>
                                <input className='border-none p-0 mt-1 w-full focus:border-none' name="telephone" type="tel" required />
                            </div>

                            <div className='border-b-2 border-primary-color w-full'>
                                <label htmlFor="">Email Usaha</label>
                                <input className='border-none p-0 mt-1 w-full focus:border-none' name="email" type="email" required />
                            </div>
                        </div>

                        <div className='border-b-2 border-primary-color mb-6 mt-6 '>
                            <label htmlFor="">Deskripsi</label>
                            <input className='border-none p-0 mt-1 w-full focus:border-none' name="name" type="text" required />
                        </div>

                        <div className="flex justify-center items-center border border-primary-color rounded-xl w-1/4 py-1 max-sm:w-full">
                            <GoPlus className="text-4xl" />
                            <button className="font-bold">Tambah Foto</button>
                        </div>

                        <div className="flex justify-center items-center mt-12">
                            <div className="flex w-1/2 max-sm:w-full">
                                <div className="flex justify-center items-center border bg-info-color text-white rounded-xl py-2 mr-4 w-full">
                                    <button>Batal</button>
                                </div>
                                <div className="flex justify-center items-center border rounded-xl bg-primary-color text-secondary-color p-2 w-full">
                                    <button>Simpan</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
            {/* Parent Formulir */}
            <div className="max-sm:h-20">

            </div>
        </div>
    );
}

export default Profile;
