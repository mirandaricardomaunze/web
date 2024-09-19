import React, { useEffect} from 'react'
import './Projects.css'
import webfood from '../Assets/projectwebfood.jpg'
import webHotel from '../Assets/webHotel.jpg'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';



const Projects = ():React.JSX.Element => {


 useEffect(()=>{
    AOS.init({ duration: 1000 });
  })


  return (
    <div className='container-project-bg'>
      <div className='container-project'>
        <div className=' project fixed'>
          <h1 className='title-project'
           data-aos="fade-right" data-aos-anchor-placement="top-bottom"
          >Nossos Projectos</h1>
          <p className='text-first-project'
           data-aos="fade-right" data-aos-anchor-placement="top-bottom"
          >
           Com uma equipe talentosa e diversificada, cada membro tem a oportunidade de 
           contribuir com suas habilidades únicas para projetos empolgantes e desafiadores.
          </p>
          <p className='text-first-project'
            data-aos="fade-right" data-aos-anchor-placement="top-bottom"
          >
            Nosso time de designers talentosos trabalha em estreita colaboração com você para 
            criar um design personalizado que reflita a identidade da sua marca e atraia seu 
            público-alvo.
          </p>
          <p className='text-first-project'
            data-aos="fade-right" data-aos-anchor-placement="top-bottom"
          >
          Na era digital, é crucial ter uma presença online que não apenas impressione, 
          mas também encante e engaje seu público.
          </p>
          <div className='container-link-project'
            data-aos="fade-right" data-aos-anchor-placement="top-bottom"
          >
              <Link className='link-project' to='/Contact'>Contacto-nos já</Link>
          </div>
        </div>
        <div className='container-project-in'>
            <div className='project-in'
            data-aos="fade-left" data-aos-anchor-placement="top-bottom"
            >
              <img className='img-project' src={webfood} alt="" /> 
              <p className='text-project'
                data-aos="fade-left" data-aos-anchor-placement="top-bottom"
              >Projecto de alimentos</p>  
            </div>
            <div  className='project-in'
             data-aos="fade-left" data-aos-anchor-placement="top-bottom">
              <img className='img-project'src={webHotel} alt="" />
              <p className='text-project'
               data-aos="fade-left" data-aos-anchor-placement="top-bottom"
              >Projecto de Hotel</p> 
            </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
