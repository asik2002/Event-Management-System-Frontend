import React from 'react';
import{NavLink} from 'react-router-dom';
import icon from '../../../assets/icon.png';
import UserProfile from '../../user/UserProfile'; 
import "./MainNavbar.css"
const MainNavbar = () => {
  return (
    <nav className='nav-container'>
      <div className='logo'>
        <img id='logo' src={icon} alt='Eventique logo' />
        <NavLink to='/'>Eventique</NavLink>
      </div>
      <UserProfile />
    </nav>
  );
};

export default MainNavbar;