import React from 'react'
import './Growing.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLaptopCode, faTools, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import ChartMui from '../Chart/ChartMui'
import Access from '../Access/Access'




const Growing = () => {
  return (
    <div className='container-grow-main'>
       <h1 className='title-first'> Nosso crescimento</h1>
       <div className='container-grow'>
          <div className='grow'>
            <FontAwesomeIcon className='icon-grow' icon={faUserCircle}/>
             <p>Mais</p>
             <h1>+100</h1>
             <p>Clientes</p>
          </div>
          <div className='grow'>
          <FontAwesomeIcon className='icon-grow' icon={faLaptopCode}/>
             <p>Mais</p>
             <h1>+100</h1>
             <p>Sites Criadas</p>
          </div>
          <div className='grow' id='grow'>
          <FontAwesomeIcon className='icon-grow' icon={faTools}/>
             <p>Mais</p>
             <h1>+100</h1>
             <p>Servicos Prestados</p>
          </div>
       </div>
       <ChartMui />
       <Access/>
    </div>
  )
}

export default Growing
