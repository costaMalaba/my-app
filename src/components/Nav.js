import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className=''>
      <ul className='nav nav-underline justify-content-center'>
        <li className='nav-item'><Link to="/" className='nav-link active text-black'>HOME</Link></li>
        <li className='nav-item'><Link to="/" className='nav-link text-black'>ABOUT</Link></li>
        <li className='nav-item'><Link to="/" className='nav-link text-black'>RESERVATION</Link></li>
        <li className='nav-item'><Link to="/" className='nav-link text-black'>ORDER ONLINE</Link></li>
        <li className='nav-item'><Link to="/" className='nav-link text-black'>LOGIN</Link></li>
        </ul>
    </nav>
  )
}

export default Nav