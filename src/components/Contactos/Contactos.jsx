/* falta conectar o email */
/* ao adicionar a grid das fotos "portfolio" ficaram a sobrepor os contactos -.- */

import React from 'react'
import './Contactos.css'
import{MdOutlineEmail} from 'react-icons/md'
import{RiMessengerLine} from 'react-icons/ri'
import{BsWhatsapp} from 'react-icons/bs'

const Contactos =()=> {
  return (
    <section id='contactos'>
      <h5>entra em contacto</h5>
      <h2>mensagem</h2>

      <div className='container contact__container'>
      <div className='contact__options'>
      <article className='contact__option'>
      <MdOutlineEmail className='contact__option-icon'/>
      <h4>email</h4>
      <h5>xarabeu@112mail.com</h5>
      <a href='mailito:xarabeu@112mail.com' target='_blank'>entre em contacto</a>
      </article>
      <article className='contact__option'>
<RiMessengerLine className='contact__option-icon'/>
      <h4>Mensenger</h4>
      <h5>DaWhellie</h5>
      <a href='mailito:xarabeu@112mail.com' target='_blank'>entre em contacto</a>
      </article>
      <article className='contact__option'>
<BsWhatsapp className='contact__option-icon'/>
      <h4>whatsapp</h4>
      <h5>91231512511</h5>
      <a href='mailito:xarabeu@112mail.com' target='_blank'>entre em contacto</a>
      </article>
      </div>
      <form action=''>
      <input type='text' name='name' placeholder='Nome Completo' required />
      <input type='email' name='email' placeholder='Email' required />
      <textarea name='message' rows='7' placeholder='Mensagem' required />
      <button type='submit' className='btn btn_primary'>Enviar mensagem</button>
      </form>
      </div>
    </section>
  )
}

export default Contactos