import React from 'react';
import { useAuth } from '../../AuthContext';
import "./UserProfile.css"
const UserProfile = () => {
  const { user, logout } = useAuth();

  if (!user) return null;
  
  return (
    <div className="user-profile">
      <span>{user.email}</span>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default UserProfile;   