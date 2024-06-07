import { React, useState, useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./UpcomingEvents.css"
import { fetchUpcomingEvents, enrollEvent } from "../../../ApiServices"
import { toast } from 'react-toastify';
import { useAuth } from '../../../AuthContext'
const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);
  const [enroll, setEnroll] = useState("false");
  const { user } = useAuth();
  useEffect(() => {
    const loadUpcomingEvents = async () => {
      try {
        const eventsData = await fetchUpcomingEvents(user.email);
        setEvents(eventsData);
      } catch (error) {
        setError('Failed to fetch upcoming events');
      }
    };
    loadUpcomingEvents();
  }, [enroll]);
  const handleEnroll = async (eventId) => {
    const confirm = window.confirm("Your details can be viewed by the Host, Are you sure Want to Enroll")
    if (confirm) {
      try {
        const response = await enrollEvent(eventId, user.email);
        console.log(response);
        toast.success(response)
      } catch (error) {
        console.error('Failed to enroll in event', error);
        toast.error("Some Backend error")
      }
      setEnroll(!enroll);
    }
  }
  return (
    <div className='upcoming-container'>
      <div className='upcoming-description'>
        <h1>Unlock the fun !</h1>
        <p>Don't Miss our Upcoming Events -{'>'} </p>
      </div>
      {events.length === 0 ? (
        <h4 className="null-data-upcoming">You might have enrolled All events ! Stay tuned for Upcoming Events...</h4>
      ) : null}
      <div id='upcoming-events' className='carousel-container'>
        <Carousel className="carousel" showThumbs={false} showStatus={false} /*autoPlay interval={5000}*/ infiniteLoop   >
          {events.map(event => (
            <div key={event.eventId} className="event-slide">
              <h1>{event.eventName}</h1>
              <h3>Description :</h3>  <p className='carousel-desc'>{event.description}</p>
              <span class="material-symbols-outlined">
                person
              </span> <p>{event.hostEmail} </p>
              <span class="material-symbols-outlined">
                calendar_month
              </span> <p>{new Date(event.startDate).toDateString()} to {new Date(event.endDate).toDateString()}</p>
              <span class="material-symbols-outlined">
                location_on
              </span><p>{event.location}</p>
              <span class="material-symbols-outlined">
                watch_check
              </span><p>{event.time}</p>
              {{ error } && <p>{error}</p>}
              <button className='custom-btn' onClick={() => handleEnroll(event.eventId)}>Enroll</button>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default UpcomingEvents