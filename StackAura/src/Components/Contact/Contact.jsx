import React, { useState } from 'react';
import { Send, Phone, MapPin, Mail, Linkedin, Github, Twitter } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <div className="contact-header">
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-subtitle">
            Get in touch with us for any questions or inquiries
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info-card">
            <h2 className="info-title">Contact Info</h2>
            
            <div className="info-item">
              <Phone className="info-icon" />
              <div className="info-content">
                <h3>Phone</h3>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="info-item">
              <Mail className="info-icon" />
              <div className="info-content">
                <h3>Email</h3>
                <p>contact@example.com</p>
              </div>
            </div>

            <div className="info-item">
              <MapPin className="info-icon" />
              <div className="info-content">
                <h3>Location</h3>
                <p>123 Business St, NY 10001</p>
              </div>
            </div>

            <div className="social-media">
              <div className="social-icons">
                <a href="#" className="social-icon"><Linkedin /></a>
                <a href="#" className="social-icon"><Twitter /></a>
                <a href="#" className="social-icon"><Github /></a>
              </div>
            </div>
          </div>

          <div className="form-card">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                <Send size={16} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;