import React from 'react'

import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Serviços from './components/Serviços/Serviços'
import Portfolio from './components/Portfolio/Portfolio'
import Contactos from './components/Contactos/Contactos'
import Footer from './components/Footer/Footer'
import Experiencias from './components/Experiencias/Experiencias'

const App = () => { 
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experiencias/>
    <Serviços/>
    <Portfolio/>
    <Contactos/>
    <Footer/>
    </>
  )
}

export default App