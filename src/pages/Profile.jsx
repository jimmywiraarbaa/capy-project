// import React from 'react'
import profile from '../../assets/profile-akun.jpg';
import Logo from '../../assets/Logo.png';

function Profile() {
    return (
        <div>
            <div className='flex pt-20 pb-80 bg-black justify-center items-center'>
                <img className='items-center' src={Logo} alt="" />
            </div>
            <div className=' border border-red-400 p-14 justify-center'
                style={{ borderRadius: '25px' }}
            >
                <h1 className='text-center mb-16 font-semibold'>Profile Saya</h1>
                <div className="flex justify-center">
                    <div className="border p-7 rounded-lg">

                        <p>home</p>
                        <p>home</p>
                        <p>home</p>
                    </div>
                    <div className='flex'>
                        <form action="" method="">
                            <label className='font-normal' htmlFor="name">Nama Lengkap</label>
                            <div className='flex border-b-2 border-black justify-between'>
                                <div className='w-full'>
                                    <input autoComplete='none' className='w-full border-none focus:outline-none shadow-none ' type="text" id="name"
                                        style={{ outline: 'none' }}
                                    />
                                </div>
                                <div>
                                    <p>ikon</p>
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
                        <div className='flex relative w-44 h-44 bg-orange-500 justify-center items-center m-1 mr-2 text-xl rounded-full'>
                            <img className='rounded-full' src={profile} alt="" />
                            <div className='bg-black rounded-full w-10 h-10 absolute bottom-0 right-5'></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Profile