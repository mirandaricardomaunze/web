import React from 'react'
import './Team.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'



interface Cont{
contents:any[]
}


const Team = ({contents}:Cont) => {
  return (
    <div className='contaneir-main-team'>
          <div className='text-team'>
             <h1 className='title-team'>Nossa equipe</h1>
              <p>
                Com anos de experiência no desenvolvimento web, nossa equipe é habilidosa 
                em transformar conceitos em interfaces intuitivas e visualmente deslumbrantes.
              </p>
          </div>
        <div className='contaneir-team'>
            {contents.map((item,index)=>(
                <div key={item.id} className='team'>
                    <div className='container-img-team'>
                        <img className='img-team' src={item.image} alt="" />
                    </div>
                    <div className='container-team-text'>
                        <p>{item.text}</p>
                        <h4>{item.nome}</h4>
                    </div>
                    <div className='team-icon'>
                       <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className='facebook-team' icon={faFacebookSquare}/>
                        </a>
                       <a href="http://www.youtube.com" target="_blank" rel="noopener noreferrer">
                       <FontAwesomeIcon className='youtube-team' icon={faYoutubeSquare}/>
                       </a>
                    </div>
                </div>
            ))}
        </div> 
    </div>
  )
}

export default Team
