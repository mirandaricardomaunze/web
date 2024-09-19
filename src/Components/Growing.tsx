import React, { useEffect } from 'react'
import './Growing.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLaptopCode, faTools, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos';
import 'aos/dist/aos.css';



const Growing = () => {
   useEffect(()=>{
      AOS.init({ duration: 1000 });
    })
  



  return (
    <div className='container-grow-main'>
       <div className='container-grow'>
          <div className='growing'
           data-aos="fade-right" data-aos-anchor-placement="top-bottom"
          >
             <h1 className='title-first'
             data-aos="fade-up" data-aos-anchor-placement="top-bottom"
             >
             Estatiscas
             </h1>
             <p>
               Nos últimos anos, o mercado de criação de sites tem experimentado um 
               crescimento exponencial, impulsionado pela digitalização acelerada e 
               pela crescente demanda por presença online. A transformação digital
               não é mais uma opção, mas uma necessidade para empresas de todos os tamanhos.
               Estar online deixou de ser um diferencial e se tornou um requisito básico 
               para alcançar e engajar clientes.
             </p>
          </div>
           <div className='wrapper-grow'>
               <div className='grow'
               data-aos="fade-right" data-aos-anchor-placement="top-bottom"
               >
                  <FontAwesomeIcon className='icon-grow' icon={faUserCircle}/>
                  <p>Mais</p>
                  <h1>+100</h1>
                  <p>Clientes</p>
               </div>
               <div className='grow'
               data-aos="fade-up" data-aos-anchor-placement="top-bottom"
               >
               <FontAwesomeIcon className='icon-grow' icon={faLaptopCode}/>
                  <p>Mais</p>
                  <h1>+100</h1>
                  <p>Sites Criadas</p>
               </div>
               <div className='grow' id='grow'
               data-aos="fade-left" data-aos-anchor-placement="top-bottom"
               >
               <FontAwesomeIcon className='icon-grow' icon={faTools}/>
                  <p>Mais</p>
                  <h1>+100</h1>
                  <p>Servicos Prestados</p>
               </div>
               <div className='wrap-text'>
                  <p>
                     O futuro dos serviços de criação de sites é promissor, com novas 
                     tecnologias emergentes, como o uso de inteligência artificial e
                     ferramentas de automação, que prometem revolucionar ainda mais 
                     o setor. Para empresas que desejam se destacar no mercado, investir
                     em um site profissional, moderno e eficiente é uma estratégia
                     indispensável para alcançar sucesso e crescimento sustentável.
                  </p>
               </div>
           </div>
       </div>
       
    </div>
  )
}

export default Growing
