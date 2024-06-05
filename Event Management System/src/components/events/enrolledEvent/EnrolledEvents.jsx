import { useState,useEffect } from "react"
import React from 'react'
import "./EnrolledEvents.css"
import {finishedEnrolledEvents,enrolledEvents,unenrollEvent} from "../../../ApiServices"
import { useAuth } from "../../../AuthContext"
import { toast } from "react-toastify"
const EnrolledEvents = () => {
  const [expandedAttended, setExpandedAttended] = useState(null);
  const [expandedUpcoming, setExpandedUpcoming] = useState(null);
  const [attendedEvents, setAttendedEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const[trigger,setTrigger]= useState(false);
  const { user } = useAuth();
  useEffect(() => {
    const fetchEnrolledEvents = async () => {
      try {
        const attendedData = await finishedEnrolledEvents(user.email);
        setAttendedEvents(attendedData);
        const upcomingData = await enrolledEvents(user.email);
        setUpcomingEvents(upcomingData);
      } catch (error) {
        console.error('Error fetching enrolled events:', error);
      }
    };
    fetchEnrolledEvents();
  }, [trigger]);
  const handleUnEnroll= async (eventId,email)=>{
    const confirmed = window.confirm('Are you sure you want to unenroll?');
  if (confirmed) {
    try{
      const response=  await unenrollEvent(eventId,email);
      toast.success(response);
      setTrigger(!trigger);
    }
catch (error){
  console.log('Issues while un enroll');
}
   } }

  const toggleAccordion = (index, type) => {
    if (type === 'attended') {
      setExpandedAttended((prevIndex) => (prevIndex === index ? null : index));
    } else if (type === 'upcoming') {
      setExpandedUpcoming((prevIndex) => (prevIndex === index ? null : index));
    }
  };

  return (
    <>
      <div className="finished-events">
        <h1>Attended Events</h1>
        {attendedEvents.length === 0 ? (
            <h4 className="null-data">You haven't attended any Events Yet !</h4>
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
      <div className="upcoming-enrolled-events">
        <h1>Enrolled Upcoming Events</h1>
        {upcomingEvents.length === 0 ? (
            <h4 className="null-data">You haven't Enrolled any Events Yet !</h4>
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
            <button className="btn-unenroll" onClick={()=>handleUnEnroll(uevent.eventId,user.email)}>Unenroll</button></>
          ))}
        </div>
      </div>
    </>
  );
};

export default EnrolledEvents;
