import './about.css';

const skills = [
  { name: 'React.js', level: 90, icon: '⚛️' },
  { name: 'Node.js', level: 85, icon: '🟢' },
  { name: 'JavaScript', level: 92, icon: '🌐' },
  { name: 'MongoDB', level: 80, icon: '🗄️' },
  { name: 'HTML / CSS', level: 95, icon: '🎨' },
  { name: 'Git & GitHub', level: 88, icon: '🐙' },
];

const About = () => {
  return (
    <section className="about" id="about">
      <div className="section-header">
        <p className="section-label">Who I Am</p>
        <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
        <div className="section-divider"></div>
      </div>

      <div className="about-container">
        <div className="about-image-side">
          <div className="about-card-wrap">
            <div className="about-image-box">
              <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" className="about-svg">
                <defs>
                  <linearGradient id="aboutGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#3498db', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#8e44ad', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <rect width="300" height="300" rx="20" fill="url(#aboutGrad)" />
                <circle cx="150" cy="110" r="55" fill="rgba(255,255,255,0.85)" />
                <ellipse cx="150" cy="250" rx="85" ry="70" fill="rgba(255,255,255,0.85)" />
                <text x="150" y="125" textAnchor="middle" fontSize="48" fill="#3498db">AC</text>
              </svg>
            </div>
            <div className="about-info-tag tag-1">
              <span>🎓</span>
              <div>
                <strong>B.Tech</strong>
                <small>Computer Science</small>
              </div>
            </div>
            <div className="about-info-tag tag-2">
              <span>📍</span>
              <div>
                <strong>India</strong>
                <small>Available Remotely</small>
              </div>
            </div>
          </div>
        </div>

        <div className="about-text-side">
          <h3 className="about-heading">Full Stack Developer &amp; Creative Coder</h3>
          <p className="about-bio">
            Hey! I'm <strong>Ayush Choudhary</strong> — a passionate Full Stack Developer who loves turning
            ideas into sleek, real-world web applications. I specialize in building scalable, performant,
            and visually compelling digital experiences using modern technologies.
          </p>
          <p className="about-bio">
            When I'm not coding, you'll find me exploring new frameworks, contributing to open source, or
            leveling up my design skills. I believe great software is as much about empathy as it is about
            engineering.
          </p>

          <div className="skills-section">
            <h4 className="skills-heading">My Tech Stack</h4>
            <div className="skills-grid">
              {skills.map((skill, i) => (
                <div className="skill-item" key={i}>
                  <div className="skill-header">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-fill"
                      style={{ width: `${skill.level}%`, animationDelay: `${i * 0.1}s` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <a href="#contact" className="about-cta">Hire Me →</a>
        </div>
      </div>
    </section>
  );
};

export default About;
