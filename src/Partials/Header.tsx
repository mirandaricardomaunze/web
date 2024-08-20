import React, { useEffect, useState } from 'react'
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
import { faClose, faNavicon, faSignOut } from '@fortawesome/free-solid-svg-icons'
import PrivateRoute from '../Components/Private/PrivateRoute'
import ResetPassword from '../Components/ResetPassword'
import NewPassword from '../Components/NewPassword'
import Dashboard from '../Components/Dashboard/Dashboard'



const Header = () => {
const [togle,setTogle]=useState<boolean>(true)
const [user,setUser]=useState<string>()

const {token,nameStorage,setNameStorage, logout}=useAuthContext()

useEffect(()=>{
  const checkNameUserLoged=()=>{
    const nameStorages=localStorage.getItem('Name')
  if (nameStorages) {
    setNameStorage(true)
  }else{
    setNameStorage(false)
  }
  const nameFirstLetter=nameStorages?.charAt(0)
  if (nameFirstLetter) {
    setUser(nameFirstLetter)
  }
  }
checkNameUserLoged()
},[nameStorage,setNameStorage])


const handleShowMenu=()=>{
setTogle(!togle)
}
  return (
    <div className='container-nav'>
       <div className='container-brand' >
          <Link   className='nav-brand'  to='/' ><span className='brand'>Soft</span>Moz</Link>
           <button className='btn-toggle'
           onClick={handleShowMenu}
           >
            {togle? <FontAwesomeIcon className='icon-toggle' icon={faNavicon}/>:
            <FontAwesomeIcon className='icon-toggle' icon={faClose}/>}
          </button>
       </div>
        <nav className='nav-bar'>
          {togle &&  <div className={`${{togle}?'':'animate'} nav-bar`} id='nav'> 
            <NavLink  className='nav-link'  to='/' >Inicio</NavLink>
            <NavLink className='nav-link' to='/Services'>Serviços</NavLink>
            <NavLink className='nav-link' to='/Contact'>Contato</NavLink>
            <NavLink className='nav-link' to='/About'>Sobre</NavLink>
            <NavLink className='nav-link' to='/SignUp'>Registro</NavLink> 
            <NavLink className='nav-link' to='/Dashboard'>Painel</NavLink>
           {token? <Link to='/SignIn' className='link-logout' onClick={logout} >Sair <FontAwesomeIcon icon={faSignOut} /></Link>:
           <NavLink  className='nav-link' to='/SignIn'>Entrar</NavLink>}
           {nameStorage && <Link to='' className='user-icon' title={user}>{user} </Link>}
           </div>         }
         <Routes>
            <Route path='/'  Component={Home} />
            <Route path='/Services' Component={Services}/>
            <Route path='/Contact'element={ <Contact/> }/>
            <Route path='/About' Component={About}/>
            <Route path='/*'Component={NotFound}/>
            <Route path='/SignUp'Component={SignUp}/>
            <Route path='/SignIn'Component={SignIn}/>
            <Route path='/Dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
            <Route path='/ResetPassword'Component={ResetPassword}/>
            <Route path='/NewPassword'Component={NewPassword}/>
         </Routes> 
    </nav>
    </div>
  )
}

export default Header
