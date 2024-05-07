import React, {  useEffect, useState } from 'react'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Contact from '../Pages/Contact'
import Services from '../Pages/Services'
import NotFound from '../Pages/NotFound'
import About from '../Pages/About'
import './Header.css'
import SignIn from '../Components/Modal/SignIn'
import SignUp from '../Components/Modal/SignUp'
import { useAuthContext } from '../Components/Context/MyContextProvider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOut } from '@fortawesome/free-solid-svg-icons'
import PrivateRoute from '../Components/Private/PrivateRoute'


const Header = () => {

const {token,logout}=useAuthContext()
const [pageText,setPageText]=useState<string>('Pagina de inicio')
 


  useEffect(()=>{
    document.title=pageText
  },[pageText])

  return (
    <div>
        <nav className='nav-bar'>
            <Link onClick={()=>setPageText('Pagina de inicio')}  className='nav-brand'  to='/' ><span className='brand'>Soft</span>Moz</Link>  
            <NavLink onClick={()=>setPageText('Pagina de inicio')}  className='nav-link'  to='/' >Inicio</NavLink>
            <NavLink onClick={()=>setPageText('Pagina de servicos')} className='nav-link' to='/Services'>Servicos</NavLink>
            <NavLink onClick={()=>setPageText('Pagina de contato')} className='nav-link' to='/Contact'>Contato</NavLink>
            <NavLink onClick={()=>setPageText('Pagina de sobre')} className='nav-link' to='/About'>Sobre</NavLink>
            <NavLink onClick={()=>setPageText('Pagina de Registro')} className='nav-link' to='/SignUp'>Registro</NavLink>
           {token? <Link to='' className='link-logout' onClick={logout} >Sair <FontAwesomeIcon icon={faSignOut} /></Link>:
           <NavLink onClick={()=>setPageText('Pagina de Login')} className='nav-link' to='/SignIn'>Entrar</NavLink>}
          
          
         <Routes>
            <Route path='/'  Component={Home} />
            <Route path='/Services' Component={Services}/>
            <Route path='/Contact'element={<PrivateRoute><Contact/></PrivateRoute>}/>
            <Route path='/About' Component={About}/>
            <Route path='/*'Component={NotFound}/>
            <Route path='/SignUp'Component={SignUp}/>
            <Route path='/SignIn'Component={SignIn}/>
         </Routes> 
    </nav>
    </div>
  )
}

export default Header
