// import { useState } from 'react'
// import NavBar from "./components/NavBar/NavBar";
// import Header from "./components/Header/Header";
// import Cek from "./components/CekKendaraan/CekKendaraan";
// import RekomendasiBengkel from "./components/RekomendasiBengkel/RekomendasiBengkel";
// import SukuCadang from "./components/SukuCadang/SukuCadang";
// import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Bengkel from "./pages/Bengkel";
import Login from './pages/Login';
import Register from './pages/Register';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Home />} />
          <Route path='/bengkel' element={<Bengkel />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
