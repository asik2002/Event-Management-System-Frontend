import {React,useState} from 'react';
import { useAuth } from '../../AuthContext';
import { NavLink } from 'react-router-dom';
import "./UserProfile.css"
import EventCreation from '../events/eventCreation/EventCreation';
const UserProfile = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const { user, logout } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  if (!user) return null;
  return (
    <div className="user-profile">
      <span>{user.email}</span> 
      <div className='dropdown'>
        <button className='menu-btn' onClick={toggleDropdown} ><span className="material-symbols-outlined">manage_accounts</span></button>
        {isDropdownOpen && (
          <div className='dropdown-menu'>
            <NavLink to='/profile' className='dropdown-item muted'>Profile</NavLink>
            <NavLink to='/registeredEvents' className='dropdown-item '>Registered Events</NavLink>
            <NavLink to='/hostedEvents' className='dropdown-item'>Hosted Events</NavLink>
            <NavLink onClick={openModal} className='dropdown-item'>Host Event</NavLink>
            <button onClick= {logout} className='dropdown-item'>Logout</button>
            <EventCreation isOpen={isModalOpen} onRequestClose={closeModal} />
          </div>
        )}
      </div>
    </div>
    
  );
};

export default UserProfile;   