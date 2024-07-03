import React from 'react'
import './Projects.css'
import webfood from '../Assets/projectwebfood.jpg'
import webHotel from '../Assets/webHotel.jpg'
import { Link } from 'react-router-dom'

const Projects = ():React.JSX.Element => {
  return (
    <div>
      <div className='container-project'>
        <div className='project'>
          <h1 className='title-project'>Nossos Projectos</h1>
          <p className='text-first-project'>
           Com uma equipe talentosa e diversificada, cada membro tem a oportunidade de 
           contribuir com suas habilidades únicas para projetos empolgantes e desafiadores.
          </p>
          <p className='text-first-project'>
            Nosso time de designers talentosos trabalha em estreita colaboração com você para 
            criar um design personalizado que reflita a identidade da sua marca e atraia seu 
            público-alvo.
          </p>
          <p className='text-first-project'>
          Na era digital, é crucial ter uma presença online que não apenas impressione, 
          mas também encante e engaje seu público.
          </p>
          <div className='container-link-project'>
              <Link className='link-project' to='/Contact'>Entra em contacto ja</Link>
          </div>
        </div>
        <div className='container-project-in'>
            <div className='project-in'>
              <img className='img-project' src={webfood} alt="" /> 
              <p className='text-project'>Projecto de alimentos</p>  
            </div>
            <div  className='project-in'>
              <img className='img-project' src={webHotel} alt="" />
              <p className='text-project'>Projecto de Hotel</p> 
            </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
