import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './SignIn.css'
import { useAuthContext } from '../Context/MyContextProvider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCheck, faUser, faX } from '@fortawesome/free-solid-svg-icons'





const SignIn = () => {

const {
   login,
   setErrorServer,
   errorServer,
   successServer,
   setSuccessServer
   }=useAuthContext()

const [showHideModal,setShowHideModal]=useState<boolean>(false)
const [name,setName]=useState<string>('')
const [email,setEmail]=useState<string>('')
const [password,setPassword]=useState<string>('')
const [emptyInputName,setEmptyInputName]=useState<boolean>(false)
const [emptyInputEmail,setEmptyInputEmail]=useState<boolean>(false)
const [emptyInputPass,setEmptyInputPass]=useState<boolean>(false)
const[errorRegexEmail,setErrorRegexEmail]=useState<boolean>(false)
const[errorRegexPassword,setErrorRegexPassword]=useState<boolean>(false)


useEffect(()=>{ 
   document.title='Pagina de login'
})


const  errorPassword='A senha deve pelo menos ter 8 caracteres, incluindo letras maisuculas,minusculas e numeros';
const errorEmail='Email deve ser valido';


useEffect(()=>{
   const emailRegex:RegExp=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (!emailRegex.test(email) && email.length>0) {
      setErrorRegexEmail(true)
   }else{
      setErrorRegexEmail(false) 
   }
   
const passwordRegex:RegExp=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
   if (!passwordRegex.test(password) && password.length>0) {   
     setErrorRegexPassword(true)
   }else{
      setErrorRegexPassword(false)
   }
},[email,password])

const handleEmptyInput=()=>{
   if (email.length>0 && email) {
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
      setEmptyInputPass(false)
   }else{
      console.log('nao preechido');
      setEmptyInputPass(true)  
   }  
 }

 const handleTimeoutClear=()=>{
   
   if (emptyInputName===true) {
      setEmptyInputName(false)
   }
   if (emptyInputEmail===true) {
      setEmptyInputEmail(false)
   }
   if (emptyInputPass===true) {
      setEmptyInputPass(false)
   }

 if (errorServer !=='') {
   setErrorServer('')
 }
 if (successServer!=='') {
   setSuccessServer('')
 }
}

useEffect(()=>{
  const timeout=4000
 setTimeout(handleTimeoutClear, timeout);
})


const handleModal=()=>{
       setShowHideModal(!showHideModal)
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
   console.log('Password:', password);
   
}
const handleClear=()=>{
   setName('');
   setEmail('');
   setPassword('');
}

const handleLogin=async():Promise<void>=>{
   handleClear();
  
     try {
      await login({name,email,password})
     } catch (error) {
      console.log(`Erro de conexao ${error}`);
     }
}


const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
e.preventDefault();
handleLogin()
handleEmptyInput()
console.log('Nome:', name);
console.log('Email:', email);
console.log('Senha:', password);

} 

  return (
    <div>
       <div className='container-btn-modal'>
           <Link className='link-signIn'  onClick={handleModal} to=''>
            <FontAwesomeIcon className='icon-modal'  icon={faUser}/> 
            Clica aqui para entrar
           </Link>
       </div>
         {showHideModal?
        <div className='container-modal'>
         <div className=''> 
         <div className='modal'>
         <button className='btn-modal-close' onClick={handleModal}>x</button>
           <h1 className='title-signIn'>Entrar</h1> 
           <div className=''>
              <form  onSubmit={handleSubmit}>
                <div>
                 <div className='label'>
                    <label  htmlFor="name">Nome:</label>
                 </div>
                 <div>
                    <input className='input' id='name' name='name' value={name}
                     onChange={handleChangeName}
                    type="text" placeholder='Degite o seu nome'/>
                    {emptyInputName? <p className='erro'>Preencha os espacos vazios</p>:null}
                 </div>
                 <div className='label'>
                    <label htmlFor="email">Email:</label>
                 </div>
                 <div>
                    <input className='input' id='email' value={email} type="email" name='email'
                     onChange={handleChangeEmail}
                    placeholder='Degite o seu email'/>
                    {emptyInputEmail? <p className='erro'>Preencha os espacos vazios</p>:null}
                    {errorRegexEmail?<p className='erro'>{errorEmail}</p>:null}
                 </div>
                 <div className='label'>
                    <label htmlFor="password">Senha:</label>
                 </div>
                 <div>
                    <input className='input' id='password' value={password} type="password"  name='email'
                      onChange={handleChangePassword}
                    placeholder='Degite a sua senha'/>
                    {emptyInputPass? <p className='erro'>Preencha os espacos vazios</p>:null}
                    {errorRegexPassword?<p className='erro-pass'>{errorPassword} </p>:null}
                 </div>
                  <div className='container-checkbox'>
                     <input type="checkbox"  className='input-checkbox' required/>
                     <p>  Aceita nossos termos</p>
                  </div>  
                     <p className='success-login'>{successServer} 
                       {successServer.length>0 && <FontAwesomeIcon className='icon-success'  icon={faCheck}/>}
                     </p>
                     <p className='erro'>{errorServer}
                        {errorServer.length>0 && <FontAwesomeIcon className='icon-success' icon={faX}/>}
                     </p>
                  <div>
                     <button type='submit'  className='btn'  >Enviar</button>
                  </div>
                  <div className='text-regist'>
                     <p className='redirect-link'>Ainda nao tem conta ? </p>
                     <Link className='link-redirect' to='/SignUp' > Registar</Link>
                  </div>
                  <div className='text-regist'>
                     <p className='redirect-link'>Esqueceu a senha ?  </p>
                     <Link className='link-redirect'  to='/ResetPassword' > Recuperar</Link>
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
