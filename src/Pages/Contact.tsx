import React, {  useEffect, useState } from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCheck, faEnvelope, faMobile } from '@fortawesome/free-solid-svg-icons'
import axios, { AxiosResponse } from 'axios'
import AOS from 'aos';
import 'aos/dist/aos.css';


interface Client{
  name:string
  email:string
  subject:string
  message:any
}


const Contact = () => {
  useEffect(()=>{
    AOS.init({ duration: 1000 });
  })



const[name,setName]=useState<string>('')
const[email,setEmail]=useState<string>('')
const [subject,setSubject]=useState<string>('')
const [erro,setEerror]=useState<string>('')
const [serverSuccess,setServerSuccess]=useState<string>('')
const [emptyInput,setEmptyInput]=useState<boolean>(false)
const [errorRegexEmail,setErrorRegexEmail]=useState<boolean>(false)
const [errorServerConnect,SetErrorServerConnect]=useState<boolean>(false)


useEffect(()=>{ 
  document.title='Pagina de contacto'
})


const handleTimeout=()=>{
  if (emptyInput===true) {
     setEmptyInput(false)
  }
  if (erro!=='') {
    setEerror('')
  }
  if (serverSuccess!=='') {
     setServerSuccess('')
  }
  if (errorServerConnect===true) {
    SetErrorServerConnect(false)
  }
}

useEffect(()=>{
  const timeout:number=5000
  setTimeout(
    handleTimeout, timeout);
})

const errorConnect='Desculpa, ocorreu problema com servidor';
const errorEmail='Deve ser email valido'
useEffect(()=>{
  const emailRegex:RegExp=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email) && email.length>0 ) {
    setErrorRegexEmail(true)
} else {
  setErrorRegexEmail(false)
}
},[email])

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
  if (subject.length>0) {
     console.log('esta preechido'); 
     setEmptyInput(false)
  }else{
     console.log('nao preechido');
     setEmptyInput(true)  
  }

}


const handleChangeName=(e:React.ChangeEvent<HTMLInputElement>)=>{
  setName(e.target.value)

}

const handleChangeEmail=(e:React.ChangeEvent<HTMLInputElement>)=>{
  setEmail(e.target.value)
 
}

const handleChangeSubject=(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
  setSubject(e.target.value)
 
}
const clearAllInput=()=>{
  setName('')
  setEmail('')
  setSubject('')
}

const handleSendingSubject=async()=>{
 try {
  const BASE_URL:string='http://localhost:4000/subject'
  const response:AxiosResponse<Client>=await axios.post<Client>(BASE_URL,{name,email,subject})
  if (response) {
     const server=response?.data.message
     JSON.stringify(server)
     setServerSuccess(server)
    if (email?.length>0 && name?.length>0 && setSubject?.length>0) {
      setEerror('')
    }
    console.log('Mensagem enviada com sucesso'); 
  }
 } catch (error:any) {
  const errorServer=error.response?.data.message
  JSON.stringify(errorServer)
  setEerror(errorServer)
  console.log(`Ocorreu falha na conexao com servidor: ${error}`);
  SetErrorServerConnect(true)
 }
}

const handleSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
   e.preventDefault();
   clearAllInput()
   handleSendingSubject()
   inputEmpty()
   console.log(`Nome: ${name}`);
   console.log(`Email: ${email}`);
   console.log(`Assunto: ${subject}`); 
}

  return (
    <div className='container-contact-main'>
          <div className='container-contact-text'>
            <h1 className='title-contact'
              data-aos="fade-up" data-aos-anchor-placement="top-bottom"
            >Entre em Contato Conosco</h1>
            <div className='text-contact-text'>
              <p className=''
                data-aos="fade-up" data-aos-anchor-placement="top-bottom"
              >
                Estamos aqui para ajudar você a transformar suas ideias em realidade.
                Se você tem alguma pergunta, precisa de mais informações ou deseja discutir 
                um projeto, entre em contato conosco. Nossa equipe está pronta para oferecer
                suporte personalizado e soluções sob medida para suas necessidades.
             </p>
            </div>
          </div>
          <div className='container-contact-bg'>
          <div className='container-contact'>
         <div className='contact'>
          <div className='cont-text-form'>
             <h2 className='title-cont'
               data-aos="fade-up" data-aos-anchor-placement="top-bottom"
             >Formulario de contato</h2>
             <p className='text-contact'
               data-aos="fade-up" data-aos-anchor-placement="top-bottom"
             >Para sua conveniência, preencha o formulário abaixo e entraremos em contato com você em breve:</p>
          </div>
             <div className='form-contact'
              data-aos="fade-up" data-aos-anchor-placement="top-bottom"
             >
                <h1 className='title-cont'
                  data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                >Contacta-nos </h1>
                <form action="" onSubmit={handleSubmit}
                 data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                >
                   <div>
                     <label htmlFor="name" className='text-contact'>Nome:</label>
                   </div>
                   <div>
                      <input className='input-contact' type="text" name='name' id='name'
                       value={name}  onChange={handleChangeName}
                       placeholder='Degite o nome' />
                      {emptyInput? <p className='erro'>Preecha os espacos vazios</p>:null}
                   </div>
                   <div>
                     <label htmlFor="email" className='text-contact'>Email:</label>
                   </div>
                   <div>
                      <input className='input-contact' type="text" name='email' id='email'
                      value={email}  onChange={handleChangeEmail}
                       placeholder='Degite o email' />
                        {emptyInput? <p  className='erro'>Preecha os espacos vazios</p>:null}
                        {errorRegexEmail?<p className='erro'>{errorEmail}</p>:null}
                   </div>
                   <div>
                     <label htmlFor="subject" className='text-contact'>Assunto:</label>
                   </div>
                   <div>
                      <textarea className='input-contact textarea'  name="subject" id="subject" 
                      value={subject}  onChange={handleChangeSubject}
                      placeholder='Escreva o assunto' ></textarea>
                       {emptyInput? <p  className='erro'>Preecha os espacos vazios</p>:null}
                   </div>
                     <p className='erro'>{erro}</p>
                     <p className='success-msg' >{serverSuccess}
                       {serverSuccess?.length>0 && <FontAwesomeIcon className='icon-check' icon={faCheck}/>}
                     </p>
                     <p className='erro'>
                       {errorServerConnect&& errorConnect}
                     </p>
                    <div className='cont-btn-contact'>
                       <button className='btn'
                       data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                       >
                         Enviar
                       </button>
                    </div>
                </form>
             </div>
          </div>
          <div className='contact' 
            data-aos="fade-up" data-aos-anchor-placement="top-bottom"
          >
            <h2 className='title-cont'
             data-aos="fade-up" data-aos-anchor-placement="top-bottom"
            >
              Informações de Contato
            </h2>
            <p className='text-contact ' id='text-contact'>
              <FontAwesomeIcon icon={faMobile}/>
              <b> Telefone:</b>  847750120</p>
            <p className='text-contact' id='text-contact'>
              <FontAwesomeIcon icon={faEnvelope}/>
              <b>  Email:</b>  mirandamaunze@122gmail.com
            </p>
          </div>
          </div>
          </div>
      <div className='container-visit-contact'
       data-aos="fade-up" data-aos-anchor-placement="top-bottom"
      >  
       <div className='visit-contact'
        data-aos="fade-up" data-aos-anchor-placement="top-bottom"
       >
          <h2 className='title-visit'
            data-aos="fade-up" data-aos-anchor-placement="top-bottom"
          >Visite-nos</h2>
          <p className='text-contact'
             data-aos="fade-up" data-aos-anchor-placement="top-bottom"
          >
            Se preferir um contato pessoal, sinta-se à vontade para nos visitar em nosso escritório.
            Estamos ansiosos para conhecê-lo e discutir 
            como podemos ajudar a impulsionar sua presença online
          </p>
          <p className='text-contact'
            data-aos="fade-up" data-aos-anchor-placement="top-bottom"
          >
            Não hesite em nos contatar. Estamos aqui para ajudar você a alcançar seus objetivos online.</p>
        </div>
        </div>
    </div>
  )
}

export default Contact
