import React, { useCallback, useEffect, useState } from 'react'
import './Slide.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'




interface Slides{
  slide:string[]
}


const Slide = ({slide}:Slides) => {
    const[slideCurrent,SetslideCurrent]=useState<number>(0)
    
const nextSlide=useCallback(()=>{
   const newPositionSlide=(slideCurrent+1)%slide.length
    SetslideCurrent(newPositionSlide)
  },[slideCurrent,slide])

const prevSlide=useCallback(()=>{
    const newPositionSlide=(slideCurrent-1+slide.length)%slide.length
    SetslideCurrent(newPositionSlide)
},[slideCurrent,slide])

const toSlide=(index:number)=>{
  SetslideCurrent(index)
}

useEffect(()=>{
const timer=  setInterval(()=>
      nextSlide()
   ,5000)
  return ()=> clearInterval(timer)
},[nextSlide,slideCurrent])

  return (
    <div>
        <div className='container-slide'>
           {slide.map((slide,index)=>(
             <div className={index===slideCurrent?'active-slide':'slide'}
              key={index}
              style={{backgroundImage:`url(${slide})`,
                 backgroundSize:'cover',
                 height:'100%'
                }}
              >
          <div className='container-title-main'>
              
           
          </div>
          </div>
          ))}
         </div>
         <div className='container-bar'>
            {slide.map((slide,index)=>(
                <button
                   onClick={()=>toSlide(index)}
                   className={index===slideCurrent?'active-btn-bar':'btn-bar'}>
                </button>
            ))}
         </div>
       <button className='prev' onClick={prevSlide}><FontAwesomeIcon icon={faAngleLeft}/></button>
       <button className='next' onClick={nextSlide}><FontAwesomeIcon icon={faAngleRight}/></button>
    </div>
  )
}

export default Slide
