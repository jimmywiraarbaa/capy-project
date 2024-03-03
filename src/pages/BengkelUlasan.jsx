// import React from 'react'

import Footer from "../components/Footer/Footer"
import MitraUlasan from "../components/Mitra-ulasan/MitraUlasan"
import Navbar from "../components/NavBar/NavBar"
import Bar from "../components/bar/bar1"

function BengkelUlasan() {
    return (
        <div>
            <Navbar />
            <div className="px-7 max-sm:px-4">
                <Bar />
                <MitraUlasan />
            </div>
            <Footer />
        </div>
    )
}

export default BengkelUlasan