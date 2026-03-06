import React, { useState, useEffect } from "react"
import './About.css'

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);
    return () => clearTimeout(timer);
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
        {/* MAIN CONTENT AREA */}
        <main className="about-content">
          <h1 className="page-title">ABOUT</h1>
          
          <section className="about-section">
            <h2 className="section-subtitle">WE HAVE FREE TEMPLATES FOR EVERYONE</h2>
            <p>
              Our website templates are created with inspiration, checked for quality and originality 
              and meticulously sliced and coded. What’s more, they’re absolutely free! You can do 
              a lot with them. You can modify them. You can use them to design websites for 
              clients, so long as you agree with the <a href="#">Terms of Use</a>. You can even remove 
              all our links if you want to.
            </p>
          </section>

          <section className="about-section">
            <h2 className="section-subtitle">WE HAVE MORE TEMPLATES FOR YOU</h2>
            <p>
              Looking for more templates? Just browse through all our <a href="#">Free Website Templates</a> 
              and find what you’re looking for. But if you don’t find any website template you can use, 
              you can try our <a href="#">Free Web Design</a> service and tell us all about it. Maybe 
              you’re looking for something specific, feel free to ask for help on our <a href="#">Forum</a>.
            </p>
          </section>

          <section className="about-section">
            <h2 className="section-subtitle">BE PART OF OUR COMMUNITY</h2>
            <p>
              If you’re experiencing issues and concerns about this website template, join the 
              discussion on our forum and meet other people in the community who share the same 
              interests with you.
            </p>
          </section>

          <section className="about-section">
            <h2 className="section-subtitle">TEMPLATE DETAILS</h2>
            <p>
              Design version 1 <br />
              Code version 5 <br />
              Website Template details, discussion and updates for this <a href="#">Space Science Website Template</a>. <br />
              Website Template design by <a href="#">Free Website Templates</a>. <br />
              Please feel free to remove some or all the text and links of this page and replace 
              it with your own About content.
            </p>
          </section>
        </main>

        {/* SIDEBAR AREA */}
        <aside className="about-sidebar">
          <div className="sidebar-box">
            <h3>QUICK LINKS</h3>
            <ul className="sidebar-links">
              <li><a href="#">PROJECTS</a></li>
              <li><a href="#">BLOG</a></li>
              <li><a href="#">FORUM</a></li>
              <li><a href="#">SUPPORT</a></li>
            </ul>
          </div>

          <div className="sidebar-box featured">
            <h3>FEATURED MISSION</h3>
            <img src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=400&q=80" alt="Space Mission" className="sidebar-img" />
            <p>Exploring the unknown depths of our solar system with Soyuz TMA-M.</p>
            <a href="#" className="sidebar-btn">READ MORE</a>
          </div>
        </aside>
      </div>
      )}
    </div>
  )
}

export default About
