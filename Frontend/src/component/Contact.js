import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://portfolio-1-6okb.onrender.com', formData);
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      window.alert('Thank you for showing interest in my profile. Data saved successfully!');
    } catch (error) {
      console.error(error);
      setStatus('Error sending message.');
    }
  };

  return (
    <div style={{ padding: '50px 20px' }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 style={{ textAlign: 'center' }}>Contact Me</h2>
        <p style={{ textAlign: 'center' }}>
          I'm always open to new opportunities, collaborations, and conversations.
        </p>
      </motion.div>

      <motion.div
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
        style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}
      >
        <form onSubmit={handleSubmit} style={{ maxWidth: '600px', width: '100%' }}>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              style={{ width: '100%', padding: '10px', fontSize: '16px' }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              style={{ width: '100%', padding: '10px', fontSize: '16px' }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here"
              style={{ width: '100%', padding: '10px', fontSize: '16px', height: '150px' }}
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px',
              borderRadius: '5px',
            }}
          >
            Send Message
          </motion.button>

          {status && <p style={{ marginTop: '20px', textAlign: 'center' }}>{status}</p>}
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
