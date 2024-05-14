import React, { useState } from 'react'
import './NewPassword.css'


const NewPassword = () => {
const [password,setPassword]=useState<string>('')


const handleChangePassword=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setPassword(e.target.value)
        console.log(`Password:  ${password}`); 
     }

const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
     e.preventDefault()
     setPassword('')
}




  return (
    <div className='container-new'>
      <div className='form-new'>
          <h1 className='title-new'>Nova senha</h1>
         <form onSubmit={handleSubmit}>
            <div className='label'>
                <label htmlFor="password">Nova senha</label>
            </div>
            <div>
                <input className='input' type="password"
                 name='password'
                 value={password}
                 onChange={handleChangePassword}
                 placeholder='Degite a nova senha' />
            </div>
            <div>
                <button className='btn'>Atualizar</button>
            </div>
         </form>
      </div>
    </div>
  )
}

export default NewPassword
