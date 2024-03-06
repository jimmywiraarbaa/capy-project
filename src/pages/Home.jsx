// import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Header from '../components/Header/Header'
import CekKendaraan from '../components/CekKendaraan/CekKendaraan'
import Rekomendasi from '../components/RekomendasiBengkel/RekomendasiBengkel'
import SukuCadang from '../components/SukuCadang/SukuCadang'
import Footer from '../components/Footer/Footer'
function Home() {
    return (
        <div>
            <NavBar />
            <Header />
            <CekKendaraan />
            <Rekomendasi />
            <SukuCadang />
            <Footer />

        </div>
    )
}

export default Home