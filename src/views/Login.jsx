import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axiosClient from '../axios';

export default function Login({ onLogin }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  
  
  const handleLogin = async (e) => {
    e.preventDefault()

    const data = {
      email : email,
      password : password
    };

    const config = {
      headers: {
          'content-type': 'application/json',
      },
  };

      try {
        await axiosClient.post('/login', data, config)
        .then(res => {

          // setEmail("")
          // setPassword("")
          if (res.status === 201) {
              localStorage.setItem("user", JSON.stringify(res.data.user.name));
              localStorage.setItem("TOKEN", JSON.stringify(res.data.token))
              onLogin();
          }
          else {
            setErrors(res.response);
          }
        })
       
      } catch (error) {
        console.log(error)
      } 
  };

  
  return (
    <div className='login-signup-form  fadeInDown'>
      <div className='form'>

        <form onSubmit={handleLogin}>
          <h1 className='title'>Login to Admin Dashboard</h1>
          <div className='mb-3'>
            <input 
              type='email' 
              placeholder="Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className='mb-3'>
            <input 
              type='password' 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}/>
          </div>
          
          <button type='submit' className='btn-success w-100'>Login</button>


          <p className='message'>
            Not Registered? <Link to='/login'>Create Account</Link>
          </p>
        </form>
      </div>
    </div>
  )
}
