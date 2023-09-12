import React from 'react'
import logo from '../assets/Logo.svg'
import Nav from './Nav'

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt='Logo' />

      <h2>Doormat navigation</h2>
      <Nav />

      <h2>Contact</h2>
      <ul>
        <li>Address</li>
        <li>Phone number</li>
        <li>Email</li>
      </ul>

      <h2>Social Media Links</h2>
      <ul>
        <li>Address</li>
        <li>Phone number</li>
        <li>Email</li>
      </ul>
    </footer>
  )
}

export default Footer