import React, { useState, useEffect } from "react";
import './Home.css'

const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="home-container">
            {loading ? (
                <div className="global-loader">
                    <div className="loader-spinner"></div>
                    <div className="loader-text">Initializing Mission...</div>
                </div>
            ) : (
                <div className="fade-in">
                    {/* HERO SECTION */}
                    <section className="hero">
                <div className="hero-content">
                    <h1>SOYUZ TMA-M</h1>
                    <h2>SPACECRAFT</h2>
                    <a href="/about" className="btn-read-more">Read More</a>
                </div>
            </section>

            {/* FEATURED PROJECTS */}
            <section className="featured-projects">
                <div className="section-title">
                    <h3>FEATURED PROJECTS</h3>
                </div>
                <div className="project-grid">
                    <div className="project-item">
                        <img src="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=600&q=80" alt="Mars Rover" className="project-image" />
                        <h4>MARS ROVER</h4>
                    </div>
                    <div className="project-item">
                        <img src="https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?auto=format&fit=crop&w=600&q=80" alt="Moon Base" className="project-image" />
                        <h4>MOON BASE</h4>
                    </div>
                    <div className="project-item">
                        <img src="https://images.unsplash.com/photo-1454789548928-9efd52dc4031?auto=format&fit=crop&w=600&q=80" alt="Deep Space" className="project-image" />
                        <h4>DEEP SPACE</h4>
                    </div>
                </div>
            </section>

            {/* MISSION & VIDEO */}
            <section className="mission-video-section">
                <div className="mission-video">
                    <div className="mission-text">
                        <div className="section-title" style={{textAlign: 'left', marginBottom: '2rem'}}>
                            <h3>OUR MISSION</h3>
                        </div>
                        <p>
                            This website template has been designed by Free Website Templates for you, for free. 
                            You can replace all this text with your own text. You can remove any link to our website 
                            from this website template, you're free to use this website template without linking 
                            back to us. 
                        </p>
                        <p style={{marginTop: '2rem'}}>
                            If you're having problems editing this website template, then don't hesitate to ask 
                            for help on the Forums. Join the discussion and meet other people in the community 
                            who share the same interests with you.
                        </p>
                    </div>
                    <div className="video-container">
                        <div className="section-title" style={{textAlign: 'left', marginBottom: '2rem'}}>
                            <h3>FEATURED VIDEO</h3>
                        </div>
                        <div className="video-box">
                            <div className="play-btn">▶</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* LATEST BLOG */}
            <section className="latest-blog">
                <div className="section-title">
                    <h3>LATEST BLOG</h3>
                </div>
                <div className="blog-grid">
                    <div className="blog-item">
                        <h4>FINDING PLANET X-123</h4>
                        <span className="date">FEBRUARY 6, 2026</span>
                        <p>
                            The search for Planet X-123 has yielded incredible results. Our deep space sensors 
                            have detected atmospheric compositions similar to Earth's early history.
                        </p>
                    </div>
                    <div className="blog-item">
                        <h4>NEW SATELLITE DISH</h4>
                        <span className="date">FEBRUARY 3, 2026</span>
                        <p>
                            Deployment of the Giga-Array satellite dish is complete. We now have 400% more 
                            bandwidth for deep space telemetry from the outer rim.
                        </p>
                    </div>
                </div>
            </section>

            {/* MISSION STATS - NEW FEATURE */}
            <section className="mission-stats">
                <div className="stats-grid">
                    <div className="stat-item">
                        <span className="stat-number">1500+</span>
                        <span className="stat-label">STARS DISCOVERED</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">42</span>
                        <span className="stat-label">MISSIONS COMPLETED</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">12</span>
                        <span className="stat-label">PLANETARY BASES</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">8.5B</span>
                        <span className="stat-label">MILES TRAVELED</span>
                    </div>
                </div>
            </section>

            {/* PARTNERS SECTION - NEW CONTENT */}
            <section className="partners-section">
                <div className="section-title">
                    <h3>OUR STRATEGIC PARTNERS</h3>
                </div>
                <div className="partners-grid">
                    <div className="partner-logo">SPACE ALLIANCE</div>
                    <div className="partner-logo">GALAXY CORP</div>
                    <div className="partner-logo">NEBULA TECH</div>
                    <div className="partner-logo">ORBITAL SYSTEMS</div>
                </div>
            </section>
        </div>
            )}
        </div>
    )
}

export default Home;
