import React from "react";
import twitterIcon from "../assets/twitter.svg";
import facebookIcon from "../assets/facebook.svg";


const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-text">find me in:</div>
        <div className="social-links">
          <span className="footer-separator"></span>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" />
          </a>
          <span className="footer-separator"></span>
          <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <span className="footer-separator"></span>
          <a href="https://github.com/AbhayTripathi128" target="_blank" rel="noopener noreferrer">
            @github
          </a>
          <span className="footer-separator"></span>
        </div>
      </footer>
    );
};

export default Footer;