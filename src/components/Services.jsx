import React, { useState, useEffect } from "react";
import axios from "axios";
import './Services.css'

const Services = () => {
    const [loading, setLoading] = useState(true);
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const res = await axios.get('/api/services');
                setServices(res.data);
            } catch (err) {
                console.error("Error fetching services:", err);
            } finally {
                setTimeout(() => setLoading(false), 500);
            }
        };
        fetchServices();
    }, []);

    return (
        <div className="services-container">
            {loading ? (
                <div className="global-loader">
                    <div className="loader-spinner"></div>
                    <div className="loader-text">Preparing Services...</div>
                </div>
            ) : (
                <div className="services-wrapper fade-in">
                    <h1 className="page-title">OUR SERVICES</h1>
                    <p className="services-intro">
                        Pushing the boundaries of human achievement with cutting-edge aerospace solutions.
                    </p>
                    
                    <div className="services-grid">
                        {services.length > 0 ? services.map((s) => (
                            <div key={s._id} className="service-card">
                                <div className="service-icon">{s.icon || '🚀'}</div>
                                <h3>{s.title}</h3>
                                <p>{s.description}</p>
                            </div>
                        )) : (
                            <p>Loading our specialized orbital services...</p>
                        )}
                    </div>

                    <div className="services-cta">
                        <h2>READY FOR LIFTOFF?</h2>
                        <p>Contact our mission control to discuss your project requirements.</p>
                        <a href="/contact" className="cta-btn">GET IN TOUCH</a>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Services;
