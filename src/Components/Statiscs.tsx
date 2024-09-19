import React, { useEffect } from 'react'
import './Statisc.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Statiscs = () => {
    useEffect(()=>{
        AOS.init({ duration: 1000 });
      })
    
  


  return (
    <div className="container-statiscs-bg">
       <div className='container-statisc'>
      <div className="container-text-statisc">
        <div>
           <h1 className='title-statisc'
           data-aos="fade-up" data-aos-anchor-placement="top-bottom"
           >
            Já ajudamos muitas empresas a crescer
          </h1>
           <p data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            Com anos de experiência no desenvolvimento web, nossa equipe já 
            contribuiu para o crescimento e produtividade de varias empresas
            por criar um design personalizado que reflita a identidade da 
            sua marca e atraia seu público-alvo. 
          </p>
        </div>
        <div className='statisc-in'>
            <div className='card-statisc'
                data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                >
                
                  <h1>100+</h1>
                  <p>Clientes</p>
              </div>
              <div className='card-statisc'
                data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                >
                
                  <h1>100+</h1>
                  <p>Serviços</p>
              </div>
              <div className='card-statisc'
                data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                >
          
                    <h1>100+</h1>
                    <p>Sites Criadas</p>
              </div>   
        </div>
      </div>
      <div className='card-statisc-image' data-aos="fade-right" data-aos-anchor-placement="top-bottom">
          
      </div>
    </div>
    </div>
  )
}

export default Statiscs
