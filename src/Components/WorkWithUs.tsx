import React, { useEffect } from 'react'
import './WorkWithUs.css'
import { Link } from 'react-router-dom'
import personWorkImage from '../Assets/workwithus.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos';
import 'aos/dist/aos.css';


const WorkWithUs = () => {
    useEffect(()=>{
      AOS.init({ duration: 1000 });
    })



  return (
    <div className='container-main-work'>
        <div className='container-work'>
            <div className='work-first'>
                <div className='in-work'>
                    <h1 className='title-work'
                    data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                    > <span className='span-title'>Porque </span>trabalhar conosco</h1>
                    <p className='text-work'
                     data-aos="fade-right" data-aos-anchor-placement="top-bottom"
                    > <FontAwesomeIcon className='icon-text-work' icon={faCheck}/> 
                      Na nossa empresa de desenvolvimento de sites, oferecemos
                      uma atmosfera vibrante e colaborativa, onde a inovação é incentivada 
                      e celebrada.
                    </p>
                    <p className='text-work'
                     data-aos="fade-right" data-aos-anchor-placement="top-bottom"
                    > <FontAwesomeIcon className='icon-text-work' icon={faCheck}/> 
                     Com uma equipe talentosa e diversificada, cada membro tem 
                     a oportunidade de contribuir com suas habilidades únicas para projetos 
                     empolgantes e desafiadores.
                    </p>
                    <p className='text-work'
                     data-aos="fade-right" data-aos-anchor-placement="top-bottom"
                    > <FontAwesomeIcon className='icon-text-work' icon={faCheck}/> 
                      Nossa cultura de aprendizado contínuo e 
                      crescimento profissional oferece aos funcionários oportunidades de 
                      desenvolvimento pessoal e carreira.
                    </p>
                      <div className='link-container'
                       data-aos="fade-left" data-aos-anchor-placement="top-bottom"
                      >
                        <Link className='link-work' to='/Services'>Saiba mais</Link>
                      </div>
                </div>
            </div>
            <div className='work'>
            <div className='work-rounded'
             data-aos="fade-left" data-aos-anchor-placement="top-bottom"
            >
            </div> 
              <div className='circle-work'
                data-aos="fade-left" data-aos-anchor-placement="top-bottom"
              >
               <img className='image-work'
                 data-aos="fade-left" data-aos-anchor-placement="top-bottom"
                 src={personWorkImage}
                 alt="" />
              </div>    
            </div>
        </div>
    </div>
  )
}

export default WorkWithUs
