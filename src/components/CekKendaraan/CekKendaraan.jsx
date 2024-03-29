import { useState } from 'react';
import "./CekKendaraan.css";

function CekKendaraan() {
  const [kmTerakhir, setKmTerakhir] = useState('');
  const [kmSekarang, setKmSekarang] = useState('');
  const [perluPerawatan, setPerluPerawatan] = useState('');
  const [perluPerawatanDeskripsi, setPerluPerawatanDeskripsi] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const kmDifference = kmSekarang - kmTerakhir;

    let perluPerawatan = '';
    let perluPerawatanDeskripsi = '';

    if (kmDifference >= 3000 && kmDifference <= 5000) {
      perluPerawatan = 'Ganti Oli';
      perluPerawatanDeskripsi = 'karena motor kesayangan  anda sudah menempuh perjalanan sejauh 3000km - 5000km jadi memerlukan ';
    } else if (kmDifference >= 25000 && kmDifference <= 30000) {
      perluPerawatan = 'Ganti Vanbelt';
      perluPerawatanDeskripsi = 'karena motor kesayangan  anda sudah menempuh perjalanan sejauh 25000km - 30000km jadi memerlukan ';
    } else if (kmDifference >= 10000 && kmDifference <= 20000) {
      perluPerawatan = 'Ganti Oli Gardan';
      perluPerawatanDeskripsi = 'karena motor kesayangan  anda sudah menempuh perjalanan sejauh 10000km - 20000km jadi memerlukan ';
    }

    if (perluPerawatan !== '') {
      setPerluPerawatan(perluPerawatan);
      setPerluPerawatanDeskripsi(perluPerawatanDeskripsi);
    } else {
      setPerluPerawatan('Tidak perlu perawatan khusus');
    }
  };

  return (
    <div>
      <section className="test flex flex-col justify-center animate-fade  items-center mt-12" id="cek">
        <h1 className="text-2xl font-bold flex justify-center max-sm:text-xl">
          Cek Kendaraan Anda
        </h1>
        <div className=" mt-5 w-96 max-sm:w-72">
          <form onSubmit={handleFormSubmit}>
            <div className="flex flex-col mb-6">
              <label className="text-sm font-semibold mb-3" htmlFor="">Masukkan KM Terakhir</label>
              <input className="rounded-xl drop-shadow-lg" type="number" value={kmTerakhir} onChange={(e) => setKmTerakhir(e.target.value)} />
            </div>

            <div className="flex flex-col mb-6">
              <label className="text-sm font-semibold mb-3" htmlFor="">Masukkan KM Sekarang</label>
              <input className="rounded-xl drop-shadow-lg" type="number" value={kmSekarang} onChange={(e) => setKmSekarang(e.target.value)} />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-3" htmlFor="">Jenis Motor</label>
              <select className="rounded-xl p-2" name="" id="">
                <option className="max-sm:text-xl" value="">Matic</option>
                <option value="">Manual</option>
              </select>
            </div>

            <div className="flex justify-center mt-8 ">
              <button className="bg-black rounded-lg py-2 text-yellow-400 w-3/4" type="submit">Cek</button>
            </div>
          </form>
        </div>
        {/* Test Kendaraan Motor End */}
        {/* Alasan perlu */}
        <section
          className="why-us flex justify-center mt-16 mb-10"
          style={{ color: "var(--prima)" }}
        >
          <div
            className="card w-96 shadow-md rounded-xl"
            style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.4)" }}
          >
            <div className="card-body text-center p-6">
              <h5 className="card-title">
                <b>Kendaraan anda perlu? {perluPerawatan}</b>
              </h5>
              <h6 className="card-subtitle mt-3 mb-3 text-blue-500 font-bold">
                <b>Estimasi Harga Rp 50.000-100.000</b>
              </h6>
              <p className="card-text text-justify">
                {perluPerawatanDeskripsi}: {perluPerawatan}
              </p>
            </div>
          </div>
        </section>
        {/* Alasan Perlu End */}
      </section>
    </div>
  );
}

export default CekKendaraan;
