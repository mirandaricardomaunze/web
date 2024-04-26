import React from 'react'
import Slide from '../Components/Slide'
import './Home.css'
import Tecnologies from '../Components/Tecnologies'
import WorkWithUs from '../Components/WorkWithUs'
import { Link } from 'react-router-dom'
import Team from '../Components/Team'
import Growing from '../Components/Growing'
import Coments from '../Components/Coments'
import Faq from '../Components/Faq'





const slides=[
'https://images.pexels.com/photos/5862375/pexels-photo-5862375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
'https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
'https://images.pexels.com/photos/4245915/pexels-photo-4245915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
'https://images.pexels.com/photos/7648226/pexels-photo-7648226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
]

const content =[
{id:1,
image:'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
title:'Node js',
text:'Usamos para criar server-side aplication, ou seja back-end.'
},
{id:2,
image:'https://images.pexels.com/photos/4050288/pexels-photo-4050288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
title:'React js',
text:'Usamos esta biblioteca para criar interfaces de single page.'
},
{id:3,
image:'https://images.pexels.com/photos/89724/pexels-photo-89724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
title:'Bootstrap',
text:'Usamos esta biblioteca para criar loyouts responsivos de  sites para todos despositivos .'
},
{id:4,
image:'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
title:'JavaScript vanila',
text:'Usamos para criar sites sem nenhuma biblioteca. '
}
]

const team=[
{id:1,image:'https://img.freepik.com/fotos-gratis/homem-caucasiano-bonito-vestindo-roupas-casuais-e-oculos-com-um-sorriso-feliz-e-legal-no-rosto-pessoa-sortuda_839833-12772.jpg?t=st=1713634038~exp=1713637638~hmac=53b9e76379e7f03c7dd641c5f994ac75188347d5bc3e1558e40cbc117c4536b7&w=740',
text:'Sou desenvolvedor fullstack em javascript ',nome:'Miranda Ricardo'},
{id:2,image:'https://img.freepik.com/fotos-gratis/retrato-de-homem-feliz-e-sorridente_23-2149022620.jpg?t=st=1713634155~exp=1713637755~hmac=789153ccbee6d497138a3775ebdb90331706ec9d7dc03706d2f4638eb328ecba&w=740',
text:'Sou desenvolvedor fullstack em javascript ',nome:'Marilian John'},
{id:3,image:'https://img.freepik.com/fotos-gratis/jovem-bonito-vestindo-camiseta-casual-sobre-o-rosto-feliz-de-fundo-azul-sorrindo-com-os-bracos-cruzados-olhando-para-a-camera-pessoa-positiva_839833-12963.jpg?t=st=1713634223~exp=1713637823~hmac=c1af8fa33b8991d274d3c22394cd5ea5c3b2a18cc07dd265acf845adc6ad706a&w=740',
text:'Sou desenvolvedor fullstack em javascript ',nome:' Richard Muller'}
]

const comment=[
{id:1,image:'https://img.freepik.com/fotos-gratis/homem-bonito-e-confiante-sorrindo-com-as-maos-cruzadas-no-peito_176420-18743.jpg?t=st=1713634505~exp=1713638105~hmac=576ddaacd9e751a0602efde86f406acbc7efbd99247a201b8306becda5f9d1c8&w=740',
text:'Sou muito grato a vossa empresa, o meu site ficou incrivel',nome:'Jhon Milton'},
{id:1,image:'https://img.freepik.com/fotos-gratis/bonito-homem-sorridente-vestindo-camisa-verde-em-pe-contra-um-fundo-azul_662251-587.jpg?t=st=1713634650~exp=1713638250~hmac=717f05144e28301a2a7bd5ed399742037ae36865a546f40ac0b4d4528108da5b&w=740',
text:'Apenas a vossa empresa, conseguiu transformar ideias em site incrivel',nome:'Elton Milton'},
{id:1,image:'https://img.freepik.com/fotos-gratis/retrato-isolado-de-jovem-engracado-de-pele-escura-com-os-bracos-cruzados-com-penteado-afro-na-camisa-branca-casual-sob-jaqueta-jeans-com-expressao-de-rosto-animado_176420-13044.jpg?t=st=1713634685~exp=1713638285~hmac=05e32af95ed69b7b867c8bec9ddc71795258e6a52ac55c044100366835161627&w=740',
text:'Foi exatamente o que eu queria, o meu site ficou incrivel',nome:'Leonel  Mackdown'},
]



const Home = () => {
  return (
    <div className='container-home'>
       <Slide slide={slides}/> 
       <div className='container-title'>
              <div className='cont-title'>
                  <h1 className='title'> <span className='title-color'>Serviços de Criação de </span>Sites </h1>
                  <p className='text'>
                    Bem-vindo à nossa plataforma dedicada à criação de sites que refletem a 
                    essência e a visão única do seu negócio. Nossa equipe de especialistas 
                    em design e desenvolvimento está pronta para transformar suas ideias 
                    em uma presença online cativante e funcional.
                  </p>
                  <div className='container-link-main'>
                        <Link className='link-main'  to='/Services'>Saiba mais</Link>
                  </div>
              </div>
         </div>
         <div>
           <h1 className='title' id='title'><span className='title-color'>Tecnologias</span> Modernas</h1> 
         </div>
         <div>
            <Tecnologies content={content} /> 
            <WorkWithUs/>
            <Team contents={team}/>
            <Growing/>
            <Coments comments={comment}/>
            <Faq/>
            
        </div> 
    </div>
  )
}

export default Home
