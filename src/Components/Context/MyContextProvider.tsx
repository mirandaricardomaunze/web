import axios, { AxiosResponse } from "axios";
import React, { useContext, useState } from "react";
import { createContext } from "react";
import { Navigate } from "react-router-dom";




interface Credentials{
  name:string
  email:string|null
  password:string|null
}
interface User{
  id:number
  name:string
  email:string
  password:string 
}

interface AuthContextType{
user:User|null
setUser:React.Dispatch<User|null>
inputEmptyError:boolean
setInputEmptyError:React.Dispatch<boolean>
errorCredentials:boolean
setErrorCredentials:React.Dispatch<boolean>
token:boolean
setToken:React.Dispatch<boolean>
login:({name,email,password}:Credentials)=>Promise<void>
logout:()=>void
}

const AuthContext=createContext<{
  user: User | null;
  setUser:React.Dispatch<User|null>
  inputEmptyError:boolean
  setInputEmptyError:React.Dispatch<boolean>
  errorCredentials:boolean
  setErrorCredentials:React.Dispatch<boolean>
  setToken:React.Dispatch<boolean>
  token:boolean
  login: ({name,email, password}:Credentials) => Promise<void>;
  logout:()=>void;
}>({} as AuthContextType);

const MyContextProvider = ({children}:any) =>{


const [user, setUser] = useState<User | null>(null);
const [token,setToken]=useState<boolean>(false)
const [errorCredentials,setErrorCredentials]=useState<boolean>(false)
const [inputEmptyError,setInputEmptyError]=useState<boolean>(false)

const login=async({name,email, password}:Credentials)=>{
   try {
     const Base_Url:string='http://localhost:4000/login/login'
     const response:AxiosResponse=await axios.post<User>(Base_Url,{name,email,password})
     const result= response.data
     console.log(result);
     const jwtToken= response.data.token
    if (response) {
        <Navigate to='/'/>
        console.log( `Entrou com sucesso, token gerado: ${jwtToken}`);
        localStorage.setItem('Token',jwtToken)
        const itemToken=localStorage.getItem('Token')
        if (itemToken) {
          setToken(true)
        }
       
        setErrorCredentials(false)
        localStorage.setItem('Nome',name)
     }
    
}catch (error) {  
    console.log(`Erro ocorrido:  ${error}`);
    console.log( 'Nao foi possivel a conexao')
    if (error) {
      setErrorCredentials(true)
    }
     throw error
   }
}

const logout=()=>{
localStorage.removeItem('Token')
  setUser(null)
  setToken(false)
  return <Navigate to='/SignIn'/>
   
}


  return (
    <AuthContext.Provider value={
      {user,
      setUser,
      token,
      setToken,
      login,
      logout,
      errorCredentials,
      setErrorCredentials,
      setInputEmptyError,
      inputEmptyError
      }} >
        {children}
    </AuthContext.Provider>

    
  )
}
export default MyContextProvider
export  const useAuthContext=()=> useContext(AuthContext)
 
