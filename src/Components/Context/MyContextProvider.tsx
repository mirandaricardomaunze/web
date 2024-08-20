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
errorConnectServer:boolean
setErrorConnectServer:React.Dispatch<boolean>
views:number;
setViews:React.Dispatch<number>
allUsers:number
setAllUsers:React.Dispatch<number>
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
  errorConnectServer:boolean
  setErrorConnectServer:React.Dispatch<boolean>
  user: User | null;
  views:number;
  setViews:React.Dispatch<number>
  allUsers:number
  setAllUsers:React.Dispatch<number>
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
const [allUsers,setAllUsers]=useState<number>(0)
const [views,setViews]=useState<number>(0)
const [errorConnectServer,setErrorConnectServer]=useState<boolean>(false)


useEffect(()=>{
  const fetchAllNumberUsers=async()=>{
    const Url='http://localhost:4000/countUsers'
    try {
      const response=await axios.post(Url)
    if (response) {
      console.log('Conexao com servidor estabelecida');
      setAllUsers(response.data.number)
    }
    } catch (error) {
    if (error) {
      console.log('Falhou a conexao');
      setAllUsers(0)
    }  
    }
  }
  fetchAllNumberUsers()
})

useEffect(()=>{
  
const fetchViews=async()=>{
  const URL='http://localhost:4000/views'
   try {
  
   const visited:string|null=localStorage.getItem('Visit')
    if (!visited) {
      const response=await axios.post(URL)
      const data= response.data.count.count
      setViews(data)
      console.log('Conectado com sucesso');
      console.log(response.data);
      localStorage.setItem('Visit','True')
    }
   } catch (error) {
    if (error) {
      console.log('Conexao falhou');
    }
   }
}
fetchViews()

const removeItemInterval=()=>{
  const getItem=localStorage.getItem('Visit')
  if (getItem!=='') {
    localStorage.removeItem('Visit')
  }
}

setTimeout(removeItemInterval,10000)

})
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
    if (error) {
      setErrorConnectServer(true)
    }
    console.log(`Erro ocorrido:  ${error}`);
    console.log( 'Nao foi possivel a conexao')

    const errMsg=error.response?.data.message
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
      {
      errorConnectServer,
      setErrorConnectServer,  
      user,
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
      setSuccessServer,
      allUsers,
      setAllUsers,
      views,
      setViews
      }} >
        {children}
    </AuthContext.Provider>  
  )
}
export default MyContextProvider
export  const useAuthContext=()=> useContext(AuthContext)
 
