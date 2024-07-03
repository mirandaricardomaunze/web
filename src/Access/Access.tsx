import React, {  useEffect, useState } from 'react'


const Access = () => {
const [access,setAccess]=useState<number>(0)

useEffect(()=>{
    const params=window
    console.log(params);
    if ( params) {
        setAccess(access)
    }

},[access])


  return (
    <div>
       <p style={{color:'white'}}>Acessos:{access}</p>
    </div>
  )
}

export default Access
