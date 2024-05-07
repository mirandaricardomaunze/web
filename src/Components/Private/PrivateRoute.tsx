import  { ReactNode} from 'react'
import './PrivateRoute.css'
import { Link } from 'react-router-dom'

interface PrivateProps{
    children:ReactNode
}


const PrivateRoute = ({children}:PrivateProps):any => {

const token =localStorage.getItem('Token')
console.log(token);

   if (token) {
    return children;
   }else if(!token){
    return (<div className='container-private'>
           <div>
              <h1> Voce precisa fazer login primeiro</h1>
              <div className='container-link'>
                 <Link className='link' to='/SignIn'>Entrar</Link>
              </div>
           </div>
    </div>)
   }
  
}

export default PrivateRoute




