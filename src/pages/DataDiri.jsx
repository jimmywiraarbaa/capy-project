// import React from 'react'
import Logo from '../../assets/Logo.png';
import Profile from "../../assets/profile-akun.jpg";
import '../index.css';

function DataDiri() {
    return (
        <div>
            <div className='flex h-screen'>
                <div className='flex justify-center items-center w-2/4 bg-primary-color max-sm:hidden'>
                    <img src={Logo} alt="" />
                </div>

                <div className='w-full px-24 pt-5 max-sm:px-5 max-sm:pb-3'>
                    <h1 className='text-center text-xl text-primary-text font-bold mb-8'>Isi Data Diri</h1>
                    <div className='form'>
                        <form className='' action="">

                            <div className='profile w-1/5 mb-5 mx-auto text-center max-sm:w-1/2'>
                                <img className='mb-2 rounded-full mx-auto' src={Profile} alt="" />
                                <button className='text-center'>Ganti foto profile</button>
                            </div>

                            <div className='border-b-2 border-primary-color mb-3'>
                                <input className='border-none h-12 p-1 w-full' type="text" placeholder='Nama Lengkap' />
                            </div>

                            <div className='border-b-2 border-primary-color mb-3'>
                                <input className='border-none h-12 p-1 w-full' type="text" placeholder='Alamat' />
                            </div>

                            <div className='flex mb-3'>
                                <div className='border-b-2 border-primary-color mr-4 w-full'>
                                    <input className='border-none h-12 p-1 w-full' type="text" placeholder='Tanggal Lahir (dd/mm/yy)' />
                                </div>
                                <div className='border-b-2 border-primary-color w-full'>
                                    <input className='border-none h-12 p-1 w-full' type="text" placeholder='No HP' />
                                </div>
                            </div>

                            <div className='border-b-2 border-primary-color mb-3'>
                                <input className='border-none h-12 p-1 w-full' type="email" placeholder='Email' />
                            </div>

                            <div className='flex justify-center items-center rounded-lg bg-primary-color mt-8 py-2'>
                                <button className='text-secondary-color' type="submit">Simpan</button>
                            </div>
                            <div className='flex justify-center items-center mt-7 max-sm:mt-5'>
                                <a className='text-info-color underline' href="#">Nanti saja</a>
                            </div>

                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DataDiri