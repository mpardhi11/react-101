import { Link } from "react-router-dom";
import "../styles/header.scss";

const Header = () => {
  return (
    <nav>
      <h1>Tech Start</h1>
      <main>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/#about">About</Link>
        <Link to="/brands">Brands</Link>
        <Link to="/portfolio">Portfolio</Link>
      </main>
    </nav>
  );
};

export default Header;
