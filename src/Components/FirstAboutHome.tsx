import './FirstAboutHome.css'
import React, { useEffect } from 'react'
import imagehome from '../Assets/card3.jpg'
import image  from '../Assets/card5.png'
import image1  from '../Assets/Banner1.png'
import AOS from 'aos';
import 'aos/dist/aos.css';


const FirstAboutHome = () => {
  useEffect(()=>{
    AOS.init({ duration: 1000 });
  })


  return (
    <div className='container-first-home-about'>
       <h1 className='title-first'
       data-aos="fade-right" data-aos-anchor-placement="top-bottom"
       >
        Nossos serviços
       </h1>
        <div className='container-first' >  
             <div className='first'
              data-aos="fade-right" data-aos-anchor-placement="top-bottom"
             >
               <img className='imge-home' src={image} alt="" />
               <div className='text-card'>
                  <p className=''>Serviços de design de sites</p>
                </div>
             </div>
             <div className='first'
              data-aos="fade-up" data-aos-anchor-placement="top-bottom"
             >
                <img className='imge-home' src={imagehome} alt="" />
                <div className='text-card'>
                  <p className=''>Serviços de criação de sites</p>
                </div>
             </div>
             <div className='first'
              data-aos="fade-left" data-aos-anchor-placement="top-bottom"
             >
                <img className='imge-home' src={image1} alt="" />
                <div className='text-card'>
                  <p className=''>Serviços de manutenção de sites</p>
                </div>
             </div>
        </div>
    </div>
  )
}

export default FirstAboutHome
