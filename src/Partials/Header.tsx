import React from 'react'
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
import ResetPassword from '../Components/ResetPassword'
import NewPassword from '../Components/NewPassword'


const Header = () => {

const {token,logout}=useAuthContext()



  return (
    <div>
        <nav className='nav-bar'>
            <Link   className='nav-brand'  to='/' ><span className='brand'>Soft</span>Moz</Link>  
            <NavLink  className='nav-link'  to='/' >Inicio</NavLink>
            <NavLink className='nav-link' to='/Services'>Servicos</NavLink>
            <NavLink className='nav-link' to='/Contact'>Contato</NavLink>
            <NavLink className='nav-link' to='/About'>Sobre</NavLink>
            <NavLink className='nav-link' to='/SignUp'>Registro</NavLink>
           {token? <Link to='/SignIn' className='link-logout' onClick={logout} >Sair <FontAwesomeIcon icon={faSignOut} /></Link>:
           <NavLink  className='nav-link' to='/SignIn'>Entrar</NavLink>}
           {token?<Link to='' className='user-icon'>Bem vindo </Link>:null}
          
          
         <Routes>
            <Route path='/'  Component={Home} />
            <Route path='/Services' Component={Services}/>
            <Route path='/Contact'element={<PrivateRoute> <Contact/> </PrivateRoute>}/>
            <Route path='/About' Component={About}/>
            <Route path='/*'Component={NotFound}/>
            <Route path='/SignUp'Component={SignUp}/>
            <Route path='/SignIn'Component={SignIn}/>
            <Route path='/ResetPassword'Component={ResetPassword}/>
            <Route path='/NewPassword'Component={NewPassword}/>
         </Routes> 
    </nav>
    </div>
  )
}

export default Header
