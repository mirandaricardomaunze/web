import React from 'react'
import './Tecnologies.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'

interface Content{
content:any[]
}




const Tecnologies = ({content}:Content) => {
  return (
    <div className='container-main-tecno'>
        <div className='container-tecno'>
              {
                content.map((item,index)=>(
                  <div key={item.id} className='tecno'>
                      <div className='image-tec' >
                         <img className='image-tec' src={item.image} alt="" />
                      </div>
                      <div className='container-text'>
                         <h3 className='title-tecno'><FontAwesomeIcon icon={faCode}/> {item.title}</h3>
                         <p className='text-tecno'>{item.text}</p>
                      </div>
                  </div>
                ))
              }
        </div>
    </div>
  )
}

export default Tecnologies
