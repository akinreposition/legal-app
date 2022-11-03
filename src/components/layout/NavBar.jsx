import React from 'react';
import { Link } from 'react-router-dom';
import legal_logo from '../../assets/icons/legal_logo.png';
import { FaSignInAlt,  FaUser } from 'react-icons/fa';   // FaSignOutAlt,

const NavBar = () => {

  return (
    <header className='header'>
        <div className='logo'>
          <Link to="/">
            <img src={legal_logo}  width="30px" height="30px" alt='logo' title='Legal logo' />
          </Link>
        </div>

        {/* Hamburger icon */}
        <input className="side-menu" type="checkbox" id="side-menu"/>
        <label className="hamb" htmlFor="side-menu"><span className="hamb-line"></span></label>
        {/* Menu */}

        <ul>
            <li>
                <Link to='/login'>
                    <FaSignInAlt /> Login
                </Link>
            </li>
            <li>
                <Link to='/register'>
                    <FaUser /> Register
                </Link>
            </li>       
        </ul>
        {/* <nav className='nav'>
        </nav> */}
    </header>
  )
}

export default NavBar