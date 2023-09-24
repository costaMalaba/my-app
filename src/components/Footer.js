import React from 'react'
import logo from '../assets/Logo.svg'
import Nav from './Nav'

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt='Logo' />

      <h4>Doormat navigation</h4>
      <Nav />

      <h4>Contact</h4>
      <ul>
        <li>Address</li>
        <li>Phone number</li>
        <li>Email</li>
      </ul>

      <h4>Social Media Links</h4>
      <ul>
        <li>Address</li>
        <li>Phone number</li>
        <li>Email</li>
      </ul>
    </footer>
  )
}

export default Footer