import "./NavBar.css";

const NavBar = () => {
  return (
    /* Add your code here */
    <header className="header">

      <a href="/" target="_blank" rel="noopener noreferrer" className="logo" >Logo </a>

      <nav className="navbar" >
          <a href="#"  rel="noopener noreferrer">Home</a>
          <a href="#"  rel="noopener noreferrer">About</a>
          <a href="#"  rel="noopener noreferrer">Services</a>
          <a href="#"  rel="noopener noreferrer">Contact</a>
      </nav>

    </header>
  );
};

export default NavBar;
