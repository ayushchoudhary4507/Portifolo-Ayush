import './hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-greeting">👋 Hello, I'm</p>
        <h1>
          <span className="hero-name">Ayush Choudhary</span>
        </h1>
        <p className="hero-subtitle">
          <span className="typed-text">Full Stack Developer</span>
        </p>
        <p className="hero-description">
          I craft beautiful, high-performance web applications with modern technologies.
          Passionate about clean code, stunning UIs, and seamless user experiences.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="hero-connect">Let's Connect</a>
          <a href="#portfolio" className="hero-resume">View My Work</a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">2+</span>
            <span className="stat-label">Years Exp.</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-number">20+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-number">10+</span>
            <span className="stat-label">Happy Clients</span>
          </div>
        </div>
      </div>

      <div className="hero-image-container">
        <div className="hero-glow-ring"></div>
        <div className="hero-avatar">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="avatar-svg">
            <defs>
              <linearGradient id="avatarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#3498db', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#8e44ad', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <circle cx="100" cy="100" r="100" fill="url(#avatarGrad)" />
            <circle cx="100" cy="80" r="35" fill="rgba(255,255,255,0.9)" />
            <ellipse cx="100" cy="160" rx="55" ry="45" fill="rgba(255,255,255,0.9)" />
          </svg>
          <div className="avatar-badge">AC</div>
        </div>

        <div className="floating-card card-1">
          <span className="card-icon">⚛️</span>
          <span>React.js</span>
        </div>
        <div className="floating-card card-2">
          <span className="card-icon">🟢</span>
          <span>Node.js</span>
        </div>
        <div className="floating-card card-3">
          <span className="card-icon">🗄️</span>
          <span>MongoDB</span>
        </div>
      </div>

      <div className="hero-bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </section>
  );
};

export default Hero;
