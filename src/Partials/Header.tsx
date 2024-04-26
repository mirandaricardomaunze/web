import React, {  useEffect, useState } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Contact from '../Pages/Contact'
import Services from '../Pages/Services'
import NotFound from '../Pages/NotFound'
import About from '../Pages/About'
import './Header.css'
import SignUp from '../Components/Modal/SignUp'




const Header = () => {
  const [pageText,setPageText]=useState<string>('Pagina de inicio')
  useEffect(()=>{
    document.title=pageText
  },[pageText])

  return (
    <div>
      
        <nav className='nav-bar'>  
            <NavLink onClick={()=>setPageText('Pagina de inicio')}  className='nav-link'  to='/' >Inicio</NavLink>
            <NavLink onClick={()=>setPageText('Pagina de servicos')} className='nav-link' to='/Services'>Servicos</NavLink>
            <NavLink onClick={()=>setPageText('Pagina de contato')} className='nav-link' to='/Contact'>Contato</NavLink>
            <NavLink onClick={()=>setPageText('Pagina de sobre')} className='nav-link' to='/About'>Sobre</NavLink>
            <div className='container-signup'>
              <SignUp/>
          </div>
         <Routes>
            <Route path='/'  Component={Home} />
            <Route path='/Services' Component={Services}/>
            <Route path='/Contact'Component={Contact}/>
            <Route path='/About' Component={About}/>
            <Route path='/*'Component={NotFound}/>
         </Routes> 
    </nav>
    </div>
  )
}

export default Header
