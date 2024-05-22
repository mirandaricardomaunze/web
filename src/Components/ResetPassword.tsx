import axios, {  AxiosResponse } from 'axios'
import './ResetPassword.css'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

interface Email{
    email:string
}
const ResetPassword = () => {
const [email,setEmail]=useState<string>('')
const [sentMsg,setSentMsg]=useState<boolean>(false)
const [inputEmpty,setEmptyInput]=useState<boolean>(false)
const [error,setEerror]=useState<boolean>(false)
const [regex,setRegex]=useState<boolean>(false)

useEffect(()=>{
   document.title='Pagina de redefinir a senha'
})

const sent:string='O email foi enviado com sucesso'
const notSent:string='Nao foi possivel enviar'
const notValid:string='O email deve ser valido'

useEffect(()=>{
   const emailRegex:RegExp=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (!emailRegex.test(email) && email.length>0) {
      setRegex(true)
   }else{
      setRegex(false) 
   }
 },[email])


const handleTimeout=()=>{
   if (sentMsg===true) {
      setSentMsg(false)
   }
   if (inputEmpty===true) {
      setEmptyInput(false)
   }
}
useEffect(()=>{
   const timeout:number=4000
   setTimeout(handleTimeout, timeout);
})

const empty:string='Preencha os espacos vazios'
const  handleValidateInput=()=>{
   console.log(' Nao preenchido');
   if (email.trim()==='') {
      console.log(' Nao preenchido');
      setEmptyInput(true)
   }else{
      setEmptyInput(false)
   }
}

const handleChangeEmail=(e:React.ChangeEvent<HTMLInputElement>)=>{
   setEmail(e.target.value)
   console.log(`Email:  ${email}`); 
}

const handleResetPassword=async()=>{
  try {
    const Base_Url:string='http://localhost:4000/reset/reset'
    const response:AxiosResponse<Email>=await axios.post<Email>(Base_Url,{email}) 
    if (response) {

       if (email.length>0) {
         setSentMsg(true)
       }else{
        setEerror(false) 
       }

      console.log('Conectado com sucesso');
    } 
  } catch (error) {
   setSentMsg(false)
   console.log( `Nao foi possivel , Erro: ${error}`); 
  }
} 
const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    handleValidateInput()
    handleResetPassword()
    setEmail('')
}


  return (
    <div className='container-reset'>
       <div className='form-reset'>
           <h1 className='title-reset'>Redefinir </h1>
           <form  onSubmit={handleSubmit}>
               <div className='label'>
                  <label  htmlFor="email">Email: </label>
               </div>
               <div>
                  <input id='email' type="email" className='input'
                  name='email'
                  value={email}
                  onChange={handleChangeEmail}
                  placeholder='Degite o seu email'/>
               </div>
                {inputEmpty?<p className='erro'>{empty}</p>:null}
                {sentMsg?<p className='success'>{sent} 
                <FontAwesomeIcon className='check' icon={faCheck}/></p>:null}
                {error?<p className='erro'>{notSent}</p>:null}
                {regex?<p className='erro'>{notValid}</p>:null}
               <div>
                  <button className='btn'>Redefinir</button>
               </div>
           </form>
       </div>
    </div>
  )
}

export default ResetPassword
