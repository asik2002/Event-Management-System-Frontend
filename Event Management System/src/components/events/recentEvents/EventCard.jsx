import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
const EventCard = ({ event }) => {
  return (
    <Card className='recent-card' sx={{ minWidth: '45%', minHeight: '100%', margin: 'auto', boxShadow: "10px 18px 10px rgba(0, 0, 0, 0.3)", backgroundColor: "rgb(229, 229, 230)" }}>
      <CardContent >
        <Typography className='card-heading' variant="h4"  >
          {event.eventName}
        </Typography>
        <Typography className='card-description' variant="body2" color="text.secondary">
          {event.description}
        </Typography>
        <Box className='card-details' mt={2}>
          <Typography className='card-items' variant="body2" color="text.secondary">
            <span class="material-symbols-outlined">
              person
            </span> {event.hostEmail}
          </Typography>
          <Typography className='card-items' variant="body2" color="text.secondary">
            <span class="material-symbols-outlined">
              location_on
            </span> {event.location}
          </Typography>
          <Typography className='card-items' variant="body2" color="text.secondary">
            <span class="material-symbols-outlined">
              calendar_month
            </span> {new Date(event.startDate).toDateString()} to {new Date(event.endDate).toDateString()}
          </Typography>
          <Typography className='card-items' variant="body2" color="text.secondary">
            <span class="material-symbols-outlined">
              watch_check
            </span> {event.time}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default EventCard;
