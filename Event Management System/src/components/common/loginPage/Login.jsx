import "./Login.css"
import { NavLink,useNavigate } from "react-router-dom"
import icon from "../../../assets/icon.jpeg"
import { useAuth } from "../../../AuthContext"
import {loginUser} from "../../../ApiServices"
import React, { useState } from 'react';

const LoginPage = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate =useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
try {
  const response = await loginUser({ email, password });
 if(response){
  console.log("Login Successful")  
   login({email})
   navigate('/landing')
 }
 else{
  setMessage('Incorrect Password or Email')
 }
} catch (error) {
  setMessage('some error');
}
    
  };
  return (
   <div className="body">
    <div className="login-container">
    <div className="login-form">
      <div id='header'>
      <img id='icon' src={icon} alt="eventique icon" />
      <h2>Eventique</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
           type="email" 
           id="email" 
           value={email}
           onChange={(e)=> setEmail(e.target.value)}
           required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input 
          type="password" 
          id="password" 
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
          required />
        </div>
        <button type="submit" className="login-button">Log In</button>
      </form>
      {message && <p>{message}</p>}
      <p className="signup-link">Don't have an account?
       <NavLink className="nav-link" to="/signup"> Sign Up</NavLink> 
       </p>
    </div>
  </div>
  </div>
    
  )
}

export default LoginPage