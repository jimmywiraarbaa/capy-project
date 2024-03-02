// import React from 'react'
import { Link } from "react-router-dom"

import { FaStar } from "react-icons/fa";


function MitraUlasan() {
    return (
        <>
            <div>
                {/* Nav */}
                <div className="bar flex  border-b-2 border-info-color mb-8 gap-8 max-sm:mb-5 max-sm:gap-5">
                    <div className=" bar p-2">
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

                <div className="ulasan flex">
                    <div className="ratingBox flex flex-col justify-center items-center px-10 py-14  border border-primary-color rounded-xl">
                        <div className="ratingStar flex justify-center items-center mb-6">
                            <FaStar className="text-5xl text-secondary-color mr-2" />
                            <div className="flex items-baseline">
                                <p className="text-5xl font-bold mr-1">4.9</p>
                                <p className="text-info-color align-bottom">/5.0</p>
                            </div>
                        </div>
                        <p className="text-primary-color">5.678 ulasan</p>
                        <div className="ratingFilter">
                            <div className="flex justify-center items-center">
                                <div className="flex justify-center items-center">
                                    <p>5</p>
                                    <FaStar />
                                </div>
                                <div className="flex">
                                    <progress value={50} max={100} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="commentBox border border-e-primary-color">
                        <div className="commentInput">

                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default MitraUlasan