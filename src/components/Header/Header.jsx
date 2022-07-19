/* a imagem não fica na box */

import React from 'react'
import './Header.css'
import CTA from './CTA'
import me from '../../images/Imagens/me2.png'
import HeaderSocials from './HeaderSocials'

const Header =() => {
  return (
    <header>
      <div className="container header__container">
        <h5>Olá sou o</h5>
        <h1>Da Wheelie</h1>
        <h5 className="text-light">Fotografo/Vidiografo</h5>
        <CTA/>
        <HeaderSocials/>

        <div className='me'>
          <img src={me} alt='me'/>
        </div>
        <a href='#contactos' className='scroll__down'>Scroll__down</a> 
      </div>
      </header>
      )
}

export default Header