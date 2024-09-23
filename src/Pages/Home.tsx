import React, { useEffect } from 'react'
import Slide from '../Components/Slide'
import './Home.css'
import WorkWithUs from '../Components/WorkWithUs'
import Team from '../Components/Team'
import Coments from '../Components/Coments'
import Faq from '../Components/Faq'
import client1 from '../Assets/client1.jpg'
import client2 from '../Assets/client2.jpg'
import client3 from '../Assets/client3.jpg'
import teamimg from '../Assets/team.png'
import teamimage from '../Assets/colegas.png'
import teamimgeman from '../Assets/lookat.png'
import Projects from '../Components/Projects'
import Pricing from '../Components/Pricing'
import HomeServices from '../Components/HomeServices'
import Statiscs from '../Components/Statiscs'
import ContactHome from '../Components/ContactHome'


const slides=[
{id:1,img:teamimg},
{id:2,img:teamimage},
{id:3,img:teamimgeman}
]

const comment=[
{id:1, image:client1,
text:'Sou muito grato a vossa empresa, o meu site ficou incrivel',nome:'Jhon Milton',rev:4.7},
{id:2, image:client2,
text:'Apenas a vossa empresa, conseguiu transformar ideias em site incrivel',nome:'Elton Milton',rev:4.8},
{id:3, image:client3,
text:'Foi exatamente o que eu queria, o meu site ficou incrivel',nome:'Leonel  Mackdown',rev:5},
]



const Home = () => {
  useEffect(()=>{ 
    document.title='Pagina de inicio'
 })
 


  return (
    <div className='container-home'>
       <div>
          <Slide slide={slides}/> 
           <HomeServices/>
            <WorkWithUs/>
            <Team />
            <Projects/>
            <Pricing/>
            <Statiscs/>
            <ContactHome/>
            <Coments comments={comment}/>
            <Faq/>
            
        </div> 
    </div>
  )
}

export default Home
