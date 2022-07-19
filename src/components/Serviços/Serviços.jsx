import React from 'react'
import './Serviços.css'
import {BiCheck} from 'react-icons/bi'

const Serviços = () => {
  return (
    <section id='serviços'>
    <h5>O que Ofrecemos</h5>
    <h2>Serviços</h2>

    <div className='container services__container'>
    <article className='service'>
    <div className='service__head'>
      <h3>fotografia</h3>
    </div>
    <ul className='service__list'>
      <li>
      <BiCheck className='service__list-icon'/>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
      </li>
      <li>
      <BiCheck className='service__list-icon'/>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
      </li>
      <li>
      <BiCheck className='service__list-icon'/>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
      </li>
    </ul>
    </article>
      {/* fim da fotografia inicio de videos */}
      
      <article className='service'>
    <div className='service__head'>
      <h3>Videos</h3>
    </div>
    <ul className='service__list'>
      <li>
      <BiCheck className='service__list-icon'/>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
      </li>
      <li>
      <BiCheck className='service__list-icon'/>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
      </li>
      <li>
      <BiCheck className='service__list-icon'/>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
      </li>
    </ul>
    </article>
    </div>
    </section>
  )
}

export default Serviços