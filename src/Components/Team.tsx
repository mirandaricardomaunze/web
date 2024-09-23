import React, { useEffect } from 'react'
import './Team.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos';
import 'aos/dist/aos.css';
import man from '../Assets/mansmile.png'
import man1 from '../Assets/man.png'
import manblack from '../Assets/manblack.png'


interface TeamData{
id:number
hability:string
image:string
name:string
}


const Team = () => {

const team:TeamData[]=[
{id:1,image:man,
hability:'Sou desenvolvedor Senior em javascript e react ',name:'Miranda Ricardo'},
{id:2,image:man1,
hability:'Sou desenvolvedor senior em javascript e php',name:'Mark John'},
{id:3,image:manblack,
hability:'Sou desenvolvedor e Designer Grafico',name:' Richard Muller'}
]
    
useEffect(()=>{
  AOS.init({ duration: 1000 });
})

  return (
    <div className='container-main-team' >     
          <div className='text-team'> 
            <h1 className='title-team'
             data-aos="fade-left" data-aos-anchor-placement="top-bottom"
             >
              Nossa equipe
            </h1>
            <p className='text-team'
              data-aos="fade-right" data-aos-anchor-placement="top-bottom"
            >
              Com anos de experiência no desenvolvimento web, nossa equipe é habilidosa 
              em transformar conceitos em interfaces intuitivas e visualmente deslumbrantes.
            </p>
          </div>
          <div className='container-card-team'>
            {team.map((team)=>(
              <div key={team.id} className='card-team'
                data-aos="fade-up" data-aos-anchor-placement="top-bottom"
              >
                <div className='container-card-img'>
                  <img className='img-team' src={team.image} alt="" />
                </div>
                  <div className='container-team-text'>
                    <p className='hability'>
                      <FontAwesomeIcon className='icon-quote' icon={faQuoteLeft}/>
                        {team.hability}
                        <FontAwesomeIcon className='icon-quote' icon={faQuoteRight}/>
                    </p>
                    <h4 className='name'>{team.name}</h4>
                  </div> 
              </div>
            ))}
          </div>      
    </div>
  )
}

export default Team
