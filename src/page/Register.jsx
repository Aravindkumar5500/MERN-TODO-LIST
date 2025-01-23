import React, { useEffect, useState } from 'react'
import{useNavigate} from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const [input,setInput] = useState('')
  const [input1,setInput1]= useState('')
  const [input2,setInput2] = useState('')

  let nav = useNavigate()

  async function register() {

    debugger

    let data = await axios.post("http://localhost:3001/register",{name:input,email:input1,password:input2,})
    if(data.status===200) {

      sessionStorage.setItem("token",data.data.token)
      nav("/Task")
    }

  }

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
     {/* <from>
      <h1>Register</h1>
      <br/>
      <label>Name</label>
    
      <input type='text' onChange={(e)=>setInput(e.target.value)} placeholder='Enter Name'/>
      
      <label>Email</label>
      
      <input type='email' onChange={(e)=>setInput1(e.target.value)} placeholder='Enter Email'/>
      
      <label>Password</label>
      
    
      <input type='password'onChange={(e)=>setInput2(e.target.value)} placeholder='Enter Password'/>
      <p>Already have account?<span> </span><a href='/'><span style={{color:"blue"}}>Login</span></a></p>
      <br/>
      <button type='button'class="btn btn-outline-success" onClick={register}>Submit</button>
      </from> */}



      
<main class="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
    <section class="flex w-[30rem] flex-col space-y-10">
        <div class="text-center text-4xl font-medium">Register</div>

        <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input type="text" onChange={(e)=>setInput(e.target.value)} placeholder="Username" class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"/>
        </div>

        <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input type="email" onChange={(e)=>setInput1(e.target.value)} placeholder="Email " class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"/>
        </div>

        <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input type="password" onChange={(e)=>setInput2(e.target.value)} placeholder="Password" class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"/>
        </div>

        <button type='button' onClick={register} class="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400">LOG IN</button>

        {/* <a href="/" class="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300">FORGOT PASSW</a> */}

        {/* <p class="text-center text-lg">
            No account? */}
            {/* <a href="/register" class="font-medium text-indigo-500 underline-offset-4 hover:underline">Create One</a> */}
        {/* </p> */}
    </section>
</main>




    </div>
  )
}

export default Register
