import './HomeServices.css'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faTachometer, faToolbox } from '@fortawesome/free-solid-svg-icons'


const HomeServices = () => {
  useEffect(()=>{
    AOS.init({ duration: 1000 });
  })


  return (
    <div className='container-first-home-about'>
        <div className='container-first' >  
             <div className='first'
              data-aos="fade-right" data-aos-anchor-placement="top-bottom"
             >
              <h1 className='title-first-h1'
               data-aos="fade-right" data-aos-anchor-placement="top-bottom"
               >
                 Nossos serviços
              </h1>
              
             </div>
             <div className='first'
              data-aos="fade-up" data-aos-anchor-placement="top-bottom"
             >
            <div className='container-card-home'>
              <div className='card-home-service'
                data-aos="fade-right" data-aos-anchor-placement="top-bottom"
              >
              <FontAwesomeIcon className='icon-home-service' icon={faLaptopCode}/>
              <div >
                <h1 > Serviços de criação de sites</h1>
                <p >
                   Nós transformamos os conceitos em interfaces intuitivas
                   e visualmente deslumbrantes.
                </p>
              </div>
              </div>
               <div className='card-home-service'
                 data-aos="fade-left" data-aos-anchor-placement="top-bottom"
               >
                <FontAwesomeIcon className='icon-home-service' icon={faTachometer}/>
                 <div>
                  <h1 className='second-title'> Serviços de design de sites</h1>
                  <p>
                    Nós transformamos os conceitos em interfaces intuitivas e visualmente deslumbrantes.
                  </p>
                 </div>
                </div>
                <div className='card-home-service'
                  data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                >
                 <FontAwesomeIcon className='icon-home-service' icon={faToolbox}/>
                 <div>
                  <h1> Serviços de manutenção de sites</h1>
                  <p>
                      Nós transformamos os conceitos em interfaces intuitivas e visualmente deslumbrantes.
                  </p>
                 </div>
              </div>
             </div>
            </div>
             
        </div>
    </div>
  )
}

export default HomeServices
