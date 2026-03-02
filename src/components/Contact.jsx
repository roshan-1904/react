import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <h1 className="page-title">CONTACT</h1>
        
        <div className="contact-layout">
          {/* CONTACT FORM */}
          <div className="contact-form-section">
            <h2 className="section-subtitle">SEND US A MESSAGE</h2>
            <p className="contact-intro">
              If you’re having problems editing this website template, then don’t hesitate to ask for help on the <a href="#">Forums</a>.
            </p>
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Message" rows="8" required></textarea>
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
    </div>
  );
};

export default Contact;
