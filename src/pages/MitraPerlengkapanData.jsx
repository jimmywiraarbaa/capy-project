// import React from 'react';
import Logo from "../../assets/Logo.png";

function MitraPerlengkapanData() {
    return (
        <div>
            <div className="flex h-screen">
                <div className="flex justify-center items-center w-2/4 bg-primary-color sm:flex">
                    <img src={Logo} alt="" />
                </div>

                <div className="w-full px-24 pt-5 max-sm:px-5 max-sm:pb-3">
                    <h2 className="text-center font-bold">Terima Kasih Telah Bergabung</h2>
                    <p className="text-center">Lengkapi informasi mengenai usaha Anda</p>
                    <div className="form mt-5">
                        <form className="" action="">
                            <div className="form-group">
                                <label htmlFor="coverPhoto" className="block">Upload gambar cover</label>
                                <input
                                    type="file"
                                    className="form-control-file mt-4"
                                    id="coverPhoto"
                                />
                                <small className="block text-xs text-gray-500">Ukuran file harus kurang dari 1000KB.</small>
                            </div>

                            <div className="form-row flex mt-5">
                                <div className="form-group col-md-6">
                                    <label htmlFor="jamBuka" className="block">Jam Buka</label>
                                    <select id="jamBuka" className="form-select">
                                        <option selected>Pilih jam buka...</option>
                                        {/* Tambahkan pilihan jam buka */}
                                    </select>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="jamTutup" className="block">Jam Tutup</label>
                                    <select id="jamTutup" className="form-select">
                                        <option selected>Pilih jam tutup...</option>
                                        {/* Tambahkan pilihan jam tutup */}
                                    </select>
                                </div>
                            </div>

                            <div className="form-group mt-5">
                                <textarea
                                    className="form-control"
                                    id="deskripsi"
                                    rows="3"
                                ></textarea>
                            </div>

                            <div className="flex justify-center items-center rounded-lg bg-primary-color mt-8 py-2">
                                <button className="text-secondary-color font-bold" type="submit">
                                    Simpan
                                </button>
                            </div>
                            <div className="flex justify-center items-center mt-7 max-sm:mt-5">
                                <a className="text-info-color underline" href="#">Nanti saja</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MitraPerlengkapanData;
