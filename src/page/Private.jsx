import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Private() {
    const nav = useNavigate()

      async function logout(){

        const data = await axios.get("http://localhost:3001/logout",{
            headers:{token:sessionStorage.getItem("token")}
        })
        debugger
        if(data.status===200){
            alert(data.data.message)
        }else {
            alert(data.data.message)
            nav("/")
        }
        }

        useEffect(()=>{
            logout()    
        },[])   


  return (
    <div>
        <h1>Private</h1>

        <button onClick={()=>{sessionStorage.clear() 
            nav("/")}}>logout</button>
    </div>
  )
}

export default Private