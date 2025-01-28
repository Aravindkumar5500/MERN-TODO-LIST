import React, { useState,useEffect } from 'react'
import {  useNavigate} from 'react-router-dom'
import axios from 'axios'


function Login() {

    // const [name,setName] = useState('')
    const [email,setEmail]= useState('')
    const [password,setPassword] = useState('')

    let nav = useNavigate() 

    async function loginpage() {

        let data = await axios.post("http://localhost:3001/login",{email:email,password:password})
        if(data.data.status===200) {
    
          sessionStorage.setItem("token",data.data.token)
          alert("Login Successfully")
          nav("/Task")
        }else{
            alert("Login Failed")
            console.log(data.data.message)
            nav("/")
        }
    }

useEffect(()=>{
    
},[])


  return (
    <div>

      


<main class="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
    <section class="flex w-[30rem] flex-col space-y-10">
        <div class="text-center text-4xl font-medium">Log In</div>

        <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input type="text"onChange={(e)=>setEmail(e.target.value)} placeholder="Email " class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"/>
        </div>

        <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Password" class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"/>
        </div>

        <button type="button" onClick={loginpage}class="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400">LOG IN</button>

       
        <p class="text-center text-lg">
            No account?
            <a href="/register"  class="font-medium text-indigo-500 underline-offset-4 hover:underline">Create One</a>
        </p>
    </section>
</main>



    </div>
  )
}

export default Login