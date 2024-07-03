import axios, { AxiosResponse } from "axios";
import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { Navigate} from "react-router-dom";




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
token:boolean
setToken:React.Dispatch<boolean>
successServer:string
setSuccessServer:React.Dispatch<string>
errorServer:string
setErrorServer:React.Dispatch<string>
login:({name,email,password}:Credentials)=>Promise<void>
logout:()=>void
nameStorage:boolean
setNameStorage:React.Dispatch<boolean>
}

const AuthContext=createContext<{
  user: User | null;
  setUser:React.Dispatch<User|null>
  inputEmptyError:boolean
  setInputEmptyError:React.Dispatch<boolean>
  setToken:React.Dispatch<boolean>
  token:boolean
  successServer:string
  setSuccessServer:React.Dispatch<string>
  errorServer:string
  setErrorServer:React.Dispatch<string>
  login: ({name,email, password}:Credentials) => Promise<void>;
  logout:()=>void;
  nameStorage:boolean
  setNameStorage:React.Dispatch<boolean>
}>({} as AuthContextType);

const MyContextProvider = ({children}:any) =>{

const [user, setUser] = useState<User | null>(null);
const [token,setToken]=useState<boolean>(false)
const [inputEmptyError,setInputEmptyError]=useState<boolean>(false)
const [nameStorage,setNameStorage]=useState<boolean>(false)
const [errorServer,setErrorServer]=useState<string>('')
const [successServer,setSuccessServer]=useState<string>('')

const login=async({name,email, password}:Credentials)=>{


   try {
     const Base_Url:string='http://localhost:4000/login'
     const response:AxiosResponse=await axios.post<User>(Base_Url,{name,email,password})
     const result= response.data
     console.log(result);
     const jwtToken= response.data.token
    if (response) {
        <Navigate to='/' />

        const success=response.data.message 
         JSON.stringify(success)
         setSuccessServer(success)
        localStorage.setItem('Name',name)
        
        console.log( `Entrou com sucesso, token gerado: ${jwtToken}`);
        localStorage.setItem('Token',jwtToken)
        setToken(true)
        setNameStorage(true)
     }

}catch (error:any) {  
    console.log(`Erro ocorrido:  ${error}`);
    console.log( 'Nao foi possivel a conexao')

    const errMsg=error.response.data.message
    console.log(`Backend error : ${errMsg}`);
       JSON.stringify(errMsg)
      setErrorServer(errMsg)
    
     throw error
   }
}

useEffect(()=>{
const checkNameUserLoged=()=>{
  const getToken=localStorage.getItem('Token')
  if (getToken) {
    setToken(true)
  }else{
    setToken(false)
  }
}
checkNameUserLoged()
},[setToken])

const logout= async()=>{
  localStorage.removeItem('Token')
  setToken(false)
  localStorage.removeItem('Name')
  setNameStorage(false)
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
      setInputEmptyError,
      inputEmptyError,
      nameStorage,
      setNameStorage,
      errorServer,
      setErrorServer,
      successServer,
      setSuccessServer
      }} >
        {children}
    </AuthContext.Provider>  
  )
}
export default MyContextProvider
export  const useAuthContext=()=> useContext(AuthContext)
 
