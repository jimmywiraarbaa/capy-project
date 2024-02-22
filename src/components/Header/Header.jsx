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
      {/* <div classNameName="hero-description">
        <div classNameName="flex">
          <div classNameName="description mt-16">
            <h1 classNameName=" font-bold mb-2">Nexus</h1>
            <h2 classNameName="text-xl md:text-3xl mb-4">
              Help your vehicle care!
            </h2>
            <div classNameName="detail-description w-11/12 md:w-1/2">
              <p classNameName="text-lg leading-relaxed">
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
                classNameName="readmore cursor-pointer underline underline-offset-4"
                onClick={toggleShowMore}
              >
                {showMore ? "Sembunyikan" : "Selengkapnya"}
              </a>
            </div>
            <div classNameName="button">
              <a
                href="#"
              >
                Cek Motor Anda
              </a>
            </div>
          </div>
        </div>
      </div> */}
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Nexus
            <strong className="block mt-5 text-3xl font-extrabold text-white"> Help your vehicle care! </strong>
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
            <a href="#"
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
