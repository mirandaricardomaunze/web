import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './SignIn.css'
import SignUp from './SignUp'

const SignIn = () => {
   const [showHideModal,setShowHideModal]=useState<boolean>(false)
    const handleModal=()=>{
       setShowHideModal(!showHideModal)
    }

  return (
    <div>
        <Link className='link-signIn'  onClick={handleModal} to=''>Entrar</Link>
         {showHideModal?
        <div className='container-modal'>
         <div className=''> 
         <div className='modal'>
         <button className='btn-modal-close' onClick={handleModal}>x</button>
           <h1 className='title-signIn'>Entrar</h1> 
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
                     <input type="checkbox"  className='input-checkbox'/>
                     <p>  Aceita nossos termos</p>
                  </div>
                  <div>
                     <button className='btn' >Enviar</button>
                  </div>
                  <div className='text-regist'>
                     <p>Ainda nao tem conta ? </p> <SignUp/>
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

export default SignIn
