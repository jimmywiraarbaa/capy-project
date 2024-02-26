// import React from 'react'
import profile from '../../assets/profile-akun.jpg';
import Logo from '../../assets/Logo.png';
import { FaUser } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { MdOutlineHandshake } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import { SlCamera } from "react-icons/sl";

function Profile() {
    return (
        <div>
            <div className='flex pt-20 pb-80 bg-black justify-center items-center'>
                <img className='items-center' src={Logo} alt="" />
            </div>
            <div className='form border border-red-400 p-14 justify-center'
                style={{ borderRadius: '25px' }}
            >
                <h1 className='text-center mb-16 font-semibold'>Profile Saya</h1>
                <div className="flex justify-center">
                    <div className="border p-7 rounded-lg mr-32">
                        <div className='mb-8'>
                            <a href="#">
                                <p className='rounded-full p-5' style={{ backgroundColor: '#B2B9C4' }}>
                                    <FaUser size={30} style={{ color: '#6C6C6C' }} />
                                </p>
                            </a>
                        </div>
                        <div className='mb-8'>
                            <a href="#">
                                <p className='rounded-full p-5' style={{ backgroundColor: '#B2B9C4' }}>
                                    <MdHistory size={30} style={{ color: '#6C6C6C' }} />
                                </p>
                            </a>
                        </div>
                        <div className='mb-8'>
                            <a href="#">
                                <p className='rounded-full p-5' style={{ backgroundColor: '#B2B9C4' }}>
                                    <MdOutlineHandshake size={30} style={{ color: '#6C6C6C' }} />
                                </p>
                            </a>
                        </div>
                        <div className='mb-8'>
                            <a href="#">
                                <p className='rounded-full p-5' style={{ backgroundColor: '#B2B9C4' }}>
                                    <MdOutlineLogout size={30} style={{ color: '#6C6C6C' }} />
                                </p>
                            </a>
                        </div>

                    </div>
                    <div className='flex'>
                        <form action="" method="">
                            <label className='font-normal' htmlFor="name">Nama Lengkap</label>
                            <div className='flex border-b-2 border-black justify-between mb-7'>
                                <div className='w-full'>
                                    <input autoComplete='none' className='w-full border-none focus:outline-none shadow-none ' type="text" id="name"
                                        style={{ outline: 'none' }}
                                    />
                                </div>
                                <div>
                                    <button>
                                        <BiEditAlt size={30} />
                                    </button>
                                </div>
                            </div>

                            <label className='font-normal' htmlFor="name">Email</label>
                            <div className='flex border-b-2 border-black justify-between mb-7'>
                                <div className='w-full'>
                                    <input autoComplete='none' className='w-full border-none focus:outline-none shadow-none ' type="email" id="name"
                                        style={{ outline: 'none' }}
                                    />
                                </div>
                                <div>
                                    <button>
                                        <BiEditAlt size={30} />
                                    </button>
                                </div>
                            </div>

                            <label className='font-normal' htmlFor="name">No Hanphone</label>
                            <div className='flex border-b-2 border-black justify-between'>
                                <div className='w-full'>
                                    <input autoComplete='none' className='w-full border-none focus:outline-none shadow-none ' type="number" id="name"
                                        style={{ outline: 'none' }}
                                    />
                                </div>
                                <div>
                                    <button>
                                        <BiEditAlt size={30} />
                                    </button>
                                </div>
                            </div>

                            <div className='mt-28'>
                                <button className='rounded-lg bg-black text-yellow-300' type="submit"
                                    style={{ padding: "10px 179px 10px 179px" }}
                                >Simpan</button>
                            </div>

                        </form>
                    </div>
                    <div className="flex justify-center">
                        <div className='flex relative w-44 h-44 bg-orange-500 justify-center items-center m-1 mr-2 text-xl rounded-full ml-7'>
                            <img className='rounded-full' src={profile} alt="" />
                            <div className='bg-black rounded-full w-10 h-10 absolute bottom-0 right-5 flex items-center justify-center'>
                                <button className=''>
                                    <SlCamera style={{ color: 'yellow' }} />
                                </button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Profile