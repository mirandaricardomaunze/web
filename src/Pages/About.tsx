import React from 'react'
import './About.css'
import Coments from '../Components/Coments'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop, faHandHolding, faHands, faLaptop, faMobileAndroid, faPen, faPerson, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const comment=[
{id:1,image:'https://img.freepik.com/fotos-gratis/homem-bonito-e-confiante-sorrindo-com-as-maos-cruzadas-no-peito_176420-18743.jpg?t=st=1713634505~exp=1713638105~hmac=576ddaacd9e751a0602efde86f406acbc7efbd99247a201b8306becda5f9d1c8&w=740',
text:'Sou muito grato a vossa empresa, o meu site ficou incrivel',nome:'Jhon Milton'},
{id:1,image:'https://img.freepik.com/fotos-gratis/bonito-homem-sorridente-vestindo-camisa-verde-em-pe-contra-um-fundo-azul_662251-587.jpg?t=st=1713634650~exp=1713638250~hmac=717f05144e28301a2a7bd5ed399742037ae36865a546f40ac0b4d4528108da5b&w=740',
text:'Apenas a vossa empresa, conseguiu transformar ideias em site incrivel',nome:'Elton Milton'},
{id:1,image:'https://img.freepik.com/fotos-gratis/retrato-isolado-de-jovem-engracado-de-pele-escura-com-os-bracos-cruzados-com-penteado-afro-na-camisa-branca-casual-sob-jaqueta-jeans-com-expressao-de-rosto-animado_176420-13044.jpg?t=st=1713634685~exp=1713638285~hmac=05e32af95ed69b7b867c8bec9ddc71795258e6a52ac55c044100366835161627&w=740',
text:'Foi exatamente o que eu queria, o meu site ficou incrivel',nome:'Leonel  Mackdown'},
]




const About = () => {
  return (
    <div className='container-main-about'>
      <h1 className='title'>Construa a Sua Presença Online</h1>
       <div className='cont-text-about'>
         <p className='text-about'>
          Seu site é a porta de entrada para o mundo virtual. Na era digital, 
          é crucial ter uma presença online que não apenas impressione, mas também encante 
          e engaje seu público-alvo. Aqui, no nosso serviço de desenvolvimento de sites,
          estamos dedicados a transformar sua visão em realidade digital.
         </p>
       </div>
       <div className='container-about-main'>
         <div>
            <h2 className='title-about'>Por que Escolher Nossos Serviços?</h2>
         </div>
         <div className='container-grid-about'>
            <div className='about'>
            <p className='icon'><FontAwesomeIcon icon={faHandHolding}/></p>
              <p className='text-about'>1. <b> Experiência Incomparável: </b>
                Com anos de experiência no desenvolvimento web, nossa equipe é habilidosa 
                em transformar conceitos em interfaces intuitivas e visualmente deslumbrantes.
              </p>
            </div>
            <div className='about'>
            <p className='icon'><FontAwesomeIcon icon={faLaptop}/></p>
              <p className='text-about'>2. <b> Design Personalizado:</b>
                Cada site que criamos é uma expressão única da identidade da sua marca. Nós entendemos 
                que sua marca é especial e merece ser tratada com cuidado e atenção aos detalhes.
              </p>
            </div>
             <div className='about'>
             <p className='icon'><FontAwesomeIcon icon={faPen}/></p>
              <p className='text-about'>3. <b> Funcionalidade Sem Compromissos: </b>
                Não acreditamos em sacrificar a funcionalidade pela estética. Criamos sites que não apenas 
                impressionam visualmente, 
                 mas também funcionam perfeitamente em todos os dispositivos.
                </p>
             </div>
             <div className='about'>
               <p className='icon'><FontAwesomeIcon icon={faHands}/></p>
               <p className='text-about'>4. <b> Suporte Contínuo: </b>
                Nosso compromisso com você não termina com o lançamento do site. Estamos aqui para oferecer 
                suporte contínuo e garantir que seu site permaneça atualizado e eficaz.
               </p>
             </div>
        </div>
       </div>
        <div className='container-grid-about-second-main'>
        <h2 className='title-about'>Nossos Serviços Principais</h2>
        <div className='container-grid-about-second'>
           <div className='about-second'>
           <p className='icon'><FontAwesomeIcon icon={faDesktop}/></p>
            <p className='text-about'>1. <b> Design Responsivo: </b>
              Garantimos que seu site tenha uma aparência impressionante em todos os dispositivos, desde 
              desktops até smartphones e tablets.
            </p>
           </div >
           <div className='about-second'>
           <p className='icon'><FontAwesomeIcon icon={faPerson}/></p>
            <p className='text-about'>2. <b> Desenvolvimento Personalizado: </b>
              Nossos desenvolvedores talentosos criam soluções sob medida para atender às suas necessidades 
              específicas de negócios.
            </p>
           </div>
           <div className='about-second'>
           <p className='icon'><FontAwesomeIcon icon={faSearch}/></p>
            <p className='text-about'>3. <b> Otimização para Motores de Busca (SEO): </b>
              Maximizamos a visibilidade do seu site nos mecanismos de busca para garantir que sua marca seja 
              encontrada facilmente online.
            </p>
           </div>
           <div className='about-second'>
           <p className='icon'><FontAwesomeIcon icon={faMobileAndroid}/></p>
            <p className='text-about'>4. <b> Integração de Mídias Sociais:  </b>
              Conectamos seu site às principais plataformas de mídia social para ampliar seu alcance e engajamento.
            </p>
           </div>
        </div>
        <div className='container-about-join'>
           <p className='text-about'>Junte-se a nós e dê o próximo passo em direção a uma presença online de sucesso. Entre em contato hoje 
             para começar sua jornada digital conosco!
           </p>
           <Link className='link-about' to='/Contact'>Contacta-nos agora</Link> 
        </div>
        </div>
        
       <Coments comments={comment} />
    </div>
  )
}

export default About
