// import React from 'react'
import './Header.css';
import { useState } from "react";

const Header = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section className="hero relative bg-cover bg-center bg-no-repeat text-white max-sm:bg-cover">
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl ltr:sm:text-left animate-fade-right rtl:sm:text-right">
          <h1 className="text-8xl font-extrabold max-sm:text-6xl">
            Nexus
            <strong className="block mt-5 text-4xl font-extrabold text-white max-sm:text-2xl max-sm:mt-1"> Help your vehicle care! </strong>
          </h1>

          <p className="mt-4 text-justify max-w-lg sm:text-xl/relaxed">
            Nexus adalah platform inovatif untuk pemilik sepeda motor.
            Dengan pemantauan jarak tempuh dan algoritma cerdas,
            pengguna mendapatkan rekomendasi perawatan
            {showMore ? (
              <>
                {" "}yang tepat waktu.
                Nexus juga menyediakan integrasi dengan bengkel mitra untuk layanan perbaikan mudah. Dengan fokus pada kemudahan, keandalan, dan kualitas layanan, Nexus menjadi teman setia pemilik sepeda motor.
              </>
            ) : '...'}
          </p>
          <a
            className="readmore cursor-pointer underline underline-offset-4"
            onClick={toggleShowMore}
          >
            {showMore ? "Sembunyikan" : "Selengkapnya"}
          </a>

          <div className="button mt-8 flex flex-wrap gap-4 text-center">
            <a href="#cek"
              className="block w-full rounded  px-12 py-3 text-sm font-medium text-white shadow  focus:outline-none focus:ring  sm:w-auto">
              Cek Motor Anda
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
