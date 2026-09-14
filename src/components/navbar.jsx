import './navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-logo'>My Portfolio</div>
      <div className='nav-menu'>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
        <a href="#portfolio">Portfolio</a>
      </div>
      <div className='nav-connect'><a href="#connect">Connect With Me</a></div>
    </div>
  );
};

export default Navbar;