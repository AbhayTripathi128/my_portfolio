import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Close menu when location changes (page navigation)
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span>Abhay-Tripathi</span> 
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className={isMenuOpen ? "line line1 open" : "line line1"}></span>
        <span className={isMenuOpen ? "line line2 open" : "line line2"}></span>
        <span className={isMenuOpen ? "line line3 open" : "line line3"}></span>
      </div>
      <div className={`nav-menu-container ${isMenuOpen ? "active" : ""}`}>
        <div className="navbar-links">
          <span className="separator mobile-hidden"></span>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            _hello
          </Link>
          <span className="separator mobile-hidden"></span>
          <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
            _about-me
          </Link>
          <span className="separator mobile-hidden"></span>
          <Link to="/project" className={location.pathname === "/project" ? "active" : ""}>
            _projects
          </Link>
          <span className="separator mobile-hidden"></span>
        </div>
        <div className="navbar-contact">
          <span className="separator mobile-hidden"></span>
          <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
            _contact-me
          </Link>
          <span className="separator mobile-hidden"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;