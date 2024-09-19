import React, { useEffect } from 'react'
import './dashboard.css'
import ChartMui from '../../Chart/ChartMui'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartBar, faEye, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { useAuthContext } from '../Context/MyContextProvider'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Dashboard = () => {
  useEffect(()=>{
    AOS.init({ duration: 1000 });
  })



useEffect(()=>{
  document.title='Pagina de painel'
})

  
const {allUsers,views}=useAuthContext()

  return (
    <div className='container'>

       <h1 className='title-dash'
         data-aos="fade-up" data-aos-anchor-placement="top-bottom"
       >
        Painel de administrativo
       </h1> 

         <div className='container-dash'>
            <div className='card-dash'
               data-aos="fade-right" data-aos-anchor-placement="top-bottom"
            >
              <h2><FontAwesomeIcon icon={faEye}/></h2>
              <div className='center'>
                <p>Visitas efectuadas</p>
                <p>Acessos: {views}</p>
              </div>
            </div>
            <div className='card-dash'
              data-aos="fade-up" data-aos-anchor-placement="top-bottom"
            >
              <h2><FontAwesomeIcon icon={faUserCircle}/></h2>
              <div className='center'>
                <p>Usuarios cadastrados</p>
                <p className=''>Usuarios: {allUsers}</p>
              </div>
            </div>
            <div className='card-dash'
               data-aos="fade-left" data-aos-anchor-placement="top-bottom"
            >
              <h2><FontAwesomeIcon icon={faChartBar}/></h2>
              <div className='center'>
                <ChartMui/>
              </div>
            </div>
         </div>
    </div>
  )
}

export default Dashboard
