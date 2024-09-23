import React, { useEffect} from 'react'
import './Projects.css'
import webfood from '../Assets/projectwebfood.jpg'
import webHotel from '../Assets/webHotel.jpg'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

interface TextProject{
textfirst:string  
textsecond:string  
textthirth:string  
}


const Projects = ():React.JSX.Element => {

const textProject:TextProject[]=[
{
textfirst:' Com uma equipe talentosa e diversificada, cada membro tem a oportunidade de contribuir com suas habilidades únicas para projetos empolgantes e desafiadores',
textsecond:' Nosso time de designers talentosos trabalha em estreita colaboração com você para criar um design personalizado que reflita a identidade da sua marca e atraia seu  público-alvo.',
textthirth:'Na era digital, é crucial ter uma presença online que não apenas impressione, mas também encante e engaje seu público.'
}
]

 useEffect(()=>{
    AOS.init({ duration: 1000 });
  })


  return (
    <div className='container-project-bg'>
      <div className='container-project'>
        <div className=' project-card fixed'>
          <h1 className='title'>Nossos projectos</h1>
          {textProject.map((project)=>(
            < div>
              <p className='text-project'>{project.textfirst}</p>
              <p className='text-project'>{project.textsecond}</p>
              <p className='text-project'>{project.textthirth}</p>
            </div>
          ))}
          <div className='container-link-project'
            data-aos="fade-right" data-aos-anchor-placement="top-bottom"
          >
              <Link className='link-project' to='/Contact'>Contacto-nos já</Link>
          </div>
        </div>
        <div className='container-project-card'>
            <div className='project-card'
            data-aos="fade-left" data-aos-anchor-placement="top-bottom"
            >
              <img className='img-project' src={webfood} alt="" /> 
              <p className='text-project'
                data-aos="fade-left" data-aos-anchor-placement="top-bottom"
              >Projecto de alimentos</p>  
            </div>
            <div  className='project-card'
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
