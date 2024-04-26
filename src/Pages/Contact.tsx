import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEnvelope, faMobile } from '@fortawesome/free-solid-svg-icons'




const Contact = () => {
  return (
    <div className='container-contact-main'>
          <div className='container-contact-text'>
            <h1 className='title'>Entre em Contato Conosco</h1>
            <p className='text-contact'>
               Estamos aqui para ajudar você a transformar suas ideias em realidade.
               Se você tem alguma pergunta, precisa de mais informações ou deseja discutir 
               um projeto, entre em contato conosco. Nossa equipe está pronta para oferecer
               suporte personalizado e soluções sob medida para suas necessidades.
            </p>
          </div>
          <div className='container-contact-bg'>
          <div className='container-contact'>
         <div className='contact'>
              <h2 className='title-contact'>Formulario de contato</h2>
              <p className='text-contact'>Para sua conveniência, preencha o formulário abaixo e entraremos em contato com você em breve:</p>
             <div className='form'>
                <h1 className='title-contact'>Contacta-nos </h1>
                <form action="">
                   <div>
                     <label htmlFor="" className='text-contact'>Nome:</label>
                   </div>
                   <div>
                      <input className='input' type="text" placeholder='Degite o nome' />
                   </div>
                   <div>
                     <label htmlFor="" className='text-contact'>Email:</label>
                   </div>
                   <div>
                      <input className='input' type="text" placeholder='Degite o email' />
                   </div>
                   <div>
                     <label htmlFor="" className='text-contact'>Assunto:</label>
                   </div>
                   <div>
                      <textarea className='input'  name="" id="textarea" placeholder='Escreva o assunto' ></textarea>
                   </div>
                    <div>
                       <button className='btn'>Enviar</button>
                    </div>
                </form>
             </div>
          </div>
          <div className='contact'>
            <h2 className='title-contact'>Informações de Contato</h2>
            <p className='text-contact '><FontAwesomeIcon icon={faMobile}/><b> Telefone:</b>  847750120</p>
            <p className='text-contact'><FontAwesomeIcon icon={faEnvelope}/><b>  Email:</b>  mirandamaunze@122gmail.com</p>
          </div>
          </div>
          </div>
      <div className='container-visit-contact'>  
       <div className='visit-contact'>
          <h2 className='title-visit'>Visite-nos</h2>
          <p className='text-contact'>Se preferir um contato pessoal, sinta-se à vontade para nos visitar em nosso escritório.
            Estamos ansiosos para conhecê-lo e discutir 
            como podemos ajudar a impulsionar sua presença online
          </p>
          <p className='text-contact'>Não hesite em nos contatar. Estamos aqui para ajudar você a alcançar seus objetivos online.</p>
        </div>
        </div>
    </div>
  )
}

export default Contact
