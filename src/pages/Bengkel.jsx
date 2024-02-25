// import React from 'react'
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer'

function Bengkel() {
    return (
        <div>
            <NavBar />
            <div className='flex  border-b-2 border-black mt-10'>
                <div className='p-10  hover:border-black hover:border-b-8'>
                    <a className='' href="#">Galeri</a>
                </div>
                <div className='p-10'>
                    <a className='' href="#">Galeri</a>
                </div>
            </div>
            <div className='mt-4'>

            </div>
            <Footer />
        </div>
    )
}

export default Bengkel