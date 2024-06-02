import React , { useState } from 'react';
import{NavLink} from 'react-router-dom';
import icon from '../../../assets/icon.jpeg';
import UserProfile from '../../user/UserProfile'; 
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import "./MainNavbar.css"
//import EventCreation from '../../events/eventCreation/EventCreation';
const MainNavbar = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const openModal = () => setIsModalOpen(true);
  // const closeModal = () => setIsModalOpen(false);
  return (
    <nav className='nav-container'>
      <div className='logo'>
        <img id='logo' src={icon} alt='Eventique logo' />
        <NavLink to='/'>Eventique</NavLink>
      </div>
      {/* <ul className='nav-links'>
        <li className='nav-btn'>
          <NavLink to='/hosted-events' className='nav-link'>Hosted Events</NavLink>
        </li>
        <li className='nav-btn'>
          <NavLink to='/registered-events' className='nav-link'>Registered Events</NavLink>
        </li>
        <li className='nav-btn'>
          <button onClick={openModal} className='nav-link'>Host Event</button>
        </li>
      </ul> */}
      <div>
      <UserProfile />
      {/* <CDropdown className='dropdown'>
        <CDropdownToggle color="dark">
          Menu
        </CDropdownToggle>
        <CDropdownMenu dark>
          <CDropdownItem>
            <NavLink to='/profile' className='dropdown-item'>Profile</NavLink>
          </CDropdownItem>
          <CDropdownItem>
            <NavLink to='/settings' className='dropdown-item'>Settings</NavLink>
          </CDropdownItem>
          <CDropdownItem>
            <NavLink to='/logout' className='dropdown-item'>Logout</NavLink>
          </CDropdownItem>
        </CDropdownMenu>
      </CDropdown> */}
      </div>
      {/* <EventCreation isOpen={isModalOpen} onRequestClose={closeModal} /> */}
    </nav>
  );
};

export default MainNavbar;