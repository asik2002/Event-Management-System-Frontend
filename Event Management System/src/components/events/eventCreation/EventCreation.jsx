import React, { useState } from 'react';
import Modal from 'react-modal';
import "./EventCreation.css";
Modal.setAppElement('#root'); 
const EventCreation = ({ isOpen, onRequestClose }) => {
  const [formData, setFormData] = useState({
    eventId: '',
    eventName: '',
    description: '',
    startDate: '',
    endDate: '',
    totalDays: '',
    time: '',
    location: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    className="event-modal"
    overlayClassName="event-modal-overlay"
  >
    <div className="event-modal-content">
      <h2>Host Event</h2>
      <form>
        <div className="input-group">
          <label htmlFor="eventName">Event Name</label>
          <input type="text" id="eventName" required />
        </div>
        <div className="input-group">
          <label htmlFor="description">Description</label>
          <textarea id="description" required></textarea>
        </div>
        <div className="input-group">
          <label htmlFor="startDate">Start Date</label>
          <input type="date" id="startDate" required />
        </div>
        <div className="input-group">
          <label htmlFor="endDate">End Date</label>
          <input type="date" id="endDate" required />
        </div>
        <div className="input-group">
          <label htmlFor="totalDays">Total Days</label>
          <input type="number" id="totalDays" required />
        </div>
        <div className="input-group">
          <label htmlFor="time">Time</label>
          <input type="time" id="time" required />
        </div>
        <div className="input-group">
          <label htmlFor="location">Location</label>
          <input type="text" id="location" required />
        </div>
        <button type="submit" className="submit-button">Create Event</button>
        <button type="button" className="close-button" onClick={onRequestClose}>Close</button>
      </form>
    </div>
  </Modal>
  );
};
export default EventCreation;
