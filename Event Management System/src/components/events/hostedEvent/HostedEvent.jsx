import "./HostedEvent.css"
import { useState, useEffect } from "react"
import React from 'react'
import { previouslyHostedEvents, upcomingHostedEvents } from "../../../ApiServices"
import { useAuth } from "../../../AuthContext"
import { toast } from "react-toastify"
const HostedEvent = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const [expandedAttended, setExpandedAttended] = useState(null);
  const [expandedUpcoming, setExpandedUpcoming] = useState(null);
  const [attendedEvents, setAttendedEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [trigger, setTrigger] = useState(false);
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
        ) : null}
        <div className="accordion-container">
          {attendedEvents.map((event, index) => (
            <div key={event.eventId} className="accordion-item">
              <div
                className="accordion-title"
                onClick={() => toggleAccordion(index, 'attended')}
              >
                <h3>{event.eventName}</h3>

                <div>{expandedAttended === index ? <span class="material-symbols-outlined">arrow_drop_up</span> : <span class="material-symbols-outlined">arrow_drop_down</span>}</div>
              </div>
              {expandedAttended === index && (
                <div className="accordion-content">
                  <p className="accordion-description">{event.description}</p>
                  <p className="accordion-text"><span class="material-symbols-outlined">person</span>{event.hostEmail}</p>
                  <p className="accordion-text"><span class="material-symbols-outlined">calendar_month</span>{new Date(event.startDate).toLocaleDateString()} to {new Date(event.endDate).toLocaleDateString()}</p>
                  <p className="accordion-text"><span class="material-symbols-outlined">location_on</span>{event.location}</p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
      <hr />
      <div className='upcoming-hosted'>
        <h1>Upcoming Hosted Events</h1>
        {upcomingEvents.length === 0 ? (
          <h4 className="null-data">You haven't Hosted any Events Yet ! Create Event and Enjoy the Process...</h4>
        ) : null}
        <div className="accordion-container">
          {upcomingEvents.map((uevent, index) => (
            <>
              <div key={uevent.eventId} className="accordion-item">
                <div
                  className="accordion-title"
                  onClick={() => toggleAccordion(index, 'upcoming')}
                >
                  <h3>{uevent.eventName}</h3>

                  <div>{expandedUpcoming === index ? <span class="material-symbols-outlined">arrow_drop_up</span> : <span class="material-symbols-outlined">arrow_drop_down</span>}</div>
                </div>
                {expandedUpcoming === index && (
                  <div className="accordion-content">
                    <p className="accordion-description">{uevent.description}</p>
                    <p className="accordion-text"><span class="material-symbols-outlined">person</span>{uevent.hostEmail}</p>
                    <p className="accordion-text"><span class="material-symbols-outlined">calendar_month</span>{new Date(uevent.startDate).toLocaleDateString()} to {new Date(uevent.endDate).toLocaleDateString()}</p>
                    <p className="accordion-text"><span class="material-symbols-outlined">watch_check</span>{uevent.time}</p>
                    <p className="accordion-text"><span class="material-symbols-outlined">location_on</span>{uevent.location}</p>
                    <button className="custom-btn" >Unenroll</button>
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