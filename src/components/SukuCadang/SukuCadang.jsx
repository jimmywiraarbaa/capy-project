// import React from 'react'

function SukuCadang() {
  return (
    <section className="rekomendasi mt-4">
      <h5 className="judul flex justify-center">
        <b>Suku Cadang Yang Dibutuhkan</b>
      </h5>
      <p className="okee p-5">
        <b>Pilihan Favorit</b>
      </p>
      {/* rekomendasi */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-5">
        <div className="col-span-1 g-3 p-3">
          <div className="card">
            <img
              src=" /assets/AHM oli.jpg"
              className="card-img-top"
              style={{ height: "200px", borderRadius: "16px 16px 0 0" }}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                <b>AHM Oil SPX2-0,8L</b>
              </h5>
              <p className="card-text">
                <ul>
                  <li>Aru Lubeg, Lubuk Begalung</li>
                  <li>09.00-17.00 WIB</li>
                  <li>08776653424</li>
                </ul>
              </p>
              <a
                href="#"
                className="btn btn-primary"
                style={{ borderRadius: "20px", alignItems: "right" }}
              >
                More Detail
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-1 g-3 p-3">
          <div className="card">
            <img
              src="./assets/minyak rem.jpg "
              className="card-img-top"
              style={{ height: "200px", borderRadius: "16px 16px 0 0" }}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                <b>Raka Motor</b>
              </h5>
              <p className="card-text">
                <ul>
                  <li>Marapalam, Padang Timur</li>
                  <li>10.00-17.00 WIB</li>
                  <li>082388540724</li>
                </ul>
              </p>
              <a
                href="#"
                className="btn btn-primary"
                style={{ borderRadius: "20px", alignItems: "right" }}
              >
                More Detail
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-1 g-3 p-3">
          <div className="card">
            <img
              src="./assets/fedral oli.jpg"
              className="card-img-top"
              style={{ height: "200px", borderRadius: "16px 16px 0 0" }}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                <b>Federal</b>
              </h5>
              <p className="card-text">
                <ul>
                  <li>Aru Lubeg, Lubuk Begalung</li>
                  <li>09.00-17.00 WIB</li>
                  <li>08776653424</li>
                </ul>
              </p>
              <a
                href="#"
                className="btn btn-primary"
                style={{ borderRadius: "20px", alignItems: "right" }}
              >
                More Detail
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-1 g-3 p-3">
          <div className="card">
            <img
              src="./assets/bengkel1.jpeg"
              className="card-img-top"
              style={{ height: "200px", borderRadius: "16px 16px 0 0" }}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                <b>Bengkel Jaya Motor </b>
              </h5>
              <p className="card-text">
                <ul>
                  <li>Parak Karakah, Padang Timur</li>
                  <li>07.00-18.00 WIB</li>
                  <li>08776653424</li>
                </ul>
              </p>
              <a
                href="#"
                className="btn btn-primary"
                style={{ borderRadius: "20px", alignItems: "right" }}
              >
                More Detail
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SukuCadang;
