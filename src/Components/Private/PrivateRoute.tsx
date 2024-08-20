import  { ReactNode} from 'react'
import './PrivateRoute.css'
import { Navigate } from 'react-router-dom'



interface PrivateProps{
    children:ReactNode
}


const PrivateRoute = ({children}:PrivateProps):any => {
const token =localStorage.getItem('Token')
console.log(token);
if(!token){
  return <Navigate to='/SignIn'/>
}
    if (token) {
         return children;
       }
   
    }
   

export default PrivateRoute




