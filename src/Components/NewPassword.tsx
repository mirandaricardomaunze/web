import React, { useEffect, useState } from 'react'
import './NewPassword.css'
import { useParams } from 'react-router-dom'
import axios, { AxiosResponse } from 'axios'

interface Password{
  password:string
}

const NewPassword = () => {
const [password,setPassword]=useState<string>('')
const {token}=useParams();
const [sentMsg,setSentMsg]=useState<boolean>(false)
const [errorSent,setErrorSent]=useState<boolean>(false)
const [input,setInput]=useState<boolean>(false)
const [erroMsg,setErroMsgPass]=useState<boolean>(false)

useEffect(()=>{
  document.title='Pagina de nova senha'
})


const passwordLength:string='A senha deve pelo menos ter 8 caracteres, incluindo letras maisuculas,minusculas e numeros';
useEffect(()=>{
  const passwordRegex:RegExp=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
   if (!passwordRegex.test(password) && password.length>0) {   
     setErroMsgPass(true)
   }else{
      setErroMsgPass(false)
   }
},[password])

const sent:string='O password foi atualizado com sucesso'
const sentFailed:string='Nao foi possivel atualizar'


const handleTimeout=()=>{
   if (sentMsg===true) {
      setSentMsg(false)
   }
   if (errorSent===true) {
      setErrorSent(false)
   }
   if (input===true) {
      setInput(false)
   }
}

useEffect(()=>{
   const timeout:number=4000
   setTimeout(handleTimeout, timeout);
})

const handleChangePassword=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setPassword(e.target.value)
        console.log(`Password:  ${password}`); 
     }


const handleUpadatePassword=async()=>{
  try {
  const Base_Url:string=`http://localhost:4000/newPassword/newPassword/${token}`
  const response:AxiosResponse<Password>=await axios.post<Password>(Base_Url,{password}) 
  if (response) {
    setSentMsg(true)
    setErrorSent(false)
     console.log('Conectado com sucesso');
     
  } 
  } catch (error) {
    setSentMsg(false)
    setErrorSent(true)
    console.log( `Nao foi possivel , Erro: ${error}`); 
  }
}


const empty:string='Preencha o espaco vazio'
const handleValidateInput=()=>{
        if (password.trim()===''){
        setInput(true)
        console.log(empty); 
     }
}


const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
     e.preventDefault()
     handleValidateInput()
     handleUpadatePassword() 
     setPassword('')
}


  return (
    <div className='container-new'>
      <div className='form-new'>
          <h1 className='title-new'>Nova senha</h1>
         <form onSubmit={handleSubmit} >
            <div className='label'>
                <label htmlFor="password">Senha:</label>
            </div>
            <div>
                <input className='input' type="password"
                 name='password'
                 value={password}
                 onChange={handleChangePassword}
                 placeholder='Degite a nova senha' />
            </div>
              {sentMsg?<p className='success'>{sent}</p>:null}
              {errorSent?<p className='erro'>{sentFailed}</p>:null}
              {input?<p className='erro'>{empty}</p>:null}
              {erroMsg?<p className='erroLength'>{passwordLength}</p>:null}
            <div>
                <button className='btn'>Atualizar</button>
            </div>
         </form>
      </div>
    </div>
  )
}

export default NewPassword
