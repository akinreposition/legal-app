import React from 'react';
import { Link } from 'react-router-dom';
import legal_logo from '../../assets/icons/legal_logo.png';
// import { FaSignInAlt,  FaUser } from 'react-icons/fa';   // FaSignOutAlt,

const NavBar = () => {

  return (
    // Navbar
    <nav className="relative container mx-auto p-6 bg-fixed">

      {/* flex container */}
      <div className="flex items-center justify-between">

        {/* Logo */}
        <div className="pt-2">
          <Link to="/">
            <img src={legal_logo}  width="40px" height="40px" alt='logo' title='Legal logo' />
          </Link>
        </div>

        {/* Menu Items */}
        <div className="hidden md:flex space-x-6">
            {/* <Link to='/login' className='hover:text-gray-light'>
              Login
            </Link> */}
        </div>

        {/* Button */}

        {/* <Link to='/sign-up' className='hidden md:block p-3 px-6 pt-2 text-white bg-btn rounded-full baseline hover:bg-gray'>
          Sign up
        </Link> */}

          {/* Hamburger Icon */}
        <button id="menu-btn" className=" hamburger hidden focus:outline-none">
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
        
      </div>


      {/* mobile menu */}
      <div className="md:hidden">
        <div id="menu" className='absolute flex-col items-center hidden self-end 
        py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md'>
            <Link to='/login' className='hover:text-gray-light'>
              Login
            </Link>
        </div>
      </div>  
    </nav>
  )
}

export default NavBar