// import React from 'react'
import './Header.css';
import { useState } from "react";

const Header = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section className="hero relative bg-cover bg-center bg-no-repeat text-white">
      <div className="hero-description">
        <div className="flex">
          <div className="description mt-16">
            <h1 className=" font-bold mb-2">Nexus</h1>
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
                    {" "}pengguna untuk menemukan bengkel terdekat dan memperoleh
                    layanan perbaikan dengan mudah. Admin bengkel mitra juga
                    dapat mengelola inventaris suku cadang dan mempromosikan
                    layanan mereka melalui fitur iklan yang disediakan. Dengan
                    fokus pada kemudahan penggunaan, keandalan, dan kualitas
                    layanan, Nexus bertujuan untuk menjadi teman setia bagi
                    pemilik sepeda motor dalam menjaga kesehatan dan kinerja
                    kendaraan mereka.
                  </>
                ) : '...'}
              </p>
              <a
                className="readmore cursor-pointer underline underline-offset-4"
                onClick={toggleShowMore}
              >
                {showMore ? "Sembunyikan" : "Selengkapnya"}
              </a>
            </div>
            <div className="button">
              <a
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
