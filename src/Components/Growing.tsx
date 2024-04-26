import React from 'react'
import './Growing.css'


const Growing = () => {
  return (
    <div className='container-grow-main'>
         <h1 className='title-grow'>Contribuimos para o mundo degital</h1>
       <div className='container-grow'>
          <div className='grow'>
             <p>Mais</p>
             <h1>+100</h1>
             <p>Clientes</p>
          </div>
          <div className='grow'>
             <p>Mais</p>
             <h1>+100</h1>
             <p>Sites Criadas</p>
          </div>
          <div className='grow' id='grow'>
             <p>Mais</p>
             <h1>+100</h1>
             <p>Servicos Prestados</p>
          </div>
       </div>
    </div>
  )
}

export default Growing
