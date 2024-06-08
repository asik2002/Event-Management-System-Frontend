import React, { useState } from 'react';
import icon from "../../../assets/icon.png";
import "./SignUp.css";
import { useAuth } from "../../../AuthContext"
import { NavLink,useNavigate } from 'react-router-dom';
import { registerUser } from '../../../ApiServices';
const SignUp = () => {
   const {login} =useAuth();
  const navigate=useNavigate();
     const[user_name,setUsername]=useState('');
     const[email,setEmail]=useState('');
     const [mobile_no,setMobile]=useState('');
     const[password,setPassword]=useState('');
     const[message,setMessage]=useState('');
     const handleSubmit = async(e)=>{
      e.preventDefault();
      const userData = { mobile_no, password ,user_name, email };

      try {
        const response = await registerUser(userData);
       if(response){
        console.log("Registered Successfully")
        login({email})
        navigate('/landing')
       }
       else{
        setMessage('Email Already Exist')
       }

      } catch (error) {
        setMessage('some error')
      }
     }
  return (
    <div className='body'>
    <div className="signup-container">
    <div className="signup-form">
      <div id='header'>
        <img className='icon' src={icon} alt="eventique icon" />
        <h1 className='branding'>Eventique</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="fullname">Full Name</label>
          <input
           type="text"
            id="fullname" 
            value={user_name}
            onChange={(e)=>setUsername(e.target.value)}
            required />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input 
          type="email"
           id="email" 
           value={email}
           onChange={(e)=>setEmail(e.target.value)}
           required />
        </div>
        <div className="input-group">
          <label htmlFor="mobile">Mobile Number</label>
          <input 
          type="tel"
           id="mobile" 
           value={mobile_no}
           onChange={(e)=>setMobile(e.target.value)}
           required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password"
           id="password"
           value={password}
           onChange={(e)=>setPassword(e.target.value)}
           required />
        </div>
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
      {message && <p>{message}</p>}
      <p className="login-link">Already have an account?{" "}
        <NavLink className="nav-link" to="/login">Log In</NavLink> 
       </p>
    </div>
  </div>
  </div>
  )
}

export default SignUp