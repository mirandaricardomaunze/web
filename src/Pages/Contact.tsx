import React, {  useEffect, useState } from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCheck, faEnvelope,  faMapMarker, faMobile } from '@fortawesome/free-solid-svg-icons'
import axios, { AxiosResponse } from 'axios'
import AOS from 'aos';
import 'aos/dist/aos.css';


interface Client{
  name:string
  email:string
  subject:string
  message:any
}

interface Visit{
  id:number
  icon:React.JSX.Element
  title:string
  text:string
}

const Contact = ()=> {

  const visit:Visit[]=[
  {id:1,icon:<FontAwesomeIcon icon={faMapMarker}/>,title:'Escritório',text:'Av 25 de Setembro'},
    {id:2,icon:<FontAwesomeIcon icon={faEnvelope}/>,title:'Email',text:'mirandamaunze122@gmail.com'},
    {id:2,icon:<FontAwesomeIcon icon={faMobile}/>,title:'Telefone',text:'+258847750120'}
  ]
  




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
                Se você tem alguma pergunta, precisa de mais informações ou deseja discutir 
                um projeto, entre em contato conosco. Nossa equipe está pronta para oferecer
                suporte personalizado e soluções sob medida para suas necessidades.
             </p>
            </div>
          </div>
          <div className='container-contact-bg'>
          <div className='container-contact'>
         <div className='contact'>
             <div className='form-contact'
              data-aos="fade-up" data-aos-anchor-placement="top-bottom"
             >
                <form action="" onSubmit={handleSubmit}
                 data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                >
                   <div>
                     <label className='label'  htmlFor="name" >Nome:</label>
                   </div>
                   <div>
                      <input className='input-contact' type="text" name='name' id='name'
                       value={name}  onChange={handleChangeName}  required
                       placeholder='Degite o nome' />
                      {emptyInput? <span className='erro'>Preecha os espacos vazios</span>:null}
                   </div>
                   <div>
                     <label className='label' htmlFor="email">Email:</label>
                   </div>
                   <div>
                      <input className='input-contact' type="text" name='email' id='email'
                      value={email}  onChange={handleChangeEmail}  required
                       placeholder='Degite o email' />
                        {emptyInput? <p className='erro'>Preecha os espacos vazios</p>:null}
                        {errorRegexEmail?<p className='erro'>{errorEmail}</p>:null}
                   </div>
                   <div>
                     <label className='label' htmlFor="subject" >Assunto:</label>
                   </div>
                   <div>
                      <textarea   name="subject" id="subject" 
                      required
                      value={subject}  onChange={handleChangeSubject}
                      placeholder='Escreva o assunto' ></textarea>
                       {emptyInput? <p  className='erro'>Preecha os espacos vazios</p>:null}
                   </div>
                     <span className='erro'>{erro}</span>
                     <span className='success-msg' >{serverSuccess}
                       {serverSuccess?.length>0 && <FontAwesomeIcon className='icon-check' icon={faCheck}/>}
                     </span>
                     <span className='erro'>
                       {errorServerConnect&& errorConnect}
                     </span>
                    <div className='container-check'>
                      <input id='email' type="checkbox" className="input-checkbox" required /> 
                      <p>Aceita os nossos termos</p>
                    </div>
                    <div className='cont-btn-contact'>
                       <button className='btn-contact'
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

        </div>
       </div>
      </div>
        <div className='container-contact-card'>
             {
              visit.map((card)=>(
                <div key={card.id} className="card-datails"
                 data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                >
                  <span className="icon-datails-card"
                   data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                  >
                   {card.icon}
                  </span>
                  <h1 className="title-datails"
                  data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                  >
                    {card.title}
                  </h1>
                  <p className="text-datails-card"
                  data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                  >
                    {card.text}
                  </p>
                </div>
              ))
             }
         </div>
    </div>
  )
}

export default Contact
