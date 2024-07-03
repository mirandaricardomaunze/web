import React from 'react'
import './Team.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'



interface Cont{
contents:any[]
}


const Team = ({contents}:Cont) => {
  return (
    <div className='contaneir-main-team'>
          <div className='text-team'>
             <h1 className='title-team'>Nossa equipe</h1>
              <p className='text-team'>
                Com anos de experiência no desenvolvimento web, nossa equipe é habilidosa 
                em transformar conceitos em interfaces intuitivas e visualmente deslumbrantes.
              </p>
              <div  className=''>
                 <img src="b" alt="" />
              </div>
          </div>
        <div className='container-team'>
            {contents.map((team)=>(
                <div key={team.id} className='team'>
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
