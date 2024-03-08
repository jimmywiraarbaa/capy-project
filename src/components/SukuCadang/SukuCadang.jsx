import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'; // Import axios

import { TfiBookmark } from "react-icons/tfi";
import { CiShare2 } from "react-icons/ci";

function SukuCadang() {
  const [produkData, setProdukData] = useState([]); // State untuk menyimpan data produk

  const eleRefSukuCadang = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const config = {
          headers: {
            'Authorization': 'Bearer WBrt5LsJBNEKdES2BJAkJ82tDGQHNQDjhHON65fZHhjtVRWu9eC8Du5YsG50'
          }
        };

        const response = await axios.get('https://api-lumen-nexus.000webhostapp.com/home', config); // Mengambil data dari URL API Anda dengan token
        setProdukData(response.data.data_produk); // Simpan data produk dari API ke dalam state
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Panggil fungsi fetchData saat komponen dimuat
  }, []);

  // Fungsi mouseDownHandler tetap sama seperti sebelumnya

  return (
    <section className="rekomendasi mt-4">
      <h5 className="judul flex justify-center">
        <b>Suku Cadang Yang Dibutuhkan</b>
      </h5>
      <p className="okee p-5">
        <b>Pilihan Favorit</b>
      </p>
      {/* rekomendasi */}
      <div
        className="rekomendasi flex overflow-auto whitespace-nowrap no-scrollbar"
        id="container"
        ref={eleRefSukuCadang}
        style={{ cursor: "grab" }}
      // onMouseDown={mouseDownHandler(eleRefSukuCadang)} (hapus ini jika ingin menggunakan fungsi mouseDownHandler)
      >
        {produkData.map((produk) => (
          <div key={produk.id} className="card ml-8 mb-7 shadow-xl rounded-xl">
            <img className="rounded-t-xl pointer-events-none bg-cover" src={produk.img} alt="" />
            <div className="content mt-2 mx-5 mb-4 rounded-lg w-72">
              <div className="flex justify-between items-center mb-2">
                <div className="text-xl font-bold text-balance w-2/3">
                  <h1 className="overflow-hidden text-ellipsis">{produk.nama_produk}</h1>
                </div>
                <div className="flex">
                  <Link to={'#'} className="mr-2 p-0.5 rounded-full border-2 border-info-color">
                    <TfiBookmark className="text-lg text-info-color outline-8 max-sm:text-base" />
                  </Link>
                  <Link to={'#'} className="p-0.5 rounded-full border-2 border-info-color">
                    <CiShare2 className="text-lg text-info-color outline-8 max-sm:text-base" />
                  </Link>
                </div>
              </div>
              <div className="deskripsi w-3/4 text-balance h-12 overflow-hidden text-ellipsis">
                <p className="">{produk.deskripsi}</p>
              </div>

              <div className="flex justify-between mt-3">
                <p className="font-bold text-2xl text-ellipsis overflow-hidden">Rp.{produk.harga}</p>
                <Link
                  to={"#"}
                  className="rounded-full px-10 py-2 text-sm text-white bg-success-color max-sm:text-xs"
                >
                  Beli
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SukuCadang;
