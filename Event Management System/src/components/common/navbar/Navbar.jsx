import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Navbar.css"
import icon from "../../../assets/icon.png"
const Navbar = () => {

  return (
  
  <nav className='nav-container'>
  <div className="logo">
      <img id='logo' src={icon} alt="eventique logo" />
      <NavLink to="/">Eventique</NavLink>
  </div>

  <ul className="nav-links">
        <span className='material-symbols-outlined' id='close-btn'>close</span>
        <li className="nav-btn login"><NavLink to="/login" className="nav-link">Log In</NavLink></li>
        <li className="nav-btn sign-up" ><NavLink to="/signup" className="nav-link">Sign Up</NavLink></li>
      </ul>
      <span className='material-symbols-outlined' id='menu-btn'>menu</span>

</nav>
  )
}

export default Navbar