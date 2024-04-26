import React from 'react'
import './WorkWithUs.css'
import { Link } from 'react-router-dom'




const WorkWithUs = () => {
  return (
    <div className='container-main-work'>
        <div className='container-work'>
            <div className='work-first'>
                <div className='in-work'>
                    <h1 className='title'><span className='span-title'>Porque </span>trabalhar conosco</h1>
                    <p className='text-work'>Na nossa empresa de desenvolvimento de sites, oferecemos
                         uma atmosfera vibrante e colaborativa, onde a inovação é incentivada 
                         e celebrada. Com uma equipe talentosa e diversificada, cada membro tem 
                         a oportunidade de contribuir com suas habilidades únicas para projetos 
                         empolgantes e desafiadores. Nossa cultura de aprendizado contínuo e 
                         crescimento profissional oferece aos funcionários oportunidades de 
                         desenvolvimento pessoal e carreira.
                    </p>
                      <div className='link-container'>
                        <Link className='link-work' to='/Services'>Contacta-nos</Link>
                      </div>
                </div>
            </div>
            <div className='work'>
                <img className='image-work'
                 src="https://img.freepik.com/fotos-gratis/imagem-de-close-up-de-programador-trabalhando-em-sua-mesa-no-escritorio_1098-18707.jpg?t=st=1713635310~exp=1713638910~hmac=4de25e09e3f8cdaeaf8e9e65b852da987e8592d2d2d24d8fae6d151d59d7183a&w=740"
                 alt="" />
            </div>
        </div>
    </div>
  )
}

export default WorkWithUs
