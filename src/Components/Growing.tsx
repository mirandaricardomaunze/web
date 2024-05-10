import React from 'react'
import './Growing.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNetworkWired, faTools, faUserCircle } from '@fortawesome/free-solid-svg-icons'



const Growing = () => {
  return (
    <div className='container-grow-main'>
       <div className='container-grow'>
          <div className='grow'>
            <FontAwesomeIcon className='icon-grow' icon={faUserCircle}/>
             <p>Mais</p>
             <h1>+100</h1>
             <p>Clientes</p>
          </div>
          <div className='grow'>
          <FontAwesomeIcon className='icon-grow' icon={faNetworkWired}/>
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
    </div>
  )
}

export default Growing
