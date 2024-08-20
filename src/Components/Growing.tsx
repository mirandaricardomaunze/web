import React, { useEffect } from 'react'
import './Growing.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLaptopCode, faTools, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos';
import 'aos/dist/aos.css';



const Growing = () => {
   useEffect(()=>{
      AOS.init({ duration: 1000 });
    })
  



  return (
    <div className='container-grow-main'>
       <h1 className='title-first'
       data-aos="fade-up" data-aos-anchor-placement="top-bottom"
       > Nosso crescimento</h1>
       <div className='container-grow'>
          <div className='grow'
          data-aos="fade-right" data-aos-anchor-placement="top-bottom"
          >
            <FontAwesomeIcon className='icon-grow' icon={faUserCircle}/>
             <p>Mais</p>
             <h1>+100</h1>
             <p>Clientes</p>
          </div>
          <div className='grow'
          data-aos="fade-up" data-aos-anchor-placement="top-bottom"
          >
          <FontAwesomeIcon className='icon-grow' icon={faLaptopCode}/>
             <p>Mais</p>
             <h1>+100</h1>
             <p>Sites Criadas</p>
          </div>
          <div className='grow' id='grow'
          data-aos="fade-left" data-aos-anchor-placement="top-bottom"
          >
          <FontAwesomeIcon className='icon-grow' icon={faTools}/>
             <p>Mais</p>
             <h1>+100</h1>
             <p>Servicos Prestados</p>
          </div>
       </div>
       
    </div>
  )
}

export default Growing
