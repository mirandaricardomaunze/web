import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './SignIn.css'
import { useAuthContext } from '../Context/MyContextProvider'


const SignIn = () => {

   const {login,errorCredentials}=useAuthContext()

   const [showHideModal,setShowHideModal]=useState<boolean>(false)
   const [name,setName]=useState<string>('')
   const [email,setEmail]=useState<string>('')
   const [password,setPassword]=useState<string>('')
   const [emptyInput,setEmptyInput]=useState<boolean>(false)

const inputEmpty=()=>{
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
   inputEmpty()
     try {
      await login({name,email,password})
     } catch (error) {
      console.log(`Erro de conexao ${error}`);
     }
}


const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
e.preventDefault();
handleLogin()
console.log('Nome:', name);
console.log('Email:', email);
console.log('Senha:', password);

} 





  return (
    <div>
       <div className='containair-btn-modal'>
           <Link className='link-signIn'  onClick={handleModal} to=''>Clique aqui para entrar</Link>
       </div>
         {showHideModal?
        <div className='container-modal'>
         <div className=''> 
         <div className='modal'>
         <button className='btn-modal-close' onClick={handleModal}>x</button>
           <h1 className='title-signIn'>Entrar</h1> 
           <div>
              <form onSubmit={handleSubmit}>
                <div>
                 <div className='label'>
                    <label  htmlFor="name">Nome:</label>
                 </div>
                 <div>
                    <input className='input' id='name' name='name' value={name}
                     onChange={handleChangeName}
                    type="text" placeholder='Degite o seu nome'/>
                    {emptyInput? <p className='erro'>Preencha os espacos vazios</p>:null}
                 </div>
                 <div className='label'>
                    <label htmlFor="email">Email:</label>
                 </div>
                 <div>
                    <input className='input' id='email' value={email} type="email" name='email'
                     onChange={handleChangeEmail}
                    placeholder='Degite o seu email'/>
                    {emptyInput? <p className='erro'>Preencha os espacos vazios</p>:null}
                 </div>
                 <div className='label'>
                    <label htmlFor="password">Senha:</label>
                 </div>
                 <div>
                    <input className='input' id='password' value={password} type="password"  name='email'
                      onChange={handleChangePassword}
                    placeholder='Degite a sua senha'/>
                    {emptyInput? <p className='erro'>Preencha os espacos vazios</p>:null}
                 </div>
                  <div className='container-checkbox'>
                     <input type="checkbox"  className='input-checkbox' required/>
                     <p>  Aceita nossos termos</p>
                  </div>
                 {errorCredentials?<p className='erro'>O password ou o email nao estao corretos</p>:null}
                  <div>
                     <button type='submit'  className='btn'  >Enviar</button>
                  </div>
                  <div className='text-regist'>
                     <p>Ainda nao tem conta ? </p> <Link to='/SignUp'>Registar</Link>
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
