import React, { useEffect } from 'react'
import './ContactHome.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { faClockFour, faEnvelope,  faMapMarker,  faPhone } from '@fortawesome/free-solid-svg-icons'


const ContactHome = () =>{

    useEffect(()=>{
       AOS.init({ duration: 1000 });
     })
   
 
  return (
    <div className='container-contactHome'>
      <div className="card-contactHome"
       data-aos="fade-right" data-aos-anchor-placement="top-bottom"
      >
       <div className='container-text-contactHome'>
          <h1 className='title-contacthome'
            data-aos="fade-up" data-aos-anchor-placement="top-bottom"
          >
            <FontAwesomeIcon className='icon-contacth' icon={faPhone}/>
            Contacto
          </h1>
          <p data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            +258847750120 
          </p>
          <h1 className='title-contacthome'
            data-aos="fade-up" data-aos-anchor-placement="top-bottom"
          >
            <FontAwesomeIcon className='icon-contacth' icon={faEnvelope}/>
            Email
          </h1>
          <p data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            mirandamaunze122@gmail.com
          </p>
            <h1 className='title-contacthome'
            data-aos="fade-up" data-aos-anchor-placement="top-bottom"
          >
            <FontAwesomeIcon className='icon-contacth' icon={faMapMarker}/>
            Endereço
          </h1>
          <p data-aos="fade-up" data-aos-anchor-placement="top-bottom">  
            Maputo, Moçambique
          </p>
          <h1 className='title-contacthome'
            data-aos="fade-up" data-aos-anchor-placement="top-bottom"
          >
            <FontAwesomeIcon className='icon-contacth' icon={faClockFour}/>
            Horário
          </h1>
          <p data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            Seg - Sex...10h-20h,Sab,Dom...Fechado
          </p>
         </div>
         <div className='container-midia'>
           <a href="http://" target="_blank" rel="noopener noreferrer" className='link-midia'
            data-aos="fade-right" data-aos-anchor-placement="top-bottom"
           >
            <FontAwesomeIcon icon={faFacebook} />
           </a>
           <a href="http://" target="_blank" rel="noopener noreferrer"  className='link-midia'
            data-aos="fade-up" data-aos-anchor-placement="top-bottom"
           >
            <FontAwesomeIcon icon={faInstagram} />
           </a>
           <a href="http://" target="_blank" rel="noopener noreferrer"  className='link-midia'
            data-aos="fade-left" data-aos-anchor-placement="top-bottom"
           >
            <FontAwesomeIcon icon={faYoutube} />
           </a>
         </div>
      </div>
      <div className="card-contactHome">
         <div className='container-form' 
          data-aos="fade-up" data-aos-anchor-placement="top-bottom"
          >
           <form action="">
             <div>
                <label htmlFor="name">Name:</label>
             </div>
             <div>
                <input id='email' type="text" className="input-contacthome" required
                 placeholder='Degite o seu nome' 
                 
                 /> 
            </div>
            <div>
                <label htmlFor="email">Email:</label>
            </div>
            <div>
                <input id='email' type="email" className="input-contacthome" required
                 placeholder='Degite o seu email'
                 /> 
            </div>
            <div>
                <label htmlFor="email">Mensagem:</label>
            </div>
            <div>
                <textarea id='email' required  className="input-contacthome" 
                 placeholder='Degite a mensagem'
                 >
                </textarea> 
            </div>
            <div className='container-check'>
                <input id='email' type="checkbox" className="input-checkbox" required /> 
                <p>Aceita os nossos termos</p>
            </div>
            <div>
                <button className="btn-form">Enviar</button>
            </div>
           </form>
         </div>
      </div>
    </div>
  )
}

export default ContactHome
