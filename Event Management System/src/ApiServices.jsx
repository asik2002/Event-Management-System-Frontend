import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';
export const loginUser = async (userDetails) => {
    const response = await axios.post(`${API_BASE_URL}/login`, userDetails);
    return response.data;
};
export const registerUser= async (userDetails)=>{
    const response= await axios.post( `${API_BASE_URL}/register`,userDetails);
    return response.data;
};
export const fetchRecentEvents= async()=>{
    const response= await axios.get(`${API_BASE_URL}/recent-events`);
    return response.data;
};
export const fetchUpcomingEvents = async (email) => {
    const response = await axios.get(`${API_BASE_URL}/upcoming-events/${email}`);
    return response.data;
  };
  
  export const enrollEvent = async (eventId, email) => {
    const response = await axios.post(`${API_BASE_URL}/enroll-event`,{ eventId, emailId: email });
    return response.data;
  };
  
  export const unenrollEvent = async (eventId) => {
    const response = await axios.post(`${API_BASE_URL}/unenroll-event`, { eventId, emailId: email });
    return response.data;
  };