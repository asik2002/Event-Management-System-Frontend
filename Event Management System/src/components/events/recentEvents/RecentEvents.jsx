import React, { useEffect, useState } from 'react';
import { fetchRecentEvents } from '../../../ApiServices';
import EventCard from './EventCard';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import "./RecentEvents.css"
const RecentEvents = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const data = await fetchRecentEvents();
        setEvents(data);
      } catch (error) {
        setError('Some backend Error');
      }
    };

    loadEvents();
  }, []);
  return (
    <div className='container'>
    <p className='heading'>Our Recent Events</p>
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
      {error && <Typography color="error">{error}</Typography>}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center',padding:"50px", backgroundColor:"rgb(118, 131, 181)"}}>
        {events.map(event => (
          <EventCard key={event.eventId} event={event} />
        ))}
      </Box>
    </Box>
    </div>
  )
}

export default RecentEvents