import React, { useEffect } from 'react'
import Slide from '../Components/Slide'
import './Home.css'
import Tecnologies from '../Components/Tecnologies'
import WorkWithUs from '../Components/WorkWithUs'
import Team from '../Components/Team'
import Growing from '../Components/Growing'
import Coments from '../Components/Coments'
import Faq from '../Components/Faq'
import FirstAboutHome from '../Components/FirstAboutHome'
import man from '../Assets/mansmile.png'
import man1 from '../Assets/man.png'
import manblack from '../Assets/manblack.png'
import client1 from '../Assets/client1.jpg'
import client2 from '../Assets/client2.jpg'
import client3 from '../Assets/client3.jpg'
const slides=[
{id:1,img:'https://images.pexels.com/photos/5862375/pexels-photo-5862375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
{id:2,img:'https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
{id:3,img:'https://images.pexels.com/photos/4245915/pexels-photo-4245915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
{id:4,img:'https://images.pexels.com/photos/7648226/pexels-photo-7648226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
]



const team=[
{id:1,image:man,
text:'Sou desenvolvedor Senior em javascript e react ',nome:'Miranda Ricardo'},
{id:2,image:man1,
text:'Sou desenvolvedor senior em javascript e php',nome:'Mark John'},
{id:3,image:manblack,
text:'Sou desenvolvedor e Designer Grafico',nome:' Richard Muller'}
]

const comment=[
{id:1,image:client1,
text:'Sou muito grato a vossa empresa, o meu site ficou incrivel',nome:'Jhon Milton',rev:4.7},
{id:2,image:client2,
text:'Apenas a vossa empresa, conseguiu transformar ideias em site incrivel',nome:'Elton Milton',rev:4.8},
{id:3,image:client3,
text:'Foi exatamente o que eu queria, o meu site ficou incrivel',nome:'Leonel  Mackdown',rev:4.9},
]



const Home = () => {
  useEffect(()=>{ 
    document.title='Pagina de inicio'
 })
 


  return (
    <div className='container-home'>
       <Slide slide={slides}/> 
       
         <FirstAboutHome/>
         
         <div>
            <Tecnologies /> 
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
