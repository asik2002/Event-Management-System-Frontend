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
  
  export const unenrollEvent = async (eventId,email) => {
    const response = await axios.delete(`${API_BASE_URL}/unenroll-event`,{ data:{eventId,emailId:email} });
    return response.data;
  };
  export const hostEvent =async(formData) =>{
    const response= await axios.post(`${API_BASE_URL}/create-event`,formData);
    return response.data;
  };
  export const finishedEnrolledEvents =async(email)=>{
    const response= await axios.get(`${API_BASE_URL}/get-enrolled-finished-events/${email}`)
    return response.data;
  }
  export const enrolledEvents =async(email)=>{
    const response = await axios.get(`${API_BASE_URL}/get-enrolled-events/${email}`)
    return response.data;
  }
  export const previouslyHostedEvents =async(email)=>{
    const response = await axios.get(`${API_BASE_URL}/get-previous-by-host-email/${email}`)
    return response.data;
  }
  export const upcomingHostedEvents =async(email)=>{
    const response= await axios.get(`${API_BASE_URL}/get-upcoming-by-host-email/${email}`)
    return response.data;
  }
  export const updateEvent =async(eventId,formattedFormData)=>{
    const response= await axios.put(`${API_BASE_URL}/update-event/${eventId}`,formattedFormData)
    return response.data; 
  }
  export const deleteEventByEventId = async(eventId)=>{
    const response = await axios.delete(`${API_BASE_URL}/delete-event/${eventId}`);
    return response.data;
  }
  