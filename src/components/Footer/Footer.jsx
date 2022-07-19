import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
const Footer =() => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Da_Wheelie</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experiencias'>Experiencia</a></li>
        <li><a href='#serviços'>Serviços</a></li>
        <li><a href='#portfolio'>Fotos</a></li>
        <li><a href='#contactos'>Contactos</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://facebook.com'><FaFacebookF/></a>
        <a href='https://instagram.com'><FiInstagram/></a>
        <a href='https://twitter.com'><IoLogoTwitter/></a>
      </div>

    <div className='footer__copyright'>
    <small>&copy; Da_Wheelie</small>
    </div>


    </footer>
  )
}

export default Footer