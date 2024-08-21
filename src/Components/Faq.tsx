import React, { useEffect, useState } from 'react'
import './Faq.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Faq = () => {
  useEffect(()=>{
    AOS.init({ duration: 1000 });
  })


const [ textShow,setTextShow]=useState<boolean>(false)
const [ textShowSecond,setTextShowSecond]=useState<boolean>(false)
const [ textShowthirt,setTextShowthirt]=useState<boolean>(false)
const [ textShowforth,setTextShowforth]=useState<boolean>(false)

const handleFaqfirst=()=>{
    setTextShow(!textShow)
}
const handleFaqSecond=()=>{
    setTextShowSecond(!textShowSecond)
}
const handleFaqThirt=()=>{
  setTextShowthirt(!textShowthirt)
}
const handleFaqForth=()=>{
  setTextShowforth(!textShowforth)
}
  return (
    <div className='container-faq-main'>
       <div className='container-faq'>
            <div className='container-text-faq'>
               <h1 className='title-faq'
               data-aos="fade-up" data-aos-anchor-placement="top-bottom"
               >Perguntas frequentes </h1>
               <p className='text-first-faq' 
               data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                 Veja algumas perguntas frequentemente  
                 feitas pelos nossos 
                 clientes sobre os nossos serviços.
               </p>
            </div>
           <div className='faq'               
           data-aos="fade-up" data-aos-anchor-placement="top-bottom"
           >
              <div className='faq-quetion' >
                <p className=''>Posso atualizar meu site após o lançamento? </p>
                {textShow?<button className='btn-faq' id='btn-faq1' onClick={handleFaqfirst}><FontAwesomeIcon icon={faAngleDown}/></button>:
                <button className='btn-faq' id='btn-faq1' onClick={handleFaqfirst}><FontAwesomeIcon icon={faAngleUp}/></button>}
              </div>
                <hr className='hr' />
              {textShow?
                <p className={`text-faq ${textShow?'open':''}`}> 
                   Sim, você pode atualizar e modificar seu site sempre que necessário.
                   Oferecemos serviços de manutenção e suporte contínuo para garantir que
                   seu site esteja sempre atualizado e funcionando corretamente. Se precisar
                   de ajuda para atualizar seu site, entre em contato conosco e teremos prazer em ajudar.
                </p>:null}
           </div>
           <div className='faq'
             data-aos="fade-up" data-aos-anchor-placement="top-bottom"
           >
              <div className='faq-quetion' >
                <p>Quanto tempo leva para criar um site? </p>
                {textShowSecond?<button className='btn-faq' id='btn-faq2' onClick={handleFaqSecond}><FontAwesomeIcon icon={faAngleDown}/></button>:
                <button className='btn-faq' id='btn-faq2' onClick={handleFaqSecond}><FontAwesomeIcon icon={faAngleUp}/></button>}
              </div>
                 <hr  className='hr'/>
              {textShowSecond?
              <p className={`text-faq ${textShow?'open':''}`}>
                 Os custos de criar um site dependem de vários fatores, como o tamanho do site,
                 recursos adicionais (como loja virtual ou blog), design personalizado, entre outros. 
                 Oferecemos pacotes personalizados para atender às necessidades e orçamento de cada cliente.
                 Entre em contato para solicitar um orçamento gratuito e sem compromisso.
              </p>:null}
           </div>
           <div className='faq'
             data-aos="fade-up" data-aos-anchor-placement="top-bottom"
           >
              <div className='faq-quetion'>
                <p>Meu site será otimizado para mecanismos de busca (SEO)?</p>
                {textShowthirt?<button className='btn-faq' id='btn-faq3'  onClick={handleFaqThirt}><FontAwesomeIcon icon={faAngleDown}/></button>:
                <button className='btn-faq' id='btn-faq3' onClick={handleFaqThirt}><FontAwesomeIcon icon={faAngleUp}/></button>}
              </div>
                 <hr  className='hr'/>
              {textShowthirt?
              <p className={`text-faq ${textShow?'open':''}`} >
                  Sim, todos os sites que criamos são otimizados para mecanismos de busca (SEO). 
                  Isso significa que seu site terá uma boa chance de aparecer nos resultados de 
                  pesquisa do Google e outros mecanismos de busca,
                  ajudando a atrair mais visitantes qualificados para o seu site.
              </p>:null}
           </div>
           <div className='faq'
            data-aos="fade-up" data-aos-anchor-placement="top-bottom"
           >
              <div className='faq-quetion'
               data-aos="fade-up" data-aos-anchor-placement="top-bottom"
              >
                <p>Vocês oferecem serviços de hospedagem para meu site?</p>
                {textShowforth?<button className='btn-faq' id='btn-faq4' onClick={handleFaqForth}><FontAwesomeIcon icon={faAngleDown}/></button>:
                <button className='btn-faq' id='btn-faq4' onClick={handleFaqForth}><FontAwesomeIcon icon={faAngleUp}/></button>}
              </div>
                 <hr  className='hr'/>
              {textShowforth?
              <p className={`text-faq ${textShow?'open':''}`}>
                  Sim, oferecemos serviços de hospedagem para seu site. Nossa equipe pode ajudá-lo 
                  a escolher o plano de hospedagem mais adequado às suas necessidades e garantir 
                  que seu site esteja sempre disponível e seguro.
              </p>:null}
           </div>
       </div>
    </div>
  )
}

export default Faq
