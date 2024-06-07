import "./HostedEvent.css"
import { useState,useEffect } from "react"
import React from 'react'
import {previouslyHostedEvents,upcomingHostedEvents} from "../../../ApiServices"
import { useAuth } from "../../../AuthContext"
import { toast } from "react-toastify"
const HostedEvent = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const [expandedAttended, setExpandedAttended] = useState(null);
  const [expandedUpcoming, setExpandedUpcoming] = useState(null);
  const [attendedEvents, setAttendedEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const[trigger,setTrigger]= useState(false);
  const { user } = useAuth();
  useEffect(() => {
    const fetchHostedEvents = async () => {
      try {
        const attendedData = await previouslyHostedEvents(user.email);
        setAttendedEvents(attendedData);
        const upcomingData = await upcomingHostedEvents(user.email);
        setUpcomingEvents(upcomingData);
      } catch (error) {
        console.error('Error fetching enrolled events:', error);
      }
    };
    fetchHostedEvents();
  }, [trigger]);
  
  const toggleAccordion = (index, type) => {
    if (type === 'attended') {
      setExpandedAttended((prevIndex) => (prevIndex === index ? null : index));
    } else if (type === 'upcoming') {
      setExpandedUpcoming((prevIndex) => (prevIndex === index ? null : index));
    }
  };
  return (
    <>
    <div className='previous-hosted'>
        <h1>Previously Hosted Events</h1>  
        {attendedEvents.length === 0 ? (
            <h4 className="null-data">You haven't Hosted any Events Before !</h4>
          ) :null}
        <div className="accordion-container">
         {attendedEvents.map((event, index) => (
            <div key={event.eventId} className="accordion-item">
              <div
                className="accordion-title"
                onClick={() => toggleAccordion(index, 'attended')}
              >
                <h3>{event.eventName}</h3>
                
                <div>{expandedAttended === index ? '-' : '+'}</div>
                
              </div>
              {expandedAttended === index && (
                <div className="accordion-content">
                  <b>Description:</b> {event.description}
                  <b>Host:</b> {event.hostEmail}
                  <b>Date:</b>{new Date(event.startDate).toLocaleDateString()} to {new Date(event.endDate).toLocaleDateString()}
                  <b>Location:</b> {event.location}
                </div>
              )}
            </div>
          ))}
        </div>

    </div>
    <div className='upcoming-hosted'>
        <h1>Upcoming Hosted Events</h1>
        {upcomingEvents.length === 0 ? (
            <h4 className="null-data">You haven't Hosted any Events Yet ! Create Event and Enjoy the Process...</h4>
          ) :null}
        <div className="upcoming-accordion-container">
          {upcomingEvents.map((uevent, index) => (
            <>
            <div key={uevent.eventId} className="upcoming-accordion-item">
              <div
                className="upcoming-accordion-title"
                onClick={() => toggleAccordion(index, 'upcoming')}
              >
                <h3>{uevent.eventName}</h3>
              
                <div>{expandedUpcoming === index ? '-' : '+'}</div>
              </div> 
              {expandedUpcoming === index && (
                <div className="upcoming-accordion-content">
                  <b>Description:</b> {uevent.description}
                  <b>Host:</b> {uevent.hostEmail}
                  <b>Date:</b>{new Date(uevent.startDate).toLocaleDateString()} to {new Date (uevent.endDate).toLocaleDateString()}
                  <b>Total Days</b>{uevent.totalDays}
                  <b>Time</b>{uevent.time}
                  <b>Location:</b> {uevent.location}
                </div>
              )}
            </div>
            <div className='dropdown'>
        <button className='menu-btn' onClick={toggleDropdown} >threedot</button>
        {isDropdownOpen && (
          <div className='dropdown-menu'>
            <button className='dropdown-item'>Get Attendees</button>
            <button  className='dropdown-item '>Update Event</button>
            <button  className='dropdown-item '>Delete Event</button>
          </div>
        )}
      </div>
      </>
          ))}
        </div>
    </div>
    </>
  )
}

export default HostedEvent