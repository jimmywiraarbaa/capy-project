// import React from 'react'
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

function Login() {
    return (
        <div>
            <div className="flex flex-col justify-center h-screen items-center bg-black">
                <div className="bg-white w-2/4 py-14 rounded-3xl px-8 max-sm:w-auto">
                    <h1 className="text-center text-2xl font-bold mb-8 max-sm:text-base">Buat Akun</h1>
                    <div className="flex justify-center mb-3">
                        <div className="mr-24 max-sm:mr-10">
                            <Link className=" max-sm:text-xs" to={'/login'} >Masuk</Link>
                        </div>
                        <div className="border-b-4 border-black max-sm:border-b-2">
                            <Link className="font-semibold max-sm:text-xs" to={'/register'} >Daftar</Link>
                        </div>
                    </div>

                    <form action="">
                        <div className="flex flex-col mb-5 drop-shadow-xl">
                            <label className="mb-3 max-sm:text-xs" htmlFor="">Email</label>
                            <input className="rounded-2xl" type="text" />
                        </div>

                        <div className="flex flex-col mb-3 drop-shadow-xl">
                            <label className="mb-3 max-sm:text-xs" htmlFor="">Buat kata sandi</label>
                            <input className="rounded-2xl" type="password" />
                        </div>
                        {/* <p className="text-red-600 max-sm:text-xs">*Kata sandi harus lebih dari 6 karakter <br /> dan mengandung angka atau simbol.</p> */}

                        <div className="mt-8 w-auto">
                            <button className="bg-black text-yellow-300 rounded-2xl w-full py-3 text-xl max-sm:text-xs" type="submit">Daftar</button>
                        </div>
                    </form>
                    <p className="text-center my-5 max-sm:text-xs">Atau daftar dengan</p>
                    <div className="flex justify-center">
                        <Link to={''}>
                            <div className="bg-black rounded-full p-4 mr-8 max-sm:p-2 max-sm:mr-5">
                                <FaGoogle className="text-2xl text-yellow-400 max-sm:text-xs" />
                            </div>
                        </Link>

                        <Link to={''}>
                            <div className="bg-black rounded-full p-4 mr-8 max-sm:p-2 max-sm:mr-5">
                                <FaApple className="text-2xl text-yellow-400 max-sm:text-xs" />
                            </div>
                        </Link>

                        <Link to={''}>
                            <div className="bg-black rounded-full p-4 max-sm:p-2">
                                <FaFacebookF className="text-2xl text-yellow-400 max-sm:text-xs" />
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login