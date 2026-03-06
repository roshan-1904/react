import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Admin.css';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('contacts');
  const [contacts, setContacts] = useState([]);
  const [projects, setProjects] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [newProject, setNewProject] = useState({ title: '', image: '', description: '' });
  const [newBlog, setNewBlog] = useState({ title: '', image: '', description: '', date: new Date().toLocaleDateString() });
  
  const [editingProject, setEditingProject] = useState(null);
  const [editingBlog, setEditingBlog] = useState(null);

  const [status, setStatus] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setError(null);
    setLoading(true);
    try {
      const [resContacts, resProjects, resBlogs] = await Promise.all([
        axios.get('/api/contacts'),
        axios.get('/api/projects'),
        axios.get('/api/blogs')
      ]);
      
      setContacts(resContacts.data);
      setProjects(resProjects.data);
      setBlogs(resBlogs.data);
    } catch (err) {
      console.error('Error fetching admin data:', err);
      setError('Could not connect to the backend server. Make sure it is running on port 5000.');
    } finally {
      setLoading(false);
    }
  };

  const deleteContact = async (id) => {
    if(!window.confirm('Delete this message?')) return;
    setLoading(true);
    try {
      await axios.delete(`/api/contacts/${id}`);
      setStatus('Message deleted!');
      setTimeout(() => setStatus(''), 3000);
      fetchData();
    } catch (err) {
      console.error('Delete Contact Error:', err);
      setError('Failed to delete contact.');
      setLoading(false);
    }
  };

  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(editingProject ? 'Updating project...' : 'Adding project...');
    try {
      if (editingProject) {
        await axios.put(`/api/projects/${editingProject}`, newProject);
        setEditingProject(null);
        setStatus('Project updated successfully!');
      } else {
        await axios.post('/api/projects', newProject);
        setStatus('Project added successfully!');
      }
      setNewProject({ title: '', image: '', description: '' });
      setTimeout(() => setStatus(''), 3000);
      fetchData();
    } catch (err) {
      console.error('Project Submit Error:', err);
      setError('Failed to process project.');
      setLoading(false);
    }
  };

  const editProject = (project) => {
    setEditingProject(project._id);
    setNewProject({ title: project.title, image: project.image, description: project.description });
    setActiveTab('projects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const deleteProject = async (id) => {
    if(!window.confirm('Delete this project?')) return;
    setLoading(true);
    try {
      await axios.delete(`/api/projects/${id}`);
      setStatus('Project deleted!');
      setTimeout(() => setStatus(''), 3000);
      fetchData();
    } catch (err) {
      console.error('Delete Project Error:', err);
      setError('Failed to delete project.');
      setLoading(false);
    }
  };

  const handleBlogSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(editingBlog ? 'Updating blog post...' : 'Adding blog post...');
    try {
      if (editingBlog) {
        await axios.put(`/api/blogs/${editingBlog}`, newBlog);
        setEditingBlog(null);
        setStatus('Blog updated successfully!');
      } else {
        await axios.post('/api/blogs', newBlog);
        setStatus('Blog added successfully!');
      }
      setNewBlog({ title: '', image: '', description: '', date: new Date().toLocaleDateString() });
      setTimeout(() => setStatus(''), 3000);
      fetchData();
    } catch (err) {
      console.error('Blog Submit Error:', err);
      setError('Failed to process blog.');
      setLoading(false);
    }
  };

  const editBlog = (blog) => {
    setEditingBlog(blog._id);
    setNewBlog({ title: blog.title, image: blog.image, description: blog.description, date: blog.date });
    setActiveTab('blogs');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const deleteBlog = async (id) => {
    if(!window.confirm('Delete this blog post?')) return;
    setLoading(true);
    try {
      await axios.delete(`/api/blogs/${id}`);
      setStatus('Blog deleted!');
      setTimeout(() => setStatus(''), 3000);
      fetchData();
    } catch (err) {
      console.error('Delete Blog Error:', err);
      setError('Failed to delete blog.');
      setLoading(false);
    }
  };

  return (
    <div className="admin-container">
      {/* Loading Overlay */}
      {loading && (
        <div className="loading-overlay">
          <div className="spinner"></div>
          <div className="loading-text">PROCESSING...</div>
        </div>
      )}

      <div className="admin-wrapper">
        <h1 className="page-title">ADMIN PANEL</h1>
        
        {/* Error and Status Banners */}
        {error && (
          <div className="error-banner" style={{background: '#ff5252', padding: '15px', borderRadius: '5px', marginBottom: '20px', textAlign: 'center'}}>
            {error} <button onClick={fetchData} style={{marginLeft: '10px', background: 'white', border: 'none', cursor: 'pointer', borderRadius: '3px', padding: '2px 8px'}}>Retry</button>
          </div>
        )}
        
        {status && <div className="status-banner" style={{background: '#00bcd4', color: '#0b1a2e', padding: '10px', borderRadius: '5px', marginBottom: '20px', textAlign: 'center', fontWeight: 'bold'}}>{status}</div>}

        <div className="admin-tabs">
          <button className={activeTab === 'contacts' ? 'active' : ''} onClick={() => setActiveTab('contacts')}>Messages</button>
          <button className={activeTab === 'projects' ? 'active' : ''} onClick={() => setActiveTab('projects')}>Projects</button>
          <button className={activeTab === 'blogs' ? 'active' : ''} onClick={() => setActiveTab('blogs')}>Blogs</button>
        </div>

        <div className="admin-content">
          {activeTab === 'contacts' && (
            <div className="admin-section">
              <h2>Contact Messages</h2>
              <div className="admin-list">
                {contacts.length === 0 ? <p>No messages yet.</p> : contacts.map(c => (
                  <div key={c._id} className="admin-item">
                    <p><strong>From:</strong> {c.name} ({c.email})</p>
                    <p><strong>Subject:</strong> {c.subject}</p>
                    <p><strong>Message:</strong> {c.message}</p>
                    <button onClick={() => deleteContact(c._id)} className="delete-btn">Delete</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="admin-section">
              <h2>{editingProject ? 'Edit Project' : 'Add New Project'}</h2>
              <form onSubmit={handleProjectSubmit} className="admin-form">
                <input type="text" placeholder="Title" value={newProject.title} onChange={e => setNewProject({...newProject, title: e.target.value})} required />
                <input type="text" placeholder="Image URL" value={newProject.image} onChange={e => setNewProject({...newProject, image: e.target.value})} required />
                <textarea placeholder="Description" value={newProject.description} onChange={e => setNewProject({...newProject, description: e.target.value})} required />
                <div style={{display: 'flex', gap: '10px'}}>
                  <button type="submit">{editingProject ? 'Update Project' : 'Add Project'}</button>
                  {editingProject && <button type="button" onClick={() => {setEditingProject(null); setNewProject({title: '', image: '', description: ''})}} style={{background: '#555'}}>Cancel</button>}
                </div>
              </form>
              <div className="admin-list">
                {projects.map(p => (
                  <div key={p._id} className="admin-item">
                    <h3>{p.title}</h3>
                    <div style={{display: 'flex', gap: '10px'}}>
                      <button onClick={() => editProject(p)} className="edit-btn" style={{background: '#00bcd4'}}>Edit</button>
                      <button onClick={() => deleteProject(p._id)} className="delete-btn">Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'blogs' && (
            <div className="admin-section">
              <h2>{editingBlog ? 'Edit Blog Post' : 'Add New Blog Post'}</h2>
              <form onSubmit={handleBlogSubmit} className="admin-form">
                <input type="text" placeholder="Title" value={newBlog.title} onChange={e => setNewBlog({...newBlog, title: e.target.value})} required />
                <input type="text" placeholder="Image URL" value={newBlog.image} onChange={e => setNewBlog({...newBlog, image: e.target.value})} required />
                <textarea placeholder="Description" value={newBlog.description} onChange={e => setNewBlog({...newBlog, description: e.target.value})} required />
                <div style={{display: 'flex', gap: '10px'}}>
                  <button type="submit">{editingBlog ? 'Update Blog Post' : 'Add Blog Post'}</button>
                  {editingBlog && <button type="button" onClick={() => {setEditingBlog(null); setNewBlog({title: '', image: '', description: '', date: new Date().toLocaleDateString()})}} style={{background: '#555'}}>Cancel</button>}
                </div>
              </form>
              <div className="admin-list">
                {blogs.map(b => (
                  <div key={b._id} className="admin-item">
                    <h3>{b.title}</h3>
                    <div style={{display: 'flex', gap: '10px'}}>
                      <button onClick={() => editBlog(b)} className="edit-btn" style={{background: '#00bcd4'}}>Edit</button>
                      <button onClick={() => deleteBlog(b._id)} className="delete-btn">Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>

  );
};

export default Admin;
