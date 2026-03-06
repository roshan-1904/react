import React, { useState, useEffect } from "react"
import axios from "axios";
import './About.css'

const About = () => {
  const [loading, setLoading] = useState(true);
  const [aboutContent, setAboutContent] = useState([]);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const res = await axios.get('/api/about');
        setAboutContent(res.data);
      } catch (err) {
        console.error("Error fetching about:", err);
      } finally {
        setTimeout(() => setLoading(false), 600);
      }
    };
    fetchAbout();
  }, []);

  return (
    <div className="about-container">
      {loading ? (
        <div className="global-loader">
          <div className="loader-spinner"></div>
          <div className="loader-text">Loading Details...</div>
        </div>
      ) : (
        <div className="about-wrapper fade-in">
          <main className="about-content">
            <h1 className="page-title">ABOUT</h1>
            
            {aboutContent.length > 0 ? aboutContent.map(section => (
              <section key={section._id} className="about-section">
                <h2 className="section-subtitle">{section.subtitle}</h2>
                <p>{section.content}</p>
              </section>
            )) : (
              <p>Welcome to our space science agency. We are dedicated to exploring the unknown.</p>
            )}
          </main>

          <aside className="about-sidebar">
            <div className="sidebar-box">
              <h3>QUICK LINKS</h3>
              <ul className="sidebar-links">
                <li><a href="/projects">PROJECTS</a></li>
                <li><a href="/blog">BLOG</a></li>
                <li><a href="/contact">CONTACT</a></li>
              </ul>
            </div>
            <div className="sidebar-box featured">
              <h3>FEATURED MISSION</h3>
              <img src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=400&q=80" alt="Space Mission" className="sidebar-img" />
              <p>Exploring the unknown depths of our solar system.</p>
            </div>
          </aside>
        </div>
      )}
    </div>
  )
}

export default About
