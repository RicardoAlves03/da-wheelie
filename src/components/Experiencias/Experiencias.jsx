import React from 'react'
import './Experiencias.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experiencias = () => {
  return (
    <section id='experiencias'>
    <h5>o que sei fazer</h5>
    <h2> a minha experiencia</h2>

    <div className='container experience__container'>
    <div className='experience__frontend'>
    <h3>Fotografo</h3>
    <div className='experience__content'>

    <article className='experience__details'>
    <BsPatchCheckFill className='experience__details-icon'/>
    <div>
    <h4>fotografia</h4>
    <small className='text-light'>experiente</small>
    </div>
    </article>

    <article className='experience__details'>
    <BsPatchCheckFill className='experience__details-icon'/>
    <div>
    <h4>photoshop</h4>
    <small className='text-light'>experiente</small>
    </div>
    </article>

    <article className='experience__details'>
    <BsPatchCheckFill className='experience__details-icon'/>
    <div>
    <h4>ediçao</h4>
    <small className='text-light'>experiente</small>
    </div>
    </article>
    </div>
    </div>

    {/* fim da fotografia/inicio de vidios */}

    <div className='experience__backend'>
    <div className='experience__frontend'>
    <h3>Videografo</h3>
    <div className='experience__content'>

    <article className='experience__details'>
    <BsPatchCheckFill className='experience__details-icon'/>
    <div>
    <h4>videos</h4>
    <small className='text-light'>experiente</small>
    </div>
    </article>

    <article className='experience__details'>
    <BsPatchCheckFill className='experience__details-icon'/>
    <div>
    <h4>ediçao</h4>
    <small className='text-light'>experiente</small>
    </div>
    </article>

    <article className='experience__details'>
    <BsPatchCheckFill className='experience__details-icon'/>
    <div>
    <h4>montagens</h4>
    <small className='text-light'>experiente</small>
    </div>
    </article>

</div>
</div>
    </div>
    </div>
    </section>
  )
}

export default Experiencias