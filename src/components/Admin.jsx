import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Admin.css';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('contacts');
  const [contacts, setContacts] = useState([]);
  const [projects, setProjects] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [services, setServices] = useState([]);
  const [aboutContent, setAboutContent] = useState([]);

  const [newProject, setNewProject] = useState({ title: '', image: '', description: '' });
  const [newBlog, setNewBlog] = useState({ title: '', image: '', description: '', date: new Date().toLocaleDateString() });
  const [newService, setNewService] = useState({ title: '', description: '', icon: '' });
  const [newAbout, setNewAbout] = useState({ subtitle: '', content: '' });
  
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
      const [resContacts, resProjects, resBlogs, resServices, resAbout] = await Promise.all([
        axios.get('/api/contacts'),
        axios.get('/api/projects'),
        axios.get('/api/blogs'),
        axios.get('/api/services'),
        axios.get('/api/about')
      ]);
      
      setContacts(resContacts.data);
      setProjects(resProjects.data);
      setBlogs(resBlogs.data);
      setServices(resServices.data);
      setAboutContent(resAbout.data);
    } catch (err) {
      console.error('Error fetching admin data:', err);
      setError('Could not connect to the backend server.');
    } finally {
      setLoading(false);
    }
  };

  const deleteItem = async (type, id) => {
    if(!window.confirm(`Delete this ${type}?`)) return;
    setLoading(true);
    try {
      await axios.delete(`/api/${type}s/${id}`);
      setStatus(`${type} deleted!`);
      setTimeout(() => setStatus(''), 3000);
      fetchData();
    } catch (err) {
      setError(`Failed to delete ${type}.`);
      setLoading(false);
    }
  };

  const handleSubmit = async (e, type, data, setData, initialData, editingId, setEditingId) => {
    e.preventDefault();
    setLoading(true);
    setStatus(editingId ? `Updating ${type}...` : `Adding ${type}...`);
    try {
      if (editingId) {
        await axios.put(`/api/${type}s/${editingId}`, data);
        setEditingId(null);
      } else {
        await axios.post(`/api/${type}s`, data);
      }
      setData(initialData);
      setStatus(`${type} processed successfully!`);
      setTimeout(() => setStatus(''), 3000);
      fetchData();
    } catch (err) {
      setError(`Failed to process ${type}.`);
      setLoading(false);
    }
  };

  return (
    <div className="admin-container">
      {loading && (
        <div className="loading-overlay">
          <div className="spinner"></div>
          <div className="loading-text">PROCESSING...</div>
        </div>
      )}

      <div className="admin-wrapper">
        <h1 className="page-title">ADMIN PANEL</h1>
        
        {error && <div className="error-banner">{error} <button onClick={fetchData}>Retry</button></div>}
        {status && <div className="status-banner">{status}</div>}

        <div className="admin-tabs">
          {['contacts', 'projects', 'blogs', 'services', 'about'].map(tab => (
            <button key={tab} className={activeTab === tab ? 'active' : ''} onClick={() => setActiveTab(tab)}>
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="admin-content">
          {activeTab === 'contacts' && (
            <div className="admin-section">
              <h2>Contact Messages</h2>
              <div className="admin-list">
                {contacts.map(c => (
                  <div key={c._id} className="admin-item">
                    <p><strong>{c.name}</strong> ({c.email}) - {c.subject}</p>
                    <p>{c.message}</p>
                    <button onClick={() => deleteItem('contact', c._id)} className="delete-btn">Delete</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="admin-section">
              <h2>Manage Projects</h2>
              <form onSubmit={(e) => handleSubmit(e, 'project', newProject, setNewProject, {title:'', image:'', description:''}, editingProject, setEditingProject)} className="admin-form">
                <input type="text" placeholder="Title" value={newProject.title} onChange={e => setNewProject({...newProject, title: e.target.value})} required />
                <input type="text" placeholder="Image URL" value={newProject.image} onChange={e => setNewProject({...newProject, image: e.target.value})} required />
                <textarea placeholder="Description" value={newProject.description} onChange={e => setNewProject({...newProject, description: e.target.value})} required />
                <button type="submit">{editingProject ? 'Update' : 'Add'}</button>
              </form>
              <div className="admin-list">
                {projects.map(p => (
                  <div key={p._id} className="admin-item">
                    <h3>{p.title}</h3>
                    <button onClick={() => {setEditingProject(p._id); setNewProject(p);}} className="edit-btn">Edit</button>
                    <button onClick={() => deleteItem('project', p._id)} className="delete-btn">Delete</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'services' && (
            <div className="admin-section">
              <h2>Manage Services</h2>
              <form onSubmit={(e) => handleSubmit(e, 'service', newService, setNewService, {title:'', description:'', icon:''})} className="admin-form">
                <input type="text" placeholder="Title" value={newService.title} onChange={e => setNewService({...newService, title: e.target.value})} required />
                <input type="text" placeholder="Icon (Emoji)" value={newService.icon} onChange={e => setNewService({...newService, icon: e.target.value})} required />
                <textarea placeholder="Description" value={newService.description} onChange={e => setNewService({...newService, description: e.target.value})} required />
                <button type="submit">Add Service</button>
              </form>
              <div className="admin-list">
                {services.map(s => (
                  <div key={s._id} className="admin-item">
                    <h3>{s.icon} {s.title}</h3>
                    <button onClick={() => deleteItem('service', s._id)} className="delete-btn">Delete</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'about' && (
            <div className="admin-section">
              <h2>Manage About Content</h2>
              <form onSubmit={(e) => handleSubmit(e, 'about', newAbout, setNewAbout, {subtitle:'', content:''})} className="admin-form">
                <input type="text" placeholder="Subtitle" value={newAbout.subtitle} onChange={e => setNewAbout({...newAbout, subtitle: e.target.value})} required />
                <textarea placeholder="Content" value={newAbout.content} onChange={e => setNewAbout({...newAbout, content: e.target.value})} required />
                <button type="submit">Add About Section</button>
              </form>
              <div className="admin-list">
                {aboutContent.map(a => (
                  <div key={a._id} className="admin-item">
                    <h3>{a.subtitle}</h3>
                    <button onClick={() => deleteItem('about', a._id)} className="delete-btn">Delete</button>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Blog tab remains similar to Projects */}
          {activeTab === 'blogs' && (
            <div className="admin-section">
              <h2>Manage Blogs</h2>
              <form onSubmit={(e) => handleSubmit(e, 'blog', newBlog, setNewBlog, {title:'', image:'', description:'', date: new Date().toLocaleDateString()}, editingBlog, setEditingBlog)} className="admin-form">
                <input type="text" placeholder="Title" value={newBlog.title} onChange={e => setNewBlog({...newBlog, title: e.target.value})} required />
                <input type="text" placeholder="Image URL" value={newBlog.image} onChange={e => setNewBlog({...newBlog, image: e.target.value})} required />
                <textarea placeholder="Description" value={newBlog.description} onChange={e => setNewBlog({...newBlog, description: e.target.value})} required />
                <button type="submit">{editingBlog ? 'Update' : 'Add'}</button>
              </form>
              <div className="admin-list">
                {blogs.map(b => (
                  <div key={b._id} className="admin-item">
                    <h3>{b.title}</h3>
                    <button onClick={() => {setEditingBlog(b._id); setNewBlog(b);}} className="edit-btn">Edit</button>
                    <button onClick={() => deleteItem('blog', b._id)} className="delete-btn">Delete</button>
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
