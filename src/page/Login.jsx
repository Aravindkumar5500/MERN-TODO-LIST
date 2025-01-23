import React from 'react'
// import { Link } from 'react-router-dom';
//  import './App.css'

function Login() {
  return (
    <div>

         {/* <from className='login'>
            <h1 className='headlog'>Login</h1>
            <label>Username</label>
            
            <input type='text' placeholder=' Enter Username/email' />
        
            <label>Password</label>
          
            <input type='password' placeholder='Enter Password' />
            {/* <p> Don't have an account? <Link to="/register">Register here</Link> </p> */}
            {/* <p>Don't have an account?<a href='/Register'><span style={{color:"blue"}}>Register</span></a></p> */}
            {/* <br/> */}
            {/* <button type='submit' class="btn btn-outline-success" >Login</button>
            </from>  */} 


<main class="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
    <section class="flex w-[30rem] flex-col space-y-10">
        <div class="text-center text-4xl font-medium">Log In</div>

        <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input type="text" placeholder="Email or Username" class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"/>
        </div>

        <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input type="password" placeholder="Password" class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"/>
        </div>

        <button class="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400">LOG IN</button>

        {/* <a href="/" class="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300">FORGOT PASSW</a> */}

        <p class="text-center text-lg">
            No account?
            <a href="/register" class="font-medium text-indigo-500 underline-offset-4 hover:underline">Create One</a>
        </p>
    </section>
</main>



    </div>
  )
}

export default Login