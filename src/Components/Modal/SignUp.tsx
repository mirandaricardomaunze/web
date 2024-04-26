import React, { useState } from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom'
import SignIn from './SignIn'


const SignUp = () => {

  const [showHide,setShowHide]=useState<boolean>(false)
    const handleModal=()=>{
        setShowHide(!showHide)
    }

  return (
    <div>
       
       <Link className='link-sign'  onClick={handleModal} to=''>Registar</Link>
         {showHide?
        <div className='container-modal'>
         <div className=''> 
         <div className='modal'>
         <button className='btn-modal-close' onClick={handleModal}>x</button>
           <h1 className='title-signup'>Regista-se</h1> 
           <div>
              <form >
                <div>
                 <div className='label'>
                    <label  htmlFor="name">Nome:</label>
                 </div>
                 <div>
                    <input className='input' type="text" placeholder='Degite o seu nome'/>
                 </div>
                 <div className='label'>
                    <label htmlFor="email">Email:</label>
                 </div>
                 <div>
                    <input className='input' type="email" placeholder='Degite o seu email'/>
                 </div>
                 <div className='label'>
                    <label htmlFor="password">Senha:</label>
                 </div>
                 <div>
                    <input className='input' type="password"  placeholder='Degite a sua senha'/>
                 </div>
                 <div className='container-checkbox'>
                     <input type="checkbox"  className='input-checkbox' required/>
                     <p>  Aceita nossos termos</p>
                  </div>
                  <div>
                     <button className='btn' >Enviar</button>
                  </div>
                  <div className='text-regist'>
                     <p>Ja tem conta ? </p> <SignIn/>
                  </div>
                </div>
              </form>
           </div>
         </div>
         </div>
        </div>
         :null}
    </div>
  )
}

export default SignUp
