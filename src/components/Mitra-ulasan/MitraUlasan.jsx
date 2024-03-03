'use client';
import { Link } from "react-router-dom"
import { useState } from "react";
import { Progress } from 'flowbite-react';

import { FaStar } from "react-icons/fa";
import Profile from "../../../assets/profile-akun.jpg"



function MitraUlasan() {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    const [jumlahKomentar, setJumlahKomentar] = useState(5);
    const komentar = [...Array(15)]; // Ganti 15 dengan jumlah total komentar yang Anda miliki

    const tampilkanLebihBanyak = () => {
        setJumlahKomentar(prevCount => prevCount + 5);
    };

    const tampilkanLebihSedikit = () => {
        setJumlahKomentar(5);
    };

    return (
        <>
            {/* Nav */}
            <div className="bar flex  border-b-2 border-info-color  gap-8 max-sm:mb-5 max-sm:gap-5">
                <div className="p-2">
                    <Link to={'#'} className="">
                        Galeri
                    </Link>
                </div>
                <div className="p-2">
                    <Link to={'#'} className="">
                        Suku Cadang
                    </Link>
                </div>
                <div className="p-2 border-b-8 border-primary-color ">
                    <Link to={'#'} className="font-bold">
                        Ulasan
                    </Link>
                </div>
            </div>

            <div className="ulasan flex mt-7 mb-10 max-sm:flex-col">
                {/* Rating dan Filter */}
                <div className="ratingBox flex flex-col justify-start items-center mr-6 max-sm:mr-0">
                    {/* ProgressBar */}
                    <div className="flex flex-col py-20 w-96 justify-center items-center border border-primary-color rounded-3xl max-sm:w-full max-sm:py-10">
                        <div className="ratingStar flex justify-center items-center mb-6">
                            <FaStar className="text-5xl text-secondary-color mr-2" />
                            <div className="flex items-baseline">
                                <p className="text-5xl font-bold mr-1">4.9</p>
                                <p className="text-info-color align-bottom">/5.0</p>
                            </div>
                        </div>

                        <p className="text-primary-color mb-8">5.678 ulasan</p>

                        <div className="ratingFilter">

                            <div className="flex justify-center items-center mb-4">
                                <div className="flex items-baseline">
                                    <FaStar className="text-secondary-color items-center" />
                                    <p className="mx-1 align-middle">5</p>
                                </div>

                                <div className="flex flex-col w-44 ">
                                    <Progress progress={50} color="yellow" />
                                </div>

                                <div>
                                    <p className="text-info-color ml-2">5000</p>
                                </div>
                            </div>

                            <div className="flex justify-center items-center mb-4">
                                <div className="flex items-baseline">
                                    <FaStar className="text-secondary-color items-center" />
                                    <p className="mx-1 align-middle">4</p>
                                </div>

                                <div className="flex flex-col w-44 ">
                                    <Progress progress={500} color="teal" />
                                </div>

                                <div>
                                    <p className="text-info-color ml-2">5000</p>
                                </div>
                            </div>

                            <div className="flex justify-center items-center mb-4">
                                <div className="flex items-baseline">
                                    <FaStar className="text-secondary-color items-center" />
                                    <p className="mx-1 align-middle">3</p>
                                </div>

                                <div className="flex flex-col w-44 ">
                                    <Progress progress={50} color="yellow" />
                                </div>

                                <div>
                                    <p className="text-info-color ml-2">5000</p>
                                </div>
                            </div>

                            <div className="flex justify-center items-center mb-4">
                                <div className="flex items-baseline">
                                    <FaStar className="text-secondary-color items-center" />
                                    <p className="mx-1 align-middle">2</p>
                                </div>

                                <div className="flex flex-col w-44 ">
                                    <Progress progress={50} color="yellow" />
                                </div>

                                <div>
                                    <p className="text-info-color ml-2">5000</p>
                                </div>
                            </div>

                            <div className="flex justify-center items-center">
                                <div className="flex items-baseline">
                                    <FaStar className="text-secondary-color items-center" />
                                    <p className="mx-1.5 align-middle">1</p>
                                </div>

                                <div className="flex flex-col w-44 ">
                                    <Progress progress={0} color="yellow" />
                                </div>

                                <div>
                                    <p className="text-info-color ml-2">5000</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Filter Star */}
                    <div className="border border-primary-color rounded-3xl mt-7 py-14 w-96 flex flex-col items-center max-sm:w-full max-sm:py-5">
                        <h2 className="text-center text-lg font-bold mb-7">Filter Ulasan</h2>

                        <div className="flex flex-col justify-center items-center max-sm:flex-row">
                            <div className="flex justify-center items-center mb-3 max-sm:flex-col-reverse max-sm:mb-0 max-sm:mr-5">
                                <input type="checkbox" name="" id="" />
                                <div className="flex items-baseline justify-center ml-6 max-sm:ml-0">
                                    <FaStar className="text-secondary-color mr-1" />
                                    <p className="py-0">5</p>
                                </div>
                            </div>

                            <div className="flex justify-center items-center mb-3 max-sm:flex-col-reverse max-sm:mb-0 max-sm:mr-5">
                                <input type="checkbox" name="" id="" />
                                <div className="flex items-baseline justify-center ml-6 max-sm:ml-0">
                                    <FaStar className="text-secondary-color mr-1" />
                                    <p className="py-0">4</p>
                                </div>
                            </div>

                            <div className="flex justify-center items-center mb-3 max-sm:flex-col-reverse max-sm:mb-0 max-sm:mr-5">
                                <input type="checkbox" name="" id="" />
                                <div className="flex items-baseline justify-center ml-6 max-sm:ml-0">
                                    <FaStar className="text-secondary-color mr-1" />
                                    <p className="py-0">3</p>
                                </div>
                            </div>

                            <div className="flex justify-center items-center mb-3 max-sm:flex-col-reverse max-sm:mb-0 max-sm:mr-5">
                                <input type="checkbox" name="" id="" />
                                <div className="flex items-baseline justify-center ml-6 max-sm:ml-0">
                                    <FaStar className="text-secondary-color mr-1" />
                                    <p className="py-0">2</p>
                                </div>
                            </div>

                            <div className="flex justify-center items-center max-sm:flex-col-reverse max-sm:mb-0 max-sm:mr-5">
                                <input type="checkbox" name="" id="" />
                                <div className="flex items-baseline justify-center ml-6 max-sm:ml-0">
                                    <FaStar className="text-secondary-color mr-1 ml-0.5" />
                                    <p className="py-0">1</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Komentar dan Input */}
                <div className="commentBox w-full">
                    <div className="flex justify-end mb-7 max-sm:mt-8">
                        <div className="flex justify-center items-center">
                            <p className="mr-8 font-semibold">Urutkan</p>
                            <select name="" id="" className="rounded-lg h-8 pr-28 py-0 w-40 max-sm:w-auto">
                                <option value="">Terbaru</option>
                            </select>
                        </div>
                    </div>
                    <div className="commentInput flex flex-col justify-center items-center">

                        {/* Inputan kalau yang login mitra maka berikan hidden*/}
                        <div className="w-full flex flex-col justify-center items-center">
                            <h2 className="font-semibold text-xl mb-3">Beri Rating</h2>
                            <div className="flex">
                                {[...Array(5)].map((star, indexStar) => {
                                    const currentRating = indexStar + 1;
                                    return (
                                        <label key={indexStar}>
                                            <input type="radio"
                                                style={{ display: 'none' }}
                                                name="rating"
                                                value={currentRating}
                                                onClick={() => setRating(currentRating)}
                                            />
                                            <FaStar
                                                className="star mr-2"
                                                size={30}
                                                color={currentRating <= (hover || rating) ? "#FFE609" : "#B2B9C4"}
                                                onMouseEnter={() => setHover(currentRating)}
                                                onMouseLeave={() => setHover(null)}
                                            />
                                        </label>
                                    );
                                })}
                            </div>

                            <div className="mt-10 mb-12 w-full">
                                <form action="">
                                    <div className=" rounded-3xl h-40 outline-none border-none"
                                        style={{ boxShadow: '2px 6px 22.5px 3px rgba(0, 0, 0, 0.13)' }}
                                    >
                                        <textarea name="komentar" id="" placeholder="Tulis komentar..." className="rounded-3xl w-full p-6  border-none resize-none"></textarea>
                                    </div>
                                    <div className="flex justify-end mt-6">
                                        <button className="bg-primary-color text-secondary-color text-xs rounded-xl px-7 py-2" type="submit">Kirim</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {komentar.slice(0, jumlahKomentar).map((_, indexComment) => (
                            <div className="rounded-2xl border w-full h-auto p-6 mb-4" key={indexComment}
                                style={{ boxShadow: '2px 6px 22.5px 3px rgba(0, 0, 0, 0.13)' }}>
                                <div className="flex justify-between">
                                    <div className="flex items-center">
                                        <img src={Profile} alt="profile" className="rounded-full w-9 mr-3" />
                                        <p className="font-semibold">Rerey Tambal Ban</p>
                                    </div>
                                    <div className="flex">
                                        {[...Array(5)].map((_, index) => (
                                            <div key={index} className="flex justify-center items-center">
                                                <FaStar className="text-secondary-color mr-3 last:mr-0" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <p className="mt-3 pl-12 pr-8 text-justify">Abang Bengkel nya ganteng jadi saya kasi bintang 5</p>
                                </div>
                            </div>
                        ))}
                        {jumlahKomentar < komentar.length ? (
                            <button onClick={tampilkanLebihBanyak} className="text-primary-text underline mt-2">
                                Tampilkan Lebih Banyak
                            </button>
                        ) : (
                            <button onClick={tampilkanLebihSedikit} className="text-primary-text underline mt-2">
                                Tampilkan Lebih Sedikit
                            </button>
                        )}

                    </div>

                    <div className="">

                    </div>

                </div>
            </div>
        </>
    )
}

export default MitraUlasan