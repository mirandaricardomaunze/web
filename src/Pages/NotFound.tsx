import React from 'react'
import './NotFound.css'
import { Link } from 'react-router-dom'


const NotFound = () => {
  return (
    <div className='cont-not-found'>
       <div className='content-text'>
        <h1 className='title-not'>Pagina nao encontrada !</h1>
        <Link className='link-not' to='/'>Voltar no Inicio</Link>
       </div>
    </div>
  )
}

export default NotFound
