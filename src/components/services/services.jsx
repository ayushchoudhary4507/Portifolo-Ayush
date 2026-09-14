import './services.css';

const services = [
  {
    icon: '💻',
    title: 'Web Development',
    description: 'Building responsive, high-performance websites and web apps using React, Node.js, and modern full-stack technologies.',
    tags: ['React', 'Node.js', 'REST APIs'],
  },
  {
    icon: '🎨',
    title: 'UI / UX Design',
    description: 'Crafting stunning, intuitive interfaces with attention to detail. Turning wireframes into pixel-perfect designs users love.',
    tags: ['Figma', 'CSS', 'Animations'],
  },
  {
    icon: '🗄️',
    title: 'Backend & Databases',
    description: 'Designing scalable server-side architectures, REST APIs, and database schemas with MongoDB, Express, and more.',
    tags: ['MongoDB', 'Express', 'JWT'],
  },
  {
    icon: '📱',
    title: 'Responsive Design',
    description: 'Ensuring flawless experiences across all devices — mobile, tablet, and desktop — with fluid, adaptive layouts.',
    tags: ['Mobile-First', 'CSS Grid', 'Flexbox'],
  },
  {
    icon: '⚡',
    title: 'Performance Optimization',
    description: 'Auditing and optimizing web apps for speed, accessibility, and SEO to achieve top Lighthouse scores.',
    tags: ['Lighthouse', 'Caching', 'SEO'],
  },
  {
    icon: '🔧',
    title: 'DevOps & Deployment',
    description: 'Setting up CI/CD pipelines, deploying to cloud platforms, and managing version control with Git.',
    tags: ['GitHub', 'Vercel', 'Docker'],
  },
];

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="section-header">
        <p className="section-label">What I Offer</p>
        <h2 className="section-title">My <span className="gradient-text">Services</span></h2>
        <div className="section-divider"></div>
      </div>

      <div className="services-grid">
        {services.map((service, i) => (
          <div className="service-card" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="service-icon-wrap">
              <span className="service-icon">{service.icon}</span>
              <div className="icon-glow"></div>
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.description}</p>
            <div className="service-tags">
              {service.tags.map((tag, j) => (
                <span className="service-tag" key={j}>{tag}</span>
              ))}
            </div>
            <div className="card-border-glow"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
