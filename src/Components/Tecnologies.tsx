import React, { useEffect } from 'react'
import './Tecnologies.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faChartLine, faCode, faLightbulb, faPaintBrush, faShoppingCart, faTools} from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Tecnologies = () => {

  useEffect(()=>{
    AOS.init({ duration: 1000 });
  })


  return (
    <div className='container-main-tecno'>
        <div className='container-tecno-title'
          data-aos="fade-up" data-aos-anchor-placement="top-bottom"
        >
             <h1 className='title-home-tecno' >Nossos <span className='title-color'>Serviços</span> </h1> 
        </div>
        <p className='text-tecno'
           data-aos="fade-up" data-aos-anchor-placement="top-bottom"
          >
            Nossa equipe de especialistas em desenvolvimento web oferece soluções personalizadas
            e inovadoras para atender às suas necessidades digitais.
            Trabalhamos em estreita colaboração com cada cliente para entender profundamente
            seus objetivos e desafios, permitindo-nos desenvolver soluções que impulsionam 
            resultados reais. Seja para lançar um novo site, otimizar um existente ou 
            desenvolver uma aplicação sob medida, estamos comprometidos em levar sua presença 
            digital ao próximo nível
          </p>
      
        <div className='container-tecno'>
            <div className="tecno"
              data-aos="fade-right" data-aos-anchor-placement="top-bottom"
            >
               <div>
                <FontAwesomeIcon className='icon-server' icon={faCode}/>
               </div>
               <div className=''>
                   <h2 className='title-tecno-h2'>Desenvolvimento Web Profissional</h2>
               </div>
               <p className='text-tecno-p'>
                Transformamos ideias em realidade digital. Com anos de experiência em desenvolvimento web, 
                nossa equipe técnica utiliza as mais recentes tecnologias e práticas de codificação para 
                construir sites de alto desempenho, responsivos e totalmente funcionais.
               </p>
            </div>
            <div className="tecno"
              data-aos="fade-up" data-aos-anchor-placement="top-bottom"
            >
              <div>
                  <FontAwesomeIcon className='icon-server' icon={faPaintBrush}/>
                </div>
                <div >
                  <h2 className='title-tecno-h2'>Design Personalizado e Criativo</h2>
                </div>
                <p className='text-tecno-p'>
                  Nos acreditamos que o design é a primeira impressão que seu site faz aos visitantes. 
                  Nosso time de designers talentosos trabalha em estreita colaboração com você para criar
                  um design personalizado que reflita a identidade da sua marca e atraia seu público-alvo. 
                </p>
              </div>
            <div className="tecno"
              data-aos="fade-left" data-aos-anchor-placement="top-bottom"
            >
              <div>
                  <FontAwesomeIcon className='icon-server' icon={faChartLine}/>
              </div>
              <div>
                <h2 className='title-tecno-h2'>Otimização para Mecanismos de Busca (SEO)</h2>
              </div>
              <p className='text-tecno-p'>
               Nossos especialistas em SEO trabalham para otimizar seu site, 
               melhorar sua classificação nos mecanismos de busca e aumentar o tráfego orgânico.
               Desde a pesquisa de palavras-chave até a otimização do conteúdo,
               estamos comprometidos em ajudá-lo a alcançar resultados tangíveis.
              </p>
            </div>
            <div className="tecno"
              data-aos="fade-right" data-aos-anchor-placement="top-bottom"
            >
              <div>
                  <FontAwesomeIcon className='icon-server' icon={faShoppingCart}/>
              </div>
              <div>
                <h2 className='title-tecno-h2'>E-Commerce e Soluções de Comércio Eletrônico</h2>
              </div>
              <p className='text-tecno-p'>
                Somos especializados em desenvolvimento de comércio eletrônico e 
                criação de lojas online que oferecem uma experiência de compra excepcional 
                aos seus clientes. Desde a integração de sistemas de pagamento seguros até 
                a implementação de funcionalidades avançadas de gestão de estoque.
              </p>
            </div>
            <div className="tecno"
              data-aos="fade-up" data-aos-anchor-placement="top-bottom"
            >
              <div>
                  <FontAwesomeIcon className='icon-server' icon={faTools}/>
              </div>
              <div>
                <h2 className='title-tecno-h2'>Manutenção e Suporte Contínuo</h2>
              </div>
              <p className='text-tecno-p'>
                Nosso compromisso não termina com o lançamento do seu site. 
                Oferecemos serviços abrangentes de manutenção e suporte contínuo para garantir que 
                seu site funcione sem problemas e esteja sempre atualizado. De correções de bugs a 
                atualizações de conteúdo.
              </p>
            </div>
            <div className="tecno"
              data-aos="fade-left" data-aos-anchor-placement="top-bottom"
            >
              <div>
                  <FontAwesomeIcon className='icon-server' icon={faLightbulb}/>
              </div>
              <div>
                <h2 className='title-tecno-h2'>Consultoria e Estratégia Digital</h2>
              </div>
              <p className='text-tecno-p'>
                Entendemos que cada negócio é único, por isso oferecemos serviços de consultoria 
                personalizados para atender às suas necessidades específicas. Nossa equipe de 
                especialistas em estratégia digital trabalhará com você para entender seus objetivos.
              </p>
            </div>
        </div>
    </div>
  )
}

export default Tecnologies
