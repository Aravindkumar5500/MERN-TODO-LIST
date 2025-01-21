import React from 'react'

const Register = () => {
  return (
    <div>
     <from>
      <h1>Register</h1>
      <label>Name</label>
      <br/>
      <input type='text' placeholder='Enter Name'/>
      <br/>
      <label>Email</label>
      <br/>
      <input type='email' placeholder='Enter Email'/>
      <br/>
      <label>Password</label>
      <br/>
      <input type='password' placeholder='Enter Password'/>
      <p>Already have account?<a href='/Login'>Login</a></p>
      <br/>
      <button type='submit'>Submit</button>
     </from>




    </div>
  )
}

export default Register
