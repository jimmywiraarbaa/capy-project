// import React from 'react'
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

function Login() {
    return (
        <div>
            <div className="flex flex-col justify-center h-screen items-center bg-black">
                <div className="bg-white w-2/4 py-14 rounded-3xl px-8 ">
                    <h1 className="text-center text-2xl font-bold mb-8">Selamat Datang Kembali</h1>
                    <div className="flex justify-center mb-3">
                        <div className="border-b-4 border-black mr-24">
                            <Link className="font-semibold text-base" to={'/login'} >Masuk</Link>
                        </div>
                        <div>
                            <Link className="text-base" to={'/register'} >Daftar</Link>
                        </div>
                    </div>

                    <form action="">
                        <div className="flex flex-col mb-5 drop-shadow-xl">
                            <label className="mb-3" htmlFor="">Email atau nama pengguna</label>
                            <input className="rounded-2xl" type="text" />
                        </div>

                        <div className="flex flex-col mb-3 drop-shadow-xl">
                            <label className="mb-3" htmlFor="">Kata sandi</label>
                            <input className="rounded-2xl" type="password" />
                        </div>
                        <Link className="text-blue-400 underline underline-offset-4" to={'forgot-password'}>Lupa password?</Link>

                        <div className="mt-8 w-auto">
                            <button className="bg-black text-yellow-300 rounded-2xl w-full py-3 text-xl" type="submit">Daftar</button>
                        </div>
                    </form>
                    <p className="text-center my-5">Atau masuk dengan</p>
                    <div className="flex justify-center">
                        <Link to={''}>
                            <div className="bg-black rounded-full p-4 mr-8">
                                <FaGoogle color="yellow" size={'25'} />
                            </div>
                        </Link>

                        <Link to={''}>
                            <div className="bg-black rounded-full p-4 mr-8">
                                <FaApple color="yellow" size={'25'} />
                            </div>
                        </Link>

                        <Link to={''}>
                            <div className="bg-black rounded-full p-4">
                                <FaFacebookF color="yellow" size={'25'} />
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login