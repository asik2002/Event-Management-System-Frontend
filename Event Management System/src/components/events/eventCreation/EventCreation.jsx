import React, { useState } from 'react';
import Modal from 'react-modal';
import "./EventCreation.css";
import { hostEvent } from '../../../ApiServices';
import { toast } from 'react-toastify';
import { useAuth } from '../../../AuthContext';
import { useEffect } from 'react';
Modal.setAppElement('#root'); 
const EventCreation = ({ isOpen, onRequestClose }) => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    eventName: '',
    description: '',
    startDate: '',
    endDate: '',
    totalDays: '',
    time: '',
    location: '',
    hostEmail: user.email
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (formData.startDate && formData.endDate) {
      const start = new Date(formData.startDate);
      const end = new Date(formData.endDate);
      if (end >= start) {
        const totalDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
        setFormData((prevState) => ({
          ...prevState,
          totalDays: totalDays.toString(),
        }));
      }
    }
  }, [formData.startDate, formData.endDate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const today = new Date().toISOString().split('T')[0];
    if (formData.startDate < today) {
      toast.error('Start date must be today or later.');
      return;
    }
    if (formData.endDate < formData.startDate) {
      toast.error('End date must be equal to or later than the start date.');
      return;
    }

    const formattedFormData = {
      ...formData,
      time: `${formData.time}:00`
    };
    console.log(formattedFormData);
    try {
      const response = await hostEvent(formattedFormData);
      toast.success(response);
      onRequestClose();
    } catch (error) {
      toast.error("Some Backend Error");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="event-modal disable-scroll"
      overlayClassName="event-modal-overlay"
    >
      <div className="event-modal-content">
        <h2>Host Event</h2>
        <span className='material-symbols-outlined form-close' onClick={onRequestClose}>close</span>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="eventName">Event Name</label>
            <input
              type="text"
              id="eventName"
              name="eventName"
              value={formData.eventName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="startDate">Start Date</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="endDate">End Date</label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="totalDays">Total Days</label>
            <input
              type="number"
              id="totalDays"
              name="totalDays"
              value={formData.totalDays}
              readOnly
            />
          </div>
          <div className="input-group">
            <label htmlFor="time">Time</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>
          <div className='btn-wrapper'>
            <button type="submit" className="submit-button custom-btn">Create Event</button>
          </div>
        </form>
        
    </div>
  </Modal>
  );
};
export default EventCreation;
