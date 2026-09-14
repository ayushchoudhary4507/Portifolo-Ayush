import { useState } from 'react';
import './portfolio.css';

const projects = [
  {
    id: 1,
    title: 'ShopNest — E-Commerce Platform',
    category: 'Full Stack',
    description:
      'A full-featured e-commerce app with authentication, cart, payments (Stripe), order tracking, and an admin dashboard. Built with React, Node.js, and MongoDB.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    emoji: '🛍️',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    link: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'DevConnect — Social Network for Devs',
    category: 'Full Stack',
    description:
      'A developer-focused social platform with real-time messaging, post feeds, GitHub profile integration, and a tech matchmaking algorithm.',
    tech: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
    emoji: '🌐',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    link: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'TaskFlow — AI-Powered Kanban Board',
    category: 'Frontend',
    description:
      'A beautiful drag-and-drop project management tool with AI task suggestions, deadline tracking, team collaboration, and dark/light modes.',
    tech: ['React', 'OpenAI API', 'DnD Kit', 'TailwindCSS'],
    emoji: '🤖',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    link: '#',
    github: '#',
  },
];

const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];

const Portfolio = () => {
  const [active, setActive] = useState('All');

  const filtered =
    active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="portfolio" id="portfolio">
      <div className="section-header">
        <p className="section-label">My Work</p>
        <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
        <div className="section-divider"></div>
      </div>

      <div className="portfolio-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${active === cat ? 'active' : ''}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filtered.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-preview" style={{ background: project.gradient }}>
              <span className="project-emoji">{project.emoji}</span>
              <div className="project-overlay">
                <a href={project.link} className="preview-btn">🔗 Live Demo</a>
                <a href={project.github} className="preview-btn">🐙 GitHub</a>
              </div>
            </div>
            <div className="project-info">
              <div className="project-meta">
                <span className="project-category">{project.category}</span>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((t, i) => (
                  <span className="tech-badge" key={i}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
