import React from 'react'
import './WorkWithUs.css'
import { Link } from 'react-router-dom'
import personWorkImage from '../Assets/workwithus.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'



const WorkWithUs = () => {
  return (
    <div className='container-main-work'>
        <div className='container-work'>
            <div className='work-first'>
                <div className='in-work'>
                    <h1 className='title-work'> <span className='span-title'>Porque </span>trabalhar conosco</h1>
                    <p className='text-work'> <FontAwesomeIcon className='icon-text-work' icon={faCheck}/> 
                      Na nossa empresa de desenvolvimento de sites, oferecemos
                      uma atmosfera vibrante e colaborativa, onde a inovação é incentivada 
                      e celebrada.
                    </p>
                    <p className='text-work'> <FontAwesomeIcon className='icon-text-work' icon={faCheck}/> 
                     Com uma equipe talentosa e diversificada, cada membro tem 
                     a oportunidade de contribuir com suas habilidades únicas para projetos 
                     empolgantes e desafiadores.
                    </p>
                    <p className='text-work'> <FontAwesomeIcon className='icon-text-work' icon={faCheck}/> 
                      Nossa cultura de aprendizado contínuo e 
                      crescimento profissional oferece aos funcionários oportunidades de 
                      desenvolvimento pessoal e carreira.
                    </p>
                      <div className='link-container'>
                        <Link className='link-work' to='/Services'>Saiba mais</Link>
                      </div>
                </div>
            </div>
            <div className='work'>
                <img className='image-work'
                 src={personWorkImage}
                 alt="" />
            </div>
        </div>
    </div>
  )
}

export default WorkWithUs
