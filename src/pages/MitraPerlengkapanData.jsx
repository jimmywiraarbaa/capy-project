import { useState } from "react";

const MitraPerlengkapanData = () => {
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file.size <= 1000000) {
            setImage(file);
        } else {
            alert("Ukuran gambar harus kurang dari 1000KB");
        }
    };

    return (
        <div>
            <h2>Nexus</h2>
            <h3 className="text-center font-semibold">Terimakasih Telah Bergabung</h3>
            <h3 className="text-center text-xs">Lengkapi informasi mengenai usaha Anda</h3>
            <div className="flex justify-center mt-8">
                <div className="rounded-lg shadow-xl bg-gray-50 lg:w-1/2">
                    <div className="m-4">
                        <label className="inline-block mb-2 text-gray-500">Upload Gambar Cover</label>
                        <div className="flex items-center justify-center w-full">
                            <label className="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                                <div className="flex flex-col items-center justify-center pt-7">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                                    </svg>
                                    <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">Silakan unggah gambar dengan ukuran kurang dari 1000KB</p>
                                </div>
                                <input type="file" className="opacity-0" onChange={handleImageChange} />
                            </label>
                        </div>
                    </div>
                    <div className="flex p-2 space-x-4">
                        <button className="px-4 py-2 text-white bg-red-500 rounded shadow-xl">Batal</button>
                        <button className="px-4 py-2 text-white bg-green-500 rounded shadow-xl">Buat</button>
                    </div>
                </div>
            </div>
            <p>Jam Buka</p>
            <p>Jam Tutup</p>
            <p className="text-center">Deskripsi</p>
            <center>
                <textarea id="comment" name="comment" rows="4" cols="45"></textarea>
            </center>
            <br></br>
        </div>
    );
};

export default MitraPerlengkapanData;
