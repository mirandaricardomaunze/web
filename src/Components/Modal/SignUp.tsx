import React, { useEffect, useState } from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom'
import axios, { AxiosResponse } from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUserPlus } from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos';
import 'aos/dist/aos.css';


interface User{
  name:string
  email:string
  password:string
}


const SignUp = ():React.JSX.Element => {
   useEffect(()=>{
      AOS.init({ duration: 2000 });
    })


const [name,setName]=useState<string>('')
const [email,setEmail]=useState<string>('')
const [password,setPassword]=useState<string>('')
const [emptyInputName,setEmptyInputName]=useState<boolean>(false)
const [emptyInputEmail,setEmptyInputEmail]=useState<boolean>(false)
const [emptyInputPassword,setEmptyInputPassword]=useState<boolean>(false)
const [showHide,setShowHide]=useState<boolean>(false)
const [error,setEerror]=useState<boolean>(false)
const [erroMsg,setErroMsg]=useState<boolean>(false)
const [erroMsgPass,setErroMsgPass]=useState<boolean>(false)
const [errorServer,setErrorServer]=useState<string>('')
const [successServer,setSuccessServer]=useState<string>('')
const [errorConnectServer,setErrorConnectServer]=useState(false)


useEffect(()=>{ 
   document.title='Pagina de registro'
})

const  errorPassword='A senha deve pelo menos ter 8 caracteres, incluindo letras maisuculas,minusculas e numeros';
const errorEmail='Email deve ser valido';
const errorRequest='Desculpa, houve falha ao conectar com servidor !'

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
      setEmptyInputEmail(false)
   }else{
      console.log('nao preechido');
      setEmptyInputEmail(true)  
   }
   if (name.length>0) {
      console.log('esta preechido'); 
      setEmptyInputName(false)
   }else{
      console.log('nao preechido');
      setEmptyInputName(true)  
   }
   if (password.length>0) {
      console.log('esta preechido'); 
      setEmptyInputPassword(false)
   }else{
      console.log('nao preechido');
      setEmptyInputPassword(true)  
   }
}

const clearMsgError=()=>{
  console.log('Mensagem de erro apagado');
  if (error===true) {
   setEerror(false)
  }
  if (emptyInputName===true) {
    setEmptyInputName(false)
  }
  if (emptyInputEmail===true) {
   setEmptyInputEmail(false)
 }
 if (emptyInputEmail===true) {
   setEmptyInputEmail(false)
 }
 if (emptyInputPassword===true) {
   setEmptyInputPassword(false)
 }
 if (errorServer !=='') {
   setErrorServer('')
 }
 if (successServer !=='') {
   setSuccessServer('')
 }
 if (errorConnectServer===true) {
   setErrorConnectServer(false)
 }
}

useEffect(()=>{
const timeout=4000
setTimeout(clearMsgError, timeout);
})


const handleSignUp=async():Promise<void>=>{
const baseUrl:string='http://localhost:4000/register'
 try {
   const response:AxiosResponse = await axios.post<User>(baseUrl,{name,email,password})
if (response) {
   const resJsonSuccess=response?.data.message;
   console.log(`Success: ${resJsonSuccess}`);
   JSON.stringify(resJsonSuccess)
   setSuccessServer(resJsonSuccess)
   setEerror(false) 
 }

 } catch (error:any) {
   if (error) {
      setErrorConnectServer(true)
   }
   const resJson=error.response?.data.message;
    console.log(`Sever error: ${resJson}`);
    JSON.stringify(resJson)
    setErrorServer(resJson)
  console.log(`Ocorreu erro durante o cadastro: ${error}`);
 if(email?.length>0 && password?.length>0 && name?.length>0){
   setEerror(true)
 }else{
   setEerror(false)
 }
  
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
    <div className='container-signup'>  
       <div className='container-btn-modal'
        data-aos="fade-right" data-aos-anchor-placement="top-bottom"
       >
         <Link className='link-sign'  onClick={handleModal} to=''>
            <FontAwesomeIcon className='icon-modal' icon={faUserPlus}/>
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
              <form  onSubmit={handleSubmitForm}>
                
                <div>
                 <div className='label'>
                    <label  htmlFor="name">Nome:</label>
                 </div>
                 <div>
                    <input className='input' type="text"
                     value={name} name='name'
                     onChange={handleChangeName}
                     required
                     placeholder='Degite o seu nome'/>
                     {emptyInputName?<span className='erro'>Preencha os espaços vazios</span>:null}
                    
                 </div>
                 <div className='label'>
                    <label htmlFor="email">Email:</label>
                 </div>
                 <div>
                    <input className='input' type="email" value={email} name='email'
                     onChange={handleChangeEmail}
                     required
                     placeholder='Degite o seu email'/>
                     {emptyInputEmail?<span  className='erro'>Preencha os espaços vazios</span>:null}
                     {erroMsg? <span className='erro'>{errorEmail}</span>:null}
                 </div>
                 <div className='label'>
                    <label htmlFor="password">Senha:</label>
                 </div>
                 <div>
                    <input className='input' type="password" value={password} name='password'
                     onChange={handleChangePassword} 
                     required
                      placeholder='Degite a sua senha'/>
                     {emptyInputPassword?<span className='erro'>Preencha os espaços vazios</span>:null}
                     { erroMsgPass?<span className='erro-pass'> {errorPassword}</span>:null}
                     <br />
                      <span className='success'>{successServer}</span>
                      <span className={errorServer?.length>0? 'erro':''}>{errorServer}</span> 
                      <span className='erro'>
                      {errorConnectServer && errorRequest}
                      </span>
                 </div>
                 <div className='container-checkbox'>
                     <input type="checkbox"  className='input-checkbox' required/>
                     <p>  Aceita nossos termos</p>
                  </div>           
                  <div className='cont-btn-form'>
                     <button className='btn' type='submit' >Enviar</button>
                  </div>
                  <div className='text-regist'>
                     <p className='redirect-link'>Já tem conta ? </p> 
                     <Link className='link-redirect' to='/SignIn'>Entrar</Link>
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
