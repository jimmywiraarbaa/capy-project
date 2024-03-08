// import React from "react";
import Logo from "../../assets/Logo.png";

function FormRegistrasi() {
    return (
        <div className="container mx-auto text-center">
            <div className="flex flex-col sm:flex-row">
                <div className="sm:w-1/2 justify-center items-center hidden sm:flex">
                    <img src={Logo} alt="Placeholder Image" />
                </div>
                <div className="sm:w-1/2 px-4 py-8 sm:p-0">
                    <div className="bg-gray-900 rounded-lg p-8">
                        <h2 className="text-xl font-semibold mb-4">
                            Terima Kasih Telah Bergabung
                        </h2>
                        <p className="mb-4">Lengkapi informasi mengenai usaha Anda</p>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="coverPhoto" className="block text-white mb-1">
                                    Upload gambar cover
                                </label>
                                <input
                                    type="file"
                                    className="form-control-file"
                                    id="coverPhoto"
                                />
                                <small className="text-gray-400">
                                    Ukuran file harus kurang dari 1000KB.
                                </small>
                            </div>
                            <div className="mb-4 flex justify-between">
                                <div className="w-full sm:w-1/2 pr-2">
                                    <label htmlFor="jamBuka" className="block text-white mb-1">
                                        Jam Buka
                                    </label>
                                    <select id="jamBuka" className="form-select">
                                        <option selected>Pilih jam buka...</option>
                                        {/* Tambahkan pilihan jam buka */}
                                    </select>
                                </div>
                                <div className="w-full sm:w-1/2 pl-2">
                                    <label htmlFor="jamTutup" className="block text-white mb-1">
                                        Jam Tutup
                                    </label>
                                    <select id="jamTutup" className="form-select">
                                        <option selected>Pilih jam tutup...</option>
                                        {/* Tambahkan pilihan jam tutup */}
                                    </select>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="deskripsi" className="block text-white mb-1">
                                    Deskripsi
                                </label>
                                <textarea
                                    className="form-textarea"
                                    id="deskripsi"
                                    rows="3"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="btn-primary font-bold w-full py-2"
                            >
                                Simpan
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormRegistrasi;