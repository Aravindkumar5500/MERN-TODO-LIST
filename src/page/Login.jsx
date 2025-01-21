import React from 'react'
// import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
        <from>
            <h1>Login</h1>
            <label>Username</label>
            <br/>
            <input type='text' placeholder=' Enter Username/email' />
            <br/>
            <label>Password</label>
            <br/>
            <input type='password' placeholder='Enter Password' />
            {/* <p> Don't have an account? <Link to="/register">Register here</Link> </p> */}
            <p>Don't have an account?<a href='/Register'>Register</a></p>
            {/* <br/> */}
            <button type='submit'>Login</button>
        </from>
    </div>
  )
}

export default Login