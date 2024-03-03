// import React from 'react'
import Logo from "../../assets/Logo.png";
import { GoPlus } from "react-icons/go";

function Profile() {
    return (
        <div>
            <div className="">
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
                    className="absolute border rounded-3xl top-32 inset-x-40 bg-white py-20 max-sm:py-14 max-sm:inset-x-5 max-sm:w-auto"
                    style={{ boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)" }}
                >
                    <h1 className="text-xl font-semibold text-center mb-12 max-sm:text-lg">
                        Edit Profil Mitra
                    </h1>

                    <div className="">
                        <form action="">
                            <div className='border-b-2 border-primary-color mb-3'>
                                <label htmlFor="">Nama Usaha</label>
                                <input className='border-none p-0 mt-1 w-full focus:border-none' type="text" required />
                            </div>
                        </form>
                    </div>

                </div>
                {/* Parent Formulir */}
            </div>
        </div>
    );
}

export default Profile;
