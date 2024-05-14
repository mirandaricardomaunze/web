import React, { useEffect, useState } from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom'
import axios, { AxiosResponse } from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUserPlus } from '@fortawesome/free-solid-svg-icons'

interface User{
  name:string
  email:string
  password:string
}


const SignUp = ():React.JSX.Element => {


const [name,setName]=useState<string>('')
const [email,setEmail]=useState<string>('')
const [password,setPassword]=useState<string>('')
const [emptyInput,setEmptyInput]=useState<boolean>(false)
const [showHide,setShowHide]=useState<boolean>(false)
const [error,setEerror]=useState<boolean>(false)
const [erroMsg,setErroMsg]=useState<boolean>(false)
const [erroMsgPass,setErroMsgPass]=useState<boolean>(false)
const [successMsg,setSuccessMsg]=useState<string|null>(null)


useEffect(()=>{ 
   document.title='Pagina de registro'
})

const  errorPassword='A senha deve pelo menos ter 8 caracteres, incluindo letras maisuculas,minusculas e numeros';
const errorEmail='Email deve ser valido';

useEffect(()=>{
   const emailRegex:RegExp=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (!emailRegex.test(email) && email.length>0) {
      setErroMsg(true)
   }else{
      setErroMsg(false) 
   }
   
   const passwordRegex:RegExp=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
   if (!passwordRegex.test(password) && password.length>0) {   
     setErroMsgPass(true)
   }else{
      setErroMsgPass(false)
   }
},[email,password])

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

const clearMsgError=()=>{
  console.log('Mensagem de erro apagado');
  if (error===true) {
   setEerror(false)
  }
}

useEffect(()=>{
const timeout=4000
setTimeout(clearMsgError, timeout);
})


const handleSignUp=async():Promise<void>=>{
const baseUrl:string='http://localhost:4000/register/register'
 try {
   const response:AxiosResponse = await axios.post<User>(baseUrl,{name,email,password})
if (response) {
   console.log(response.data);
   setEerror(false)
   setSuccessMsg('Foi cadastrado com sucesso!')
 }
 } catch (error) {
  console.log(`Ocorreu erro durante o cadastro: ${error}`);
 if(email.length>0 && password.length>0 && name.length>0){
   setEerror(true)
 }else{
   setEerror(false)
 }
  setSuccessMsg(null)
  clearMsgError()
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
         <Link className='link-sign'  onClick={handleModal} to=''>
            <FontAwesomeIcon icon={faUserPlus}/>
            Clique aqui para registar-se
         </Link>
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
                     {erroMsg? <p className='erro'>{errorEmail}</p>:null}
                 </div>
                 <div className='label'>
                    <label htmlFor="password">Senha:</label>
                 </div>
                 <div>
                    <input className='input' type="password" value={password} name='password'
                     onChange={handleChangePassword} 
                      placeholder='Degite a sua senha'/>
                     {emptyInput?<p  className='erro'>Preencha os espacos vazios</p>:null}
                     { erroMsgPass?<p className='erro-pass'> {errorPassword}</p>:null}
                 </div>
                 <div className='container-checkbox'>
                     <input type="checkbox"  className='input-checkbox' required/>
                     <p>  Aceita nossos termos</p>
                  </div>
                  {error?
                  <p className='erro'>
                      Nao foi possivel cadastrar, tente outro email
                  </p>:null}

                       <p>{successMsg}</p>
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
