// import React from 'react'
function Footer() {
  return (
    <footer className="bekgrond" style={{ background: "#181818" }}>
      <div className="container mx-auto text-white">
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 px-4 py-2">
            <h1 className="mt-5 text-5xl" style={{ color: "#e6eb01" }}>
              <b>Nexus</b>
            </h1>
            <p className="mt-6">
              platform daring untuk pemilik sepeda motor.
              Mereka dapat mengecek perawatan berdasarkan kilometer
              dan menemukan bengkel terdekat untuk layanan tersebut.
            </p>
            <h2 className="mt-6" style={{ color: "#e6eb01" }}>
              <b>Contact</b>
            </h2>
            <p className="mt-3">nexuscare@gmail.com</p>
            <p className="mt-2">0845435345435</p>
          </div>
          <div className="w-full md:w-1/3 px-4 py-2 text-center">
            <h3 className="mt-20 px-5 ">
              Get Update Subscribe to our newslater to receives update and
              special announcement
            </h3>
            <div
              className="footer__subscribe bg-slate-500 rounded-lg flex mt-5 ml-14 "
              style={{ width: "100px" }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="footer__input rounded-md "
                style={{ background: "#746969" }}
              />

              <button
                className="buttons button--flex footer__button rounded-lg px-8"
                style={{ marginLeft: "-55px", background: "#5D5858" }}
              >
                Subscribe
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 py-2 text-center mt-5">
            <h2 style={{ color: "#e6eb01" }}>
              <b>Information</b>
            </h2>
            <ul className="text-start mt-6 ml-3">
              <li>
                <a href="about.html">About Us</a>
              </li>
              <li>
                <a href="testimonial.html">Testimonial</a>
              </li>
              <li>
                <a href="contacts.html">Contacts</a>
              </li>
              <li>
                <a href="join.html">Join Us</a>
              </li>
            </ul>
            <br />
            <h2 style={{ color: "#e6eb01" }}>
              <b>Follow</b>
            </h2>
            <br />
            <div className="footer__social inline-flex gap-x-8">
              <a href="https://www.youtube.com/" className="footer__social-link">
                <img src="./assets/youtube.svg" alt="" />
              </a>
              <a href="https://www.x.com/" className="footer__social-link">
                <img src="./assets/x.svg" alt="" />
              </a>
              <a href="https://facebook.com/" className="footer__social-link">
                <img src="./assets/Facebook.svg" alt="" />
              </a>
              <a href="https://instagram.com/" className="footer__social-link">
                <img src="./assets/Instagram.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
