import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social">
        <span>FOLLOW OUR MISSIONS ON</span>
        <div className="social-icons">
          <a href="#">FACEBOOK</a>
          <a href="#">TWITTER</a>
          <a href="#">GOOGLE+</a>
          <a href="#">PINTEREST</a>
        </div>
      </div>
      <p className="footer-copy">
        © 2026 BY SPACE PROSPECTION | ALL RIGHTS RESERVED
      </p>
    </footer>
  );
};

export default Footer;
