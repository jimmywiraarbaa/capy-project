import React, { useState } from 'react';


import Logo from "../../assets/Logo.png";
import { IoIosLink } from "react-icons/io";

function Profile() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };

    const handleUpload = () => {
        // Implement your upload logic here
        if (selectedFile) {
            console.log('Uploading file:', selectedFile.name);
            // Add your API call or storage logic
        } else {
            console.log('No file selected.');
        }
    };

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
                    Tambah Produk
                </h1>

                <div className="mx-40 max-sm:mx-7">
                    <form action="">
                        <div className='border-b-2 border-info-color mb-6 '>
                            <input className='border-none p-0 mt-1 w-full h-12 focus:border-none' name="name" type="text" placeholder="Nama Barang" required />
                        </div>

                        <div className='mb-6 w-full '>
                            <label className="text-info-color" htmlFor="">Kategori Barang</label>
                            <select className="w-full mt-3" name="category" id="">
                                <option value="oli">Oli</option>
                            </select>
                        </div>

                        <div className="flex mb-6 max-sm:flex-col max-sm:mb-0">
                            <div className='border-b-2 border-info-color mb-3 w-full mr-5 max-sm:mr-0 max-sm:mb-6'>
                                <input className='border-none h-12 p-0 mt-1 w-full focus:border-none' name="price" type="number" placeholder="Harga" required />
                            </div>

                            <div className='flex justify-center items-center border-b-2 border-info-color mb-3 w-full max-sm:mr-0 max-sm:mb-6'>
                                <IoIosLink className="flex justify-center items-center mr-2 text-xl" />
                                <input className='border-none h-12 p-0 mt-1 w-full focus:border-none' name="" type="text" placeholder='Tautan' required />
                            </div>
                        </div>

                        <div className='border-b-2 border-info-color mb-6 mt-6 '>
                            <input className='border-none p-0 h-12 mt-1 w-full focus:border-none' name="name" type="text" placeholder="Deskripsi" required />
                        </div>


                        <form action="">
                            <div className="flex flex-col p-4 rounded-lg shadow-md">
                                <label className="block mb-2 text-gray-700 font-semibold">
                                    Harap unggah gambar dengan ukuran dibawah 100kb
                                </label>
                                <input
                                    type="file"
                                    accept=".jpg, .png, .pdf" // Specify allowed file types
                                    onChange={handleFileChange}
                                    className="border rounded-md p-2 w-full"
                                />
                                {selectedFile && (
                                    <p className="mt-2 text-sm text-gray-600">
                                        Selected file: {selectedFile.name}
                                    </p>
                                )}
                                <div className='flex justify-end items-end'>
                                    <button
                                        onClick={handleUpload}
                                        className="flex justify-center items-center mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                                    >
                                        Upload
                                    </button>
                                </div>
                            </div>
                        </form>

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
