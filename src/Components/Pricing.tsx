import React, { useEffect } from 'react'
import './Pricing.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
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
      >Precos acessiveis</h1>

      <div className="container-price">
        <div className="card-price "
         data-aos="fade-right" data-aos-anchor-placement="top-bottom"
        >
            <p>Site Basico</p>
            <h1 className='h1'>$200</h1>
            <h1 className='h1'>Detalhes:</h1>
           <div className='datails'>
            <p className='text'>
                <FontAwesomeIcon className='icon-price' icon={faCheck}/>
                5 Paginas Personalizadas
                </p>
                <p className='text'>
                <FontAwesomeIcon className='icon-price' icon={faCheck}/>
                Design Responsivo
                </p>
                <p className='text'>
                <FontAwesomeIcon className='icon-price' icon={faCheck}/>
                 Integracao com redes sociais
                </p>
                <p className='text'>
                <FontAwesomeIcon className='icon-price' icon={faCheck}/>
                Otimizacao Basica para SEO
                </p>
                <p className='text'>
                <FontAwesomeIcon className='icon-price' icon={faCheck}/>
                Suporte por 1 mes
                </p>
           </div>
           <div className='link-price-div'>
             <Link to='Contact' className='link-price'> Contata-nos</Link> 
           </div>
        </div>
        <div className="card-price"
         data-aos="fade-up" data-aos-anchor-placement="top-bottom"
        >
        <p>Site Premium</p>
            <h1 className='h1'>$400</h1>
            <h1 className='h1'>Detalhes:</h1>
           <div className='datails'>
            <p className='text'>
                <FontAwesomeIcon className='icon-price' icon={faCheck}/>
                 Paginas Ilimitadas
                </p>
                <p className='text'>
                <FontAwesomeIcon className='icon-price' icon={faCheck}/>
                Design Responsivo Premium
                </p>
                <p className='text'>
                <FontAwesomeIcon className='icon-price' icon={faCheck}/>
                 Integracao com redes sociais
                </p>
                <p className='text'>
                <FontAwesomeIcon className='icon-price' icon={faCheck}/>
                 Treinamento para atualizacoes
                </p>
                <p className='text'>
                <FontAwesomeIcon className='icon-price' icon={faCheck}/>
                Otimizacao Basica para SEO e Velocidade
                </p>
                <p className='text'>
                <FontAwesomeIcon className='icon-price' icon={faCheck}/>
                Suporte por 6 meses
                </p>
           </div>
           <div className='link-price-div'>
             <Link to='Contact' className='link-price'> Contata-nos</Link> 
           </div>
        </div>
        <div className="card-price"
         data-aos="fade-left" data-aos-anchor-placement="top-bottom"
        >
        <p>Site Avancado</p>
            <h1 className='h1'>$250</h1>
            <h1 className='h1'>Detalhes:</h1>
           <div className='datails'>
            <p className='text'>
                <FontAwesomeIcon className='icon-price' icon={faCheck}/>
                5 Paginas Personalizadas
                </p>
                <p className='text'>
                <FontAwesomeIcon className='icon-price' icon={faCheck}/>
                Design Responsivo
                </p>
                <p className='text'>
                <FontAwesomeIcon className='icon-price' icon={faCheck}/>
                 Integracao com redes sociais
                </p>
                <p className='text'>
                <FontAwesomeIcon className='icon-price' icon={faCheck}/>
                Otimizacao Basica para SEO
                </p>
                <p className='text'>
                <FontAwesomeIcon className='icon-price' icon={faCheck}/>
                Suporte por 1 mes
                </p>
           </div>
           <div className='link-price-div'>
             <Link to='Contact' className='link-price'> Contata-nos</Link> 
           </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
