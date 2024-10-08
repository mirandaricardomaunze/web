import React, { useCallback, useEffect, useState } from 'react'
import './Slide.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';



interface Slides{
  slide:any[]
}


const Slide = ({slide}:Slides) => {
  useEffect(()=>{
    AOS.init({ duration: 1000 });
  })


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
          <div className='container-text-slide'>
            <h1 className='title'
            data-aos="fade-right" data-aos-anchor-placement="top-bottom"
            >Serviços de criação de sites</h1>
          <p className='text'
           data-aos="fade-left" data-aos-anchor-placement="top-bottom"
          >
            Bem-vindo à nossa plataforma dedicada à criação de sites que refletem a 
            essência e a visão única do seu negócio. Nossa equipe de especialistas 
            em design e desenvolvimento está pronta para transformar suas ideias 
            em uma presença online cativante e funcional.
        </p>
           <div className='div-link'
           data-aos="fade-up" data-aos-anchor-placement="top-bottom"
           >
              <Link to='/Contact' className='link-slide'>Contacta-nos</Link>
           </div>
       
          </div>
           {slide.map((slides,index)=>(
             <div key={slides.id} className={index===slideCurrent?'active-slide':'slide'}
              style={{backgroundImage:`url(${slides.img})`,
                 backgroundSize:'cover',
                 height:'100%',
                }}
              >
          </div>
          ))}
         </div>
         <div className='container-bar'>
            {slide.map((slide,index)=>(
                <button key={slide.id}
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
