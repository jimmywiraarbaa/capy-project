// import React from 'react'
function bar() {
  return (
    <div className="container mx-auto text-center border-2 rounded-lg  p-10">
      <div class="flex flex-col lg:flex-row">
        <div class="Bengkel flex-auto lg:text-left">
          <h1 class="text-xl font-bold">Aneka Motor</h1>
          <p>Aru Lubeg, Lubuk Begalung Nan XX</p>
          <p class="mt-3 lg:w-96">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
            consectetur mollitia architecto! Laborum iste illum sit magnam
          </p>
          <div class="BUTTONS flex flex-row items-center justify-center sm:flex-row sm:justify-start gap-4 mt-5 mb-10">
            <a
              href="#"
              class="lokasi inline-block text-sm px-4 py-2 leading-none border-2 border-black hover:border-transparent hover:text-teal-500 mt-4 lg:mt-0 rounded bg-black"
              style={{ color: "#E6EB01" }}
            >
              Lokasi
            </a>
            <a
              href="#"
              class="mitra inline-block text-sm px-4 py-2 leading-none border-2 rounded border-black hover:bg-blue-600 mt-4 lg:mt-0"
            >
              Hubungi Mitra
            </a>
            <a
              href="#"
              class="mitra inline-block text-sm leading-none border-2 rounded border-black hover:bg-blue-600 mt-4 lg:mt-0"
            >
              <img src="./assets/Logo/share.svg" alt="" />
            </a>
          </div>
        </div>
        <div class="flex lg:flex-row gap-9">
          <div class="flex items-center justify-center">
            <div class="lg:text-center">
              <p class="font-black text-xl">
                <b>⭐ 4.9</b>
              </p>
              <p>Rating & Ulasan</p>
            </div>
          </div>
          <div class=" w-px bg-gray-400"></div>
          <div class="flex items-center justify-center">
            <div class="lg:text-center">
              <p class="font-black text-xl">
                <b>09:00 - 17:00</b>
              </p>
              <p>Jam operasional Bengkel</p>
            </div>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}

export default bar;
