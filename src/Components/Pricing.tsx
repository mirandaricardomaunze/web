import React, { useEffect} from 'react'
import './Pricing.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong, faCheck } from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Pricing = () => {
  

    useEffect(()=>{
        AOS.init({ duration: 1000 });
      })

  return (
    <div className='main-container-pricing'>
      <h1 className="title-price"
       data-aos="fade-up" data-aos-anchor-placement="top-bottom"
    ><span className='border'>E</span>scolha o seu plano</h1>

      <div className="container-price">
        <div className="card-price "
         data-aos="fade-right" data-aos-anchor-placement="top-bottom"
        >
            <div className='plan'>
               <p>Site Básico</p>
            </div>
            <h1 className='price'>$200</h1>
           <div className='datails'>
            <p className='text'>
                <FontAwesomeIcon className='icon-price' icon={faCheck}/>
                5 Páginas Personalizadas
                </p>
                <p className='text'>
                <FontAwesomeIcon className='icon-price' icon={faCheck}/>
                Design Responsivo
                </p>
                <p className='text'>
                <FontAwesomeIcon className='icon-price' icon={faCheck}/>
                 Integração com redes sociais
                </p>
                <p className='text'>
                <FontAwesomeIcon className='icon-price' icon={faCheck}/>
                Otimização Básica para SEO
                </p>
                <p className='text'>
                <FontAwesomeIcon className='icon-price' icon={faCheck}/>
                Suporte por 1 mês
                </p>
           </div>
           <div className='link-price-div'>
             <Link to='Contact' className='link-price'> 
               Contata-nos 
               <FontAwesomeIcon className='arrow' icon={faArrowRightLong}/>
             </Link> 
           </div>
        </div>
        <div className="card-price"
         data-aos="fade-up" data-aos-anchor-placement="top-bottom"
        >
        <div className='plan-premium'>
          <p>Site Premium</p>
        </div>
            <h1 className='price'>$400</h1>
           <div className='datails'>
            <p className='text'>
                <FontAwesomeIcon className='icon-price' icon={faCheck}/>
                 Páginas Ilimitadas
                </p>
                <p className='text'>
                <FontAwesomeIcon className='icon-price' icon={faCheck}/>
                Design Responsivo Premium
                </p>
                <p className='text'>
                <FontAwesomeIcon className='icon-price' icon={faCheck}/>
                 Integração com redes sociais
                </p>
                <p className='text'>
                <FontAwesomeIcon className='icon-price' icon={faCheck}/>
                 Treinamento para atualizações
                </p>
                <p className='text'>
                <FontAwesomeIcon className='icon-price' icon={faCheck}/>
                Otimização  Velocidade
                </p>
                <p className='text'>
                <FontAwesomeIcon className='icon-price' icon={faCheck}/>
                Suporte por 6 meses
                </p>
           </div>
           <div className='link-price-div'>
             <Link to='Contact' className='link-price'> 
               Contata-nos
               <FontAwesomeIcon className='arrow' icon={faArrowRightLong}/>
              </Link> 
           </div>
        </div>
        <div className="card-price"
         data-aos="fade-left" data-aos-anchor-placement="top-bottom"
        >
           <div className='plan'>
             <p>Site Avançado</p>
           </div>
            <h1 className='price'>$250</h1>
           <div className='datails'>
            <p className='text'>
                <FontAwesomeIcon className='icon-price' icon={faCheck}/>
                5 Páginas Personalizadas
                </p>
                <p className='text'>
                <FontAwesomeIcon className='icon-price' icon={faCheck}/>
                Design Responsivo
                </p>
                <p className='text'>
                <FontAwesomeIcon className='icon-price' icon={faCheck}/>
                 Integração com redes sociais
                </p>
                <p className='text'>
                <FontAwesomeIcon className='icon-price' icon={faCheck}/>
                Otimizacao Básica para SEO
                </p>
                <p className='text'>
                <FontAwesomeIcon className='icon-price' icon={faCheck}/>
                Suporte por 3 meses
                </p>
           </div>
           <div className='link-price-div'>
             <Link to='Contact' className='link-price'> 
               Contata-nos
               <FontAwesomeIcon className='arrow' icon={faArrowRightLong}/>
             </Link> 
           </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
