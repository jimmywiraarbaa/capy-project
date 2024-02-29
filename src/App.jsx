// import { useState } from 'react'
// import NavBar from "./components/NavBar/NavBar";
// import Header from "./components/Header/Header";
// import Cek from "./components/CekKendaraan/CekKendaraan";
// import RekomendasiBengkel from "./components/RekomendasiBengkel/RekomendasiBengkel";
// import SukuCadang from "./components/SukuCadang/SukuCadang";
// import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Bengkel from "./pages/Bengkel";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Riwayat from "./pages/Riwayat";
import DataDiri from "./pages/DataDiri";
import MitraDaftar from "./pages/mitra_daftar";
import MitraTinjau from "./pages/mitra_tinjau";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/data-diri" element={<DataDiri />} />
          <Route path="/mitradaftar" element={<MitraDaftar />} />
          <Route path="/mitratinjau" element={<MitraTinjau />} />
          <Route path="/" element={<Home />} />
          <Route path="/bengkel" element={<Bengkel />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/riwayat" element={<Riwayat />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
