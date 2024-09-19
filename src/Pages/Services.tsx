import React, { useEffect } from 'react'
import './Services.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { faCode, faMobile, faToolbox } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


interface Service {
  id:number
  icon:React.JSX.Element
  title:string 
  text:string
  link:React.JSX.Element
}

const Services = () => {

   useEffect(()=>{
      AOS.init({ duration: 1000 });
    })
  

useEffect(()=>{
document.title='Pagina de serviços'
})

const service:Service[]=[
   {id:1,
   icon:<FontAwesomeIcon className='icon-service' icon={faCode}/>,
   title:'Criação de sites',
   text:'Usamos tecnologias modernas criar interfaces modernas e single page de fácil navegação.',
   link:<Link to='/Contact'  className='link-service'>Contacta-nos</Link>
   },
   {id:2,
    icon:<FontAwesomeIcon className='icon-service' icon={faToolbox}/>,
    title:'Manutenção',
    text:'Atualizamos os sites adicionando mais funcionalidades modernas e atrativas.',
    link:<Link to='/Contact'  className='link-service'>Contacta-nos</Link>
    },
   {id:3,
    icon:<FontAwesomeIcon className='icon-service' icon={faMobile}/>,
    title:'Design',
    text:'Nosso foco é criar interfaces modernas que se adaptam a qualquer tela.',
    link:<Link to='/Contact' className='link-service'>Contacta-nos</Link>
   }
   
]


  return (
    <div className='container-service'>
       <h1 className='titleservice'>Nossos Serviços</h1>
       <p className='first-text'>
         Nossa equipe de especialistas em design e desenvolvimento está pronta para 
         transformar suas ideias em uma presença online cativante e funcional.
       </p>
      <div className="container-card-service"> 
        {service.map((card)=>(
         <div key={card.id} className='card-service'
           data-aos="fade-up" data-aos-anchor-placement="top-bottom"
         >
           <p className='iconservice'
            data-aos="fade-up" data-aos-anchor-placement="top-bottom"
           >
            {card.icon}
           </p>
           <h1 className='title-service'
            data-aos="fade-up" data-aos-anchor-placement="top-bottom"
           >
            {card.title}
           </h1>
           <p className='text-service'
            data-aos="fade-up" data-aos-anchor-placement="top-bottom"
           >
            {card.text}
          </p>
           <div className='container-link-service'
            data-aos="fade-up" data-aos-anchor-placement="top-bottom"
           >
            {card.link}
          </div>
         </div>
        ))}
      </div>
      <div className=''>

      </div>
    </div>
  )
}

export default Services
