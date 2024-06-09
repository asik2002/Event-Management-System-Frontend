import {React,useState} from 'react';
import { useAuth } from '../../AuthContext';
import { NavLink } from 'react-router-dom';
import "./UserProfile.css"
import EventCreation from '../events/eventCreation/EventCreation';
import Profilemenu from './profileMenu/Profilemenu';
const UserProfile = () => {
  const { user, logout } = useAuth();
  if (!user) return null;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const[isProfileOpen,setIsProfileOpen]=useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openProfileModal=() => setIsProfileOpen(true);
  const closeProfileModal =()=> setIsProfileOpen(false);
  return (
    <div className="user-profile">
      <span>{user.email}</span> 
      <div className='dropdown'>
        <button className='menu-btn' onClick={toggleDropdown} ><span className="material-symbols-outlined">manage_accounts</span></button>
        {isDropdownOpen && (
          <div className='dropdown-menu'>
            <NavLink to='/landing' className='dropdown-item'>Home</NavLink>
            <NavLink onClick={openProfileModal} className='dropdown-item'>Profile</NavLink>
            <NavLink to='/enrolledEvents' className='dropdown-item '>Enrolled Events</NavLink>
            <NavLink to='/hostedEvents' className='dropdown-item'>Hosted Events</NavLink>
            <NavLink onClick={openModal} className='dropdown-item'>Host Event</NavLink>
            <button onClick= {logout} className='dropdown-item'>Logout</button>
            <EventCreation isOpen={isModalOpen} onRequestClose={closeModal} />
            <Profilemenu isOpen={isProfileOpen} onRequestClose={closeProfileModal} />
          </div>
        )}
      </div>
    </div>
    
  );
};

export default UserProfile;   