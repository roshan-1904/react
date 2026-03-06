import React, { useState, useEffect } from "react";
import './Services.css'

const Services = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="services">
            {loading ? (
                <div className="global-loader">
                    <div className="loader-spinner"></div>
                    <div className="loader-text">Preparing Services...</div>
                </div>
            ) : (
                <div className="fade-in">
                    <h1>Our Services</h1>
                    <p>This is the Services page content.</p>
                </div>
            )}
        </div>
    )
}

export default Services;