import React from 'react'
import logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <nav>
        <div className='nav-logo'>

        <img src={logo} alt='logo' />
        </div>
        <div>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/About">About</a>
                </li>
                <li>
                    <a href="/">Services</a>
                </li>
                <li>
                    <a href="/">Portfolio</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar