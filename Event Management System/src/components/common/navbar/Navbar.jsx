import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Navbar.css"
import icon from "../../../assets/icon.jpeg"
const Navbar = () => {
  return (
  
  <nav className='nav-container'>
  <div className="logo">
      <img id='logo' src={icon} alt="eventique logo" />
      <NavLink to="/">Eventique</NavLink>
  </div>

  <ul className="nav-links">
        <li className="nav-btn"><NavLink to="/signup" className="nav-link">Sign Up</NavLink></li>
        <li className="nav-btn"><NavLink to="/login" className="nav-link">Log In</NavLink></li>
      </ul>
</nav>
  )
}

export default Navbar