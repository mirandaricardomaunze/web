import React, { useEffect } from 'react'
import './Team.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos';
import 'aos/dist/aos.css';



interface Cont{
contents:any[]
}



const Team = ({contents}:Cont) => {
useEffect(()=>{
  AOS.init({ duration: 1000 });
})

  return (
    <div className='contaneir-main-team' >
     
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
              <div  className=''>
                 <img src="b" alt="" />
              </div>
          </div>
        <div className='container-team'>
            {contents.map((team)=>(
                <div key={team.id} className='team'
                 data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                >
                    <div className='container-img-team'>
                        <img className='img-team' src={team.image} alt="" />
                    </div>
                    <div className='container-team-text'>
                        <p className='txt'>
                          <FontAwesomeIcon className='icon-teamleft' icon={faQuoteLeft}/>
                            {team.text}
                            <FontAwesomeIcon className='icon-team' icon={faQuoteRight}/>
                        </p>
                        <h4 className='titl'>{team.nome}</h4>
                    </div>
                   
                </div>
            ))}
        </div> 
     
    </div>
  )
}

export default Team
