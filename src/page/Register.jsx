import React, { useEffect, useState } from 'react'
import{useNavigate} from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const [name,setName] = useState('')
  const [email,setEmail]= useState('')
  const [password,setPassword] = useState('')

  let nav = useNavigate()

  async function register() {
    if(!name || !email || !password) {
      alert("Please Enter All Details")
    }else{
      let data = await axios.post("http://localhost:3001/register",{name:name,email:email,password:password})
      if(data.data.status===200) {

        sessionStorage.setItem("token",data.data.token)
        alert("Register Successfully")
        nav("/Task")
      }else{
          alert("Register Failed")
          console.log(data.data.message)
          nav("/")
      }
    }
  }

    

  //   let data = await axios.post("http://localhost:3001/register",{name:name,email:email,password:password})
  //   if(data.data.status===200) {

  //     sessionStorage.setItem("token",data.data.token)
  //     alert("Register Successfully")
  //     nav("/Task")
  //   }else{
  //       alert("Register Failed")
  //       console.log(data.data.message)
  //       nav("/")
  //   }

  // }

  // async function logout(){

  //   const data = await axios.get("http://localhost:3001/signup",{
  //       headers:{token:sessionStorage.getItem("token")}
  //   })
  //   debugger
  //   if(data.data.status===200){
  //       alert("Register Successfully",data.data.message)
  //   }else {
  //       alert("Update Failed")
  //       console.log(data.data.message)
        
  //   }
  //   }

    useEffect(()=>{
           
    },[])   



  return (
    <div>
    


      
<main class="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
    <section class="flex w-[30rem] flex-col space-y-10">
        <div class="text-center text-4xl font-medium">Register</div>

        <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Username" class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"/>
        </div>

        <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Email " class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"/>
        </div>

        <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Password" class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"/>
        </div>

        <button type='button' onClick={register} class="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400">LOG IN</button>

      
    </section>
</main>




    </div>
  )
}

export default Register
