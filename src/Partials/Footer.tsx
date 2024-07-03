import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagramSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'



const Footer = () => {
  const date=new Date()
  const newYear=date.getFullYear();
  const month:number=date.getMonth()
  
  const months:string[]=[
      'Janeiro',
      'Fevereiro',
      'Marco',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
  ]
  const thisMonth=months[month]


  return (
    <div className='main-container-footer'>
       
         <hr />
       <div className='container-footer'>
          <div className='footer'>
              <h2 className='footer-title'>Links uteis</h2>
              <div className='container-link-map'>
                <Link className='footer-link '  to='/'>Inicio</Link>
                <Link className='footer-link ' to='/Services'>Serviços</Link>
                <Link className='footer-link ' to='/About'>Sobre</Link>
                <Link className='footer-link ' to='/Contact'>Contato</Link>
              </div>
          </div>
          <div className='footer '>
              <h2 className='footer-title'>Comece agora</h2>
              <div className='cont-footer-link'>
                 <Link className='footer-link  ' id='link-f' to='/SignUp'>Registar - se</Link>
                 <Link className='footer-link  ' id='link-f' to='/SignIn'>Entrar agora</Link>
              </div>
          </div>
          <div className='footer'>
              <h2 className='footer-title ' >Siga-nos</h2>
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
       </div>  
       <div className='p-allright'>
          <p><span className='brand'>Powered by Soft</span>Moz | &copy; Todos direitos reservados | 
         <span></span>  {thisMonth} de {newYear} </p>
       </div>
    </div>
  )
}

export default Footer
