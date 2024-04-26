import React, { useState } from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import facebook from '../Assets/facebook.png'
import instagram from '../Assets/instagram.png'
import youtube from '../Assets/youtube.png'
import SignUp from '../Components/Modal/SignUp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'



const Footer = () => {
  const date=new Date()
  const newYear=date.getFullYear();
  const [showLink,setShowLink]=useState<boolean>(false)
  const handleshowLink=()=>{
      setShowLink(!showLink)
   }

  return (
    <div className='main-container-footer'>
       <h1 style={{textAlign:'left',color:'black',marginLeft:20}}>TecMoz</h1>
       <div className='container-footer'>
          <div className='footer'>
              <h2>Onde estamos</h2>
                <p className='text-footer'> Bairro Mchava Sede, Quarteirão 11, Matola, Maputo, Moçambique.</p>
          </div>
          <div className='footer'>
              <h2>Links uteis</h2>
              <div className='container-link-map'>
                <Link className='footer-link '  to='/'>Inicio</Link>
                <Link className='footer-link ' to='/Services'>Servicos</Link>
                <Link className='footer-link ' to='/About'>Sobre</Link>
                <Link className='footer-link ' to='/Contact'>Contato</Link>
                <div className='footer-link-comp'>
                </div>
                {showLink?<p onClick={handleshowLink}><FontAwesomeIcon icon={faAngleDown}/></p>:
                 <p onClick={handleshowLink}><FontAwesomeIcon icon={faAngleUp}/></p>
                }
                {showLink?
                <div className='footer-link-comp'>
                     <SignUp/>
              </div>:null}
              </div>
          </div>
          <div className='footer'>
              <h2>Siga-nos</h2>
              <div className='container-midia text-footer'>
                 <div className='midia'>
                    <p >Facebook</p>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                      <img className='midia-facebook' src={facebook} alt="" />
                    </a>
                 </div>
                 <div className='midia'>
                    <p>Instagram</p>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                      <img className='midia-instagram' src={instagram}alt="" />
                    </a>
                 </div>
                 <div className='midia'>
                    <p>Youtube</p>
                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                      <img className='midia-youtube' src={youtube} alt="" />
                    </a>
                 </div>
              </div>
          </div>
          <div className='footer'>
              <h2>Atendimento</h2>
                <p className='text-footer'>mirandadeveloper22@gmail.com</p>
          </div>
       </div>  
       <div className='p-allright'>
          <p>Todos direitos reservados {newYear} </p>
       </div>
    </div>
  )
}

export default Footer
