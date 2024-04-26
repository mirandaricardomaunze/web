import React from 'react'
import './Services.css'
import { Link } from 'react-router-dom'
import  bootstrapimg from'../Assets/bootstrap.png'
import nodejsimg from '../Assets/nodejs.png'
import reactimg from '../Assets/react.png'
import jsimg from  '../Assets/javascript.png'
import seo from  '../Assets/seo.png'

const Services = () => {
  return (
    <div className='container-service-main'>
       <div className='container-text-service'>
         <h1 className='title-first'> Sites Modernos</h1>
          
          <p className='text-service'>
            Nossa equipe de especialistas em desenvolvimento web oferece soluções personalizadas
            e inovadoras para atender às suas necessidades digitais. Combinando nossa experiência
            em React.js, Node.js, Bootstrap, JavaScript e CSS, entregamos sites de alto desempenho 
            e visualmente impressionantes.
          </p>
       </div>
       <div className='container-service-main-second'>
           <div >
               <h1 className='title-service'>Tecnologias mais usadas</h1>
           </div>
       <div className='container-service'>
          <div className='services'>
             <div className='container-image-service'>
               <img className='image-service' src={nodejsimg} alt="" />
             </div>
              <div className="container-p">
                  <h3>Node js</h3>
                   <p>
                     construímos um back-end robusto e escalável para garantir um desempenho excepcional e 
                     uma gestão eficiente de dados.
                   </p>
               </div>
          </div>
          <div className='services'>
             <div className='container-image-service'>
               <img className='image-service' 
               src={reactimg} 
               alt="" />
             </div>
             <div className='container-p'>
                 <h3>React js</h3>
                <p>Utilizamos React.js para criar interfaces de usuário dinâmicas e
                   responsivas que proporcionam uma experiência imersiva aos seus visitantes.
                </p>
             </div>
          </div>
          <div className='services'>
             <div className='container-image-service'>
                <img className='image-service' src={jsimg}alt="" />
             </div>
             <div className="container-p">
                 <h3>JavaScript vanila</h3>
                 <p>
                   Implementamos funcionalidades avançadas e interativas usando JavaScript puro e
                   bibliotecas modernas, garantindo que seu site se destaque da concorrência.
                 </p>
             </div>
          </div>
          <div className='services'>
             <div className='container-image-service'>
                <img className='image-service' src={bootstrapimg} alt="" />
             </div>
             <div className="container-p">
                 <h3>Bootstrap</h3>
                 <p>
                  Utilizando Bootstrap, garantimos que seu site seja completamente responsivo e
                  compatível com dispositivos de todos os tamanhos, proporcionando uma experiência
                  consistente em desktops, tablets e smartphones.
                 </p>
             </div>
          </div>
          <div className='services'>
             <div className='container-image-service'>
                <img className='image-service' src={seo} alt="" />
             </div>
             <div className="container-p">
                 <h3>SEO</h3>
                 <p >
                   Otimizamos cada aspecto do seu site para garantir tempos de carregamento rápidos 
                   e uma classificação elevada nos mecanismos de busca, maximizando sua visibilidade online.
                 </p>
             </div>
          </div>
       </div>
       </div>
       
       <div className='container-service-contact'>
           <h1 className='title-service-contact'>Entre em Contato Conosco</h1>
           <p className='text-service-contact'>
              Estamos ansiosos para colaborar com você e transformar sua visão digital em realidade.
              Entre em contato conosco hoje mesmo para discutir seu projeto e receber um orçamento 
              personalizado.
           </p>
            <div className='container-link-service'>
                <Link className='link-service' to='/Contact'> Contata-nos </Link>
            </div>
       </div>
    </div>
  )
}

export default Services
