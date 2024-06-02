import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
const EventCard = ({ event }) => {
  return (
    <Card sx={{ maxWidth: 250, margin: 2, boxShadow: "10px 18px 10px rgba(0, 0, 0, 0.3)",backgroundColor:"rgb(229, 229, 230)"}}>
      <CardContent>
        <Typography variant="h4"  align='center' >
          {event.eventName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {event.description}
        </Typography>
        <Box mt={2}>
          <Typography variant="body2" color="text.secondary">
            <strong>Host:</strong> {event.hostEmail}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Location:</strong> {event.location}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Start Date:</strong> {new Date(event.startDate).toLocaleDateString()}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>End Date:</strong> {new Date(event.endDate).toLocaleDateString()}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Time:</strong> {event.time}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Total Days:</strong> {event.totalDays}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default EventCard;
