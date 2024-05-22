import './FirstAboutHome.css'
import React from 'react'
import imagehome from '../Assets/backgroundweb.png'
import { Link } from 'react-router-dom'
const FirstAboutHome = () => {
  return (
    <div className='container-first-home-about'>
        <div className='container-first'>
             <div className='first-text'>
                <h1 className='title-first-h1'>Mundo Digital</h1>
                <p> 
                  Seu site é a porta de entrada para o mundo virtual. Na era digital, 
                  é crucial ter uma presença online que não apenas impressione, mas também 
                  encante e engaje seu público-alvo. Aqui, no nosso serviço de desenvolvimento
                  de sites, estamos dedicados a transformar sua visão em realidade digital.
                </p>
                <div className='container-link-home'>
                   <Link className='link-home'  to='/About'>Saiba mais</Link>
                </div>
             </div>
             <div className='first'>
                <img className='imge-home' src={imagehome} alt="" />
             </div>
        </div>
    </div>
  )
}

export default FirstAboutHome
