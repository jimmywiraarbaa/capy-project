// import React from 'react'

import { useState } from "react";

const Header = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section className="hero bg-green-900 text-white">
      <div className="hero-description">
        <div className="flex p-5">
          <div className="description mt-16">
            <h1 className="text-3xl md:text-5xl font-bold mb-2">Nexus</h1>
            <h2 className="text-xl md:text-3xl mb-4">
              Help your vehicle care!
            </h2>
            <div className="detail-description w-11/12 md:w-1/2">
              <p className="text-lg leading-relaxed">
                Nexus adalah platform inovatif yang dirancang untuk memudahkan
                pemilik sepeda motor dalam merawat dan memperbaiki kendaraan
                mereka. Dengan fitur pemantauan jarak tempuh motor dan algoritma
                cerdas, pengguna dapat menerima rekomendasi perawatan yang tepat
                waktu dan sesuai dengan kebutuhan kendaraan mereka. Selain itu,
                Nexus menyediakan integrasi dengan bengkel-bengkel mitra,
                memungkinkan
                {showMore ? (
                  <>
                    pengguna untuk menemukan bengkel terdekat dan memperoleh
                    layanan perbaikan dengan mudah. Admin bengkel mitra juga
                    dapat mengelola inventaris suku cadang dan mempromosikan
                    layanan mereka melalui fitur iklan yang disediakan. Dengan
                    fokus pada kemudahan penggunaan, keandalan, dan kualitas
                    layanan, Nexus bertujuan untuk menjadi teman setia bagi
                    pemilik sepeda motor dalam menjaga kesehatan dan kinerja
                    kendaraan mereka.
                  </>
                ) : null}
              </p>
              <a
                className="readmore cursor-pointer text-blue-500"
                onClick={toggleShowMore}
              >
                {showMore ? "Sembunyikan" : "Selengkapnya"}
              </a>
            </div>
            <div className="button mt-4">
              <a
                className="btn bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
                href="#"
              >
                Cek Motor Anda
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
