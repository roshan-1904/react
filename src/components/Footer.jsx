import React, { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-newsletter">
          <h3>JOIN OUR NEWSLETTER</h3>
          <p>Get the latest space exploration news directly in your inbox.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="ENTER YOUR EMAIL" required />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>

        <div className="footer-social">
          <span>FOLLOW OUR MISSIONS ON</span>
          <div className="social-icons">
            <a href="#">FACEBOOK</a>
            <a href="#">TWITTER</a>
            <a href="#">GOOGLE+</a>
            <a href="#">PINTEREST</a>
          </div>
        </div>
      </div>

      <p className="footer-copy">
        © 2026 BY SPACE PROSPECTION | ALL RIGHTS RESERVED
      </p>

      {showScroll && (
        <button className="back-to-top" onClick={scrollTop} title="Back to Top">
          ↑
        </button>
      )}
    </footer>
  );
};

export default Footer;
