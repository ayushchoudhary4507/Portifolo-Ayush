import './footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">Ayush Choudhary</div>
          <p className="footer-tagline">Full Stack Developer · Building the web, one pixel at a time.</p>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>Navigate</h4>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-col">
            <h4>Social</h4>
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
            <a href="#">Twitter / X</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <p className="footer-copy">© {year} Ayush Choudhary. All rights reserved.</p>
        <p className="footer-made">Made with ❤️ and React</p>
      </div>
    </footer>
  );
};

export default Footer;
