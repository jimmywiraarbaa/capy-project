import { useState } from 'react';
import Logo from '../../../assets/Logo.png';
import Profile from '../../../assets/profile-akun.jpg';
import { Link } from 'react-router-dom';
import './NavBar.css';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap z-50">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img src={Logo} alt="Logo" className="h-8 w-auto" />
      </div>
      <div className="block lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
        </button>
      </div>
      <div className={`w-full block ${isOpen ? 'block' : 'hidden'} lg:flex lg:items-center lg:w-auto lg:justify-center`}>
        <div className="list-nav text-sm lg:flex-grow">
          <Link to={'/'} className="block mt-4 lg:inline-block lg:mt-0  hover:text-white ">
            Beranda
          </Link>
          <Link to={'/bengkellist'} className="block mt-4 lg:inline-block lg:mt-0  hover:text-white ">
            Bengkel
          </Link>
          <Link to={'/sukucadanglist'} className="block mt-4 lg:inline-block lg:mt-0  hover:text-white ">
            Suku Cadang
          </Link>
        </div>
      </div>
      <div className={`w-full block ${isOpen ? 'block' : 'hidden'} lg:flex lg:items-center lg:w-auto lg:justify-center`}>
        {/* User Sudah Login */}
        <div className=' items-center hidden'>
          <img className='rounded-full w-14' src={Profile} alt="" />
        </div>

        {/* User Belum Login */}
        <div className="buttons flex items-center">
          <Link to={'/register'} className="inline-block text-sm px-4 py-2 leading-none border  mt-4 lg:mt-0">Daftar</Link>
          <Link to={'/login'} className="login inline-block text-sm px-4 py-2 leading-none  hover:bg-blue-600 mt-4 lg:mt-0">Masuk</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
