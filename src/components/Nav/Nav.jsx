import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'


const Nav = () =>{
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='/' onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>

      <a href='#about' onClick={() => setActiveNav('#about')}  className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>

      <a href='#experiencias' onClick={()=> setActiveNav('#experiencias')}  className={activeNav === '#experiencias' ? 'active' : ''}><BiBook/></a>

      <a href='#serviços' onClick={()=> setActiveNav('#serviços')}  className={activeNav === '#serviços' ? 'active' : ''}><RiServiceLine/></a>

      <a href='#contactos' onClick={()=> setActiveNav('#contactos')}  className={activeNav === '#contactos' ? 'active' : ''}><BiMessageSquareDetail/></a>

      <a href='#portfolio' onClick={()=> setActiveNav('#portfolio')}  className={activeNav === '#portfolio' ? 'active' : ''}><RiServiceLine/></a>
      
    </nav>
  )
}

export default Nav