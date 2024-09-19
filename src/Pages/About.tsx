import React, { useEffect } from 'react'
import './About.css'
import Coments from '../Components/Coments'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faDesktop, faHandHolding, faHands, faLaptop, faMobileAndroid, faPen, faPerson} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import client1 from '../Assets/client1.jpg'
import client2 from '../Assets/client2.jpg'
import client3 from '../Assets/client3.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';


const comment=[
{id:1,image:client1,
text:'Sou muito grato a vossa empresa, o meu site ficou incrivel',nome:'Jhon Milton',rev:4.7},
{id:1,image:client2,
text:'Apenas a vossa empresa, conseguiu transformar ideias em site incrivel',nome:'Elton Milton',rev:4.9},
{id:1,image:client3,
text:'Foi exatamente o que eu queria, o meu site ficou incrivel',nome:'Leonel  Mackdown',rev:4.9},
]

const About = () => {
  useEffect(()=>{
    AOS.init({ duration: 1000 });
  })



  useEffect(()=>{ 
    document.title='Pagina de sobre'
 })
 

  return (
    <div className='container-main-about' >
         <div className='contairner-first-text'>
          <h1 className='title-about'
            data-aos="fade-up" data-aos-anchor-placement="top-bottom"
          >Sobre nós</h1>
          <p className='text-about'
            data-aos="fade-up" data-aos-anchor-placement="top-bottom"
          >
           Somos uma equipe apaixonada por transformar ideias em soluções digitais inovadoras.
           Combinamos criatividade, tecnologia de ponta e uma abordagem personalizada para 
           desenvolver sites que não só impressionam visualmente, mas também proporcionam resultados reais para o seu negócio.
          </p>
         </div>
      
       <div className='container-about-main'>
         <div>
            <h2 className='title-about-second ' 
              data-aos="fade-up" data-aos-anchor-placement="top-bottom"
            >Por que Escolher Nossos Serviços?</h2>
         </div>
         <div className='container-grid-about'>
            <div className='about'
             data-aos="fade-right" data-aos-anchor-placement="top-bottom"
            >
            <p className='icon'><FontAwesomeIcon icon={faHandHolding}/></p>
              <p className='text-about'>1. <b> Experiência Incomparável: </b>
                Com anos de experiência no desenvolvimento web, nossa equipe é habilidosa 
                em transformar conceitos em interfaces intuitivas e visualmente deslumbrantes.
              </p>
            </div>
            <div className='about'
              data-aos="fade-left" data-aos-anchor-placement="top-bottom"
            >
            <p className='icon'><FontAwesomeIcon icon={faLaptop}/></p>
              <p className='text-about'>2. <b> Design Personalizado:</b>
                Cada site que criamos é uma expressão única da identidade da sua marca. Nós entendemos 
                que sua marca é especial e merece ser tratada com cuidado e atenção aos detalhes.
              </p>
            </div>
             <div className='about'
               data-aos="fade-right" data-aos-anchor-placement="top-bottom"
             >
             <p className='icon'><FontAwesomeIcon icon={faPen}/></p>
              <p className='text-about'>3. <b> Funcionalidade Sem Compromissos: </b>
                Não acreditamos em sacrificar a funcionalidade pela estética. Criamos sites que não apenas 
                impressionam visualmente, 
                 mas também funcionam perfeitamente em todos os dispositivos.
                </p>
             </div>
             <div className='about'
               data-aos="fade-left" data-aos-anchor-placement="top-bottom"
             >
               <p className='icon'><FontAwesomeIcon icon={faHands}/></p>
               <p className='text-about'>4. <b> Suporte Contínuo: </b>
                Nosso compromisso com você não termina com o lançamento do site. Estamos aqui para oferecer 
                suporte contínuo e garantir que seu site permaneça atualizado e eficaz.
               </p>
             </div>
        </div>
       </div>
        <div className='container-grid-about-second-main'>
        <h2 className='title-about'
          data-aos="fade-up" data-aos-anchor-placement="top-bottom"
        >Nossos Serviços Principais</h2>
        <div className='container-grid-about-second'>
           <div className='about-second'
             data-aos="fade-right" data-aos-anchor-placement="top-bottom"
           >
           <p className='icon'><FontAwesomeIcon icon={faDesktop}/></p>
            <p className='text-about-second'>1. <b> Design Responsivo: </b>
              Garantimos que seu site tenha uma aparência impressionante em todos os dispositivos, desde 
              desktops até smartphones e tablets.
            </p>
           </div >
           <div className='about-second'
             data-aos="fade-left" data-aos-anchor-placement="top-bottom"
           >
           <p className='icon'><FontAwesomeIcon icon={faPerson}/></p>
            <p className='text-about-second'>2. <b> Desenvolvimento Personalizado: </b>
              Nossos desenvolvedores talentosos criam soluções sob medida para atender às suas necessidades 
              específicas de negócios.
            </p>
           </div>
           <div className='about-second'
            data-aos="fade-right" data-aos-anchor-placement="top-bottom"
           >
           <p className='icon'><FontAwesomeIcon icon={faChartLine}/></p>
            <p className='text-about-second'>3. <b> Otimização para Motores de Busca (SEO): </b>
              Maximizamos a visibilidade do seu site nos mecanismos de busca para garantir que sua marca seja 
              encontrada facilmente online.
            </p>
           </div>
           <div className='about-second'
             data-aos="fade-left" data-aos-anchor-placement="top-bottom"
           >
           <p className='icon'><FontAwesomeIcon icon={faMobileAndroid}/></p>
            <p className='text-about-second'>4. <b> Integração de Mídias Sociais:  </b>
              Conectamos seu site às principais plataformas de mídia social para ampliar seu alcance e engajamento.
            </p>
           </div>
        </div>
        <div className='container-about-join'
          data-aos="fade-up" data-aos-anchor-placement="top-bottom"
        >
           <p className='text-about-join'>Junte-se a nós e dê o próximo passo em direção a uma presença online de sucesso. Entre em contato hoje 
             para começar sua jornada digital conosco!
           </p>
           <div className='cont-link-join'
             data-aos="fade-up" data-aos-anchor-placement="top-bottom"
           >
             <Link className='link-about' to='/Contact'>Contacta-nos agora</Link>
           </div> 
        </div>
        </div>
        
       <Coments comments={comment} />
    </div>
  )
}

export default About
