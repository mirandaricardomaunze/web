import React, { useState } from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import SignUp from '../Components/Modal/SignUp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faInstagramSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'



const Footer = () => {
  const date=new Date()
  const newYear=date.getFullYear();
  const [showLink,setShowLink]=useState<boolean>(false)
  const handleshowLink=()=>{
      setShowLink(!showLink)
   }

  return (
    <div className='main-container-footer'>
       <h1 style={{textAlign:'left',color:'black',marginLeft:20}}>
         <span style={{color:'blueviolet'}}>Soft</span>Moz</h1>
         <hr />
       <div className='container-footer'>
          <div className='footer'>
              <h2 className='footer-title'>Onde estamos</h2>
                <p className='text-footer'> Bairro Mchava Sede, Quarteirão 11, Matola, Maputo, Moçambique.</p>
          </div>
          <div className='footer'>
              <h2 className='footer-title'>Links uteis</h2>
              <div className='container-link-map'>
                <Link className='footer-link '  to='/'>Inicio</Link>
                <Link className='footer-link ' to='/Services'>Servicos</Link>
                <Link className='footer-link ' to='/About'>Sobre</Link>
                <Link className='footer-link ' to='/Contact'>Contato</Link>
                {showLink?<p className='btn-footer' onClick={handleshowLink}><FontAwesomeIcon icon={faAngleDown}/></p>:
                 <p className='btn-footer' onClick={handleshowLink}><FontAwesomeIcon icon={faAngleUp}/></p>
                }
                {showLink?
                <div className='footer-link-signUp'>
                     <SignUp/>
              </div>:null}
              </div>
          </div>
          <div className='footer'>
              <h2 className='footer-title' >Siga-nos</h2>
              <div className='container-midia text-footer' id='footer-follow'>
                 <div className='midia'>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                       <FontAwesomeIcon className='midia-facebook'  icon={faFacebookSquare}/> 
                    </a>
                 </div>
                 <div className='midia'>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon className='midia-instagram' icon={faInstagramSquare}/>
                    </a>
                 </div>
                 <div className='midia'>
                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className='midia-youtube'  icon={faYoutubeSquare}/>
                    </a>
                 </div>
              </div>
          </div>
          <div className='footer'>
              <h2 className='footer-title'>Atendimento</h2>
                <p className='text-footer'>mirandadeveloper22@gmail.com</p>
          </div>
       </div>  
       <div className='p-allright'>
          <p><span className='brand'>Soft</span>Moz | Todos direitos reservados {newYear} </p>
       </div>
    </div>
  )
}

export default Footer
