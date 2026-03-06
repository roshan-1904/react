import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      await axios.post('/api/contact', formData);
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="contact-container">
      {loading ? (
        <div className="global-loader">
          <div className="loader-spinner"></div>
          <div className="loader-text">Establishing Connection...</div>
        </div>
      ) : (
        <div className="contact-wrapper fade-in">
          <h1 className="page-title">CONTACT</h1>
          
          <div className="contact-layout">
            {/* CONTACT FORM */}
            <div className="contact-form-section">
              <h2 className="section-subtitle">SEND US A MESSAGE</h2>
              <p className="contact-intro">
                If you’re having problems editing this website template, then don’t hesitate to ask for help on the <a href="#">Forums</a>.
              </p>
              {status && <p className="status-message">{status}</p>}
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                />
                </div>
                <div className="form-group">
                  <input 
                    type="text" 
                    name="subject" 
                    placeholder="Subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <textarea 
                    name="message" 
                    placeholder="Message" 
                    rows="8" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn">SEND MESSAGE</button>
              </form>
            </div>

            {/* CONTACT INFO / SIDEBAR */}
            <aside className="contact-sidebar">
              <div className="contact-info-box">
                <h3>CONTACT DETAILS</h3>
                <p>
                  <strong>ADDRESS:</strong><br />
                  1234 Space Avenue, <br />
                  Cosmic City, Galaxy 56789
                </p>
                <p>
                  <strong>PHONE:</strong><br />
                  +1 (123) 456-7890
                </p>
                <p>
                  <strong>EMAIL:</strong><br />
                  info@spaceprospection.com
                </p>
              </div>

              <div className="contact-info-box">
                <h3>FOLLOW OUR MISSIONS</h3>
                <p>Join the discussion on our forum and meet other people in the community.</p>
                <div className="contact-socials">
                  <a href="#">FACEBOOK</a>
                  <a href="#">TWITTER</a>
                  <a href="#">GOOGLE+</a>
                  <a href="#">PINTEREST</a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
