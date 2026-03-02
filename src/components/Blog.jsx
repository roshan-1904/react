import React from 'react';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'FINDING PLANET X-123',
      date: 'FEBRUARY 6, 2026',
      image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=800&q=80',
      description: "Our website templates are created with inspiration, checked for quality and originality and meticulously sliced and coded. What’s more, they’re absolutely free! You can do a lot with them. You can modify them. You can use them to design websites for clients, so long as you agree with the Terms of Use. You can even remove all our links if you want to."
    },
    {
      id: 2,
      title: 'NEW SATELLITE DISH',
      date: 'FEBRUARY 3, 2026',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
      description: "Looking for more templates? Just browse through all our Free Website Templates and find what you’re looking for. But if you don’t find any website template you can use, you can try our Free Web Design service and tell us all about it. Maybe you’re looking for something specific, feel free to ask for help on our Forum."
    }
  ];

  const recentPosts = [
    { title: 'ALIEN LIFE', date: 'JAN 28, 2026', img: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?auto=format&fit=crop&w=100&q=80' },
    { title: 'THE GALAXY', date: 'JAN 25, 2026', img: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=100&q=80' },
    { title: 'BLACK HOLE', date: 'JAN 22, 2026', img: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=100&q=80' }
  ];

  return (
    <div className="blog-container">
      <div className="blog-wrapper">
        <h1 className="page-title">BLOG</h1>
        
        <div className="blog-layout">
          {/* MAIN BLOG LIST */}
          <main className="blog-main">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-post">
                <div className="blog-post-image">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="blog-post-content">
                  <h2 className="blog-post-title">{post.title}</h2>
                  <span className="blog-post-date">{post.date}</span>
                  <p className="blog-post-desc">{post.description}</p>
                  <a href="#" className="blog-read-more">READ MORE</a>
                </div>
              </article>
            ))}
          </main>

          {/* SIDEBAR */}
          <aside className="blog-sidebar">
            <div className="sidebar-section">
              <h3>FEATURED POST</h3>
              <div className="featured-post-card">
                <img src="https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?auto=format&fit=crop&w=400&q=80" alt="Featured" />
                <h4>SOYUZ TMA-M</h4>
                <span>FEB 10, 2026</span>
              </div>
            </div>

            <div className="sidebar-section">
              <h3>RECENT POSTS</h3>
              <ul className="recent-posts-list">
                {recentPosts.map((post, idx) => (
                  <li key={idx}>
                    <img src={post.img} alt={post.title} />
                    <div>
                      <h4>{post.title}</h4>
                      <span>{post.date}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sidebar-section">
              <h3>FOLLOW US</h3>
              <div className="sidebar-socials">
                <a href="#">FACEBOOK</a>
                <a href="#">TWITTER</a>
                <a href="#">GOOGLE+</a>
                <a href="#">PINTEREST</a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Blog;
