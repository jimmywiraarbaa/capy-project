// import { useState } from 'react'
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Cek from "./components/CekKendaraan/CekKendaraan";
import RekomendasiBengkel from "./components/RekomendasiBengkel/RekomendasiBengkel";
import SukuCadang from "./components/SukuCadang/SukuCadang";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <NavBar />
      <Header />
      <Cek />
      <RekomendasiBengkel />
      <SukuCadang />
      <Footer />
    </>
  );
}

export default App;
