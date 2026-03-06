import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('/api/projects');
        if (response.data.length > 0) {
          setProjects(response.data);
        } else {
          // Fallback static data if DB is empty
          setProjects(staticProjects);
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
        setProjects(staticProjects);
      } finally {
        setTimeout(() => setLoading(false), 500);
      }
    };
    fetchProjects();
  }, []);

  const staticProjects = [
    {
      title: 'MARS ROVER',
      image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=800&q=80',
      description: "Our website templates are created with inspiration, checked for quality and originality and meticulously sliced and coded. What’s more, they’re absolutely free!"
    },
    {
      title: 'MOON BASE',
      image: 'https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?auto=format&fit=crop&w=800&q=80',
      description: "Looking for more templates? Just browse through all our Free Website Templates and find what you’re looking for."
    },
    {
      title: 'DEEP SPACE',
      image: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?auto=format&fit=crop&w=800&q=80',
      description: "If you’re experiencing issues and concerns about this website template, join the discussion on our forum."
    }
  ];

  return (
    <div className="projects-container">
      {loading ? (
        <div className="global-loader">
          <div className="loader-spinner"></div>
          <div className="loader-text">Loading Projects...</div>
        </div>
      ) : (
        <div className="projects-wrapper fade-in">
          <h1 className="page-title">PROJECTS</h1>
          
          <div className="projects-list">
            {projects.map((project, index) => (
              <div key={index} className="project-detail-item">
                <div className="project-image-box">
                  <img src={project.image} alt={project.title} className="project-detail-img" />
                </div>
                <div className="project-info">
                  <h2 className="project-detail-title">{project.title}</h2>
                  <p className="project-detail-desc">{project.description}</p>
                  <a href="#" className="project-read-more">READ MORE</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
