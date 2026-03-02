import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: 'MARS ROVER',
      image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=800&q=80',
      description: "Our website templates are created with inspiration, checked for quality and originality and meticulously sliced and coded. What’s more, they’re absolutely free! You can do a lot with them. You can modify them. You can use them to design websites for clients, so long as you agree with the Terms of Use. You can even remove all our links if you want to."
    },
    {
      title: 'MOON BASE',
      image: 'https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?auto=format&fit=crop&w=800&q=80',
      description: "Looking for more templates? Just browse through all our Free Website Templates and find what you’re looking for. But if you don’t find any website template you can use, you can try our Free Web Design service and tell us all about it. Maybe you’re looking for something specific, feel free to ask for help on our Forum."
    },
    {
      title: 'DEEP SPACE',
      image: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?auto=format&fit=crop&w=800&q=80',
      description: "If you’re experiencing issues and concerns about this website template, join the discussion on our forum and meet other people in the community who share the same interests with you. If you're having problems editing this website template, then don't hesitate to ask for help on the Forums."
    }
  ];

  return (
    <div className="projects-container">
      <div className="projects-wrapper">
        <h1 className="page-title">PROJECTS</h1>
        
        <div className="projects-list">
          {projectList.map((project, index) => (
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
    </div>
  );
};

export default Projects;
