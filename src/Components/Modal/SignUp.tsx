import React, { useState } from 'react'
import './SignUp.css'
import { Link, useNavigate } from 'react-router-dom'
import axios, { AxiosResponse } from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faXmarkSquare } from '@fortawesome/free-solid-svg-icons'

interface User{
  name:string
  email:string
  password:string
}


const SignUp = ():React.JSX.Element => {
const navegate=useNavigate()

const [name,setName]=useState<string>('')
const [email,setEmail]=useState<string>('')
const [password,setPassword]=useState<string>('')
const [emptyInput,setEmptyInput]=useState<boolean>(false)
const [showHide,setShowHide]=useState<boolean>(false)
const [error,setEerror]=useState<boolean>(false)


const handleModal=()=>{
    setShowHide(!showHide)
}

const handleInputEmpty=()=>{
   if (email.length>0) {
      console.log('esta preechido'); 
      setEmptyInput(false)
   }else{
      console.log('nao preechido');
      setEmptyInput(true)  
   }
   if (name.length>0) {
      console.log('esta preechido'); 
      setEmptyInput(false)
   }else{
      console.log('nao preechido');
      setEmptyInput(true)  
   }
   if (password.length>0) {
      console.log('esta preechido'); 
      setEmptyInput(false)
   }else{
      console.log('nao preechido');
      setEmptyInput(true)  
   }
}
const handleSignUp=async():Promise<void>=>{
const baseUrl:string='http://localhost:4000/register/register'
 try {
   const response:AxiosResponse = await axios.post<User>(baseUrl,{name,email,password})
if (response) {
   navegate('/SignIn')
   console.log(response.data);
   setEerror(false)
 }
 } catch (error) {
  console.log(`Ocorreu erro durante o cadastro: ${error}`);
  setEerror(true)
 }

}
const handleClear=()=>{
   setName('')
   setEmail('')
   setPassword('')
}

const handleSubmitForm=(e:React.FormEvent<HTMLFormElement>):void=>{
e.preventDefault();
handleSignUp()
handleClear()
handleInputEmpty()
console.log('Nome:', name);
console.log('Email:', email);
console.log('Senha:', password); 
}

const handleChangeName=(e:React.ChangeEvent<HTMLInputElement>)=>{
setName(e.target.value)
console.log('Nome:', name);
}
const handleChangeEmail=(e:React.ChangeEvent<HTMLInputElement>)=>{
  setEmail(e.target.value)
  console.log('Email:', email);
}
const handleChangePassword=(e:React.ChangeEvent<HTMLInputElement>)=>{
  setPassword(e.target.value)
  console.log('Senha:', password);
}
 
  return (
    <div>  
       <div className='containair-btn-modal'>
         <Link className='link-sign'  onClick={handleModal} to=''>Clique aqui para registar-se</Link>
       </div>
         {showHide?
        <div className='container-modal'>
         <div className=''> 
         <div className='modal'>
         <button className='btn-modal-close' onClick={handleModal}>x</button>
           <h1 className='title-signup'>Regista-se</h1> 
           <div>

              <form onSubmit={handleSubmitForm} >
                <div>
                 <div className='label'>
                    <label  htmlFor="name">Nome:</label>
                 </div>
                 <div>
                    <input className='input' type="text" value={name} name='name'
                     onChange={handleChangeName}
                     placeholder='Degite o seu nome'/>
                     {emptyInput?<p  className='erro'>Preencha os espacos vazios</p>:null}
                 </div>
                 <div className='label'>
                    <label htmlFor="email">Email:</label>
                 </div>
                 <div>
                    <input className='input' type="email" value={email} name='email'
                     onChange={handleChangeEmail}
                     placeholder='Degite o seu email'/>
                     {emptyInput?<p  className='erro'>Preencha os espacos vazios</p>:null}
                 </div>
                 <div className='label'>
                    <label htmlFor="password">Senha:</label>
                 </div>
                 <div>
                    <input className='input' type="password" value={password} name='password'
                     onChange={handleChangePassword} 
                      placeholder='Degite a sua senha'/>
                     {emptyInput?<p  className='erro'>Preencha os espacos vazios</p>:null}
                 </div>
                 <div className='container-checkbox'>
                     <input type="checkbox"  className='input-checkbox' required/>
                     <p>  Aceita nossos termos</p>
                  </div>
                  {error?<p className='erro'>
                     <FontAwesomeIcon icon={faXmarkSquare} />
                      Nao foi possivel cadastrar, tente outro email</p>:null}
                  <div>
                     <button className='btn' type='submit' >Enviar</button>
                  </div>
                  <div className='text-regist'>
                     <p>Ja tem conta ? </p> <Link to='/SignIn'>Entrar</Link>
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
