import axios, {  AxiosResponse } from 'axios'
import './ResetPassword.css'
import React, { useState } from 'react'

interface Email{
    email:string
}
const ResetPassword = () => {
const [email,setEmail]=useState<string>('')
 
const handleChangeEmail=(e:React.ChangeEvent<HTMLInputElement>)=>{
   setEmail(e.target.value)
   console.log(`Email:  ${email}`); 
}

const handleResetPassword=async()=>{
  try {
    const Base_Url:string=''
    const response:AxiosResponse<Email>=await axios.post<Email>(Base_Url,{email}) 
    if (response) {
      
    } else {
     
    }
  } catch (error) {
    
  }
} 
const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    handleResetPassword()
    setEmail('')
}
   

  return (
    <div className='container-reset'>
       <div className='form-reset'>
           <h1 className='title-reset'>Redefinir a senha</h1>
           <form  onSubmit={handleSubmit}>
               <div className='label'>
                  <label  htmlFor="email">Email</label>
               </div>
               <div>
                  <input id='email' type="email" className='input'
                  name='email'
                  value={email}
                  onChange={handleChangeEmail}
                  placeholder='Degite o seu email'/>
               </div>
               <div>
                  <button className='btn'>Redefinir</button>
               </div>
           </form>
       </div>
    </div>
  )
}

export default ResetPassword
